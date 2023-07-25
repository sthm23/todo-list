import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Todo } from 'src/app/models/interfaces';
import { createCard } from '../actions/todo.actions';

export interface State {
  userName: string | null
  token: string | null
  todoList: Todo[]
}

export const initialState: State = {
  userName: null,
  token: null,
  todoList: []
};
export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];


