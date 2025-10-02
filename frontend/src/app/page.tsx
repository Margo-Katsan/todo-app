'use client';

import ControlSection from '@/components/ControlSection';
import Error from '@/components/Error';
import { Loader } from '@/components/Loader';
import Modal from '@/components/Modal';
import TaskControls from '@/components/TaskControls';
import TasksSection from '@/components/TasksSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectError, selectIsLoading } from '@/store/selectors';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export default function Home() {
  const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectError);
  return (
    <>
    {isLoading && !error && <Loader />}
    {error && <Error />}
      <header className="p-[22px]">
        <div className={cn('container', 'align-center flex justify-between')}>
          <Link className="text-[20px] font-bold" href="/">
            To<span className="text-primary-content">Do</span>
          </Link>
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
