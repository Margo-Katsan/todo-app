export const statusFilters = {
  all: '',
  active: 'active',
  completed: 'completed',
} as const;

export type StatusFilter = (typeof statusFilters)[keyof typeof statusFilters];
