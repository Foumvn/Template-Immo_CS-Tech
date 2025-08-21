'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, MapPin, TrendingUp, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 text-sm font-medium shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Plateforme immobilière nouvelle génération
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                L'immobilier
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                réinventé
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez, visitez et achetez des propriétés grâce à notre technologie 3D révolutionnaire. 
              Une expérience immobilière sans précédent.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl border border-gray-200/50 p-2 backdrop-blur-sm">
              <div className="flex items-center space-x-3 px-4 flex-1">
                <MapPin className="h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Rechercher par ville, quartier ou code postal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 focus-visible:ring-0 text-base flex-1 bg-transparent"
                />
              </div>
              <Button 
                size="lg" 
                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 shadow-lg"
              >
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>

          {/* Features highlights */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">+15k propriétés</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">100% sécurisé</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Zap className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">Visites 3D</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg px-8 py-3 rounded-xl">
              Commencer gratuitement
            </Button>
            <Button variant="outline" size="lg" className="group border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-xl">
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Voir la démonstration
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}