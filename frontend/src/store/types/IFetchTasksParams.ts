export interface IFetchTasksParams {
  search?: string;
  is_done?: boolean;
  sort?: string;
  order?: "asc" | "desc";
}
