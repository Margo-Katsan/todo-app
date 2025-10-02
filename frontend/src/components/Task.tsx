import { FC } from 'react';
import { MdDelete } from 'react-icons/md';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { deleteTask, toggleCompleted } from '@/store/operations';
import { ITask } from '@/types/ITask';

interface ITaskProps {
  task: ITask;
}

const Task: FC<ITaskProps> = ({ task }) => {
  const { id, title, description, priority, is_done } = task;
  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteTask({ taskId: id }));

  const handleToggle = () =>
    dispatch(toggleCompleted({ id, is_done: Boolean(is_done) }));

  return (
    <div className="bg-base-300 relative w-full rounded-[22px] px-[16px] py-[12px]">
      <h4 className="font-bold">{title}</h4>
      <p className="text-base-content text-[14px]">{description}</p>
      <div className="flex gap-[4px]">
        <h5>Priority:</h5>
        <span>{priority}</span>
      </div>
      <input
        type="checkbox"
        checked={is_done}
        onChange={handleToggle}
        className="checkbox border-base-content checked:bg-base-content checked:text-base-100 absolute top-[16px] right-[16px]"
      />

      <button
        className="absolute right-[16px] bottom-[16px]"
        onClick={handleDelete}
      >
        <MdDelete size={24} color="var(--priority-text-color)" />
      </button>
    </div>
  );
};

export default Task;
