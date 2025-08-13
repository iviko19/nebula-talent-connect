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
              onChange={(e) => updateFilter('skills', e.target.value)}
              className="focus-outline"
            />
          </div>

          {/* Seniority */}
          <div>
            <label className="text-sm font-medium mb-2 block">Seniority Level</label>
            <Select value={filters.seniority} onValueChange={(value) => updateFilter('seniority', value)}>
              <SelectTrigger className="focus-outline">
                <SelectValue placeholder="Any level" />
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
          <div>
            <label className="text-sm font-medium mb-2 block">Location</label>
            <Select value={filters.location} onValueChange={(value) => updateFilter('location', value)}>
              <SelectTrigger className="focus-outline">
                <SelectValue placeholder="Any location" />
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
          <div>
            <label className="text-sm font-medium mb-2 block">Salary Range (USD)</label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                placeholder="Min"
                value={filters.minSalary}
                onChange={(e) => updateFilter('minSalary', e.target.value)}
                className="focus-outline"
              />
              <Input
                placeholder="Max"
                value={filters.maxSalary}
                onChange={(e) => updateFilter('maxSalary', e.target.value)}
                className="focus-outline"
              />
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="text-sm font-medium mb-2 block">Availability</label>
            <Select value={filters.availability} onValueChange={(value) => updateFilter('availability', value)}>
              <SelectTrigger className="focus-outline">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent className="z-50 bg-popover border shadow-lg">
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="immediate">Available Now</SelectItem>
                <SelectItem value="2weeks">Available in 2 weeks</SelectItem>
                <SelectItem value="1month">Available in 1 month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <Button 
              onClick={onSearch} 
              className="w-full focus-outline" 
              disabled={isLoading}
            >
              <Search className="w-4 h-4 mr-2" />
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
            <Button 
              variant="ghost" 
              onClick={onReset} 
              className="w-full focus-outline"
              disabled={isLoading}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};