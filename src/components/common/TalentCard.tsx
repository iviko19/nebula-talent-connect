import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Briefcase, MapPin, DollarSign, Unlock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Talent } from '@/types';

interface TalentCardProps {
  talent: Talent;
  index?: number;
}

export const TalentCard = ({ talent, index = 0 }: TalentCardProps) => {
  return (
    <motion.div
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
                {talent.candidateNumber}
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
              <Badge 
                variant={talent.availability === 'Available' ? 'default' : 'secondary'}
                className="text-xs mt-1"
              >
                {talent.availability}
              </Badge>
            </div>
          </div>

          {/* Skills with Proficiency */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {talent.skills.slice(0, 4).map((skill, skillIndex) => {
                if (typeof skill === 'string') {
                  return (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  );
                }
                return (
                  <Badge key={skill.name || skillIndex} variant="secondary" className="text-xs">
                    {skill.name} ({skill.proficiency})
                  </Badge>
                );
              })}
              {talent.skills.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{talent.skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Industry & Work Type */}
          {(talent.industry || talent.workType) && (
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
              <div className="flex flex-wrap gap-1">
                {talent.industry?.slice(0, 2).map((ind) => (
                  <Badge key={ind} variant="outline" className="text-xs">
                    {ind}
                  </Badge>
                ))}
              </div>
              {talent.workType && <span className="text-xs">{talent.workType}</span>}
            </div>
          )}

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
            <strong>Recent:</strong> {talent.lastProject}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button asChild variant="outline" className="flex-1">
              <Link to={`/talent/${talent.id}`}>
                View Profile
              </Link>
            </Button>
            <Button variant="cosmic" className="flex-1">
              Shortlist
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};