import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IAddTaskData } from './types/IAddTaskData';
import { IFetchTasksParams } from './types/IFetchTasksParams';
import { IToggleCompletedData } from './types/IToggleCompletedData';
import { ITask } from '@/types/ITask';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

export const fetchTasks = createAsyncThunk<
  ITask[],
  IFetchTasksParams,
  { rejectValue: string }
>('tasks/fetchAll', async (params, thunkAPI) => {
  try {
    const response = await axios.get<ITask[]>('/', {
      params,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const addTask = createAsyncThunk<
  ITask,
  IAddTaskData,
  { rejectValue: string }
>('tasks/addTask', async (newTask, thunkAPI) => {
  try {
    const response = await axios.post('/', newTask);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const deleteTask = createAsyncThunk<
  ITask,
  { taskId: string | undefined },
  { rejectValue: string }
>('tasks/deleteTask', async ({ taskId }, thunkAPI) => {
  try {
    const response = await axios.delete(`/${taskId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const toggleCompleted = createAsyncThunk<
  ITask,
  IToggleCompletedData,
  { rejectValue: string }
>('tasks/toggleCompleted', async ({ id, is_done }, thunkAPI) => {
  try {
    const response = await axios.patch(`/${id}`, {
      is_done: !is_done,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});
