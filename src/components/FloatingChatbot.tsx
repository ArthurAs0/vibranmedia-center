import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageCircle, Send, X, Minimize2 } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
}

interface FloatingChatbotProps {
  triggerAfterBlocks: number;
  totalBlocks: number;
}

const FloatingChatbot: React.FC<FloatingChatbotProps> = ({ triggerAfterBlocks, totalBlocks }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '' });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't trigger again if already shown or if user suppressed it
      const suppressed =
        localStorage.getItem('chatbot_submitted') === 'true' ||
        localStorage.getItem('chatbot_dismissed') === 'true';
      if (hasTriggered || suppressed) return;
      
      const contentBlocks = document.querySelectorAll('.content-block');
      const scrollPosition = window.scrollY + window.innerHeight;
      
      let visibleBlocks = 0;
      contentBlocks.forEach((block) => {
        const blockTop = block.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > blockTop + 100) {
          visibleBlocks++;
        }
      });

      // Show chatbot after seeing 2 blocks
      if (visibleBlocks >= triggerAfterBlocks && !hasTriggered) {
        setHasTriggered(true);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerAfterBlocks, hasTriggered]);

  // On mount, if user previously submitted/dismissed, never trigger
  useEffect(() => {
    const suppressed =
      localStorage.getItem('chatbot_submitted') === 'true' ||
      localStorage.getItem('chatbot_dismissed') === 'true';
    if (suppressed) {
      setHasTriggered(true);
      setIsVisible(false);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) return;

    try {
      // Simulate API call
      await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Persist that user has submitted so widget won't reappear
      localStorage.setItem('chatbot_submitted', 'true');
      setHasTriggered(true);

      setIsExpanded(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '' });
      
      // Hide the thank you message after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // For demo purposes, still show success
      localStorage.setItem('chatbot_submitted', 'true');
      setHasTriggered(true);

      setIsExpanded(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '' });
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }
  };

  const handleClose = () => {
    // Persist dismissal so it will not reappear this session
    localStorage.setItem('chatbot_dismissed', 'true');
    setHasTriggered(true);
    setIsVisible(false);
    setIsExpanded(false);
    setIsSubmitted(false);
  };

  const handleMinimize = () => {
    setIsExpanded(false);
  };

  const suppressed =
    typeof window !== 'undefined' && (
      localStorage.getItem('chatbot_submitted') === 'true' ||
      localStorage.getItem('chatbot_dismissed') === 'true'
    );
  if (!isVisible || (suppressed && !isSubmitted)) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isExpanded && (
        <div className="mb-4 bg-card border shadow-lg rounded-lg w-80 max-w-[calc(100vw-3rem)] animate-scale-in">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Assistant</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMinimize}
                className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Chat Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-muted rounded-lg p-3 text-sm">
                Please fill out this form and we'll get back to you shortly.
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="chat-name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="chat-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  className="mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="chat-phone" className="text-sm font-medium">
                  Phone
                </Label>
                <Input
                  id="chat-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Your phone number"
                  className="mt-1"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Bubble */}
      <div className="flex flex-col items-end space-y-2">
        {isSubmitted && (
          <div className="bg-primary text-primary-foreground rounded-lg rounded-br-none px-4 py-3 shadow-lg max-w-xs animate-fade-in">
            <p className="text-sm">Thank you! Your request has been received. We'll contact you soon!</p>
          </div>
        )}
        
        {!isSubmitted && (
          <div className="bg-primary text-primary-foreground rounded-lg rounded-br-none px-4 py-3 shadow-lg max-w-xs">
            <p className="text-sm mb-3">Would you like to leave a request?</p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Leave request
            </Button>
          </div>
        )}
        
        {/* Chat Icon Button */}
        <Button
          onClick={() => isExpanded ? handleMinimize() : setIsExpanded(true)}
          className="w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          size="sm"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingChatbot;