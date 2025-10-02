import TaskList from './TaskList';

const TasksSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="mb-[8px] text-[18px]">Your tasks</h2>
        <TaskList />
      </div>
    </section>
  );
};

export default TasksSection;
