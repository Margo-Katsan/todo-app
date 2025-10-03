import ControlSection from './ControlSection';
import TaskControls from './TaskControls';
import TasksSection from './TasksSection';
import { cn } from '@/utils/cn';

const MainApp = () => {
  return (
    <>
      <h1 className="sr-only">Todo App</h1>
      <div
        className={cn(
          'md:container',
          'md:m-auto md:flex md:justify-center md:gap-[18px] lg:gap-[24px]'
        )}
      >
        <div>
          <ControlSection />
          <TasksSection />
        </div>

        <div className="hidden md:block">
          <div>
            <TaskControls />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainApp;
