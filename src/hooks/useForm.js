import { useCallback, useState } from 'react';

/**
 * Controlled form state + validation + submit lifecycle.
 *
 * `validators` maps field name -> (value, values) => errorMessage | undefined.
 * `onSubmit` may be async; its rejection surfaces as status 'error'.
 * Fields validate on blur, then live once touched.
 */
export function useForm({ initialValues, validators = {}, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState(null);

  const runValidator = useCallback(
    (name, value, allValues) => validators[name]?.(value, allValues),
    [validators],
  );

  const validateAll = useCallback(
    (allValues) =>
      Object.keys(validators).reduce((acc, name) => {
        const error = runValidator(name, allValues[name], allValues);
        if (error) acc[name] = error;
        return acc;
      }, {}),
    [validators, runValidator],
  );

  const handleChange = useCallback(
    (event) => {
      const { name, value, type, checked } = event.target;
      const next = type === 'checkbox' ? checked : value;

      setValues((prev) => {
        const updated = { ...prev, [name]: next };
        // Only re-validate a field the user has already left, so typing a fresh
        // field never flashes an error mid-keystroke.
        setErrors((prevErrors) =>
          touched[name]
            ? { ...prevErrors, [name]: runValidator(name, next, updated) }
            : prevErrors,
        );
        return updated;
      });
    },
    [touched, runValidator],
  );

  const handleBlur = useCallback(
    (event) => {
      const { name } = event.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors((prev) => ({ ...prev, [name]: runValidator(name, values[name], values) }));
    },
    [values, runValidator],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus('idle');
    setSubmitError(null);
  }, [initialValues]);

  const handleSubmit = useCallback(
    async (event) => {
      event?.preventDefault();
      const nextErrors = validateAll(values);
      setErrors(nextErrors);
      setTouched(Object.keys(validators).reduce((a, k) => ({ ...a, [k]: true }), {}));

      if (Object.values(nextErrors).some(Boolean)) {
        setStatus('idle');
        return;
      }

      setStatus('submitting');
      setSubmitError(null);
      try {
        await onSubmit(values);
        setStatus('success');
        setValues(initialValues);
        setTouched({});
      } catch (error) {
        setStatus('error');
        setSubmitError(error?.message ?? 'Something went wrong. Please try again.');
      }
    },
    [values, validateAll, validators, onSubmit, initialValues],
  );

  return {
    values,
    errors,
    touched,
    status,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  };
}

export const required = (label) => (value) =>
  !value || !String(value).trim() ? `${label} is required.` : undefined;

export const email = (value) =>
  value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
    ? 'Enter a valid email address.'
    : undefined;

export const minLength = (n, label) => (value) =>
  value && String(value).trim().length < n
    ? `${label} must be at least ${n} characters.`
    : undefined;

/** Runs validators left to right, returning the first failure. */
export const compose =
  (...fns) =>
  (value, values) => {
    for (const fn of fns) {
      const error = fn(value, values);
      if (error) return error;
    }
    return undefined;
  };
