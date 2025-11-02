import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/interfaces';
import { TodoService } from '../../todo-service.service';
import { catchError, throwError } from 'rxjs';
import { deleteCard } from 'src/app/redux/actions/todo.actions';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/redux/reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  checker=false

  @Input() todoCard!: Todo;
  @Output() changeTodoCard: EventEmitter<Todo> = new EventEmitter()

  constructor(
    private router: Router,
    private todoServ: TodoService,
    private store: Store<{todo: TodoState}>
  ) {}

  ngOnInit(): void {
    this.checker = this.todoCard.completed
  }

  goToMoreTodo() {
    this.router.navigate(['home', this.todoCard.id])
  }

  deleteTodoCard(id:string) {
    this.todoServ.deleteOneCard(id).pipe(
      catchError(err=>{
        window.alert('error with deleting')
        return throwError(()=>err)
      })
    ).subscribe(el=>{
      this.store.dispatch(deleteCard({id}))
    })
  }

}
