'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Eye,
  Camera,
  Star
} from 'lucide-react';
import { useState } from 'react';

const properties = [
  {
    id: 1,
    title: 'Appartement moderne avec vue mer',
    location: 'Nice, Alpes-Maritimes',
    price: '450 000',
    type: 'Vente',
    bedrooms: 3,
    bathrooms: 2,
    area: 85,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    visits3D: 245,
    isFavorite: false,
    isNew: true
  },
  {
    id: 2,
    title: 'Villa contemporaine avec piscine',
    location: 'Cannes, Alpes-Maritimes',
    price: '2 800',
    type: 'Location',
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    visits3D: 189,
    isFavorite: true,
    isNew: false
  },
  {
    id: 3,
    title: 'Loft industriel rénové',
    location: 'Lyon, Rhône',
    price: '320 000',
    type: 'Vente',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    visits3D: 156,
    isFavorite: false,
    isNew: true
  }
];

export function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([2]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Propriétés en vedette
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez notre sélection de biens d'exception avec visites virtuelles 3D
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.isNew && (
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      Nouveau
                    </Badge>
                  )}
                  <Badge variant={property.type === 'Vente' ? 'default' : 'secondary'}>
                    {property.type}
                  </Badge>
                </div>

                {/* Favorite button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/90 hover:bg-white"
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      favorites.includes(property.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-slate-600'
                    }`} 
                  />
                </Button>

                {/* 3D visit indicator */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                  <Camera className="h-3 w-3" />
                  <span>3D</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-slate-900 line-clamp-2 flex-1">
                    {property.title}
                  </h3>
                  <div className="flex items-center space-x-1 ml-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-slate-600">{property.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Square className="h-4 w-4" />
                      <span>{property.area}m²</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-slate-900">
                      {property.price}€
                      {property.type === 'Location' && <span className="text-sm font-normal text-slate-600">/mois</span>}
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <Eye className="h-3 w-3 mr-1" />
                      <span>{property.visits3D} visites 3D</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Visiter en 3D
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir toutes les propriétés
          </Button>
        </div>
      </div>
    </section>
  );
}