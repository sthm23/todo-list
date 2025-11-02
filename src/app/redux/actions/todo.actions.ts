import { createAction, props } from '@ngrx/store';
import { CreateTodo, Todo } from 'src/app/models/interfaces';

export enum AppActions {
  login = '[Login Page] Login',
  logout = '[Login Page] logout',
  todoCreate = '[Todo Page] create',
  todoUpdate = '[Todo Page] update',
  todoList = '[Todo Page] get all',
  todoDelete = '[Todo Page] delete'
}

export const login = createAction(
  AppActions.login,
  props<{ userName: string; token: string }>()
);

export const logout = createAction(
  AppActions.logout
);

export const createCard = createAction(
  AppActions.todoCreate,
  props<{ todo: CreateTodo }>()
);

export const updateCard = createAction(
  AppActions.todoUpdate,
  props<{ todo: Todo }>()
);

export const getAllCards = createAction(
  AppActions.todoList,
  props<{todoList: Todo[]}>()
);

export const deleteCard = createAction(
  AppActions.todoDelete,
  props<{ id: string }>()
);
