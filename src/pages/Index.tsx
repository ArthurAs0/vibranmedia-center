import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teachers from "@/components/Teachers";
import Education from "@/components/Education";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="content-block">
          <About />
        </div>
        <div className="content-block">
          <Teachers />
        </div>
        <div className="content-block">
          <Education />
        </div>
        <div className="content-block">
          <News />
        </div>
        <div className="content-block">
          <Gallery />
        </div>
        <div className="content-block">
          <Contact />
        </div>
      </main>
      <Footer />
      
      {/* Floating Chatbot Widget */}
      <FloatingChatbot 
        triggerAfterBlocks={2} 
        totalBlocks={6} 
      />
    </div>
  );
};

export default Index;
