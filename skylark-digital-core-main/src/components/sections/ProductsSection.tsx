import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, Suspense } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, categories, type Product } from '@/data/products';
import ProductDetailModal from '@/components/products/ProductDetailModal';

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <section id="products" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium text-sm tracking-wide uppercase"
            >
              Our Products
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-section mt-4"
            >
              Embedded Display &
              <br />
              <span className="text-accent-gradient">Control Solutions</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#contact">
              <Button variant="outline" className="rounded-full">
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-secondary hover:bg-secondary/80 text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i % 6) }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="circuit-card overflow-hidden h-full">
                {/* Product Image */}
                <div className="relative">
                  <div className="h-52 bg-gradient-to-br from-secondary/80 to-secondary relative overflow-hidden">
                    {/* Product Image */}
                    <motion.div
                      animate={hoveredId === product.id ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                        loading="lazy"
                      />
                    </motion.div>
                    
                    {/* Hover Overlay with 3D hint */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={hoveredId === product.id ? { opacity: 1 } : { opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex items-end justify-center pb-4"
                    >
                      <span className="text-background text-sm font-medium flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Click for 3D View
                      </span>
                    </motion.div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="heading-card mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.slice(0, 3).map((spec, j) => (
                        <span 
                          key={j} 
                          className="px-2 py-1 bg-secondary text-xs rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex items-center gap-4 pb-4 border-b border-border mb-4">
                      {product.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <feature.icon className="w-4 h-4 text-accent" />
                          {feature.label}
                        </div>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full group/btn"
                      onClick={() => openProductModal(product)}
                    >
                      <Eye className="mr-2 w-4 h-4" />
                      View Details
                      <ArrowRight className="ml-auto w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Hover Signal Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={hoveredId === product.id ? { scaleX: 1 } : { scaleX: 0 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-signal-blue to-accent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-8 rounded-2xl bg-foreground text-background relative overflow-hidden"
        >
          <div className="absolute inset-0 pcb-grid opacity-10" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
              <p className="text-background/70">
                Our engineering team can design and develop custom embedded display systems for your specific requirements.
              </p>
            </div>
            <a href="#contact">
              <Button size="lg" variant="secondary" className="rounded-full shrink-0">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <Suspense fallback={null}>
        <ProductDetailModal 
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeProductModal}
        />
      </Suspense>
    </section>
  );
}
