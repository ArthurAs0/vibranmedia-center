import { Calendar, Trophy, Users2, BookOpen, Sparkles, ArrowRight } from "lucide-react";

const AboutHistory = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Started with a vision to revolutionize media education",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      year: "2020",
      title: "First Graduates",
      description: "Celebrated our first class of 50 successful graduates",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: "2022",
      title: "Campus Expansion",
      description: "Opened our state-of-the-art facility with modern equipment",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "1000+ Alumni",
      description: "Reached over 1000 graduates working in top media companies",
      icon: <Users2 className="w-5 h-5" />
    }
  ];

  const stats = [
    { number: "6+", label: "Years of Excellence" },
    { number: "1000+", label: "Successful Graduates" },
    { number: "50+", label: "Expert Instructors" },
    { number: "95%", label: "Job Placement Rate" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Story of <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a leading media education center, 
            discover how we've grown and the impact we've made on thousands of lives.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/20 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative animate-fade-in">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-start`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg z-10">
                  {milestone.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Be Part of Our Next Chapter
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers and are now 
              shaping the future of media and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg">
                Start Your Journey
              </button>
              <button className="px-8 py-3 bg-card text-foreground border border-border rounded-xl font-medium hover:bg-accent transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;