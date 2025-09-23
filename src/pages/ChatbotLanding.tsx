import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageCircle, Send } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
}

interface ChatState {
  showForm: boolean;
  submitted: boolean;
}

const ChatbotLanding = () => {
  const [chatStates, setChatStates] = useState<{ [key: number]: ChatState }>({});
  const [formData, setFormData] = useState<{ [key: number]: FormData }>({});

  const contentBlocks = [
    {
      title: "Welcome to Our Service",
      content: "We provide exceptional solutions for your business needs. Our team of experts is dedicated to delivering high-quality results that exceed your expectations."
    },
    {
      title: "Our Expertise",
      content: "With over 10 years of experience, we've helped hundreds of clients achieve their goals through innovative approaches and cutting-edge technology."
    },
    {
      title: "Why Choose Us",
      content: "We offer personalized service, competitive pricing, and guaranteed satisfaction. Our client-first approach ensures that your project is our top priority."
    },
    {
      title: "Success Stories",
      content: "Our portfolio includes successful projects across various industries, from small startups to large enterprises. Each project showcases our commitment to excellence."
    },
    {
      title: "Get Started Today",
      content: "Ready to transform your business? Join thousands of satisfied customers who have trusted us with their most important projects."
    },
    {
      title: "Contact Information",
      content: "Reach out to us anytime for a free consultation. We're here to answer your questions and help you get started on your journey to success."
    }
  ];

  const handleShowForm = (chatIndex: number) => {
    setChatStates(prev => ({
      ...prev,
      [chatIndex]: { ...prev[chatIndex], showForm: true }
    }));
  };

  const handleFormChange = (chatIndex: number, field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [chatIndex]: {
        ...prev[chatIndex],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (chatIndex: number, e: React.FormEvent) => {
    e.preventDefault();
    
    const data = formData[chatIndex];
    if (!data?.name || !data?.phone) return;

    try {
      // Simulate API call
      await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setChatStates(prev => ({
        ...prev,
        [chatIndex]: { showForm: false, submitted: true }
      }));
    } catch (error) {
      console.error('Error submitting form:', error);
      // For demo purposes, still show success
      setChatStates(prev => ({
        ...prev,
        [chatIndex]: { showForm: false, submitted: true }
      }));
    }
  };

  const renderChatBubble = (chatIndex: number) => {
    const chatState = chatStates[chatIndex] || { showForm: false, submitted: false };
    const currentFormData = formData[chatIndex] || { name: '', phone: '' };

    if (chatState.submitted) {
      return (
        <div className="flex justify-start mb-8">
          <div className="flex items-start space-x-3 max-w-md">
            <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="bg-primary text-primary-foreground rounded-lg rounded-tl-none px-4 py-3 shadow-lg">
              <p className="text-sm">Thank you! Your request has been received. We'll contact you soon!</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex justify-start mb-8">
        <div className="flex items-start space-x-3 max-w-md">
          <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg rounded-tl-none px-4 py-3 shadow-lg">
            <p className="text-sm mb-3">Would you like to leave a request?</p>
            
            {!chatState.showForm ? (
              <Button 
                variant="secondary"
                size="sm"
                onClick={() => handleShowForm(chatIndex)}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Leave a request
              </Button>
            ) : (
              <form onSubmit={(e) => handleSubmit(chatIndex, e)} className="space-y-3 mt-3">
                <div>
                  <Label htmlFor={`name-${chatIndex}`} className="text-xs text-primary-foreground/80">Name</Label>
                  <Input
                    id={`name-${chatIndex}`}
                    type="text"
                    value={currentFormData.name}
                    onChange={(e) => handleFormChange(chatIndex, 'name', e.target.value)}
                    className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`phone-${chatIndex}`} className="text-xs text-primary-foreground/80">Phone</Label>
                  <Input
                    id={`phone-${chatIndex}`}
                    type="tel"
                    value={currentFormData.phone}
                    onChange={(e) => handleFormChange(chatIndex, 'phone', e.target.value)}
                    className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="sm"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Send className="w-3 h-3 mr-2" />
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">ChatBot Landing</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {contentBlocks.map((block, index) => (
          <div key={index}>
            {/* Content Block */}
            <div className="content-block mb-8">
              <div className="flex justify-end">
                <div className="bg-muted rounded-lg rounded-tr-none px-6 py-4 shadow-sm max-w-2xl">
                  <h2 className="text-xl font-semibold text-foreground mb-3">{block.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{block.content}</p>
                </div>
              </div>
            </div>

            {/* Show chat bubble after every two content blocks */}
            {(index + 1) % 2 === 0 && renderChatBubble(Math.floor(index / 2))}
          </div>
        ))}

        {/* Final chat bubble if odd number of content blocks */}
        {contentBlocks.length % 2 === 1 && renderChatBubble(Math.floor(contentBlocks.length / 2))}
      </main>
    </div>
  );
};

export default ChatbotLanding;