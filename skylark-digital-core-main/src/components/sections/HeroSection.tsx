import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Cpu, Train, Heart, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MicrocontrollerScene from '@/components/3d/MicrocontrollerScene';
import { useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Transform for mobile 3D visibility based on scroll
  const mobile3DOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.5, 1]);
  const mobile3DScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 pcb-grid opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-signal-blue/5 to-transparent blur-3xl" />
      
      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
        <motion.path
          d="M0,200 Q200,200 400,100 T800,150 T1200,100 T1600,200"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,400 Q300,350 600,450 T1200,350 T1800,400"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(210, 100%, 55%)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-20">
          {/* Left Content - Text First */}
          <div className="order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <Cpu size={16} className="text-accent" />
              <span className="text-sm font-medium">Since 2017 - Hyderabad, India</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display mb-6"
            >
              Powering Innovation Through{' '}
              <span className="text-accent-gradient">Embedded Intelligence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body max-w-xl mb-8"
            >
              Skylark Embedded Systems specializes in design, development, and manufacturing 
              of embedded solutions for Railways, Pharma, Telecommunication, and Industrial sectors. 
              From GPS clocks to passenger information systems — we deliver excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#products">
                <Button size="lg" className="rounded-full btn-voltage group">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="rounded-full">
                  Book Consultation
                </Button>
              </a>
            </motion.div>

            {/* Industry Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Train, label: 'Railways' },
                { icon: Heart, label: 'Healthcare' },
                { icon: Building2, label: 'Industrial' },
                { icon: Cpu, label: 'IoT Solutions' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon size={20} className="text-accent" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - 3D Scene */}
          {/* Desktop: Always visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block order-2 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* 3D Canvas */}
              <MicrocontrollerScene />
              
              {/* Floating Labels */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-1/4 left-0 glass-panel px-3 py-2 text-xs font-medium"
              >
                <Train size={12} className="inline mr-1 text-accent" />
                Railway Systems
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-1/3 right-0 glass-panel px-3 py-2 text-xs font-medium"
              >
                <Heart size={12} className="inline mr-1 text-accent" />
                Healthcare Solutions
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile: 3D appears on scroll */}
          <motion.div
            style={{ opacity: mobile3DOpacity, scale: mobile3DScale }}
            className="lg:hidden order-2 relative mt-8"
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* 3D Canvas */}
              <MicrocontrollerScene />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium tracking-wide uppercase">Scroll to explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
