import { configureStore } from '@reduxjs/toolkit';

import { filtersReducer } from './filtersSlice';
import { tasksReducer } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
