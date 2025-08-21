'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home, Building, Landmark, Store, RotateCcw, Filter } from 'lucide-react';

export function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([100000, 1000000]);
  const [areaRange, setAreaRange] = useState([20, 200]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const propertyTypes = [
    { id: 'apartment', label: 'Appartement', icon: Home },
    { id: 'house', label: 'Maison', icon: Building },
    { id: 'land', label: 'Terrain', icon: Landmark },
    { id: 'commercial', label: 'Commercial', icon: Store }
  ];

  const features = [
    'Parking', 'Jardin', 'Balcon', 'Terrasse', 'Piscine', 'Ascenseur', 
    'Cave', 'Garage', 'Cheminée', 'Climatisation'
  ];

  const toggleType = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const resetFilters = () => {
    setPriceRange([100000, 1000000]);
    setAreaRange([20, 200]);
    setSelectedTypes([]);
    setSelectedFeatures([]);
  };

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Filter className="h-5 w-5 mr-2" />
              Filtres
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Location */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center text-base">
            <MapPin className="h-4 w-4 mr-2" />
            Localisation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location">Ville ou code postal</Label>
            <Input 
              id="location" 
              placeholder="Paris, Lyon, 75001..." 
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="radius">Rayon de recherche</Label>
            <Select defaultValue="10">
              <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 km</SelectItem>
                <SelectItem value="5">5 km</SelectItem>
                <SelectItem value="10">10 km</SelectItem>
                <SelectItem value="25">25 km</SelectItem>
                <SelectItem value="50">50 km</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Property Type */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Type de bien</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {propertyTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => toggleType(type.id)}
                className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedTypes.includes(type.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <type.icon className={`h-4 w-4 ${
                    selectedTypes.includes(type.id) ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <span className={`text-sm font-medium ${
                    selectedTypes.includes(type.id) ? 'text-blue-900' : 'text-gray-700'
                  }`}>
                    {type.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transaction Type */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="buy" defaultChecked />
              <Label htmlFor="buy" className="text-sm font-medium">Achat</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rent" />
              <Label htmlFor="rent" className="text-sm font-medium">Location</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Budget</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={2000000}
              min={50000}
              step={10000}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{priceRange[0].toLocaleString()}€</span>
            <span>{priceRange[1].toLocaleString()}€</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input 
              placeholder="Min" 
              value={priceRange[0].toLocaleString()}
              readOnly
              className="text-center border-gray-300"
            />
            <Input 
              placeholder="Max" 
              value={priceRange[1].toLocaleString()}
              readOnly
              className="text-center border-gray-300"
            />
          </div>
        </CardContent>
      </Card>

      {/* Area */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Surface</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider
              value={areaRange}
              onValueChange={setAreaRange}
              max={500}
              min={10}
              step={5}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{areaRange[0]}m²</span>
            <span>{areaRange[1]}m²</span>
          </div>
        </CardContent>
      </Card>

      {/* Rooms */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Pièces</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Chambres</Label>
            <Select>
              <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20">
                <SelectValue placeholder="Nombre de chambres" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Indifférent</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Salles de bain</Label>
            <Select>
              <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20">
                <SelectValue placeholder="Nombre de salles de bain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Indifférent</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Équipements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox 
                  id={feature}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={() => toggleFeature(feature)}
                />
                <Label htmlFor={feature} className="text-sm font-medium">
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Apply Filters */}
      <div className="sticky bottom-4">
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
          Appliquer les filtres
        </Button>
      </div>
    </div>
  );
}