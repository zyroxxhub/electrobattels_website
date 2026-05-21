import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, X, Clock, User, Award, Sparkles, Calendar, Music, Flame, Crown, Compass, Zap, Star } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────── */
export const featuredStyles = [
  { 
    title: 'Choreography Classes', 
    desc: 'Master advanced movement flows, visual storytelling, alignment, and physical expression with cinematic routines.', 
    image: '/choreography.png', 
    level: 'Intermediate to Advanced',
    category: 'performance',
    schedule: 'Mon / Wed / Fri • 7:00 PM - 8:30 PM',
    mentor: 'Manu Rajesh',
    icon: 'Music',
    highlights: ['Cinematic storytelling & expressions', 'Advanced speed and musicality variations', 'Camera angles, sync & style adaptation']
  },
  { 
    title: 'Zumba', 
    desc: 'Supercharge your cardiovascular health and dance fitness with high-energy Latin and world rhythm routines.', 
    image: '/zumba.png', 
    level: 'All Levels',
    category: 'fitness',
    schedule: 'Mon to Sat • 6:30 AM & 6:00 PM',
    mentor: 'Nandana & Dhanesh Sir',
    icon: 'Flame',
    highlights: ['High-energy Latin-infused cardio burnout', 'Core strength, flexibility & body toning', 'Stress relief in a high-energy group vibe']
  },
  { 
    title: 'Advanced Classes', 
    desc: 'Rigorous training programs for competitive soloists and crews looking for elite performance execution.', 
    image: '/elite-training.png', 
    level: 'Professional',
    category: 'performance',
    schedule: 'Sat & Sun • 10:00 AM - 1:00 PM',
    mentor: 'Manu Rajesh & Dhanesh Master',
    icon: 'Crown',
    highlights: ['Elite crew formations & blocking systems', 'Stamina drills & precision performance mechanics', 'Solo improvisation, stage presence & battles']
  },
  { 
    title: 'Youth Classes', 
    desc: 'Structured, highly encouraging training built specifically to inspire coordination and stamina in young dancers.', 
    image: '/youth-academy.png', 
    level: 'Ages 8 – 16',
    category: 'youth',
    schedule: 'Tue / Thu • 5:00 PM - 6:30 PM',
    mentor: 'Asif Bro',
    icon: 'Sparkles',
    highlights: ['Youth groove, hand-eye coordination & balance', 'Creative expression games & rhythm foundation', 'Welcoming and highly encouraging atmosphere']
  },
  { 
    title: 'Adult Lessons', 
    desc: 'Improve flexibility, posture, core strength, and graceful expression in a warm and welcoming space designed for adults.', 
    image: '/adult-foundations.png', 
    level: 'Beginner to Intermediate',
    category: 'fitness',
    schedule: 'Mon / Wed • 10:00 AM - 11:30 AM',
    mentor: 'Nandana',
    icon: 'Compass',
    highlights: ['Warm, zero-judgment beginner environment', 'Basic coordination, posture & balance training', 'Gentle flexibility and slow groove routines']
  },
  { 
    title: 'Hip Hop', 
    desc: 'Raw urban grooves, street style foundations, sharp locking-popping, and high-impact battle drills.', 
    image: '/hip-hop.png', 
    level: 'Intermediate',
    category: 'grooves',
    schedule: 'Tue / Thu • 7:00 PM - 8:30 PM',
    mentor: 'Dhanesh Sir & Asif Bro',
    icon: 'Zap',
    highlights: ['Raw bounce, rock & roll hip hop fundamentals', 'Body isolation, locking, and popping drills', 'Freestyle circle confidence & musicality training']
  },
  { 
    title: 'Fitness Dance', 
    desc: 'A high-energy fusion of dance and fitness routines that sculpt your body while keeping you grooving to the beat.', 
    image: '/zumba.png', 
    level: 'All Levels',
    category: 'fitness',
    schedule: 'Mon / Wed / Fri • 6:00 AM - 7:00 AM',
    mentor: 'Nandana & Dhanesh Sir',
    icon: 'Flame',
    highlights: ['Full body cardio dance workouts', 'Toning, endurance & core strength training', 'Fun group sessions with motivating music']
  },
  { 
    title: 'Kids Dance', 
    desc: 'A fun, creative, and age-appropriate dance program that builds rhythm, confidence, and a lifelong love of movement in children.', 
    image: '/youth-academy.png', 
    level: 'Ages 4 – 10',
    category: 'youth',
    schedule: 'Sat & Sun • 9:00 AM - 10:30 AM',
    mentor: 'Asif Bro & Nandana',
    icon: 'Sparkles',
    highlights: ['Age-appropriate fun & creative movement', 'Rhythm, coordination & body awareness games', 'Safe, encouraging & joyful learning space']
  },
  { 
    title: 'Western Dance', 
    desc: 'Explore contemporary and western dance styles blending jazz, freestyle, and modern techniques into expressive routines.', 
    image: '/choreography.png', 
    level: 'Beginner to Advanced',
    category: 'performance',
    schedule: 'Wed / Fri • 5:00 PM - 6:30 PM',
    mentor: 'Manu Rajesh',
    icon: 'Music',
    highlights: ['Jazz, contemporary & modern freestyle styles', 'Stage performance & expressive movement', 'Solo & group routine choreography']
  },
];

