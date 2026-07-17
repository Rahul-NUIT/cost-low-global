import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';
import { slideUp, stagger } from '../utils/motion';

export default function NotFound() {
  useSeo({
    title: 'Page not found — Wholesale Hub',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="grid min-h-screen place-items-center bg-surface py-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger(0.1)}
        className="container-page text-center"
      >
        <motion.p variants={slideUp} className="font-display text-8xl text-accent-deep sm:text-9xl">
          404
        </motion.p>

        <motion.h1 variants={slideUp} className="mt-6 text-display-sm sm:text-display">
          This Page Does Not Exist
        </motion.h1>

        <motion.p
          variants={slideUp}
          className="mx-auto mt-6 max-w-md text-[0.9375rem] leading-relaxed text-body"
        >
          Sorry, the page you are looking for could not be found. It&apos;s just an accident that was
          not intentional.
        </motion.p>

        <motion.div
          variants={slideUp}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
