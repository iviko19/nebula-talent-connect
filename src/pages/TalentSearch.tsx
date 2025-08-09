import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Star, Briefcase, DollarSign, Unlock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fetchTalents } from '@/services/api';

interface TalentFilters {
  skills: string;
  seniority: string;
  location: string;
  minSalary: string;
  maxSalary: string;
  availability: string;
}

const TalentSearch = () => {
  const { t } = useTranslation();
  const [talents, setTalents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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

  const loadTalents = async () => {
    try {
      setLoading(true);
      const response = await fetchTalents(filters);
      setTalents(response.data);
    } catch (error) {
      console.error('Failed to load talents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    loadTalents();
  };

  const resetFilters = () => {
    setFilters({
      skills: '',
      seniority: '',
      location: '',
      minSalary: '',
      maxSalary: '',
      availability: ''
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="cosmic-card sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                <div className="space-y-4">
                  {/* Skills */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Skills</label>
                    <Input
                      placeholder="React, Python, AI/ML..."
                      value={filters.skills}
                      onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
                    />
                  </div>

                  {/* Seniority */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Seniority Level</label>
                    <Select value={filters.seniority} onValueChange={(value) => setFilters({ ...filters, seniority: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any level</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="mid">Mid-Level</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="lead">Lead</SelectItem>
                        <SelectItem value="principal">Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any location</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Salary Range (USD)</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Min"
                        value={filters.minSalary}
                        onChange={(e) => setFilters({ ...filters, minSalary: e.target.value })}
                      />
                      <Input
                        placeholder="Max"
                        value={filters.maxSalary}
                        onChange={(e) => setFilters({ ...filters, maxSalary: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Availability</label>
                    <Select value={filters.availability} onValueChange={(value) => setFilters({ ...filters, availability: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any</SelectItem>
                        <SelectItem value="immediate">Available Now</SelectItem>
                        <SelectItem value="2weeks">Available in 2 weeks</SelectItem>
                        <SelectItem value="1month">Available in 1 month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2 pt-4">
                    <Button onClick={handleSearch} className="w-full">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                    <Button variant="ghost" onClick={resetFilters} className="w-full">
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="cosmic-card">
                    <CardContent className="p-6">
                      <div className="animate-pulse">
                        <div className="h-4 bg-muted rounded w-3/4 mb-4" />
                        <div className="h-3 bg-muted rounded w-1/2 mb-2" />
                        <div className="h-3 bg-muted rounded w-full mb-4" />
                        <div className="h-8 bg-muted rounded w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {talents.map((talent, index) => (
                  <motion.div
                    key={talent.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="cosmic-card group hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              Candidate #{talent.candidateNumber}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Briefcase className="w-4 h-4" />
                              <span>{talent.seniority} • {talent.yearsExperience} years</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-primary font-semibold">
                              <Star className="w-4 h-4 fill-current" />
                              <span>{talent.testScores.overall}/100</span>
                            </div>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {talent.skills.slice(0, 4).map((skill: string) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {talent.skills.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{talent.skills.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Location & Salary */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{talent.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span>
                              ${talent.salaryRange.min}k-${talent.salaryRange.max}k
                            </span>
                          </div>
                        </div>

                        {/* Last Project */}
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {talent.lastProject}
                        </p>

                        {/* Action Button */}
                        <Button asChild variant="cosmic" className="w-full group">
                          <Link to={`/talent/${talent.id}`}>
                            <Unlock className="w-4 h-4 mr-2" />
                            Unlock Profile
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* No Results */}
            {!loading && talents.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  No talents found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search criteria
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSearch;