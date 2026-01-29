import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Youtube, 
  Mail,
  ArrowUpRight 
} from 'lucide-react';

const footerLinks = {
  products: [
    { name: 'IoT Gateways', href: '#' },
    { name: 'Motor Controllers', href: '#' },
    { name: 'Sensor Modules', href: '#' },
    { name: 'Display Solutions', href: '#' },
    { name: 'Custom Development', href: '#' },
  ],
  services: [
    { name: 'Hardware Design', href: '#' },
    { name: 'Firmware Development', href: '#' },
    { name: 'System Integration', href: '#' },
    { name: 'Manufacturing Support', href: '#' },
    { name: 'Technical Consultation', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Training Programs', href: '#training' },
    { name: 'Partners', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Downloads', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Circuit Pattern */}
      <div className="absolute inset-0 pcb-grid opacity-5" />
      
      <div className="section-container relative">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
              <a href="#home" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="font-bold text-lg tracking-tight">Skylark</div>
                  <div className="text-xs text-background/60 -mt-1">Embedded Systems</div>
                </div>
              </a>
              
              <p className="text-sm text-background/70 mb-6 max-w-xs">
                Powering innovation through embedded intelligence. 
                Your trusted partner for cutting-edge hardware solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Signal Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Skylark Embedded Systems. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
