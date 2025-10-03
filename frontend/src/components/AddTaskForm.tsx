import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import FormContent from './FormContent';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { addTask } from '@/store/operations';
import { selectTasks } from '@/store/selectors';
import { ITask } from '@/types/ITask';

const schema = Yup.object().shape({
  title: Yup.string().min(1, 'Too Short!').max(30, 'Too Long!'),
  is_done: Yup.boolean(),
});

const AddTaskForm = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);

  const handleSubmitForm = (values: Omit<ITask, 'id'>, actions: FormikHelpers<Omit<ITask, 'id'>>) => {
    const isTaskExist =
      tasks.filter(task => task.title === values.title).length !== 0;
    if (isTaskExist) {
      alert(`${values.title} is already in tasks.`);
      return;
    }

    dispatch(addTask(values));
    const modal = document.getElementById(
      'my_modal_1'
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        priority: 1,
        is_done: false,
      }}
      validationSchema={schema}
      onSubmit={handleSubmitForm}
    >
      <Form>
        <FormContent />

        <button
          className="btn bg-primary text-base-100 w-full rounded-[22px]"
          type="submit"
        >
          Add task
        </button>
      </Form>
    </Formik>
  );
};

export default AddTaskForm;
