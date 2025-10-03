export const Loader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 z-5 -translate-x-1/2 -translate-y-1/2">
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};
