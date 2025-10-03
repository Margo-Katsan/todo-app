import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { handlePending, handleRejected } from './handlers';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';
import { ITasksState } from './types/ITasksState';
import { ITask } from '@/types/ITask';
import { IFetchTasksResponse } from './types/IFetchTasksResponse';
import { IAddOrDelTaskResponse } from './types/IAddOrDelTaskResponse';

const handleFetchTasksFulfilled = (
  state: ITasksState,
  action: PayloadAction<IFetchTasksResponse>
) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload.tasks;
  state.total = action.payload.total
};

const handleAddTaskFulfilled = (
  state: ITasksState,
  action: PayloadAction<IAddOrDelTaskResponse>
) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload.task);
  state.total = action.payload.total
};

const handleDeleteTaskFulfilled = (
  state: ITasksState,
  action: PayloadAction<IAddOrDelTaskResponse>
) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === action.payload.task.id);
  state.items.splice(index, 1);
  state.total = action.payload.total
};

const handleToggleCompletedFulfilled = (
  state: ITasksState,
  action: PayloadAction<ITask>
) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    total: null,
    isLoading: false,
    error: null,
  } as ITasksState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, handleFetchTasksFulfilled)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, handleAddTaskFulfilled)
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, handleDeleteTaskFulfilled)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, handleToggleCompletedFulfilled)
      .addCase(toggleCompleted.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
