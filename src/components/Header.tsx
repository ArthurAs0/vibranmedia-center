import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', display: 'EN' },
    { code: 'ru', name: 'Русский', display: 'RU' },
    { code: 'am', name: 'Հայերեն', display: 'AM' },
  ];

  const menuItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.teachers'), href: '#teachers' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.news'), href: '#news' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const currentLangDisplay = languages.find(lang => lang.code === language)?.display || 'EN';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">MediaCenter</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher - Segmented */}
            <div role="tablist" aria-label="Language selector" className="flex items-center">
              <div className="bg-muted rounded-full p-1 flex">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    role="tab"
                    aria-selected={language === lang.code}
                    onClick={() => setLanguage(lang.code as 'en' | 'ru' | 'am')}
                    className={
                      `px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        language === lang.code ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:bg-accent'
                      }`
                    }
                  >
                    {lang.display}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Stream Button */}
            <Button className="btn-live">
              <Play className="w-4 h-4 mr-2" />
              {t('header.watchLive')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2 border-t border-border/50 mt-4">
                <div className="flex items-center justify-between">
                  <div role="tablist" aria-label="Language selector" className="flex items-center">
                    <div className="bg-muted rounded-full p-1 flex">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          role="tab"
                          aria-selected={language === lang.code}
                          onClick={() => setLanguage(lang.code as 'en' | 'ru' | 'am')}
                          className={
                            `px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                              language === lang.code ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:bg-accent'
                            }`
                          }
                        >
                          {lang.display}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button className="btn-live">
                    <Play className="w-4 h-4 mr-2" />
                    {t('header.watchLive')}
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;