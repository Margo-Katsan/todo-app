'use client';

import Link from 'next/link';

import EmptyTasks from '@/components/EmptyTasks';
import Error from '@/components/Error';
import { Loader } from '@/components/Loader';
import MainApp from '@/components/MainApp';
import Modal from '@/components/Modal';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  selectError,
  selectIsLoading,
  selectSearch,
  selectStatusFilter,
  selectTasks,
} from '@/store/selectors';
import { cn } from '@/utils/cn';

export default function Home() {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const status = useAppSelector(selectStatusFilter);
  const search = useAppSelector(selectSearch);
  const tasks = useAppSelector(selectTasks) ?? [];
  
  return (
    <>
      {isLoading && !error && <Loader />}
      {error && <Error />}
      <header className="py-[22px]">
        <div
          className={cn(
            'container',
            'align-center flex justify-between lg:justify-around'
          )}
        >
          <Link className="text-[20px] font-bold" href="/">
            To<span className="text-accent">Do</span>
          </Link>
          <ThemeSwitcher />
        </div>
      </header>
      <main>
        {tasks.length === 0 && !status && !search ? (
          <EmptyTasks />
        ) : (
          <MainApp />
        )}
      </main>
      <Modal />
    </>
  );
}
