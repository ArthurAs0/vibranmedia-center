import { Button } from '@/components/ui/button';
import { Play, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-media-center.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#4c1d95] to-[#86198f] opacity-95"></div>
        <img 
          src={heroImage} 
          alt="Media Center Studio" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Large floating squares */}
        <div className="absolute top-[15%] left-[8%] w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rotate-12 animate-[float_8s_ease-in-out_infinite]" 
             style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[25%] right-[12%] w-20 h-20 bg-accent/10 backdrop-blur-sm border border-accent/20 -rotate-12 animate-[float_10s_ease-in-out_infinite]"
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[20%] left-[15%] w-12 h-12 bg-primary/10 backdrop-blur-sm border border-primary/20 rotate-45 animate-[float_7s_ease-in-out_infinite]"
             style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[45%] right-[8%] w-14 h-14 bg-white/5 backdrop-blur-sm border border-white/10 -rotate-6 animate-[float_9s_ease-in-out_infinite]"
             style={{ animationDelay: '1.5s' }}></div>
        
        {/* Small dots */}
        <div className="absolute top-[35%] left-[25%] w-2 h-2 bg-white/40 rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-accent/60 rounded-full animate-[pulse_4s_ease-in-out_infinite]"
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[35%] right-[20%] w-2 h-2 bg-white/40 rounded-full animate-[pulse_3.5s_ease-in-out_infinite]"
             style={{ animationDelay: '0.5s' }}></div>
        
        {/* Glow effects */}
        <div className="absolute top-[20%] right-[25%] w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[15%] left-[20%] w-48 h-48 bg-primary/15 rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite]"
             style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-[slideUp_0.8s_ease-out]">
            {t('hero.title')}
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-[slideUp_0.8s_ease-out_0.2s_both]">
              {t('hero.titleAccent')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-[slideUp_0.8s_ease-out_0.4s_both]">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-[slideUp_0.8s_ease-out_0.6s_both]">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 mr-2" />
              {t('hero.watchLive')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-md px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              {t('hero.explore')}
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-[slideUp_0.8s_ease-out_0.8s_both]">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">50+</div>
              <div className="text-white/70">{t('hero.teachers')}</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">24/7</div>
              <div className="text-white/70">{t('hero.streaming')}</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">3</div>
              <div className="text-white/70">{t('hero.languages')}</div>
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