import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IAddTaskData } from './types/IAddTaskData';
import { IFetchTasksParams } from './types/IFetchTasksParams';
import { IToggleCompletedData } from './types/IToggleCompletedData';
import { ITask } from '@/types/ITask';
import { IFetchTasksResponse } from './types/IFetchTasksResponse';
import { IAddOrDelTaskResponse } from './types/IAddOrDelTaskResponse';

axios.defaults.baseURL = 'https://todo-app-3ys1.onrender.com';

export const fetchTasks = createAsyncThunk<
  IFetchTasksResponse,
  IFetchTasksParams,
  { rejectValue: string }
>('tasks/fetchAll', async (params, thunkAPI) => {
  try {
    const response = await axios.get<IFetchTasksResponse>('/', {
      params,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const addTask = createAsyncThunk<
  IAddOrDelTaskResponse,
  IAddTaskData,
  { rejectValue: string }
>('tasks/addTask', async (newTask, thunkAPI) => {
  try {
    const response = await axios.post<IAddOrDelTaskResponse>('/', newTask);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const deleteTask = createAsyncThunk<
  IAddOrDelTaskResponse,
  { taskId: string | undefined },
  { rejectValue: string }
>('tasks/deleteTask', async ({ taskId }, thunkAPI) => {
  try {
    const response = await axios.delete<IAddOrDelTaskResponse>(`/${taskId}`);
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
