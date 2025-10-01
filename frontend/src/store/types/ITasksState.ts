import { ITask } from "@/types/ITask";

export interface ITasksState {
  items: ITask[];
  isLoading: boolean;
  error: string | null;
}
