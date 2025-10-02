const AddNewTaskBtn = () => {
  const handleClick = () => {
    const modal = document.getElementById(
      'my_modal_1'
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <button
      type="button"
      className="btn bg-base-content text-base-100 mb-[18px] w-full rounded-[22px] md:w-fit"
      onClick={handleClick}
    >
      Add new task
    </button>
  );
};

export default AddNewTaskBtn;
