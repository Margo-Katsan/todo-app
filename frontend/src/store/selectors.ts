import { createSelector } from '@reduxjs/toolkit';

import { StatusFilter, statusFilters } from './constants';
import { RootState } from './store';

export const selectTasks = (state: RootState) => state.tasks.items;

export const selectIsLoading = (state: RootState) => state.tasks.isLoading;

export const selectError = (state: RootState) => state.tasks.error;

export const selectStatusFilter = (state: RootState): StatusFilter =>
  state.filters.status;

export const selectSort = (state: RootState) => state.filters.sort;

export const selectOrder = (state: RootState) => state.filters.order;

export const selectSearch = (state: RootState) => state.filters.search;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.is_done);
      case statusFilters.completed:
        return tasks.filter(task => task.is_done);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  return tasks.reduce(
    (count, task) => {
      if (task.is_done) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
