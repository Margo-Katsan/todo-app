import { ErrorMessage, Field } from 'formik';

const FormContent = () => {
  return (
    <div className="mb-[12px]">
      <label>
        <span>
          Title<span style={{ color: 'var(--accent-color)' }}> *</span>
        </span>
        <div>
          <Field type="text" name="title" className="input w-full" required />
        </div>
        <ErrorMessage className="" name="title" component="p" />
      </label>
      <label>
        <span>
          Description
          <span style={{ color: 'var(--accent-color)' }}> *</span>
        </span>
        <div>
          <Field
            type="text"
            name="description"
            className="input w-full"
            required
          />
        </div>
        <ErrorMessage className="" name="description" component="p" />
      </label>
      <label>
        <span>
          Priority
          <span style={{ color: 'var(--accent-color)' }}> *</span>
        </span>

        <div className="w-full max-w-xs">
          <Field
            name="priority"
            type="range"
            min={1}
            max={10}
            className="range w-full"
            step={1}
          />

          <div className="mt-2 flex justify-between px-2.5 text-xs">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i}>|</span>
            ))}
          </div>

          <div className="mt-2 flex justify-between px-2.5 text-xs">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        </div>

        <ErrorMessage className="" name="priority" component="p" />
      </label>
    </div>
  );
};

export default FormContent;
