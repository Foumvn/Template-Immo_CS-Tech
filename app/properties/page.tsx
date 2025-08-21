'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PropertyFilters } from '@/components/properties/property-filters';
import { PropertyGrid } from '@/components/properties/property-grid';
import { PropertyMap } from '@/components/properties/property-map';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LayoutGrid, Map, SlidersHorizontal, Search, Filter } from 'lucide-react';

export default function PropertiesPage() {
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const [showFilters, setShowFilters] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Rechercher par ville, quartier, code postal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant={showFilters ? "default" : "outline"}
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </Button>
              
              <div className="flex rounded-xl border border-gray-200 p-1 bg-gray-50">
                <Button
                  variant={view === 'grid' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setView('grid')}
                  className="rounded-lg"
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Grille
                </Button>
                <Button
                  variant={view === 'map' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setView('map')}
                  className="rounded-lg"
                >
                  <Map className="h-4 w-4 mr-2" />
                  Carte
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Propriétés disponibles</h1>
            <p className="text-gray-600 mt-1">1,247 biens trouvés • Mis à jour il y a 2 minutes</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} w-full lg:w-80 shrink-0`}>
            <PropertyFilters />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {view === 'grid' ? <PropertyGrid /> : <PropertyMap />}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}