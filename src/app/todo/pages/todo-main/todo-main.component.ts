import { Component, OnInit } from '@angular/core';
import { CreateTodo, Todo } from 'src/app/models/interfaces';
import { TodoService } from '../../todo-service.service';
import { Observable, catchError, throwError } from 'rxjs';
import { TodoState } from 'src/app/redux/reducers';
import { Store } from '@ngrx/store';
import { createCard, getAllCards } from 'src/app/redux/actions/todo.actions';
import { selectAllCards } from 'src/app/redux/selectors/todo.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {

  addCardForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    completed: new FormControl(false),
    user: new FormControl(1)
  })

  constructor(
    private todoServ: TodoService,
    private store: Store<{todo:TodoState}>
  ) {}

  allItems$:Observable<Todo[]> | null = this.store.select(selectAllCards);

  ngOnInit() {
    this.todoServ.getAllCards().pipe(
      catchError(err=>{
        this.allItems$ = null
        return throwError(()=>err)
      })
    ).subscribe(el=>{
      this.store.dispatch(getAllCards({todoList: el}))
    })

  }

  addTodoCard() {
    const obj = {...this.addCardForm.value, completed: false, user: 1} as CreateTodo;

    this.todoServ.addOneCard(obj).pipe(
      catchError(err=>{
        window.alert('some error with creating')
        return throwError(()=>err)
      })
    ).subscribe(el=>{
      this.store.dispatch(createCard({todo: el}))
      this.addCardForm.reset()
    })
  }
}
