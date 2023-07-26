import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../reducers';

export const selectFeature = createFeatureSelector<TodoState>('todo');

export const selectAllCards = createSelector(
  selectFeature,
  (state: TodoState) => state.todoList
);

export const selectUserName = createSelector(
  selectFeature,
  (state: TodoState) => state.userName
);

export const selectToken = createSelector(
  selectFeature,
  (state: TodoState) => state.token
);

