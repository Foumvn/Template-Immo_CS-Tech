'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  MapPin, 
  Home, 
  Euro, 
  Square, 
  Bed, 
  Bath,
  Car,
  Wifi,
  Zap,
  Shield,
  Camera,
  X,
  Plus,
  Check
} from 'lucide-react';

const amenities = [
  { id: 'parking', label: 'Parking', icon: Car },
  { id: 'wifi', label: 'Internet', icon: Wifi },
  { id: 'furnished', label: 'Meublé', icon: Home },
  { id: 'security', label: 'Sécurité', icon: Shield },
  { id: 'elevator', label: 'Ascenseur', icon: Zap }
];

export default function PublishPage() {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  const handleImageUpload = () => {
    // Simulate image upload
    const newImages = [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=300'
    ];
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Publier une annonce
            </h1>
            <p className="text-gray-600">
              Créez une annonce attractive pour votre propriété
            </p>
          </div>

          <form className="space-y-8">
            {/* Property Type */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  Type de propriété
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Type de bien</Label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Appartement</SelectItem>
                        <SelectItem value="house">Maison</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="loft">Loft</SelectItem>
                        <SelectItem value="commercial">Local commercial</SelectItem>
                        <SelectItem value="land">Terrain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Transaction</Label>
                    <Select value={transactionType} onValueChange={setTransactionType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Vente ou location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sale">Vente</SelectItem>
                        <SelectItem value="rent">Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Information */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Informations générales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre de l'annonce</Label>
                  <Input 
                    id="title" 
                    placeholder="Ex: Magnifique appartement avec vue mer"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Décrivez votre propriété en détail..."
                    rows={4}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Prix</Label>
                    <div className="relative">
                      <Euro className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="price" 
                        type="number" 
                        placeholder="450000"
                        className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="area">Surface (m²)</Label>
                    <div className="relative">
                      <Square className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="area" 
                        type="number" 
                        placeholder="85"
                        className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rooms">Pièces</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nombre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 pièce</SelectItem>
                        <SelectItem value="2">2 pièces</SelectItem>
                        <SelectItem value="3">3 pièces</SelectItem>
                        <SelectItem value="4">4 pièces</SelectItem>
                        <SelectItem value="5">5+ pièces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Chambres</Label>
                    <div className="relative">
                      <Bed className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="bedrooms" 
                        type="number" 
                        placeholder="3"
                        className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Salles de bain</Label>
                    <div className="relative">
                      <Bath className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="bathrooms" 
                        type="number" 
                        placeholder="2"
                        className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Localisation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse</Label>
                    <Input 
                      id="address" 
                      placeholder="123 Rue de la Paix"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input 
                      id="city" 
                      placeholder="Nice"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Code postal</Label>
                    <Input 
                      id="postalCode" 
                      placeholder="06000"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department">Département</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="06">Alpes-Maritimes (06)</SelectItem>
                        <SelectItem value="13">Bouches-du-Rhône (13)</SelectItem>
                        <SelectItem value="69">Rhône (69)</SelectItem>
                        <SelectItem value="75">Paris (75)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Équipements et services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity.id}
                      onClick={() => toggleAmenity(amenity.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedAmenities.includes(amenity.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <amenity.icon className={`h-5 w-5 ${
                          selectedAmenities.includes(amenity.id) ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                        <span className={`font-medium ${
                          selectedAmenities.includes(amenity.id) ? 'text-blue-900' : 'text-gray-700'
                        }`}>
                          {amenity.label}
                        </span>
                        {selectedAmenities.includes(amenity.id) && (
                          <Check className="h-4 w-4 text-blue-600 ml-auto" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Images */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Photos de la propriété
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Upload Area */}
                <div 
                  onClick={handleImageUpload}
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-colors cursor-pointer"
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Ajoutez des photos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Glissez-déposez vos images ou cliquez pour sélectionner
                  </p>
                  <Button type="button" variant="outline">
                    Choisir des fichiers
                  </Button>
                </div>

                {/* Uploaded Images */}
                {uploadedImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={image} 
                          alt={`Upload ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                        {index === 0 && (
                          <Badge className="absolute bottom-2 left-2 text-xs bg-blue-600">
                            Photo principale
                          </Badge>
                        )}
                      </div>
                    ))}
                    
                    <div 
                      onClick={handleImageUpload}
                      className="h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-colors"
                    >
                      <Plus className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Nom du contact</Label>
                    <Input 
                      id="contactName" 
                      placeholder="Votre nom"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Téléphone</Label>
                    <Input 
                      id="contactPhone" 
                      type="tel" 
                      placeholder="06 12 34 56 78"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input 
                    id="contactEmail" 
                    type="email" 
                    placeholder="contact@email.com"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      J'accepte les conditions de publication et certifie l'exactitude des informations
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="contact" defaultChecked />
                    <Label htmlFor="contact" className="text-sm text-gray-600">
                      J'autorise Immo à me contacter concernant cette annonce
                    </Label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button variant="outline" className="flex-1">
                      Enregistrer comme brouillon
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      Publier l'annonce
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}