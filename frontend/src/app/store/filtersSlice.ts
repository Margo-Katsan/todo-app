import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusFilter, statusFilters } from "./constants";
import { IFiltersState } from "./types/IFiltersState";

const filtersInitialState: IFiltersState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state: IFiltersState, action: PayloadAction<StatusFilter>) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
