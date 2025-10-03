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
  selectTotal,
} from '@/store/selectors';
import { cn } from '@/utils/cn';

export default function Home() {
  const isLoading = useAppSelector(selectIsLoading);
  const total = useAppSelector(selectTotal);
  const error = useAppSelector(selectError);
  
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
        {total === 0 ? (
          <EmptyTasks />
        ) : (
          <MainApp />
        )}
      </main>
      <Modal />
    </>
  );
}
