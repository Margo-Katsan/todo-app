import { ITask } from '@/types/ITask';

export interface ITasksState {
  items: ITask[];
  total: number;
  isLoading: boolean;
  error: string | null;
}
