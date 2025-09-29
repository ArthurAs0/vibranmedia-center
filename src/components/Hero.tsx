import { Button } from '@/components/ui/button';
import { Play, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-media-center.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blue to Purple Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af] via-[#5b21b6] to-[#a855f7]"></div>
        <img 
          src={heroImage} 
          alt="Media Center Studio" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Subtle Floating Geometric Shapes */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
        <div className="absolute top-[15%] left-[8%] w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[25%] right-[12%] w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 -rotate-12 animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[20%] left-[15%] w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[45%] right-[8%] w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 -rotate-6 animate-[float_9s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="block bg-gradient-to-r from-[#ec4899] via-[#c026d3] to-[#e879f9] bg-clip-text text-transparent">
              {t('hero.titleAccent')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button 
              className="bg-gradient-to-r from-[#ec4899] to-[#c026d3] hover:from-[#db2777] hover:to-[#a21caf] text-white border-0 text-lg px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              {t('hero.watchLive')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              {t('hero.explore')}
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-lg">{t('hero.teachers')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-lg">{t('hero.streaming')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">3</div>
              <div className="text-white/80 text-lg">{t('hero.languages')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;