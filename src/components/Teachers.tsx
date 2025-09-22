import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, BookOpen } from 'lucide-react';
import teacher1 from '@/assets/teacher-1.jpg';
import teacher2 from '@/assets/teacher-2.jpg';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Head of Media Studies',
      specialization: 'Digital Broadcasting & Journalism',
      experience: '15+ years',
      image: teacher1,
      email: 'sarah.johnson@mediacenter.com',
      phone: '+1 (555) 123-4567',
      courses: ['Advanced Broadcasting', 'Digital Media', 'News Production'],
      bio: 'Expert in digital broadcasting with extensive experience in international media production and journalism education.',
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      position: 'Senior Media Instructor',
      specialization: 'Video Production & Editing',
      experience: '12+ years',
      image: teacher2,
      email: 'michael.chen@mediacenter.com',
      phone: '+1 (555) 123-4568',
      courses: ['Video Editing', 'Camera Techniques', 'Post-Production'],
      bio: 'Award-winning video producer and educator specializing in cutting-edge production techniques and visual storytelling.',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      position: 'Communications Director',
      specialization: 'Media Psychology & Communication',
      experience: '18+ years',
      image: teacher1, // Reusing for demo
      email: 'emily.rodriguez@mediacenter.com',
      phone: '+1 (555) 123-4569',
      courses: ['Media Psychology', 'Public Speaking', 'Communication Theory'],
      bio: 'Renowned expert in media psychology and communication strategies with published research in international journals.',
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Technical Media Specialist',
      specialization: 'Audio Engineering & Live Streaming',
      experience: '10+ years',
      image: teacher2, // Reusing for demo
      email: 'david.kim@mediacenter.com',
      phone: '+1 (555) 123-4570',
      courses: ['Audio Engineering', 'Live Streaming', 'Sound Design'],
      bio: 'Technical expert in audio engineering and live streaming technologies with experience in major broadcasting networks.',
    },
  ];

  return (
    <section id="teachers" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Meet Our Expert Teachers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from industry professionals who bring years of real-world experience 
            and passion for media education to every lesson.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teachers.map((teacher, index) => (
            <Card 
              key={teacher.id} 
              className={`card-elevated hover-lift overflow-hidden group ${
                index % 2 === 0 ? 'slide-up' : 'fade-in'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Teacher Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Contact Buttons (appear on hover) */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {teacher.position}
                    </p>
                    <p className="text-muted-foreground mb-3">
                      {teacher.bio}
                    </p>
                  </div>

                  {/* Specialization Badge */}
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      <BookOpen className="w-3 h-3 mr-1" />
                      {teacher.specialization}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      Experience: {teacher.experience}
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">Courses:</div>
                    <div className="flex flex-wrap gap-1">
                      {teacher.courses.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      {teacher.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      {teacher.phone}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in">
          <Button className="btn-hero">
            <BookOpen className="w-5 h-5 mr-2" />
            Join Our Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;