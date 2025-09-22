import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Eye, Download, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=600&fit=crop&crop=center',
      title: 'Broadcasting Studio Setup',
      category: 'Studio',
      description: 'Our state-of-the-art broadcasting studio with professional equipment.',
      views: '2.3k',
      date: '2024-01-15'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center',
      title: 'Live Streaming Session',
      category: 'Live Stream',
      description: 'Students learning professional live streaming techniques.',
      views: '1.8k',
      date: '2024-01-12'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center',
      title: 'Audio Production Lab',
      category: 'Audio',
      description: 'Professional audio mixing and mastering equipment.',
      views: '1.5k',
      date: '2024-01-10'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center',
      title: 'Student News Team',
      category: 'Students',
      description: 'Our talented news production team in action.',
      views: '2.1k',
      date: '2024-01-08'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
      title: 'Video Editing Suite',
      category: 'Post-Production',
      description: 'High-end video editing workstations for student projects.',
      views: '1.7k',
      date: '2024-01-05'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1489599763687-7d8e52b9bbf0?w=800&h=600&fit=crop&crop=center',
      title: 'Film Production Set',
      category: 'Film',
      description: 'Behind the scenes of student film production.',
      views: '1.9k',
      date: '2024-01-03'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center',
      title: 'Podcast Recording',
      category: 'Podcast',
      description: 'Professional podcast recording setup and training.',
      views: '1.4k',
      date: '2024-01-01'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&crop=center',
      title: 'Media Technology Lab',
      category: 'Technology',
      description: 'Cutting-edge media technology and equipment.',
      views: '1.6k',
      date: '2023-12-28'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop&crop=center',
      title: 'Graduation Ceremony',
      category: 'Events',
      description: 'Celebrating our graduates and their achievements.',
      views: '3.2k',
      date: '2023-12-25'
    }
  ];

  const categories = ['All', 'Studio', 'Live Stream', 'Audio', 'Students', 'Post-Production', 'Film', 'Podcast', 'Technology', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Studio': 'bg-blue-100 text-blue-800',
      'Live Stream': 'bg-red-100 text-red-800',
      'Audio': 'bg-green-100 text-green-800',
      'Students': 'bg-purple-100 text-purple-800',
      'Post-Production': 'bg-orange-100 text-orange-800',
      'Film': 'bg-pink-100 text-pink-800',
      'Podcast': 'bg-indigo-100 text-indigo-800',
      'Technology': 'bg-yellow-100 text-yellow-800',
      'Events': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = filteredImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Photo Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our vibrant media center through captivating visuals showcasing 
            our facilities, students, and creative achievements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-gradient-primary text-primary-foreground' 
                  : 'hover:bg-accent/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="card-elevated hover-lift overflow-hidden group cursor-pointer slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image.id)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(image.category)}>
                      {image.category}
                    </Badge>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-background/20 hover:bg-background/30 backdrop-blur-sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-background/20 hover:bg-background/30 backdrop-blur-sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80 mb-2">{image.description}</p>
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {image.views} views
                      </div>
                      <span>{image.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center fade-in">
          <Button variant="outline" size="lg" className="group">
            Load More Images
            <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && selectedImageData && (
          <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
            <DialogContent 
              className="max-w-6xl w-full h-[90vh] p-0 bg-black/95 border-none"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
                  onClick={closeLightbox}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/10"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/10"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                {/* Image */}
                <div className="relative max-w-full max-h-full">
                  <img 
                    src={selectedImageData.src} 
                    alt={selectedImageData.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="max-w-4xl mx-auto text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className={getCategoryColor(selectedImageData.category)}>
                        {selectedImageData.category}
                      </Badge>
                      <div className="flex items-center text-sm text-white/70">
                        <Eye className="w-4 h-4 mr-1" />
                        {selectedImageData.views} views
                      </div>
                      <span className="text-sm text-white/70">{selectedImageData.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{selectedImageData.title}</h3>
                    <p className="text-white/80 text-lg">{selectedImageData.description}</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Gallery;