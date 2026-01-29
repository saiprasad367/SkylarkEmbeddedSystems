import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cpu, 
  Code, 
  Layers, 
  Wrench, 
  GraduationCap, 
  HeadphonesIcon,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Cpu,
    title: 'Hardware Design',
    description: 'Custom PCB design, schematic capture, and prototype development for embedded systems.',
    features: ['PCB Layout', 'Component Selection', 'Prototype Testing', 'EMC Compliance'],
  },
  {
    icon: Code,
    title: 'Firmware Development',
    description: 'Robust firmware solutions for microcontrollers, RTOS, and bare-metal applications.',
    features: ['C/C++ Development', 'RTOS Integration', 'Driver Development', 'OTA Updates'],
  },
  {
    icon: Layers,
    title: 'System Integration',
    description: 'End-to-end integration of hardware, firmware, and software for complete solutions.',
    features: ['IoT Connectivity', 'Cloud Integration', 'API Development', 'Testing & QA'],
  },
  {
    icon: Wrench,
    title: 'Manufacturing Support',
    description: 'From prototype to mass production with DFM optimization and quality assurance.',
    features: ['DFM Review', 'Vendor Management', 'Quality Control', 'Certification Support'],
  },
  {
    icon: GraduationCap,
    title: 'Training Programs',
    description: 'Professional training courses for students and engineers in embedded systems.',
    features: ['Hands-on Labs', 'Industry Projects', 'Certification', 'Placement Support'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Technical Consultation',
    description: 'Expert guidance for architecture decisions, technology selection, and troubleshooting.',
    features: ['Architecture Review', 'Tech Stack Selection', 'Performance Optimization', 'Debug Support'],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30 relative" ref={ref}>
      {/* Circuit Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-50" />
      
      <div className="section-container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wide uppercase"
          >
            Our Services
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section mt-4 mb-6"
          >
            Comprehensive Embedded
            <br />
            <span className="text-accent-gradient">Solutions & Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body"
          >
            From concept to production, we provide end-to-end embedded system solutions 
            tailored to your specific industry requirements.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="circuit-card p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                {/* Signal dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent/50 group-hover:bg-accent group-hover:animate-pulse-glow transition-all" />
              </div>

              {/* Content */}
              <h3 className="heading-card mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="rounded-full btn-voltage">
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
