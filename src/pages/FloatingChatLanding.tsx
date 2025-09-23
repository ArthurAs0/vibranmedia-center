import React from 'react';
import FloatingChatbot from '@/components/FloatingChatbot';

const FloatingChatLanding = () => {
  const contentBlocks = [
    {
      title: "Welcome to Our Premium Service",
      content: "We deliver exceptional results through innovative solutions and dedicated expertise. Our comprehensive approach ensures that every project exceeds expectations and drives meaningful results for your business."
    },
    {
      title: "Industry-Leading Expertise",
      content: "With over 15 years of combined experience, our team brings deep knowledge across multiple industries. We've successfully completed over 500 projects, helping businesses of all sizes achieve their strategic objectives."
    },
    {
      title: "Why Choose Our Solutions",
      content: "Our client-centric approach combines cutting-edge technology with personalized service. We offer competitive pricing, guaranteed satisfaction, and ongoing support to ensure your long-term success."
    },
    {
      title: "Proven Track Record",
      content: "Our portfolio showcases successful transformations across various sectors, from emerging startups to Fortune 500 companies. Each case study demonstrates our commitment to delivering measurable value and sustainable growth."
    },
    {
      title: "Comprehensive Service Offering",
      content: "From initial consultation to final implementation, we provide end-to-end solutions tailored to your unique needs. Our holistic approach ensures seamless integration and optimal performance across all touchpoints."
    },
    {
      title: "Start Your Journey Today",
      content: "Ready to transform your business potential into tangible results? Join our growing community of satisfied customers who have experienced the difference our expertise makes in achieving their goals."
    },
    {
      title: "24/7 Support & Maintenance",
      content: "Our commitment doesn't end at delivery. We provide round-the-clock support and proactive maintenance to ensure your systems operate at peak performance, giving you peace of mind and continuous value."
    },
    {
      title: "Get Your Free Consultation",
      content: "Take the first step towards transformation with our complimentary consultation. Our experts will analyze your current situation and provide actionable insights to help you make informed decisions about your future."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">FloatingChat Pro</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transform Your Business
            <span className="block text-primary">With Expert Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our innovative approach and proven methodologies can drive exceptional results for your organization.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-16">
          {contentBlocks.map((block, index) => (
            <div key={index} className="content-block">
              <div className="bg-card rounded-xl shadow-sm border p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{block.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{block.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">FloatingChat Pro</h4>
              <p className="text-muted-foreground">
                Innovative solutions for modern businesses. Transform your potential into results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Strategic Consulting</li>
                <li>Digital Transformation</li>
                <li>Process Optimization</li>
                <li>Technology Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: hello@floatingchatpro.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Business Ave, Suite 100</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FloatingChat Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Widget */}
      <FloatingChatbot 
        triggerAfterBlocks={2} 
        totalBlocks={contentBlocks.length} 
      />
    </div>
  );
};

export default FloatingChatLanding;