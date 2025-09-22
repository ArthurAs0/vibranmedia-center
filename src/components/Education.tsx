import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Video, 
  Mic, 
  Camera, 
  Monitor, 
  Users, 
  Clock, 
  Award,
  ArrowRight 
} from 'lucide-react';
import educationHero from '@/assets/education-hero.jpg';

const Education = () => {
  const programs = [
    {
      title: 'Digital Broadcasting Program',
      duration: '6 months',
      level: 'Intermediate',
      students: '150+ enrolled',
      icon: Video,
      color: 'from-blue-500 to-purple-600',
      description: 'Master the art of digital broadcasting with hands-on experience in modern studio environments.',
      features: ['Live Studio Training', 'Digital Equipment', 'Real-time Broadcasting', 'Industry Mentorship'],
      price: '$1,299'
    },
    {
      title: 'Audio Production Course',
      duration: '4 months',
      level: 'Beginner',
      students: '200+ enrolled',
      icon: Mic,
      color: 'from-green-500 to-teal-600',
      description: 'Learn professional audio production, mixing, and sound design techniques.',
      features: ['Pro Tools Training', 'Sound Design', 'Mixing & Mastering', 'Podcast Production'],
      price: '$899'
    },
    {
      title: 'Video Production Mastery',
      duration: '8 months',
      level: 'Advanced',
      students: '100+ enrolled',
      icon: Camera,
      color: 'from-red-500 to-pink-600',
      description: 'Comprehensive video production course covering filming, editing, and post-production.',
      features: ['4K Video Production', 'Advanced Editing', 'Color Grading', 'Motion Graphics'],
      price: '$1,599'
    },
    {
      title: 'Media Technology Essentials',
      duration: '3 months',
      level: 'Beginner',
      students: '300+ enrolled',
      icon: Monitor,
      color: 'from-orange-500 to-red-600',
      description: 'Foundation course covering essential media technologies and digital tools.',
      features: ['Digital Basics', 'Software Training', 'Equipment Handling', 'Technical Support'],
      price: '$599'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Graduates', icon: Award },
    { number: '95%', label: 'Job Placement', icon: Users },
    { number: '4.9/5', label: 'Student Rating', icon: BookOpen },
    { number: '24/7', label: 'Support', icon: Clock },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Education Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your passion for media into professional expertise with our 
            comprehensive education programs designed for the modern digital landscape.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-16 fade-in">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <img 
              src={educationHero} 
              alt="Education Environment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-accent/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  State-of-the-Art Learning Environment
                </h3>
                <p className="text-xl opacity-90 max-w-2xl">
                  Experience hands-on learning with industry-standard equipment and expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <Card 
              key={index} 
              className="card-elevated text-center hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="card-elevated hover-lift overflow-hidden group slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${program.color} text-white`}>
                      <program.icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{program.price}</div>
                      <div className="text-sm text-muted-foreground">one-time</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">
                      <Clock className="w-3 h-3 mr-1" />
                      {program.duration}
                    </Badge>
                    <Badge variant="outline">{program.level}</Badge>
                    <Badge variant="outline">
                      <Users className="w-3 h-3 mr-1" />
                      {program.students}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-12 fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Media Journey?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our comprehensive media education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              <BookOpen className="w-5 h-5 mr-2" />
              Enroll Today
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;