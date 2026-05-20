import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Play,
  Flame,
  Globe,
  Compass,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

// Dance Styles for offered section
const featuredStyles = [
  {
    title: 'Choreography Classes',
    desc: 'Master advanced movement flows, visual storytelling, alignment, and physical expression with cinematic routines.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
    level: 'Intermediate to Advanced',
  },
  {
    title: 'Zumba',
    desc: 'Supercharge your cardiovascular health and dance fitness with high-energy Latin and world rhythm routines.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Advanced Classes',
    desc: 'Rigorous training programs for competitive soloists and crews looking for elite performance execution.',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop',
    level: 'Professional Training',
  },
  {
    title: 'Youth Classes',
    desc: 'Structured, highly encouraging training built specifically to inspire coordination and stamina in young dancers.',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=800&auto=format&fit=crop',
    level: 'Ages 8 - 16',
  },
  {
    title: 'Adult Lessons',
    desc: 'Improve flexibility, posture, core strength, and graceful expression in a warm and welcoming space.',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Hip Hop',
    desc: 'Raw urban grooves, street style foundations, sharp locking-popping, and high-impact battle drills.',
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Fitness Dance',
    desc: 'Interval-style athletic drills mixed with contemporary routines to build strong posture and stamina.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    level: 'Fitness & Conditioning',
  },
  {
    title: 'Kids Dance',
    desc: 'Nurture joy, fundamental musicality, body awareness, and creative play in our child-focused rooms.',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=800&auto=format&fit=crop',
    level: 'Ages 4 - 7',
  },
  {
    title: 'Western Dance',
    desc: 'Dynamic stage-performance routines merging commercial pop dance rhythms, rock, and stage production flows.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    level: 'Beginner to Intermediate',
  },
];
// Google Reviews
// Google Reviews
const googleReviews = [
  {
    name: 'Joseph Shane',
    rating: 5,
    date: '11 months ago',
    text: `Zumba Fitness at Electrobattles – More Than Just a Workout! 🔥

Our journey at Electrobattles Zumba Centre has been nothing short of amazing. This vibrant, high-energy space was founded by our beloved Late Rajesh Master, whose legacy now lives on through his talented son, Manu Rajesh.
Manu isn’t just a dedicated instructor—he’s an expert in multiple dance forms and continues his father’s passion with unmatched energy and grace.

We are also lucky to be trained by an amazing team: Dhanesh Sir, Asif Bro, and Nandana. Their passion, patience, and joyful teaching make every session a powerful and positive experience.

Each class is so much more than just a Zumba workout. After a fun and dynamic half-hour Zumba session, we dive into learning a new cinematic dance routine every week.
The best part? We wrap up each week with a Friday shoot—capturing our performances as beautiful memories we’ll cherish forever.

And there’s more!
Every second Saturday, all batches and branches come together for a combined session, full of energy and bonding. We also get the chance to perform on special occasions like Founder's Day and Onam celebrations, often held at banquet halls—true moments of joy and pride.
Our annual tour brings all of us even closer, strengthening our friendships and creating unforgettable memories outside the studio too.

More than just a fitness class, Electrobattles is a family. We motivate, support, and uplift each other—one dance step at a time. Each session is filled with laughter, rhythm, and togetherness.

Feeling truly blessed to be part of this inspiring journey.
Proud to say... I’m an Electrobattler for life! 💪🎶❤️`,
  },
  {
    name: 'Smitha Nair',
    rating: 5,
    date: '11 months ago',
    text: 'The classes are very vibrant, exhilarating and full of positive vibes.The approach of the masters is highly professional and conducive to developing a healthy body in a healthy mind. The classes are fun and at the same time provide the much required training for building up the endurance to become a skilled dancer.',
  },
  {
    name: 'Bindu Sivanand',
    rating: 5,
    date: '5 months ago',
    text: 'The dance class is awesome! . The teacher teaches cool moves step by step, and the music keeps everyone pumped up. I feel happy and energetic after each class, and I look forward to the next session. The vibe is super friendly, making it easy to join in and have fun.',
  },
  {
    name: 'Lakshmy Kannan',
    rating: 5,
    date: '11 months ago',
    text: "It's been one year since I joined electrobattles.In the busy schedule of work, this is purely a stress relief. The instructors are so friendly and Cooperative with all their students. Thank you dear masters for all the support and encouragement.",
  },
  {
    name: 'Yohann Antony',
    rating: 5,
    date: '5 months ago',
    text: 'Its an awesome experience with my wonderful zumba team and energatic n friendly masters. Friday session is just super kidu. Thank you all our masters and zumba mates ❤️❤️❤️❤️❤️',
  },
  {
    name: 'Reena Malayil',
    rating: 5,
    date: '11 months ago',
    text: 'It is so nice to be a part of this fitness group.All 4 masters are excellent in teaching..I enjoy each and every moment in this group..',
  },
  {
    name: 'Nita Khona',
    rating: 5,
    date: '2 years ago',
    text: 'It is very good for our health, i enjoy each and every moment, i joined electrobattles at the age of 50+, after joining electrobattles feels fit and energetic',
  },
  {
    name: 'Vijay M',
    rating: 5,
    date: '5 months ago',
    text: 'Highly recommend this Zumba class. Great music, fun moves, and a fantastic stress reliever. The instructor made everyone feel Good',
  },
  {
    name: 'Sourabhya B pai',
    rating: 5,
    date: '10 months ago',
    text: "I'm living my dream and my passion of dance with my daughter ❤️",
  },
  {
    name: 'Mohammed Sayhan ST',
    rating: 5,
    date: '5 months ago',
    text: 'Nice studio for dance and fitness in kochi',
  },
  {
    name: 'Khona Viren',
    rating: 5,
    date: '5 months ago',
    text: "1. Good class\n2. Great Ambience\n3. Very good masters",
  }
];

const galleryPreview = [
  { url: '/studio-kids.jpg', tag: 'Studio Training Session' },
  { url: '/stage-crew.jpg', tag: 'Stage Crew Performance' },
  { url: '/logo-wall.jpg', tag: 'Signature Logo Wall' },
  { url: '/camp-kids.jpg', tag: 'Summer Camp Certification' },
  { url: '/fitness-group.jpg', tag: 'Fitness Training Group' },
];

export default function Home() {
  const [deck, setDeck] = useState([0, 1, 2, 3, 4]);
  const [swappingCardId, setSwappingCardId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    const reviewTimer = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % googleReviews.length);
    }, 5500);
    return () => clearInterval(reviewTimer);
  }, []);

  const handleReviewPrev = () => {
    setActiveReviewIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  const handleReviewNext = () => {
    setActiveReviewIndex((prev) => (prev + 1) % googleReviews.length);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const triggerSwap = () => {
    if (swappingCardId !== null) return;
    const topCardId = deck[0];
    setSwappingCardId(topCardId);
    setTimeout(() => {
      setDeck((prev) => {
        const nextDeck = [...prev];
        const top = nextDeck.shift();
        nextDeck.push(top);
        return nextDeck;
      });
      setSwappingCardId(null);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      triggerSwap();
    }, 5000);
    return () => clearInterval(timer);
  }, [deck, swappingCardId]);

  return (
    <div className="relative overflow-hidden bg-classic-gradient text-studio-charcoal font-serif">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Light & Gradient Overlays */}
        <div 
          className="absolute inset-0 bg-no-repeat opacity-[0.9] pointer-events-none z-0 mix-blend-multiply"
          style={{ 
            backgroundImage: isMobile ? `url('/logo-wall-premium.jpg')` : `url('/logo-wall-right.png')`,
            backgroundPosition: isMobile ? 'top center' : 'center 0%',
            backgroundSize: isMobile ? '150% auto' : 'cover',
            WebkitMaskImage: isMobile ? 'linear-gradient(to bottom, black 0%, black 30%, transparent 60%)' : 'radial-gradient(circle at 75% 50%, black 50%, transparent 95%)',
            maskImage: isMobile ? 'linear-gradient(to bottom, black 0%, black 30%, transparent 60%)' : 'radial-gradient(circle at 75% 50%, black 50%, transparent 95%)'
          }}
        />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#F5ECD7] via-[#F5ECD7]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5ECD7] via-transparent to-[#F5ECD7]/25 z-10 pointer-events-none" />
        {/* Mobile-only extra overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5ECD7] via-[#F5ECD7]/80 to-transparent z-10 md:hidden pointer-events-none" />

        {/* Subtle champagne ambient glow point */}
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-studio-gold/5 rounded-full blur-[100px] pointer-events-none z-10" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-20 pt-56 md:pt-24 flex flex-col items-start text-left">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-normal tracking-[-0.02em] leading-[1.08] mb-8 text-studio-charcoal"
          >
            Where movement<br />
            <span className="font-light italic text-studio-charcoal/75">becomes artistry.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-light text-sm md:text-base text-studio-charcoal/55 max-w-[360px] leading-[2] tracking-[0.02em] mb-14"
          >
            The ultimate sanctuary for elite dance training — where raw emotion meets world-class mentorship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#footer"
              className="group flex items-center gap-4"
            >
              <span className="w-8 h-[1px] bg-studio-charcoal/60 group-hover:w-14 transition-all duration-700 ease-[0.16,1,0.3,1]" />
              <span className="font-sans font-semibold text-[10px] uppercase tracking-[0.3em] text-studio-charcoal/80 group-hover:text-studio-charcoal transition-colors duration-500">
                Join The Academy
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-studio-charcoal/40 group-hover:text-studio-charcoal group-hover:translate-x-1.5 transition-all duration-500" />
            </a>
          </motion.div>
        </div>


      </section>

      <div className="classic-divider" />

      {/* 2. About the Studio Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Fluid Layout Swapping Stacked Card Deck */}
            <div className="relative w-full h-[430px] md:h-[480px]">
              {galleryPreview.map((pic, idx) => {
                const position = deck.indexOf(idx);
                const isSwapping = idx === swappingCardId;
                const isActive = position === 0;
                
                // Calculate dynamic motion configurations
                let cardAnimate = {};
                if (isSwapping) {
                  cardAnimate = {
                    x: isMobile ? 260 : 360,
                    y: -25,
                    rotate: 15,
                    scale: 0.95,
                    opacity: 0,
                    zIndex: 50
                  };
                } else {
                  if (position === 0) {
                    cardAnimate = { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 40 };
                  } else if (position === 1) {
                    cardAnimate = { x: isMobile ? -8 : -14, y: isMobile ? 8 : 14, rotate: -3, scale: 0.96, opacity: 0.88, zIndex: 30 };
                  } else if (position === 2) {
                    cardAnimate = { x: isMobile ? -16 : -28, y: isMobile ? 16 : 28, rotate: -6, scale: 0.92, opacity: 0.65, zIndex: 20 };
                  } else {
                    cardAnimate = { x: isMobile ? -24 : -42, y: isMobile ? 24 : 42, rotate: -9, scale: 0.88, opacity: 0, zIndex: 10 };
                  }
                }

                return (
                  <motion.div
                    key={pic.url}
                    animate={cardAnimate}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 24
                    }}
                    onClick={() => {
                      if (isActive) triggerSwap();
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                    className={`w-[88%] md:w-[370px] h-[350px] md:h-[430px] rounded-3xl overflow-hidden border border-[#A08246]/15 shadow-xl transition-colors duration-500 ease-[0.16,1,0.3,1] ${
                      isActive 
                        ? 'cursor-pointer hover:border-studio-gold/60 shadow-md' 
                        : 'pointer-events-none'
                    }`}
                  >
                    <div className="relative w-full h-full bg-studio-dark">
                      {/* Image */}
                      <img 
                        src={pic.url} 
                        alt={pic.tag} 
                        className="w-full h-full object-cover select-none"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-studio-black/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                );
              })}

              {/* Stacked Deck Help Prompt */}
              <div className="absolute bottom-[35px] md:bottom-[0px] left-1 flex items-center space-x-2 text-[9px] uppercase font-bold tracking-widest text-studio-gold select-none animate-pulse font-sans">
                <span>💡 Tap the cards to swap them!</span>
              </div>
            </div>

            {/* Right Column: Copywriting */}
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[9px] uppercase tracking-[0.3em] text-studio-gold/80 font-sans font-semibold">
                  Our Identity
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-studio-charcoal">
                  Where Passion, Form, &{' '}
                  <span className="italic font-light text-studio-charcoal/70">Soul Collide</span>
                </h2>
              </div>

              <p className="text-studio-charcoal/60 leading-[1.9] font-light font-sans text-sm max-w-md">
                Electrobattles is a beacon of artistic excellence. We believe dance is more than physical steps — it is an intricate dialogue between the soul and space. Our curriculum merges technical precision with creative liberation, preparing students for both professional stages and personal growth.
              </p>

              {/* Stats — horizontal pill rows */}
              <div className="space-y-4 pt-2">
                {[
                  { value: '98%', label: 'Student Satisfaction' },
                  { value: '500+', label: 'Students Trained' },
                ].map(({ value, label }) => (
                  <div key={label} className="flex items-center gap-5">
                    <span className="font-serif text-2xl font-normal text-studio-charcoal w-16 shrink-0">{value}</span>
                    <div className="flex-1 h-px bg-studio-charcoal/10" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-studio-charcoal/45 font-sans font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#classes"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-4"
                >
                  <span className="w-6 h-[1px] bg-studio-charcoal/40 group-hover:w-10 transition-all duration-700" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-studio-charcoal/60 group-hover:text-studio-charcoal transition-colors duration-500 font-semibold">
                    Discover Our Legacy
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-studio-charcoal/30 group-hover:text-studio-charcoal group-hover:translate-x-1 transition-all duration-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="classic-divider" />

      {/* 3. Why Choose Us Section */}
      <section className="py-24 md:py-32 relative bg-studio-dark/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-studio-gold font-semibold font-serif italic">
              Unrivaled Standards
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-studio-charcoal">
              Why Elite Dancers Choose <span className="text-gold-gradient italic">Electrobattles</span>
            </h2>
            <p className="text-studio-charcoal/60 font-light font-sans text-sm">
              We provide an unparalleled artistic ecosystem that refines your raw talent into stunning visual expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard hoverGlow="gold" delay={0.1}>
              <Award className="w-10 h-10 text-studio-gold mb-6" />
              <h3 className="font-serif text-lg font-bold mb-3 text-studio-charcoal">Elite Performers</h3>
              <p className="text-studio-charcoal/70 text-sm font-sans font-light leading-relaxed">
                Learn under acclaimed principal soloists, industry pioneers, and international choreographers.
              </p>
            </GlassCard>

            <GlassCard hoverGlow="gold" delay={0.2}>
              <Flame className="w-10 h-10 text-studio-gold mb-6" />
              <h3 className="font-serif text-lg font-bold mb-3 text-studio-charcoal">Premium Floor Plans</h3>
              <p className="text-studio-charcoal/70 text-sm font-sans font-light leading-relaxed">
                Practice safely on orthopedic floating floors, professional acoustic design, and premium floor mirrors.
              </p>
            </GlassCard>

            <GlassCard hoverGlow="gold" delay={0.3}>
              <Globe className="w-10 h-10 text-studio-gold mb-6" />
              <h3 className="font-serif text-lg font-bold mb-3 text-studio-charcoal">Global Stage</h3>
              <p className="text-studio-charcoal/70 text-sm font-sans font-light leading-relaxed">
                Showcase your artistry in biannual theater recitals, international showcases, and industry festivals.
              </p>
            </GlassCard>

            <GlassCard hoverGlow="gold" delay={0.4}>
              <Compass className="w-10 h-10 text-studio-gold mb-6" />
              <h3 className="font-serif text-lg font-bold mb-3 text-studio-charcoal">Custom Growth Paths</h3>
              <p className="text-studio-charcoal/70 text-sm font-sans font-light leading-relaxed">
                Bespoke career planning, video reviews, and customized mentorship programs matching your personal goals.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <div className="classic-divider" />

      {/* 4. Dance Styles Offered Section */}
      <section id="classes" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-studio-gold font-semibold font-serif italic">
                Artistic Disciplines
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-studio-charcoal">
                Dance Styles <span className="text-gold-gradient italic">We Perfect</span>
              </h2>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 bg-[#FAF9F6] border border-[#A08246]/20 rounded-full px-6 py-2.5 text-xs text-studio-charcoal uppercase font-bold tracking-widest hover:bg-studio-charcoal hover:text-[#FAF9F6] transition-apple shadow-sm font-sans"
            >
              <span>Inquire Today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {featuredStyles.map((style, idx) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden border border-[#A08246]/15 bg-white shadow-md h-[200px] md:h-[400px]"
              >
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-[1.05]" style={{ backgroundImage: `url(${style.image})` }} />
                
                {/* Gradient overlay — deep for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 z-20 flex flex-col justify-end h-full">
                  {style.level && (
                    <span className="text-[10px] text-studio-gold font-semibold uppercase tracking-widest mb-1.5 font-sans">
                      {style.level}
                    </span>
                  )}
                  <h3 className="font-serif text-base md:text-lg font-semibold text-white mb-2 tracking-wide group-hover:text-studio-gold transition-colors duration-300">
                    {style.title}
                  </h3>
                  <p className="text-white/65 text-xs font-sans font-light leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden mt-1">
                    {style.desc}
                  </p>
                  
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-2 md:mt-4 flex items-center space-x-1.5 text-xs text-studio-gold font-semibold uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300 font-sans"
                  >
                    <span>Inquire About Style</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="classic-divider" />

      {/* 5. Google Reviews Section */}
      <section id="reviews" className="py-24 md:py-32 relative bg-studio-dark/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-studio-gold font-semibold flex items-center justify-center gap-2 font-serif italic">
              <Sparkles className="w-3.5 h-3.5 text-studio-gold" />
              Community Reviews
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-studio-charcoal">
              What Our <span className="text-gold-gradient italic">Students Have to Say</span>
            </h2>
            <div className="flex items-center justify-center gap-3 pt-2 font-sans">
              <span className="text-xl font-bold text-studio-charcoal">4.9</span>
              <div className="flex items-center text-studio-gold">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-studio-charcoal/60 text-sm font-light">74 Reviews</span>
            </div>
          </div>

          {/* Testimonial Slider Container */}
          <div className="relative max-w-3xl mx-auto px-4 md:px-12">
            {/* Carousel Card */}
            <div className="min-h-[380px] md:min-h-[320px] flex flex-col justify-between glassmorphism border border-[#A08246]/15 rounded-3xl p-5 md:p-12 bg-white shadow-md relative overflow-hidden">
              {/* Google G Logo Background Decoration */}
              <div className="absolute top-6 right-6">
                <svg className="w-8 h-8 opacity-10 text-studio-charcoal fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.41 0-6.19-2.78-6.19-6.19s2.78-6.19 6.19-6.19c1.602 0 3.013.616 4.09 1.616l3.078-3.078C19.345 2.19 16.035 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c5.84 0 10.843-4.178 10.843-11.24 0-.67-.06-1.32-.178-1.955H12.24z" />
                </svg>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReviewIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full"
                >
                  <div className="text-center">
                    {/* Stars */}
                    <div className="flex items-center text-studio-gold mb-6 justify-center">
                      {[...Array(googleReviews[activeReviewIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-current" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-studio-charcoal/80 font-serif italic font-light text-sm md:text-base leading-relaxed whitespace-pre-line max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                      "{googleReviews[activeReviewIndex].text}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="mt-8 pt-6 border-t border-[#A08246]/10 flex items-center justify-between">
                    <div className="text-left font-serif">
                      <h4 className="text-studio-gold text-sm font-semibold tracking-wider italic">
                        {googleReviews[activeReviewIndex].name}
                      </h4>
                      <p className="text-studio-charcoal/50 text-[10px] uppercase tracking-widest font-sans mt-0.5">
                        Google Review
                      </p>
                    </div>
                    {/* Page counter */}
                    <span className="text-[10px] text-studio-charcoal/50 font-mono">
                      {activeReviewIndex + 1} / {googleReviews.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleReviewPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 lg:-translate-x-12 w-11 h-11 rounded-full bg-white border border-[#A08246]/15 flex items-center justify-center text-studio-charcoal hover:border-studio-gold hover:text-studio-gold transition-apple z-20 shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleReviewNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 lg:translate-x-12 w-11 h-11 rounded-full bg-white border border-[#A08246]/15 flex items-center justify-center text-studio-charcoal hover:border-studio-gold hover:text-studio-gold transition-apple z-20 shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {googleReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReviewIndex(idx)}
                className={`w-2 h-2 rounded-full transition-apple ${
                  idx === activeReviewIndex ? 'bg-studio-gold w-5' : 'bg-studio-charcoal/20 hover:bg-studio-charcoal/40'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Electrobattles+Dance+%26+Fitness+Studio+Kochi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#F5ECD7] border border-[#A08246]/20 rounded-full px-8 py-3.5 text-xs text-studio-charcoal uppercase font-bold tracking-widest hover:border-studio-gold hover:text-studio-gold hover:bg-studio-gold/5 transition-apple shadow-sm font-sans"
            >
              <span>See All Google Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="classic-divider" />

      {/* 6. Call To Action Section */}
      <section className="relative py-20 md:py-40 flex items-center justify-center overflow-hidden">
        {/* Deep dark background */}
        <div className="absolute inset-0 bg-studio-charcoal z-0" />
        {/* Subtle gold radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(160,130,70,0.12)_0%,_transparent_70%)] z-0" />
        {/* Fine grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] z-0" />

        <div className="relative max-w-3xl mx-auto px-6 text-center z-10">
          {/* Gold divider line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-studio-gold/40" />
            <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-studio-gold/60 font-semibold">Join Us</span>
            <div className="h-px w-12 bg-studio-gold/40" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] text-[#F5ECD7] mb-6">
            Ready to awaken<br />
            <span className="italic font-light text-[#F5ECD7]/70">your artistic potential?</span>
          </h2>

          <p className="font-sans font-light text-sm text-[#F5ECD7]/45 max-w-sm mx-auto leading-[2] tracking-[0.02em] mb-14">
            Join a legacy of extraordinary dancers. Your journey to mastery begins with a single step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#footer"
              className="group relative overflow-hidden px-12 py-4 border border-[#F5ECD7]/20 text-[#F5ECD7] text-[10px] tracking-[0.3em] uppercase font-sans font-semibold hover:border-studio-gold/60 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-studio-gold/0 group-hover:bg-studio-gold/8 transition-colors duration-700" />
              <span className="relative flex items-center gap-3">
                Enroll Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </span>
            </a>
            <a
              href="#about"
              className="text-[#F5ECD7]/35 text-[10px] tracking-[0.3em] uppercase font-sans font-semibold hover:text-[#F5ECD7]/70 transition-colors duration-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}