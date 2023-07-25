import { createReducer, on } from "@ngrx/store";
import { initialState } from ".";
import {login, logout} from '../actions/todo.actions';

export const todoReducer = createReducer(
  initialState,
  on(login, (state, action) => ({ ...state, token: action.token, userName: action.userName })),
  on(logout, (state) => ({ ...state, token: null, userName: null }))
);
