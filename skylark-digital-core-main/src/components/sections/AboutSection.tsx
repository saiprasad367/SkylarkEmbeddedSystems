import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower industries with reliable, innovative embedded solutions that drive efficiency and growth.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuous research and development to stay ahead in rapidly evolving technology landscape.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Building lasting relationships with clients through transparency, reliability, and support.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering products and services that exceed industry standards.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium text-sm tracking-wide uppercase"
            >
              About Skylark
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-section mt-4 mb-6"
            >
              Engineering the Future of
              <br />
              <span className="text-accent-gradient">Embedded Technology</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-body"
            >
              <p>
                Skylark Embedded Systems is a leading provider of embedded hardware and software 
                solutions, serving industries ranging from automotive to healthcare, industrial 
                automation to consumer electronics.
              </p>
              <p>
                Founded with a vision to bridge the gap between complex technology and practical 
                applications, we have grown to become a trusted partner for businesses seeking 
                reliable, scalable, and innovative embedded solutions.
              </p>
              <p>
                Our team of experienced engineers, designers, and industry experts work 
                collaboratively to deliver products that not only meet but exceed client 
                expectations.
              </p>
            </motion.div>

            {/* Signal Line Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-gradient-to-r from-accent via-signal-blue to-transparent my-8 origin-left"
            />

            {/* Key Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: '2008', label: 'Founded' },
                { value: '100+', label: 'Engineers' },
                { value: '25+', label: 'Countries' },
                { value: '99%', label: 'Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="circuit-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-card mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
