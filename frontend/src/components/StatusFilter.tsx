import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';

import { type StatusFilter } from '@/store/constants';
import { setStatusFilter } from '@/store/filtersSlice';
import { selectStatusFilter } from '@/store/selectors';

export interface StatusLabelProps {
  children: React.ReactNode;
  status: StatusFilter;
  disabled?: boolean;
}

const StatusFilter = ({ children, status, disabled }: StatusLabelProps) => {
  const dispatch = useDispatch();
  const statusFilter = useSelector(selectStatusFilter);

  const handleStatusFilterChange = (statusFilter: StatusFilter) =>
    dispatch(setStatusFilter(statusFilter));

  return (
    <button
      type="button"
      onClick={() => handleStatusFilterChange(status)}
      className={clsx(
        'btn flex items-center justify-between rounded-[18px] border-0',
        statusFilter === status && 'bg-base-content text-base-100',

        {
          ['cursor-not-allowed opacity-75']: disabled,
        }
      )}
    >
      {children}
    </button>
  );
};

export default StatusFilter;
