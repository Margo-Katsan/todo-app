import { createSlice } from '@reduxjs/toolkit';

import { statusFilters } from './constants';
import { IFiltersState } from './types/IFiltersState';

const filtersInitialState: IFiltersState = {
  status: statusFilters.all,
  sort: '',
  order: '',
  search: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setSearch(state: IFiltersState, action) {
      state.search = action.payload;
    },
    setSortByAndOrder(state: IFiltersState, action) {
      state.sort = 'priority';
      state.order = action.payload;
    },
    setStatusFilter(state: IFiltersState, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter, setSortByAndOrder, setSearch } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
