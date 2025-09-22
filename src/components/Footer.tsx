import { Button } from '@/components/ui/button';
import { 
  Play, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      'Home',
      'About Us',
      'Programs',
      'Admissions',
      'Student Portal'
    ],
    'Programs': [
      'Broadcasting',
      'Audio Production',
      'Video Production',
      'Media Technology',
      'Live Streaming'
    ],
    'Resources': [
      'Student Resources',
      'Faculty Portal',
      'Library',
      'Career Services',
      'Technical Support'
    ],
    'Community': [
      'Alumni Network',
      'Events',
      'News',
      'Blog',
      'Partnerships'
    ]
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Youtube, name: 'YouTube', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent-glow rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">MediaCenter</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering the next generation of media professionals through innovative 
              education, cutting-edge technology, and real-world experience.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">
                  123 Media Center Drive, Suite 400, New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">info@mediacenter.com</span>
              </div>
            </div>

            {/* Live Stream CTA */}
            <Button className="btn-live mb-6">
              <Play className="w-4 h-4 mr-2" />
              Watch Live Stream
            </Button>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-primary-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter for the latest updates, events, and educational content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent-glow text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/70 text-sm">
              <p className="flex items-center">
                © {currentYear} MediaCenter. Made with 
                <Heart className="w-4 h-4 mx-1 text-red-400" fill="currentColor" />
                for aspiring media professionals.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/70 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-primary-foreground/40">•</span>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-primary-foreground/40">•</span>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;