import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Zap, Cpu, Settings } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Product3DViewer from './Product3DViewer';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription?: string;
  specs: string[];
  features: { icon: React.ComponentType<{ className?: string }>; label: string }[];
  image: string;
  applications?: string[];
  model?: string;
  powerRating?: string;
  dimensions?: string;
  connectivity?: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b border-border sticky top-0 bg-background z-20">
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <DialogTitle className="text-xl md:text-2xl font-bold pr-8">
                {product.name}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* 3D Viewer */}
          <Suspense fallback={
            <div className="w-full h-[300px] md:h-[400px] rounded-xl bg-secondary flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full"
                />
                <span className="text-sm text-muted-foreground">Loading 3D View...</span>
              </div>
            </div>
          }>
            <Product3DViewer imageUrl={product.image} productName={product.name} />
          </Suspense>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.fullDescription || product.description}
            </p>
          </div>

          {/* Quick Specs Grid */}
          {(product.model || product.powerRating || product.dimensions || product.connectivity) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.model && (
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="text-xs text-muted-foreground mb-1">Model</div>
                  <div className="font-medium text-sm">{product.model}</div>
                </div>
              )}
              {product.powerRating && (
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Power
                  </div>
                  <div className="font-medium text-sm">{product.powerRating}</div>
                </div>
              )}
              {product.dimensions && (
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="text-xs text-muted-foreground mb-1">Dimensions</div>
                  <div className="font-medium text-sm">{product.dimensions}</div>
                </div>
              )}
              {product.connectivity && (
                <div className="p-4 rounded-xl bg-secondary/50">
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Settings className="w-3 h-3" /> Connectivity
                  </div>
                  <div className="font-medium text-sm">{product.connectivity}</div>
                </div>
              )}
            </div>
          )}

          {/* Specifications */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-accent" />
              Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-2">
              {product.specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm">{spec}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <Badge key={i} variant="secondary" className="text-sm py-1.5 px-3">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <div className="grid grid-cols-3 gap-4">
              {product.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary hover:from-accent/10 hover:to-accent/5 transition-colors group"
                >
                  <feature.icon className="w-8 h-8 text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <a href="#contact" onClick={onClose} className="flex-1">
              <Button className="w-full rounded-full btn-voltage">
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Button 
              variant="outline" 
              className="rounded-full flex-1"
              onClick={onClose}
            >
              Continue Browsing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
