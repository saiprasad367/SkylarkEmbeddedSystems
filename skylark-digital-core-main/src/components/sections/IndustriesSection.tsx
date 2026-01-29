import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Factory, 
  Car, 
  Heart, 
  Home, 
  Droplets, 
  Sun,
  Zap,
  Wifi 
} from 'lucide-react';

const industries = [
  {
    icon: Factory,
    name: 'Industrial Automation',
    description: 'PLCs, SCADA systems, motor controllers, and industrial IoT solutions.',
    applications: ['Manufacturing', 'Process Control', 'Robotics'],
  },
  {
    icon: Car,
    name: 'Automotive',
    description: 'ECUs, telematics, ADAS components, and EV charging systems.',
    applications: ['Vehicle Systems', 'Fleet Management', 'EV Infrastructure'],
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Medical devices, patient monitoring systems, and diagnostic equipment.',
    applications: ['Patient Monitoring', 'Diagnostics', 'Medical IoT'],
  },
  {
    icon: Home,
    name: 'Smart Buildings',
    description: 'Building automation, access control, and energy management systems.',
    applications: ['HVAC Control', 'Security', 'Energy Optimization'],
  },
  {
    icon: Droplets,
    name: 'Water & Utilities',
    description: 'Smart metering, pump controllers, and distribution monitoring.',
    applications: ['Smart Meters', 'Leak Detection', 'Quality Monitoring'],
  },
  {
    icon: Sun,
    name: 'Renewable Energy',
    description: 'Solar inverters, battery management, and grid-tie systems.',
    applications: ['Solar Systems', 'Battery Storage', 'Grid Management'],
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industries" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-50" />
      
      {/* Signal Flow Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.line
          x1="0" y1="50%" x2="100%" y2="50%"
          stroke="url(#flow-gradient)"
          strokeWidth="1"
          strokeDasharray="8,8"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <defs>
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(185, 100%, 50%)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="section-container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium text-sm tracking-wide uppercase"
          >
            Industries We Serve
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section mt-4 mb-6"
          >
            Transforming Industries with
            <br />
            <span className="text-accent-gradient">Intelligent Systems</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body"
          >
            Our embedded solutions power critical infrastructure across diverse sectors,
            delivering reliability, efficiency, and innovation.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative"
            >
              <div className="circuit-card p-6 h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <industry.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="heading-card group-hover:text-accent transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {industry.description}
                </p>
                
                {/* Applications */}
                <div className="flex flex-wrap gap-2">
                  {industry.applications.map((app, j) => (
                    <span 
                      key={j}
                      className="px-2 py-1 bg-secondary text-xs rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {/* Connection Points - PCB Style */}
                <div className="absolute top-6 right-6 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent transition-colors" />
                  <div className="w-2 h-2 rounded-full bg-border group-hover:bg-signal-blue transition-colors delay-75" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Signal Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 glass-panel"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Input */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wifi className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-medium">Sensor Data</div>
                <div className="text-xs text-muted-foreground">Real-time Input</div>
              </div>
            </div>
            
            {/* Signal Line */}
            <div className="hidden lg:block w-32 h-0.5 bg-gradient-to-r from-accent to-signal-blue relative">
              <motion.div
                animate={{ x: [-10, 120, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-signal"
              />
            </div>
            
            {/* Processing */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <div>
                <div className="font-medium">Skylark System</div>
                <div className="text-xs text-muted-foreground">Process & Analyze</div>
              </div>
            </div>
            
            {/* Signal Line */}
            <div className="hidden lg:block w-32 h-0.5 bg-gradient-to-r from-signal-blue to-signal-green relative">
              <motion.div
                animate={{ x: [-10, 120, -10] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-signal-blue shadow-signal"
              />
            </div>
            
            {/* Output */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-signal-green/10 flex items-center justify-center">
                <Factory className="w-6 h-6 text-signal-green" />
              </div>
              <div>
                <div className="font-medium">Control Action</div>
                <div className="text-xs text-muted-foreground">Intelligent Output</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
