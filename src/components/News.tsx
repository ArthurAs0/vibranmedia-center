import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Eye, ArrowRight, Clock } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'New Digital Broadcasting Studio Opens with State-of-the-Art Equipment',
      excerpt: 'Our latest addition features 4K cameras, professional lighting systems, and advanced audio equipment for hands-on student training.',
      category: 'Facilities',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '3 min read',
      views: '1.2k',
      image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&h=400&fit=crop&crop=center',
      featured: true
    },
    {
      id: 2,
      title: 'Media Center Graduates Land Jobs at Major Broadcasting Networks',
      excerpt: 'Recent graduates have secured positions at CNN, BBC, and local television stations, showcasing the quality of our education programs.',
      category: 'Success Stories',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '4 min read',
      views: '890',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Live Streaming Workshop Series Launches This Month',
      excerpt: 'Free workshop series covering live streaming basics, advanced techniques, and monetization strategies for content creators.',
      category: 'Workshops',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '2 min read',
      views: '654',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Partnership Announcement with International Media Organizations',
      excerpt: 'New partnerships provide students with internship opportunities and access to real-world media production experiences.',
      category: 'Partnerships',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '5 min read',
      views: '1.5k',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'Audio Production Course Receives Industry Recognition',
      excerpt: 'Our comprehensive audio production program has been certified by the Audio Engineering Society for its excellence in education.',
      category: 'Recognition',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      readTime: '3 min read',
      views: '743',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 6,
      title: 'Student Film Festival Showcases Creative Excellence',
      excerpt: 'Annual film festival highlights outstanding work from video production students, with awards in multiple categories.',
      category: 'Events',
      author: 'Michael Chen',
      date: '2024-01-03',
      readTime: '4 min read',
      views: '967',
      image: 'https://images.unsplash.com/photo-1489599763687-7d8e52b9bbf0?w=600&h=400&fit=crop&crop=center'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Facilities': 'bg-blue-100 text-blue-800',
      'Success Stories': 'bg-green-100 text-green-800',
      'Workshops': 'bg-purple-100 text-purple-800',
      'Partnerships': 'bg-orange-100 text-orange-800',
      'Recognition': 'bg-pink-100 text-pink-800',
      'Events': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="news" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, achievements, and exciting news 
            from our media center community.
          </p>
        </div>

        {/* Featured Article */}
        {newsArticles[0] && (
          <div className="mb-16 fade-in">
            <Card className="card-elevated hover-lift overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={newsArticles[0].image} 
                    alt={newsArticles[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className={getCategoryColor(newsArticles[0].category)}>
                      {newsArticles[0].category}
                    </Badge>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                    {newsArticles[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {newsArticles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {newsArticles[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(newsArticles[0].date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {newsArticles[0].readTime}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Eye className="w-4 h-4 mr-1" />
                      {newsArticles[0].views}
                    </div>
                  </div>
                  
                  <Button className="btn-hero">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.slice(1).map((article, index) => (
            <Card 
              key={article.id} 
              className="card-elevated hover-lift overflow-hidden group slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(article.date)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="ghost" className="group p-0 h-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Eye className="w-4 h-4 mr-1" />
                    {article.views}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in">
          <Button variant="outline" size="lg" className="group">
            View All News
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;