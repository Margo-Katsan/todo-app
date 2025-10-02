'use client';

import ControlSection from '@/components/ControlSection';
import Modal from '@/components/Modal';
import TaskControls from '@/components/TaskControls';
import TasksSection from '@/components/TasksSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { cn } from '@/utils/cn';

export default function Home() {
  return (
    <>
      <header className="p-[22px]">
        <div className={cn('container', 'align-center flex justify-between')}>
          <a className="text-[20px] font-bold" href="/">
            To<span className="text-primary-content">Do</span>
          </a>
          <ThemeSwitcher />
        </div>
      </header>
      <main>
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
      </main>
      <Modal />
    </>
  );
}
