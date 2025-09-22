import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Briefcase, 
  Calendar, 
  DollarSign,
  Mail,
  Award,
  Code,
  Building,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { fetchTalentById } from '@/services/api';

const TalentProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [talent, setTalent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadTalent();
    }
  }, [id]);

  const loadTalent = async () => {
    try {
      setLoading(true);
      const data = await fetchTalentById(id!);
      setTalent(data);
    } catch (error) {
      console.error('Failed to load talent:', error);
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-8" />
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-48 bg-muted rounded" />
                <div className="h-32 bg-muted rounded" />
                <div className="h-32 bg-muted rounded" />
              </div>
              <div className="space-y-6">
                <div className="h-48 bg-muted rounded" />
                <div className="h-32 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!talent) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Talent not found
          </h2>
          <p className="text-muted-foreground mb-4">
            The talent profile you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/talent-search')}>
            Back to Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/talent-search')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="cosmic-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-cosmic font-bold text-foreground mb-2">
                        Candidate #{talent.candidateNumber}
                      </h1>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{talent.seniority}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{talent.yearsExperience} years</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{talent.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-primary font-semibold text-lg">
                        <Star className="w-5 h-5 fill-current" />
                        <span>{talent.testScores.overall}/100</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Overall Score</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {talent.skills.map((skill: string) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Availability & Salary */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Availability</p>
                      <p className="text-muted-foreground">{talent.availability}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        ${talent.salaryRange.min}k - ${talent.salaryRange.max}k {talent.salaryRange.currency}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Professional Bio/Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* TODO: Connect to GET /api/candidates/:id/bio */}
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Experienced full-stack developer with a passion for creating scalable web applications. 
                      Specializes in React ecosystem and modern JavaScript frameworks with strong emphasis on 
                      performance optimization and user experience.
                    </p>
                    <p>
                      Proven track record of leading development teams and mentoring junior developers. 
                      Enjoys tackling complex technical challenges and staying current with emerging technologies 
                      in the rapidly evolving web development landscape.
                    </p>
                    <p>
                      Strong advocate for clean code practices, automated testing, and agile development 
                      methodologies. Committed to delivering high-quality solutions that meet both business 
                      objectives and technical excellence standards.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience Highlights - Only show if talent has experience */}
            {talent.yearsExperience > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="cosmic-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Experience Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* TODO: Connect to GET /api/candidates/:id/experience */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="font-medium text-foreground">TechCorp Inc.</span>
                        <span className="text-sm text-muted-foreground">3 years</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="font-medium text-foreground">StartupXYZ</span>
                        <span className="text-sm text-muted-foreground">2 years</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="font-medium text-foreground">Digital Agency</span>
                        <span className="text-sm text-muted-foreground">1.5 years</span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Technology Experience
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>React/TypeScript</span>
                            <span className="text-muted-foreground">5+ years</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Node.js</span>
                            <span className="text-muted-foreground">4+ years</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Python</span>
                            <span className="text-muted-foreground">3+ years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Test Scores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Test Scores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Technical Skills</span>
                        <span className="font-semibold">{talent.testScores.technical}/100</span>
                      </div>
                      <Progress value={talent.testScores.technical} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Communication</span>
                        <span className="font-semibold">{talent.testScores.communication}/100</span>
                      </div>
                      <Progress value={talent.testScores.communication} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Overall Performance</span>
                        <span className="font-semibold text-primary">{talent.testScores.overall}/100</span>
                      </div>
                      <Progress value={talent.testScores.overall} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Add to Shortlist Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center pt-4"
            >
              {/* TODO: Connect to POST /api/shortlist/add */}
              <Button variant="cosmic" size="lg" className="px-8">
                Add to Shortlist
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentProfile;