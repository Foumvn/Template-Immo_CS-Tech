'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Eye,
  Camera,
  Star,
  ArrowUpDown,
  Share,
  Calendar
} from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Appartement moderne avec vue mer',
    location: 'Nice, Alpes-Maritimes',
    price: 450000,
    type: 'Vente',
    bedrooms: 3,
    bathrooms: 2,
    area: 85,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    visits3D: 245,
    isFavorite: false,
    isNew: true,
    features: ['Parking', 'Balcon', 'Vue mer'],
    agent: 'Marie Dubois'
  },
  {
    id: 2,
    title: 'Villa contemporaine avec piscine',
    location: 'Cannes, Alpes-Maritimes',
    price: 2800,
    type: 'Location',
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    visits3D: 189,
    isFavorite: true,
    isNew: false,
    features: ['Piscine', 'Jardin', 'Garage'],
    agent: 'Thomas Martin'
  },
  {
    id: 3,
    title: 'Loft industriel rénové',
    location: 'Lyon, Rhône',
    price: 320000,
    type: 'Vente',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    visits3D: 156,
    isFavorite: false,
    isNew: true,
    features: ['Loft', 'Parking', 'Terrasse'],
    agent: 'Sophie Laurent'
  },
  {
    id: 4,
    title: 'Maison familiale avec jardin',
    location: 'Bordeaux, Gironde',
    price: 385000,
    type: 'Vente',
    bedrooms: 5,
    bathrooms: 2,
    area: 140,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    visits3D: 203,
    isFavorite: false,
    isNew: false,
    features: ['Jardin', 'Garage', 'Cheminée'],
    agent: 'Pierre Moreau'
  },
  {
    id: 5,
    title: 'Studio étudiant centre-ville',
    location: 'Paris 5ème, Paris',
    price: 850,
    type: 'Location',
    bedrooms: 1,
    bathrooms: 1,
    area: 25,
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    visits3D: 89,
    isFavorite: false,
    isNew: true,
    features: ['Meublé', 'Metro', 'Balcon'],
    agent: 'Julie Petit'
  },
  {
    id: 6,
    title: 'Penthouse avec terrasse panoramique',
    location: 'Monaco',
    price: 1200000,
    type: 'Vente',
    bedrooms: 3,
    bathrooms: 3,
    area: 120,
    image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    visits3D: 312,
    isFavorite: true,
    isNew: false,
    features: ['Terrasse', 'Vue mer', 'Parking'],
    agent: 'Marc Durand'
  }
];

export function PropertyGrid() {
  const [favorites, setFavorites] = useState<number[]>([2, 6]);
  const [sortBy, setSortBy] = useState('newest');

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Sort Controls */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{properties.length}</span> propriétés trouvées
            </p>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <ArrowUpDown className="h-4 w-4 text-gray-400" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Plus récent</SelectItem>
                    <SelectItem value="price-asc">Prix croissant</SelectItem>
                    <SelectItem value="price-desc">Prix décroissant</SelectItem>
                    <SelectItem value="area-asc">Surface croissante</SelectItem>
                    <SelectItem value="area-desc">Surface décroissante</SelectItem>
                    <SelectItem value="rating">Mieux notés</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Property Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group bg-white border-0 shadow-sm">
            <div className="relative">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {property.isNew && (
                  <Badge className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
                    Nouveau
                  </Badge>
                )}
                <Badge variant={property.type === 'Vente' ? 'default' : 'secondary'} className="shadow-lg">
                  {property.type}
                </Badge>
              </div>

              {/* Action buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-8 w-8 rounded-full bg-white/90 hover:bg-white shadow-lg"
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      favorites.includes(property.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-600'
                    }`} 
                  />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-8 w-8 rounded-full bg-white/90 hover:bg-white shadow-lg"
                >
                  <Share className="h-4 w-4 text-gray-600" />
                </Button>
              </div>

              {/* 3D visit indicator */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                <Camera className="h-3 w-3" />
                <span>Visite 3D</span>
              </div>

              {/* Rating */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full text-xs shadow-lg">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-900">{property.rating}</span>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 text-lg">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 py-2 border-t border-gray-100">
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

                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {property.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-300">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Agent */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    Agent: <span className="font-medium text-gray-700">{property.agent}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{property.visits3D} visites</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-gray-900">
                      {property.price.toLocaleString()}€
                      {property.type === 'Location' && <span className="text-sm font-normal text-gray-600">/mois</span>}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Planifier
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Camera className="h-4 w-4 mr-2" />
                      Visiter 3D
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <Button variant="outline" size="lg" className="px-8">
          Charger plus de propriétés
        </Button>
      </div>
    </div>
  );
}