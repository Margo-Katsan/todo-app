import { StatusFilter } from '../constants';

export interface IFiltersState {
  status: StatusFilter;
  sort: 'priority' | '';
  order: 'asc' | 'desc' | '';
  search: string;
}
