import { Check } from 'lucide-react';
import Field from './Field';
import Button from './Button';
import Spinner from './Spinner';
import { useForm, compose, required, email as isEmail } from '../../hooks/useForm';
import { subscribeToNewsletter } from '../../utils/api';

/** Compact single-field subscribe form for the footer. */
export default function Newsletter() {
  const { values, errors, touched, status, submitError, handleChange, handleBlur, handleSubmit } =
    useForm({
      initialValues: { email: '' },
      validators: { email: compose(required('Email'), isEmail) },
      onSubmit: subscribeToNewsletter,
    });

  if (status === 'success') {
    return (
      <p className="flex items-center gap-2.5 text-sm text-accent" role="status">
        <Check aria-hidden="true" className="h-4 w-4" />
        Thanks — you&apos;re subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <Field
        light
        label="Newsletter"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />

      <Button type="submit" size="sm" disabled={status === 'submitting'} withArrow={false}>
        {status === 'submitting' ? <Spinner size="sm" label="Subscribing" /> : 'Subscribe'}
      </Button>

      {status === 'error' && (
        <p role="alert" className="text-xs text-brand">
          {submitError}
        </p>
      )}
    </form>
  );
}
