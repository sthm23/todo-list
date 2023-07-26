import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType,  OnRunEffects } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { AppActions, getCompleteCards, getNotCompleteCards } from '../actions/todo.actions';

@Injectable()
export class CreateAtEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(

  ));

  constructor(
    private actions$: Actions,
  ) {}
}
