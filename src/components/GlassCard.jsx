import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`group border border-luxury-border bg-transparent p-8 md:p-12 transition-colors duration-700 ${onClick ? 'cursor-pointer hover:border-luxury-gold' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
