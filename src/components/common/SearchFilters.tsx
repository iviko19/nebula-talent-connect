import { Search, Filter, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TalentFilters } from '@/types';

interface SearchFiltersProps {
  filters: TalentFilters;
  onFiltersChange: (filters: TalentFilters) => void;
  onSearch: () => void;
  onReset: () => void;
  isLoading?: boolean;
}

export const SearchFilters = ({
  filters,
  onFiltersChange,
  onSearch,
  onReset,
  isLoading = false
}: SearchFiltersProps) => {
  const updateFilter = (key: keyof TalentFilters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <Card className="cosmic-card shadow-lg border-0 bg-gradient-to-r from-background via-background to-background/95">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          {/* Skills */}
          <div className="flex-1 min-w-48">
            <Input
              placeholder="Skills (React, Python, AI/ML...)"
              value={filters.skills}
              onChange={(e) => updateFilter('skills', e.target.value)}
              className="h-9 focus-outline text-sm bg-background/80"
            />
          </div>

          {/* Seniority */}
          <div className="min-w-36">
            <Select value={filters.seniority} onValueChange={(value) => updateFilter('seniority', value)}>
              <SelectTrigger className="h-9 focus-outline text-sm bg-background/80">
                <SelectValue placeholder="Seniority" />
              </SelectTrigger>
              <SelectContent className="z-50 bg-popover border shadow-lg">
                <SelectItem value="any">Any level</SelectItem>
                <SelectItem value="junior">Junior</SelectItem>
                <SelectItem value="mid-level">Mid-Level</SelectItem>
                <SelectItem value="senior">Senior</SelectItem>
                <SelectItem value="lead">Lead</SelectItem>
                <SelectItem value="principal">Principal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="min-w-32">
            <Select value={filters.location} onValueChange={(value) => updateFilter('location', value)}>
              <SelectTrigger className="h-9 focus-outline text-sm bg-background/80">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="z-50 bg-popover border shadow-lg">
                <SelectItem value="any">Any location</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Salary Range */}
          <div className="flex gap-2 min-w-32">
            <Input
              placeholder="Min $"
              value={filters.minSalary}
              onChange={(e) => updateFilter('minSalary', e.target.value)}
              className="h-9 focus-outline text-sm w-20 bg-background/80"
            />
            <Input
              placeholder="Max $"
              value={filters.maxSalary}
              onChange={(e) => updateFilter('maxSalary', e.target.value)}
              className="h-9 focus-outline text-sm w-20 bg-background/80"
            />
          </div>

          {/* Availability */}
          <div className="min-w-36">
            <Select value={filters.availability} onValueChange={(value) => updateFilter('availability', value)}>
              <SelectTrigger className="h-9 focus-outline text-sm bg-background/80">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent className="z-50 bg-popover border shadow-lg">
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="immediate">Available Now</SelectItem>
                <SelectItem value="2weeks">Available in 2 weeks</SelectItem>
                <SelectItem value="1month">Available in 1 month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 ml-auto">
            <Button 
              onClick={onSearch} 
              size="sm"
              className="h-9 px-4 focus-outline bg-primary hover:bg-primary/90" 
              disabled={isLoading}
            >
              <Search className="w-4 h-4 mr-2" />
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={onReset} 
              className="h-9 px-3 focus-outline"
              disabled={isLoading}
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};