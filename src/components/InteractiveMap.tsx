import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Navigation, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const InteractiveMap: React.FC = () => {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  
  // Media Center coordinates (New York example - replace with actual coordinates)
  const latitude = 40.7128;
  const longitude = -74.0060;
  const address = "123 Media Center Drive, Suite 400, New York, NY 10001";

  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleViewOnMap = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
  };

  useEffect(() => {
    // Simple map initialization using iframe as fallback
    if (mapRef.current) {
      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = '0';
      iframe.style.borderRadius = '16px';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO5OpLlEgSpbr0&q=${latitude},${longitude}&zoom=15&maptype=roadmap`;
      
      mapRef.current.appendChild(iframe);
    }
  }, [latitude, longitude]);

  return (
    <div className="w-full h-full relative">
      {/* Map Container */}
      <div 
        ref={mapRef}
        className="w-full h-full rounded-2xl overflow-hidden bg-gradient-subtle"
        style={{
          filter: 'grayscale(20%) brightness(95%)',
          minHeight: '300px'
        }}
      />

      {/* Overlay with location info */}
      <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50 max-w-xs">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
            <MapPin className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">MediaCenter</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
          {address}
        </p>
        <div className="flex gap-2">
          <Button 
            onClick={handleGetDirections}
            size="sm"
            className="btn-hero text-xs px-3 py-1"
          >
            <Navigation className="w-3 h-3 mr-1" />
            {t('contact.getDirections')}
          </Button>
        </div>
      </div>

      {/* Custom map controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        <Button
          variant="secondary"
          size="sm"
          className="bg-card/90 backdrop-blur-sm shadow-lg hover:bg-card/95 transition-all duration-300"
          onClick={handleViewOnMap}
        >
          <MapPin className="w-4 h-4 mr-1" />
          View on Maps
        </Button>
      </div>

      {/* Gradient overlay for better integration */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/5 rounded-2xl"></div>
    </div>
  );
};

export default InteractiveMap;