const googleReviews = [
  { name: 'Joseph Shane', rating: 5, date: '11 months ago', text: `Zumba Fitness at Electrobattles – More Than Just a Workout!\n\nOur journey at Electrobattles Zumba Centre has been nothing short of amazing. This vibrant, high-energy space was founded by our beloved Late Rajesh Master, whose legacy now lives on through his talented son, Manu Rajesh.\n\nManu isn't just a dedicated instructor—he's an expert in multiple dance forms and continues his father's passion with unmatched energy and grace.\n\nWe are also lucky to be trained by an amazing team: Dhanesh Sir, Asif Bro, and Nandana. Their passion, patience, and joyful teaching make every session a powerful and positive experience.\n\nMore than just a fitness class, Electrobattles is a family. We motivate, support, and uplift each other—one dance step at a time.\n\nProud to say... I'm an Electrobattler for life!` },
  { name: 'Smitha Nair', rating: 5, date: '11 months ago', text: 'The classes are very vibrant, exhilarating and full of positive vibes. The approach of the masters is highly professional and conducive to developing a healthy body in a healthy mind. The classes are fun and provide the much required training for building up the endurance to become a skilled dancer.' },
  { name: 'Bindu Sivanand', rating: 5, date: '5 months ago', text: 'The dance class is awesome! The teacher teaches cool moves step by step, and the music keeps everyone pumped up. I feel happy and energetic after each class, and I look forward to the next session. The vibe is super friendly, making it easy to join in and have fun.' },
  { name: 'Lakshmy Kannan', rating: 5, date: '11 months ago', text: "It's been one year since I joined Electrobattles. In the busy schedule of work, this is purely a stress relief. The instructors are so friendly and cooperative with all their students. Thank you dear masters for all the support and encouragement." },
  { name: 'Vijay M', rating: 5, date: '5 months ago', text: '"Highly recommend this Zumba class. Great music, fun moves, and a fantastic stress reliever. The instructor made everyone feel Good"' },
];

const galleryPreview = [
  { url: '/team-1.jpg', tag: 'Electrobattles Family' },
  { url: '/team-2.jpg', tag: 'Electrobattles Family' },
  { url: '/team-3.jpg', tag: 'Electrobattles Family' },
  { url: '/team-4.jpg', tag: 'Electrobattles Family' },
  { url: '/team-5.jpg', tag: 'Electrobattles Family' },
  { url: '/team-6.jpg', tag: 'Electrobattles Family' },
];

/* ─── Apple-style Easing ────────────────────────────────────────── */
const easePremium = [0.16, 1, 0.3, 1];

/* ─── Premium Animated Text Component ───────────────────────────── */
const RevealText = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };
  
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 150 } },
    hidden: { opacity: 0, y: 40, transition: { type: "spring", damping: 30, stiffness: 150 } },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ─── Magnetic Button (Smooth) ──────────────────────────────────── */
const MagneticBtn = ({ children, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="btn-luxury inline-flex items-center group overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-luxury-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
      <span className="relative z-10 group-hover:text-luxury-black transition-colors duration-500 ease-[0.16,1,0.3,1] flex items-center gap-3">
        {children}
        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1]" />
      </span>
    </motion.a>
  );
};

/* ─── Categories ────────────────────────────────────────────────── */
const categories = [
  { id: 'all', label: 'All Styles' },
  { id: 'performance', label: 'Elite Performance' },
  { id: 'grooves', label: 'Grooves & Street' },
  { id: 'fitness', label: 'Fitness & Foundations' },
  { id: 'youth', label: 'Youth & Kids' },
];

/* ─── Icon Map ──────────────────────────────────────────────────── */
const IconMap = {
  Music: Music,
  Flame: Flame,
  Crown: Crown,
  Sparkles: Sparkles,
  Compass: Compass,
  Zap: Zap
};

