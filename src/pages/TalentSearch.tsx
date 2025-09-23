import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users } from 'lucide-react';
import { fetchTalents } from '@/services/api';
import { Talent, TalentFilters } from '@/types';
import { TalentCard } from '@/components/common/TalentCard';
import { EmptyState } from '@/components/common/EmptyState';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { SearchFilters } from '@/components/common/SearchFilters';
import { PageHeader } from '@/components/common/PageHeader';

const TalentSearch = () => {
  const { t } = useTranslation();
  const [talents, setTalents] = useState<Talent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<TalentFilters>({
    skills: '',
    seniority: '',
    location: '',
    minSalary: '',
    maxSalary: '',
    availability: ''
  });

  useEffect(() => {
    loadTalents();
  }, []);

  const loadTalents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchTalents(filters);
      setTalents(response.data);
    } catch (error) {
      console.error('Failed to load talents:', error);
      setError('Failed to load talents. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const handleSearch = useCallback(() => {
    loadTalents();
  }, [loadTalents]);

  const handleFiltersChange = useCallback((newFilters: TalentFilters) => {
    setFilters(newFilters);
  }, []);

  const resetFilters = useCallback(() => {
    const emptyFilters: TalentFilters = {
      skills: '',
      seniority: 'any',
      location: 'any',
      minSalary: '',
      maxSalary: '',
      availability: 'any'
    };
    setFilters(emptyFilters);
  }, []);

  return (
    <div className="min-h-screen page-padding">
      <div className="cosmic-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-cosmic font-bold text-foreground mb-4">
            Find <span className="text-primary text-glow">Top Talent</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Search through our database of pre-screened AI and tech professionals
          </p>
        </motion.div>

        {/* Filters at Top */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SearchFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onSearch={handleSearch}
            onReset={resetFilters}
            isLoading={loading}
          />
        </motion.div>

        {/* Results */}
        <div>
          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : error ? (
            <EmptyState
              icon={Users}
              title="Error Loading Talents"
              description={error}
              actionLabel="Try Again"
              onAction={loadTalents}
            />
          ) : talents.length === 0 ? (
            <EmptyState
              icon={Users}
              title="No talents found"
              description="Try adjusting your filters or search criteria"
              actionLabel="Reset Filters"
              onAction={resetFilters}
            />
          ) : (
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {talents.map((talent, index) => (
                <TalentCard key={talent.id} talent={talent} index={index} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentSearch;