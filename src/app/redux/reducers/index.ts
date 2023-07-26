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

export interface TodoState {
  userName: string | null
  token: string | null
  todoList: Todo[]
  complete: Todo[]
  notComplete: Todo[]
}

export const initialState: TodoState = {
  userName: null,
  token: null,
  todoList: [],
  complete: [],
  notComplete: []
};
export const metaReducers: MetaReducer<TodoState>[] = isDevMode() ? [] : [];


