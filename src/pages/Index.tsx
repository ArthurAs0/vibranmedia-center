import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Teachers from "@/components/Teachers";
import Education from "@/components/Education";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Teachers />
        <Education />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
