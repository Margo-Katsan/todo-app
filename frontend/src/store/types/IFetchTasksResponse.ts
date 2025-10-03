import { ITask } from "@/types/ITask";

export interface IFetchTasksResponse {
  tasks: ITask[];
  total: number;
}