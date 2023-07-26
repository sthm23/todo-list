import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/interfaces';
import { TodoService } from '../../todo-service.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { TodoState } from 'src/app/redux/reducers';
import { Store } from '@ngrx/store';
import { getAllCards, getCompleteCards, getNotCompleteCards } from 'src/app/redux/actions/todo.actions';
import { selectAllCards, selectCompleteCards, selectNotCompleteCards } from 'src/app/redux/selectors/todo.selector';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {

  constructor(
    private todoServ: TodoService,
    private store: Store<{todo:TodoState}>
  ) {}

  allItems?:Observable<Todo[]> = this.store.select(selectAllCards);
  completed:Observable<Todo[]> = this.store.select(selectCompleteCards)
  filtered:Observable<Todo[]> = this.store.select(selectNotCompleteCards)

  ngOnInit() {
    this.todoServ.getAllCards().pipe(
      catchError(err=>{
        this.allItems = undefined
        return throwError(()=>err)
      })
    ).subscribe(el=>{
      this.todoServ.todoList = el;
      this.store.dispatch(getAllCards({todoList: el}))

      const completed = el.filter(el=>!el.completed)
      const filtered = el.filter(el=>el.completed)

      this.store.dispatch(getCompleteCards({todoList: completed}))
      this.store.dispatch(getNotCompleteCards({todoList: filtered}))
    })

  }
}
