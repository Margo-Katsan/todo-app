import { IoSearch } from 'react-icons/io5';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setSearch } from '@/store/filtersSlice';
import { selectSearch } from '@/store/selectors';

export const SearchTask = () => {
  const search = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();
  return (
    <label className="input w-full">
      <div className="align-center flex gap-[4px]">
        <IoSearch size={18} className="opacity-50" />
        <input
          className="grow"
          placeholder="Search a task by the title..."
          type="text"
          value={search}
          onChange={event => {
            dispatch(setSearch(event.target.value));
          }}
        />
      </div>
    </label>
  );
};
