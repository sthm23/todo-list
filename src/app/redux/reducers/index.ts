import { isDevMode } from '@angular/core';
import { MetaReducer } from '@ngrx/store';
import { Todo } from 'src/app/models/interfaces';

export interface TodoState {
  userName: string | null
  token: string | null
  todoList: Todo[]
}

export const initialState: TodoState = {
  userName: null,
  token: null,
  todoList: []
};
export const metaReducers: MetaReducer<TodoState>[] = isDevMode() ? [] : [];


