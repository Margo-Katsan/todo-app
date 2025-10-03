import { ITask } from "@/types/ITask";

export interface IAddOrDelTaskResponse {
  task: ITask;
  total: number
}