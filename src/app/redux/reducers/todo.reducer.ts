import { createReducer, on } from "@ngrx/store";
import { initialState } from ".";
import {getAllCards, getCompleteCards, getNotCompleteCards, login, logout, updateCard} from '../actions/todo.actions';

export const todoReducer = createReducer(
  initialState,
  on(login, (state, action) => ({ ...state, token: action.token, userName: action.userName })),
  on(logout, (state) => ({ ...state, token: null, userName: null })),

  on(getAllCards, (state, action) => ({ ...state, todoList: action.todoList })),
  on(getCompleteCards, (state, action) => ({ ...state, complete: action.todoList })),
  on(getNotCompleteCards, (state, action) => ({ ...state, notComplete: action.todoList })),

  // on(login, (state, action) => ({ ...state, token: action.token, userName: action.userName })),
  // on(login, (state, action) => ({ ...state, token: action.token, userName: action.userName })),
);
