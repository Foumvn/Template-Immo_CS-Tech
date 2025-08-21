'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Eye, Camera } from 'lucide-react';

export function PropertyMap() {
  return (
    <div className="space-y-6">
      {/* Map Placeholder */}
      <Card className="overflow-hidden">
        <div className="h-96 bg-gradient-to-br from-slate-200 to-blue-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="h-16 w-16 text-blue-500 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-700">Carte Interactive</h3>
                <p className="text-slate-600 max-w-md">
                  La vue carte sera intégrée ici avec les marqueurs des propriétés et la navigation interactive
                </p>
                <Button variant="outline">
                  Activer la géolocalisation
                </Button>
              </div>
            </div>
          </div>

          {/* Sample markers */}
          <div className="absolute top-20 left-20 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-medium shadow-lg">
            450k€
          </div>
          <div className="absolute top-32 right-32 bg-green-600 text-white px-2 py-1 rounded-lg text-sm font-medium shadow-lg">
            2.8k€/mois
          </div>
          <div className="absolute bottom-20 left-1/3 bg-purple-600 text-white px-2 py-1 rounded-lg text-sm font-medium shadow-lg">
            320k€
          </div>
        </div>
      </Card>

      {/* Selected Property Details */}
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <img 
            src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Propriété sélectionnée"
            className="w-24 h-24 object-cover rounded-lg"
          />
          
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Appartement moderne avec vue mer
                </h3>
                <div className="flex items-center text-slate-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Nice, Alpes-Maritimes</span>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-700">
                Vente
              </Badge>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Bed className="h-4 w-4" />
                <span>3 chambres</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bath className="h-4 w-4" />
                <span>2 salles de bain</span>
              </div>
              <div className="flex items-center space-x-1">
                <Square className="h-4 w-4" />
                <span>85m²</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>245 visites</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-slate-900">
                450 000€
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Camera className="h-4 w-4 mr-2" />
                Visiter en 3D
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Map Controls */}
      <Card className="p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-slate-600">Légende:</span>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span>Vente</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded"></div>
              <span>Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-600 rounded"></div>
              <span>Nouveau</span>
            </div>
          </div>
          
          <Button variant="outline" size="sm">
            Recentrer la carte
          </Button>
        </div>
      </Card>
    </div>
  );
}