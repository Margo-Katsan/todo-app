import { HiChevronDown } from 'react-icons/hi';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setSortByAndOrder } from '@/store/filtersSlice';
import { selectOrder } from '@/store/selectors';

const SortBy = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector(selectOrder);

  const options = [
    { value: '', label: 'default' },
    { value: 'asc', label: 'priority ↑' },
    { value: 'desc', label: 'priority ↓' },
  ];

  return (
    <div className="dropdown mb-[8px] w-full">
      <div
        tabIndex={0}
        role="button"
        className="btn flex items-center justify-between gap-2 rounded-[32px]"
      >
        Sort by {order === 'asc' && options[1].label}
        {order === 'desc' && options[2].label}
        <HiChevronDown size={18} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {options.map(option => (
          <li key={option.value}>
            <button
              onClick={() => dispatch(setSortByAndOrder(option.value))}
              className={order === option.value ? 'active' : ''}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortBy;