/* ─── Cinematic Split-Screen Showcase ──────────────────────────────── */
function CinematicShowcase({ styles, onSelectStyle }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const activeStyle = styles[activeIndex] || styles[0];
  const IconComponent = IconMap[activeStyle?.icon] || Sparkles;

  // Auto-cycle through styles every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % styles.length);
      setProgressKey(prev => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [styles.length]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    setProgressKey(prev => prev + 1);
  };

  if (!styles.length) return null;

  return (
    <div className="w-full">
      {/* ── Desktop: Split Screen ── */}
      <div className="hidden lg:grid grid-cols-12 gap-0 min-h-[620px] border border-luxury-border/40 relative overflow-hidden">
        
        {/* Left — Discipline Slate Navigator */}
        <div className="col-span-4 bg-luxury-charcoal border-r border-luxury-border/40 flex flex-col">
          {/* Section Label */}
          <div className="px-8 pt-8 pb-6 border-b border-luxury-border/30">
            <span className="font-mono text-[9px] tracking-mega text-luxury-gold/40 uppercase select-none">
              EB // DISCIPLINES.INDEX
            </span>
          </div>
          
          {/* Style List */}
          <div className="flex-grow flex flex-col">
            {styles.map((s, i) => {
              const isActive = i === activeIndex;
              const ItemIcon = IconMap[s.icon] || Sparkles;
              return (
                <button
                  key={s.title}
                  onClick={() => handleSelect(i)}
                  className={`group relative flex items-center gap-5 px-8 py-5 text-left transition-all duration-500 border-b border-luxury-border/20 ${
                    isActive 
                      ? 'bg-luxury-graphite/80' 
                      : 'hover:bg-luxury-graphite/40'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${
                    isActive ? 'bg-luxury-gold' : 'bg-transparent'
                  }`} />
                  
                  {/* Progress fill for active item */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] overflow-hidden">
                      <div key={progressKey} className="w-full bg-luxury-gold/40 animate-fill-progress" />
                    </div>
                  )}

                  {/* Index Number */}
                  <span className={`font-mono text-[11px] tracking-wider transition-colors duration-500 min-w-[28px] ${
                    isActive ? 'text-luxury-gold' : 'text-luxury-muted/40'
                  }`}>
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className={`p-2 border transition-all duration-500 ${
                    isActive 
                      ? 'border-luxury-gold/30 bg-luxury-gold/5 text-luxury-gold' 
                      : 'border-luxury-border/40 bg-transparent text-luxury-muted/60 group-hover:text-luxury-muted'
                  }`}>
                    <ItemIcon className="w-3.5 h-3.5 stroke-[1.5]" />
                  </div>

                  {/* Title & Level */}
                  <div className="flex-grow min-w-0">
                    <h4 className={`font-serif text-sm tracking-tight transition-colors duration-500 truncate ${
                      isActive ? 'text-luxury-white italic' : 'text-luxury-muted group-hover:text-luxury-white/80'
                    }`}>
                      {s.title}
                    </h4>
                    <span className={`text-[8px] uppercase tracking-widest transition-colors duration-500 ${
                      isActive ? 'text-luxury-gold/80' : 'text-luxury-muted/40'
                    }`}>
                      {s.level}
                    </span>
                  </div>

                  {/* Arrow indicator */}
                  <ArrowRight className={`w-3.5 h-3.5 transition-all duration-500 flex-shrink-0 ${
                    isActive ? 'text-luxury-gold opacity-100 translate-x-0' : 'text-luxury-muted/30 opacity-0 -translate-x-2'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="px-8 py-6 border-t border-luxury-border/30 bg-luxury-black/40">
            <button 
              onClick={() => onSelectStyle(activeStyle)}
              className="w-full btn-luxury text-[9px] py-3"
            >
              Explore Syllabus
            </button>
          </div>
        </div>

        {/* Right — Cinematic Spotlight Canvas */}
        <div className="col-span-8 relative bg-luxury-black overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: easePremium }}
              className="absolute inset-0 flex flex-col"
            >
              {/* Main Image Canvas */}
              <div className="relative flex-grow overflow-hidden">
                <motion.img
                  key={`img-${activeIndex}`}
                  initial={{ scale: 1.1, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1.4, ease: easePremium }}
                  src={activeStyle.image}
                  alt={activeStyle.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/60 via-transparent to-transparent" />

                {/* Decorative corner label */}
                <div className="absolute top-8 right-8 font-mono text-[9px] tracking-mega text-luxury-white/15 select-none">
                  EB // STYLE.0{activeIndex + 1}
                </div>

                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: easePremium }}
                  className="absolute top-8 left-8"
                >
                  <span className="text-[8px] uppercase tracking-[0.25em] text-luxury-gold/90 px-3 py-1.5 border border-luxury-gold/20 bg-luxury-black/50 backdrop-blur-sm">
                    {activeStyle.category === 'performance' ? 'Elite Performance' : activeStyle.category === 'grooves' ? 'Grooves & Street' : activeStyle.category === 'youth' ? 'Youth & Kids' : 'Fitness & Foundations'}
                  </span>
                </motion.div>
              </div>

              {/* Bottom Details Overlay — Positioned over the image gradient */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="flex flex-col gap-6">
                  {/* Title Block */}
                  <div className="space-y-3">
                    {/* Level badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.8, ease: easePremium }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse-glow" />
                      <span className="text-[8px] tracking-mega uppercase text-luxury-gold font-medium">{activeStyle.level}</span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 1, ease: easePremium }}
                      className="font-serif text-4xl md:text-5xl xl:text-6xl text-luxury-white tracking-tight leading-none italic"
                    >
                      {activeStyle.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8, ease: easePremium }}
                      className="font-sans font-light text-luxury-muted text-sm max-w-md leading-relaxed"
                    >
                      {activeStyle.desc}
                    </motion.p>
                  </div>

                  {/* Metadata Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.8, ease: easePremium }}
                    className="flex flex-wrap items-center gap-6 pt-4 border-t border-luxury-white/10"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-luxury-gold/70 stroke-[1.5]" />
                      <span className="font-sans text-[10px] text-luxury-white/70 tracking-wide">{activeStyle.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-luxury-gold/70 stroke-[1.5]" />
                      <span className="font-sans text-[10px] text-luxury-white/70 tracking-wide">{activeStyle.mentor}</span>
                    </div>

                    {/* Highlights chips */}
                    <div className="hidden xl:flex items-center gap-2 ml-auto">
                      {activeStyle.highlights.slice(0, 2).map((h, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: easePremium }}
                          className="text-[9px] px-3 py-1.5 border border-luxury-border/50 bg-luxury-black/60 backdrop-blur-sm text-luxury-muted tracking-wide"
                        >
                          {h}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Mobile: Cinematic Lookbook Cards ── */}
        <div className="flex flex-col gap-8 lg:hidden">
        {styles.map((s, i) => {
          const ItemIcon = IconMap[s.icon] || Sparkles;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: easePremium }}
              onClick={() => onSelectStyle(s)}
              className="group cursor-pointer relative overflow-hidden border border-luxury-border/40 bg-luxury-charcoal"
            >
              {/* Image Section */}
              <div className="relative h-[260px] sm:h-[300px] overflow-hidden flex items-center justify-center bg-luxury-charcoal/10">
                <img
                  src={s.image}
                  alt={s.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-[1200ms] ease-slow-ease group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/30 to-transparent" />
                
                {/* Floating category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[7px] uppercase tracking-[0.2em] text-luxury-gold/90 px-2.5 py-1 border border-luxury-gold/20 bg-luxury-black/60 backdrop-blur-sm">
                    {s.category === 'performance' ? 'Elite Performance' : s.category === 'grooves' ? 'Grooves & Street' : s.category === 'youth' ? 'Youth & Kids' : 'Fitness & Foundations'}
                  </span>
                </div>

                {/* Index tag */}
                <div className="absolute top-4 right-4 font-mono text-[9px] tracking-mega text-luxury-white/20 select-none">
                  0{i + 1}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-luxury-gold animate-pulse-glow" />
                      <span className="text-[7px] tracking-mega uppercase text-luxury-gold font-medium">{s.level}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-luxury-white tracking-tight leading-tight italic group-hover:text-luxury-gold transition-colors duration-500">
                      {s.title}
                    </h3>
                  </div>
                  <div className="p-2 border border-luxury-border/40 text-luxury-gold/60 group-hover:border-luxury-gold/30 group-hover:text-luxury-gold transition-all duration-500">
                    <ItemIcon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                </div>

                <p className="font-sans font-light text-luxury-muted text-xs leading-relaxed line-clamp-2 group-hover:text-luxury-white/70 transition-colors duration-500">
                  {s.desc}
                </p>

                {/* Bottom meta bar with slide-up CTA */}
                <div className="pt-4 border-t border-luxury-border/30 flex items-center justify-between text-[10px] text-luxury-muted tracking-wide font-sans overflow-hidden relative h-5 select-none">
                  <div className="flex items-center justify-between w-full absolute inset-0 group-hover:translate-y-5 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    <span className="truncate max-w-[55%]">Instructor: <strong className="text-white/80 font-medium">{s.mentor}</strong></span>
                    <span className="text-luxury-gold/80 font-medium">{s.schedule.split('•')[0]}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 w-full absolute inset-0 translate-y-5 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] text-luxury-gold font-medium tracking-[0.25em] uppercase text-[9px]">
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3 -rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Home ──────────────────────────────────────────────────────── */
export default function Home() {
  const [review, setReview] = useState(0);
  const [deck, setDeck] = useState([0, 1, 2, 3, 4, 5]);
  const [swapping, setSwap] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState(null);
  const { scrollYProgress } = useScroll();
  
  // Adjusted Parallax: No travel on mobile to prevent excessive zoom
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", mobile ? "0%" : "30%"]);

  // Mobile detection
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 1024);
    fn(); window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  // Review auto-play
  useEffect(() => {
    const t = setInterval(() => setReview(p => (p + 1) % googleReviews.length), 8000);
    return () => clearInterval(t);
  }, []);

  // Card Swapping Logic
  const triggerSwap = useCallback(() => {
    if (swapping !== null) return;
    const top = deck[0];
    setSwap(top);
    setTimeout(() => {
      setDeck(p => { const d = [...p]; d.push(d.shift()); return d; });
      setSwap(null);
    }, 450);
  }, [deck, swapping]);

  useEffect(() => {
    const t = setInterval(triggerSwap, 6000);
    return () => clearInterval(t);
  }, [triggerSwap]);

  // Filtered styles for the active category
  const filteredStyles = activeCategory === 'all' 
    ? featuredStyles 
    : featuredStyles.filter(s => s.category === activeCategory);

  return (
    <div className="bg-luxury-black font-sans min-h-screen overflow-x-hidden selection:bg-luxury-gold/30 selection:text-luxury-white">
      
      {/* ════════════════════════════════════════
          §1  HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Ambient Glowing Sphere */}
        <div className="glow-ambient animate-float-glow w-[300px] h-[300px] sm:w-[650px] sm:h-[650px] top-[10%] left-[15%] opacity-[0.25]" />
        
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-[0.35]"
          style={{ y: heroBgY }}
        >
          {/* Background Image: Responsive full-cover with a slight zoom on mobile */}
          <img 
            src="/logo-wall-premium.jpg" 
            alt="Studio Background" 
            className="w-full h-full md:h-[120%] object-cover grayscale object-top transform scale-[1.15] md:scale-105 md:translate-y-[8%]"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2000&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-luxury-black/30" />
          {/* Extra bottom shadow for mobile to make text pop more */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-luxury-black via-luxury-black/90 to-transparent md:hidden" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: easePremium }}
            className="w-full max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-[clamp(3.2rem,10vw,8.5rem)] font-light text-luxury-white leading-[1.05] mb-6 md:mb-8 tracking-tight px-4">
              <RevealText text="The Art of" className="block" delay={0.1} />
              <RevealText text="Movement" className="block italic text-luxury-muted" delay={0.2} />
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5, ease: easePremium }}
              className="font-sans font-light text-luxury-muted max-w-lg mx-auto text-[0.8rem] sm:text-sm md:text-base lg:text-lg leading-[1.8] sm:leading-[2] tracking-wide mb-12 md:mb-16 px-6"
            >
              An elite sanctuary for dance and artistic expression. Where technical precision meets raw emotion under world-class mentorship.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.5, ease: easePremium }}
            >
              <MagneticBtn href="#footer">
                Discover the Academy
              </MagneticBtn>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-muted">Scroll</span>
          <div className="w-[1px] h-10 md:h-12 bg-luxury-border overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 48], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-luxury-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          §2  PHILOSOPHY (ABOUT)
      ════════════════════════════════════════ */}
      <section id="about" className="py-20 md:py-48 bg-luxury-black relative z-20 overflow-hidden">
        {/* Ambient Glowing Sphere */}
        <div className="glow-ambient animate-float-glow w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] top-[10%] right-[-10%] opacity-35" style={{ animationDelay: '-10s' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            
            {/* ── Text Block ── */}
            <div className="w-full lg:w-1/2 space-y-10 md:space-y-12 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.5, ease: easePremium }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-luxury-gold/50" />
                  <span className="text-editorial-caption text-luxury-gold block">Our Philosophy</span>
                </div>
                <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-luxury-white leading-[1.05] font-light tracking-tight">
                  Elevating <br className="hidden sm:block"/><span className="italic text-luxury-muted">every step.</span>
                </h2>
              </motion.div>
 
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.5, delay: 0.1, ease: easePremium }}
                className="font-sans font-light text-luxury-muted leading-[1.8] md:leading-[2.2] max-w-xl text-[0.85rem] md:text-base lg:text-lg"
              >
                Electrobattles is more than a studio; it is a discipline. We believe that true artistry is forged in the intersection of rigorous technique and unrestrained passion. For over three decades, we have cultivated an environment that demands excellence while nurturing the individual spirit.
              </motion.p>
 
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.5, delay: 0.2, ease: easePremium }}
                className="grid grid-cols-2 gap-8 pt-8 md:pt-10 border-t border-luxury-border/50"
              >
                <div>
                  <span className="block font-serif text-4xl md:text-6xl text-luxury-white mb-2 md:mb-3">500+</span>
                  <span className="text-editorial-caption text-luxury-muted">Alumni</span>
                </div>
                <div>
                  <span className="block font-serif text-4xl md:text-6xl text-luxury-white mb-2 md:mb-3">1987</span>
                  <span className="text-editorial-caption text-luxury-muted">Founded</span>
                </div>
              </motion.div>
            </div>
 
            {/* ── Swapping Card Deck ── */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 h-auto sm:h-auto md:h-auto lg:h-auto relative mt-8 lg:mt-0">
                <div className="relative w-full max-w-[620px] aspect-[4/3] flex items-center justify-center overflow-hidden rounded-lg border-2 border-luxury-gold/30 bg-luxury-black/80 backdrop-blur-md shadow-2xl transition-all duration-200">
                {galleryPreview.map((pic, idx) => {
                  const pos = deck.indexOf(idx);
                  const isSwapping = idx === swapping;
                  const isTop = pos === 0;
                  
                  const offsets = [
                    { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
                    { x: mobile ? 12 : 28, y: mobile ? -12 : -28, rotate: 4, scale: 0.96, opacity: 0.8 },
                    { x: mobile ? 24 : 56, y: mobile ? -24 : -56, rotate: 8, scale: 0.92, opacity: 0.5 },
                    { x: mobile ? 36 : 84, y: mobile ? -36 : -84, rotate: 12, scale: 0.88, opacity: 0 },
                    { x: mobile ? 36 : 84, y: mobile ? -36 : -84, rotate: 12, scale: 0.88, opacity: 0 },
                    { x: mobile ? 36 : 84, y: mobile ? -36 : -84, rotate: 12, scale: 0.88, opacity: 0 },
                  ];
 
                  const anim = isSwapping
                    ? { x: mobile ? -120 : -350, y: mobile ? -20 : -80, rotate: -15, scale: 0.95, opacity: 0, zIndex: 50 } 
                    : { ...offsets[Math.min(pos, 5)], zIndex: 40 - pos };
 
                  return (
                    <motion.div
                      key={pic.url}
                      animate={anim}
                      transition={{ type: 'spring', stiffness: 200, damping: 28, mass: 1 }}
                      onClick={() => isTop && triggerSwap()}
                      className={`absolute inset-0 w-full h-full border-2 border-luxury-gold/30 bg-luxury-black/80 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden transition-all duration-200 ${isTop ? 'cursor-pointer shadow-[0_15px_40px_rgba(197,168,128,0.2)] md:shadow-[0_20px_50px_rgba(197,168,128,0.25)]' : 'pointer-events-none'}`}
                    >
                      <img 
                        src={pic.url} 
                        alt={pic.tag} 
                        className="w-full h-full object-contain transition-all duration-1000 ease-[0.16,1,0.3,1]" 
                        onError={(e) => {
                           e.currentTarget.src = "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-luxury-gold text-sm font-medium bg-luxury-black/60 px-2 py-1 rounded">Explore</span>
                      </div>
                      
                    </motion.div>
                  );
                })}
              </div>
            </div>
 
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          §3  DISCIPLINES — Cinematic Split-Screen Showcase
      ════════════════════════════════════════ */}
      <section id="classes" className="py-24 md:py-48 bg-luxury-black relative overflow-hidden">
        {/* Ambient Glowing Spheres */}
        <div className="glow-ambient animate-float-glow w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] -top-12 -left-12 opacity-30" style={{ animationDelay: '-15s' }} />
        <div className="glow-ambient animate-float-glow w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] bottom-12 -right-12 opacity-25" style={{ animationDelay: '-5s' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 1.5, ease: easePremium }}
              className="space-y-4 md:space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-luxury-gold/50" />
                <span className="text-editorial-caption text-luxury-gold block">The Curriculum</span>
              </div>
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-luxury-white font-light leading-[1.05] tracking-tight">
                Artistic <span className="italic text-luxury-muted">Disciplines</span>
              </h2>
            </motion.div>
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 1.5, delay: 0.2, ease: easePremium }}
              href="#footer" 
              className="link-editorial text-[10px] md:text-xs uppercase tracking-[0.2em] pb-1 self-start md:self-auto"
            >
              View Full Schedule
            </motion.a>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="inline-flex flex-wrap md:flex-nowrap justify-center gap-1.5 p-1 rounded-full bg-luxury-charcoal/90 border border-luxury-border/60 backdrop-blur-md relative">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-4 py-2 md:px-6 md:py-2.5 text-[9px] md:text-xs tracking-wider uppercase rounded-full font-sans transition-colors duration-300 z-10 ${
                      isActive ? 'text-luxury-black font-semibold' : 'text-luxury-muted hover:text-luxury-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCategoryIndicator"
                        className="absolute inset-0 bg-luxury-gold rounded-full z-[-1]"
                        transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                      />
                    )}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cinematic Showcase */}
          <CinematicShowcase 
            styles={filteredStyles} 
            onSelectStyle={(s) => setSelectedStyle(s)} 
          />

        </div>
      </section>

      {/* ════════════════════════════════════════
          §4  TESTIMONIALS
      ════════════════════════════════════════ */}
      <section id="reviews" className="py-24 md:py-48 bg-luxury-black overflow-hidden border-y border-luxury-border/30 relative">
        {/* Ambient Glowing Sphere */}
        <div className="glow-ambient animate-float-glow w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] top-[20%] left-1/2 -translate-x-1/2 opacity-[0.25]" style={{ animationDelay: '-12s' }} />
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: easePremium }}
            className="flex flex-col items-center justify-center gap-4 mb-12 md:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-luxury-gold/30" />
              <span className="text-editorial-caption text-luxury-gold block">Student Voices</span>
              <div className="w-12 h-[1px] bg-luxury-gold/30" />
            </div>
            
            <div className="bg-luxury-charcoal/40 border border-luxury-border/30 backdrop-blur-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 rounded-lg max-w-3xl mx-auto w-full">
              <div className="text-left space-y-1">
                <h3 className="font-serif text-xl md:text-2xl text-luxury-white">Electrobattles Dance & Fitness Studio</h3>
                <p className="font-sans text-xs md:text-sm text-luxury-muted">CBSC Rd, Jubilee Nagar, Veli, Kochi, Kerala 682002, India</p>
              </div>
              <div className="hidden md:block w-[1px] h-12 bg-luxury-border/40" />
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-serif text-4xl text-[#F5E6C4] leading-none mb-1">4.9</span>
                  <div className="flex gap-0.5 text-luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-left">
                  <span className="block font-sans text-xs uppercase tracking-widest text-luxury-white">33 Reviews</span>
                  <span className="block font-sans text-[10px] text-luxury-muted mt-0.5">Google Rating</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="relative min-h-[450px] sm:min-h-[350px] md:min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={review}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 1.2, ease: easePremium }}
                className="absolute inset-0 flex flex-col items-center justify-center w-full px-2 md:px-4"
              >
                <span className="font-serif text-[6rem] md:text-[8rem] text-luxury-gold/20 absolute -top-12 md:-top-24 select-none leading-none h-20 md:h-24 overflow-hidden">
                  &ldquo;
                </span>
                <p className="font-serif italic text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#F5E6C4] font-light leading-[1.7] md:leading-[1.6] mb-10 md:mb-16 line-clamp-6 md:line-clamp-4 relative z-10 px-4 md:px-0 drop-shadow-sm">
                  {googleReviews[review].text}
                </p>
                <div className="relative z-10">
                  <h4 className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-luxury-gold mb-2">{googleReviews[review].name}</h4>
                  <span className="text-editorial-caption text-luxury-muted tracking-[0.2em]">{googleReviews[review].date}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 1.5, delay: 0.2, ease: easePremium }}
            className="flex justify-center items-center gap-6 md:gap-12 mt-10 sm:mt-16 md:mt-24"
          >
            <button 
              onClick={() => setReview(p => (p - 1 + googleReviews.length) % googleReviews.length)}
              className="text-luxury-muted hover:text-luxury-gold transition-colors duration-500 p-2 group"
            >
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 stroke-[1] group-hover:-translate-x-1 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </button>
            <div className="flex gap-2 md:gap-3">
              {googleReviews.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-[1.5px] transition-all duration-1000 ease-[0.16,1,0.3,1] ${i === review ? 'w-8 md:w-12 bg-luxury-gold' : 'w-2 md:w-3 bg-luxury-border'}`}
                />
              ))}
            </div>
            <button 
              onClick={() => setReview(p => (p + 1) % googleReviews.length)}
              className="text-luxury-muted hover:text-luxury-gold transition-colors duration-500 p-2 group"
            >
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8 stroke-[1] group-hover:translate-x-1 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          §5  CTA
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-56 bg-luxury-black relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-orange/5 via-luxury-black to-luxury-black pointer-events-none" />
        
        {/* Ambient Glowing Sphere */}
        <div className="glow-ambient animate-float-glow w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35" style={{ animationDelay: '-8s' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: easePremium }}
            className="font-serif text-[clamp(2.8rem,8vw,6rem)] text-luxury-white font-light leading-[1.05] mb-10 md:mb-16 tracking-tight"
          >
            Awaken your <br/>
            <span className="italic text-luxury-muted">artistic potential</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 1.5, delay: 0.2, ease: easePremium }}
          >
            <MagneticBtn href="#footer">
              Begin Your Journey
            </MagneticBtn>
          </motion.div>
        </div>
      </section>

      {/* Detailed Apple-style Sliding Drawer */}
      <AnimatePresence>
        {selectedStyle && (
          <>
            {/* Backdrop underlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedStyle(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />

            {/* Sliding Glass Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg md:max-w-xl bg-luxury-charcoal/98 backdrop-blur-2xl border-l border-luxury-border/80 shadow-[0_0_50px_rgba(0,0,0,0.9)] z-50 overflow-y-auto flex flex-col"
            >
              {/* Header Visual Cover (100% Image-Free, Premium Typographic) */}
              <div className="relative w-full h-[200px] md:h-[220px] bg-gradient-to-br from-luxury-charcoal to-luxury-black border-b border-luxury-border/40 overflow-hidden flex-shrink-0 flex items-end p-8 md:p-10">
                {/* Decorative Soft Golden Ambient Wash */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-luxury-gold/5 rounded-full blur-[80px] pointer-events-none" />
                
                {/* Decorative Wide Monospace Label */}
                <div className="absolute right-8 top-8 font-mono text-[9px] tracking-mega text-luxury-gold/20 select-none pointer-events-none">
                  EB // CURRICULUM.SPEC
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedStyle(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-none bg-black/60 border border-luxury-border hover:border-luxury-gold/40 text-luxury-muted hover:text-luxury-white transition-all duration-300 backdrop-blur-md group"
                >
                  <X className="w-4 h-4 stroke-[1.5] group-hover:scale-110 group-hover:rotate-90 transition-transform duration-500 ease-out" />
                </button>

                <div className="space-y-2 relative z-10 w-full">
                  <span className="text-[8px] uppercase tracking-mega text-luxury-gold">{selectedStyle.category === 'performance' ? 'Elite Performance' : selectedStyle.category === 'grooves' ? 'Grooves & Street' : selectedStyle.category === 'youth' ? 'Youth & Kids' : 'Fitness & Foundations'}</span>
                  <h2 className="font-serif text-3.5xl md:text-5xl text-luxury-white tracking-tight leading-none italic">{selectedStyle.title}</h2>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-8 md:p-10 flex-grow space-y-8">
                <div className="space-y-4">
                  {/* Level spec tag */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 border border-luxury-gold/20 bg-luxury-gold/5 backdrop-blur-sm rounded-none w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse-glow" />
                    <span className="text-[8px] md:text-[9px] uppercase tracking-mega text-luxury-gold font-medium">{selectedStyle.level}</span>
                  </div>
                  <p className="font-sans font-light text-luxury-muted text-sm md:text-base leading-relaxed pt-2">
                    {selectedStyle.desc}
                  </p>
                </div>

                <div className="h-[0.5px] bg-luxury-border/40 w-full" />

                {/* Info blocks: Time & Mentor */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-luxury-muted">
                      <Clock className="w-4 h-4 stroke-[1.5]" />
                      <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest">Schedule</span>
                    </div>
                    <p className="font-sans font-medium text-luxury-white text-xs md:text-sm">{selectedStyle.schedule}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-luxury-muted">
                      <User className="w-4 h-4 stroke-[1.5]" />
                      <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest">Lead Mentor</span>
                    </div>
                    <p className="font-sans font-medium text-luxury-white text-xs md:text-sm">{selectedStyle.mentor}</p>
                  </div>
                </div>

                <div className="h-[0.5px] bg-luxury-border/40 w-full" />

                {/* Highlights */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-luxury-muted">
                    <Award className="w-4 h-4 stroke-[1.5]" />
                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest">Training Highlights</span>
                  </div>
                  <ul className="space-y-3.5 pl-1">
                    {selectedStyle.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-xs md:text-sm text-luxury-white/90">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                        <span className="font-sans font-light leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-8 border-t border-luxury-border/50 bg-black/40 flex items-center justify-between gap-4">
                <div className="hidden sm:block">
                  <span className="block text-[8px] text-luxury-muted uppercase tracking-wider mb-1">Have questions?</span>
                  <a href="mailto:electrobattles@gmail.com" className="text-xs text-luxury-gold hover:text-white transition-colors">electrobattles@gmail.com</a>
                </div>
                <a
                  href="#footer"
                  onClick={() => setSelectedStyle(null)}
                  className="btn-luxury w-full sm:w-auto text-center justify-center inline-flex items-center"
                >
                  Inquire Class
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}