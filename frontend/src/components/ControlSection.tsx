import AddNewTaskBtn from './AddNewTaskBtn';
import { SearchTask } from './SearchTask';
import TaskControls from './TaskControls';

const ControlSection = () => {
  return (
    <section className="pb-[16px]">
      <div className="container">
        <h2 className="sr-only">Control section</h2>
        <AddNewTaskBtn />
        <div className="md:hidden">
          <TaskControls />
        </div>
        <SearchTask />
      </div>
    </section>
  );
};

export default ControlSection;
