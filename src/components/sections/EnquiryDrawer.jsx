import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Field from '../ui/Field';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import { useEnquiry } from '../../hooks/useEnquiry';
import { useForm, compose, required, email as isEmail, minLength } from '../../hooks/useForm';
import { submitEnquiry } from '../../utils/api';
import { allProducts } from '../../data/products';

const INITIAL = { name: '', email: '', company: '', product: '', message: '' };

const VALIDATORS = {
  name: compose(required('Name'), minLength(2, 'Name')),
  email: compose(required('Email'), isEmail),
  message: compose(required('Message'), minLength(10, 'Message')),
};

/**
 * Global enquiry panel. Opening it from a product card pre-selects that product.
 */
export default function EnquiryDrawer() {
  const { isOpen, product, close } = useEnquiry();
  const closeRef = useRef(null);

  const form = useForm({
    initialValues: INITIAL,
    validators: VALIDATORS,
    onSubmit: submitEnquiry,
  });

  const { setValues, reset, status } = form;

  // Sync the pre-selected product each time the panel opens.
  useEffect(() => {
    if (isOpen) setValues((prev) => ({ ...prev, product: product ?? '' }));
  }, [isOpen, product, setValues]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close]);

  const handleClose = () => {
    close();
    // Let the exit animation finish before clearing a success state.
    setTimeout(reset, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col overflow-y-auto bg-canvas"
          >
            <div className="flex items-start justify-between gap-6 border-b border-line px-6 py-6 sm:px-10">
              <div>
                <p className="eyebrow mb-4">Enquiry</p>
                <h2 id="enquiry-title" className="text-3xl">
                  Request a quote
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={handleClose}
                aria-label="Close enquiry form"
                className="grid h-10 w-10 shrink-0 place-items-center border border-line text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            {status === 'success' ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
                <span className="grid h-16 w-16 place-items-center border border-success text-success">
                  <Check aria-hidden="true" className="h-7 w-7" />
                </span>
                <h3 className="mt-8 text-3xl">Enquiry received</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
                  Our trade team will respond within one business day with samples and pricing.
                </p>
                <Button onClick={handleClose} variant="outline" className="mt-8">
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit} noValidate className="space-y-5 px-6 py-8 sm:px-10">
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
                  as="select"
                  label="Product of interest"
                  name="product"
                  value={form.values.product}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                >
                  <option value="">Select a product</option>
                  {allProducts.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </Field>

                <Field
                  as="textarea"
                  label="Message"
                  name="message"
                  required
                  placeholder="Quantities, destination port, or product details…"
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

                <Button
                  type="submit"
                  size="lg"
                  disabled={form.status === 'submitting'}
                  className="w-full"
                >
                  {form.status === 'submitting' ? (
                    <Spinner size="sm" label="Sending enquiry" />
                  ) : (
                    'Send Enquiry'
                  )}
                </Button>
              </form>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
