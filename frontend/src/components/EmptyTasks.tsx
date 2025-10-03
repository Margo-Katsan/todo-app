import AddNewTaskBtn from './AddNewTaskBtn';

const EmptyTasks = () => {
  return (
    <section>
      <div className="container">
        <div className="text-base-content flex flex-col items-center justify-center py-14 text-center">
          <div className="mb-[28px]">
            <p className="mb-2 text-xl font-semibold">No tasks yet</p>
            <p className="text-sm text-gray-500">
              You haven&apos;t added any tasks. Click &quot;Add new task&quot;
              to get started!
            </p>
          </div>

          <AddNewTaskBtn />
        </div>
      </div>
    </section>
  );
};

export default EmptyTasks;
