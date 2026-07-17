import { Check } from 'lucide-react';
import Field from '../ui/Field';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import { useForm, compose, required, email as isEmail, minLength } from '../../hooks/useForm';
import { submitContact } from '../../utils/api';

const INITIAL = { name: '', email: '', company: '', subject: '', message: '' };

const VALIDATORS = {
  name: compose(required('Name'), minLength(2, 'Name')),
  email: compose(required('Email'), isEmail),
  subject: required('Subject'),
  message: compose(required('Message'), minLength(10, 'Message')),
};

export default function ContactForm() {
  const form = useForm({ initialValues: INITIAL, validators: VALIDATORS, onSubmit: submitContact });

  if (form.status === 'success') {
    return (
      <div className="border border-line p-10 text-center sm:p-14">
        <span className="mx-auto grid h-16 w-16 place-items-center border border-success text-success">
          <Check aria-hidden="true" className="h-7 w-7" />
        </span>
        <h3 className="mt-8 text-3xl">Message sent</h3>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-body">
          Thank you for reaching out. Our trade team will get back to you within one business day.
        </p>
        <Button onClick={form.reset} variant="outline" className="mt-8">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit} noValidate className="border border-line p-6 sm:p-10">
      <h2 className="text-2xl sm:text-3xl">Send us a message</h2>
      <p className="mt-3 text-sm text-body">Fields marked with an asterisk are required.</p>

      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.errors.name}
            touched={form.touched.name}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.errors.email}
            touched={form.touched.email}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Company"
            name="company"
            autoComplete="organization"
            placeholder="Company name (optional)"
            value={form.values.company}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <Field
            label="Subject"
            name="subject"
            required
            placeholder="How can we help?"
            value={form.values.subject}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.errors.subject}
            touched={form.touched.subject}
          />
        </div>

        <Field
          as="textarea"
          label="Message"
          name="message"
          required
          placeholder="Tell us about your requirement — products, quantities and destination."
          value={form.values.message}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.message}
          touched={form.touched.message}
        />

        {form.status === 'error' && (
          <p role="alert" className="text-sm text-danger">
            {form.submitError}
          </p>
        )}

        <Button type="submit" size="lg" disabled={form.status === 'submitting'}>
          {form.status === 'submitting' ? <Spinner size="sm" label="Sending" /> : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
