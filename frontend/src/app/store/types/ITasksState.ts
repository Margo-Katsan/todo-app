import { ITask } from "@/app/types/ITask";

export interface ITasksState {
  items: ITask[];
  isLoading: boolean;
  error: string | null;
}
