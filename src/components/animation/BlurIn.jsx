import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const BlurIn = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;