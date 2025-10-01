import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";
import { handlePending, handleRejected } from "./handlers";
import { ITasksState } from "./types/ITasksState";
import { ITask } from "@/types/ITask";

const handleFetchTasksFulfilled = (
  state: ITasksState,
  action: PayloadAction<ITask[]>,
) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddTaskFulfilled = (
  state: ITasksState,
  action: PayloadAction<ITask>,
) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteTaskFulfilled = (
  state: ITasksState,
  action: PayloadAction<ITask>,
) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex((task) => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const handleToggleCompletedFulfilled = (
  state: ITasksState,
  action: PayloadAction<ITask>,
) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex((task) => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  } as ITasksState,
  reducers: {},
  extraReducers: (builder) => {
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
