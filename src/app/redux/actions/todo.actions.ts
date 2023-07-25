import { createAction, props } from '@ngrx/store';

interface LoginAction {
  type: '[Login Page] Login',
  username: string;
  password: string;
}

export const login = createAction(
  '[Login Page] Login',
  props<{ userName: string; token: string }>()
);

export const logout = createAction(
  '[Login Page] logout'
);

export const createCard = createAction(
  '[Todo Page] create',
  props<{ email: string; password: string }>()
);

export const updateCard = createAction(
  '[Todo Page] update',
  props<{ email: string; password: string }>()
);

export const getAllCards = createAction(
  '[Todo Page] get all',
  props<{ email: string; password: string }>()
);

export const getOneCard = createAction(
  '[Todo more Page] get one',
  props<{ email: string; password: string }>()
);

export const deleteCard = createAction(
  '[Todo Page] delete',
  props<{ email: string; password: string }>()
);
