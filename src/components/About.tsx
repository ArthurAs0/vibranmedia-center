import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className={cn("container mx-auto")}> 
      <div className="bg-card border rounded-xl shadow-sm p-6 md:p-10 animate-fade-in">
        <header className="mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Our School</h2>
          <p className="text-muted-foreground mt-2">Learn about our mission and the platform you are visiting.</p>
        </header>
        <article className="prose prose-sm md:prose-base max-w-none text-foreground">
          <p>
            We are committed to providing high-quality education with a focus on creativity, critical thinking, and community. Our teachers and staff work together to create a safe and inspiring environment for students to thrive.
          </p>
          <p>
            This website helps you explore our programs, meet our team, and stay up to date with the latest news and events. If you have any questions, feel free to leave a request using the chat widget.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
