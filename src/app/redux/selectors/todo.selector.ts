import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';

export const selectFeature = createFeatureSelector<State>('todo');

export const selectAllCards = createSelector(
  selectFeature,
  (state: State) => state.todoList
);

export const selectUserName = createSelector(
  selectFeature,
  (state: State) => state.userName
);

export const selectToken = createSelector(
  selectFeature,
  (state: State) => state.token
);
