import { cn } from "@/lib/utils";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/education-hero.jpg";

const About = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Committed to the highest standards in education"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Building strong connections and relationships"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "Embracing modern teaching methodologies"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creativity",
      description: "Inspiring imagination and critical thinking"
    }
  ];

  return (
    <section id="about" className={cn("py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background")}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Empowering minds, inspiring futures through innovative education and creative excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Our learning environment"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 leading-relaxed text-lg">
                We are a forward-thinking educational institution dedicated to nurturing creativity, 
                critical thinking, and innovation in every student. Our mission is to bridge the gap 
                between traditional learning and modern digital skills.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Through our comprehensive programs and expert faculty, we create an environment where 
                students don't just learn—they thrive. We believe in hands-on experiences, 
                collaborative projects, and real-world applications that prepare our graduates 
                for success in an ever-evolving world.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Our commitment extends beyond education to building a community of lifelong learners, 
                innovators, and leaders who will shape the future of media and technology.
              </p>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
