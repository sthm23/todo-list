import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AppActions, getAllCards } from '../actions/todo.actions';
import { TodoService } from 'src/app/todo/todo-service.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class CreateAtEffects {

  loadTodoCard$ = createEffect(() => this.actions$.pipe(
    ofType(AppActions.todoUpdate, AppActions.todoDelete, AppActions.todoCreate),
    exhaustMap(() => this.todoServ.getAllCards()
    .pipe(
      map(todoList => {
        return getAllCards({todoList: todoList})
      }),
      catchError(() => EMPTY)
    ))
  ));

  constructor(
    private actions$: Actions,
    private todoServ: TodoService
  ) {}
}
