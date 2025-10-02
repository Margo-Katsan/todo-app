import { useEffect } from 'react';

import Task from './Task';
import { Status } from '@/enums/Status';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { fetchTasks } from '@/store/operations';
import {
  selectOrder,
  selectSearch,
  selectSort,
  selectStatusFilter,
  selectTasks,
} from '@/store/selectors';
import { IFetchTasksParams } from '@/store/types/IFetchTasksParams';

const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks) ?? [];
  const order = useAppSelector(selectOrder);
  const sort = useAppSelector(selectSort);
  const search = useAppSelector(selectSearch);
  const status = useAppSelector(selectStatusFilter);

  useEffect(() => {
    const paramsForFetch: IFetchTasksParams = {
      ...(search ? { search } : {}),
      ...(sort ? { sort } : {}),
      ...(order ? { order } : {}),
      ...(status === Status.Active
        ? { is_done: false }
        : status === Status.Completed
          ? { is_done: true }
          : {}),
    };
    dispatch(fetchTasks(paramsForFetch));
  }, [dispatch, sort, order, search, status]);
  return (
    <ul className="flex flex-col gap-[16px]">
      {tasks.map(task => {
        return (
          <li key={task.id}>
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
