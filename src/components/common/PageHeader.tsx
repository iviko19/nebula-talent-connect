import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  children?: React.ReactNode;
}

export const PageHeader = ({ 
  title, 
  subtitle, 
  showBackButton = false, 
  onBack,
  children 
}: PageHeaderProps) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showBackButton && onBack && (
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </Button>
      )}
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-cosmic font-bold text-foreground mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        
        {children && (
          <div className="flex-shrink-0">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
};