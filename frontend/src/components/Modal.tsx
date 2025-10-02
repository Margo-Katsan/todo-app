import AddTaskForm from './AddTaskForm';

const Modal = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form method="dialog" className="modal-backdrop">
          <button className="btn btn-sm btn-circle absolute top-2 right-2">
            ✕
          </button>
        </form>
        <AddTaskForm />
      </div>
    </dialog>
  );
};

export default Modal;
