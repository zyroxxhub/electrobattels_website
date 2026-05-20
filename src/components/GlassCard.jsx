import { motion } from 'framer-motion';

export default function GlassCard({ 
  children, 
  className = '', 
  hoverGlow = 'gold', // 'gold' | 'purple' | 'none'
  delay = 0,
  hoverScale = true,
  onClick
}) {
  const glowClasses = {
    gold: 'hover:border-studio-gold/40 hover:shadow-md',
    purple: 'hover:border-studio-gold/40 hover:shadow-md',
    none: 'hover:border-black/15'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverScale ? { y: -6 } : {}}
      onClick={onClick}
      className={`rounded-2xl p-6 border border-black/5 transition-all duration-500 ease-[0.16,1,0.3,1] ${
        onClick ? 'cursor-pointer' : ''
      } ${glowClasses[hoverGlow]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
