import SortBy from './SortBy';
import StatusFilter from './StatusFilter';
import { Status } from '@/enums/Status';

const TaskControls = () => {
  return (
    <>
      <SortBy />
      <div className="mb-[8px] flex gap-[4px]">
        <StatusFilter status={Status.All}>All</StatusFilter>
        <StatusFilter status={Status.Active}>Active</StatusFilter>
        <StatusFilter status={Status.Completed}>Complited</StatusFilter>
      </div>
    </>
  );
};

export default TaskControls;
