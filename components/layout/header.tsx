'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Building2,
  Search,
  Bell,
  User,
  Menu,
  X,
  Home,
  MessageSquare,
  Plus
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Immo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/properties">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/80">
                <Home className="h-4 w-4 mr-2" />
                Propriétés
              </Button>
            </Link>
            <Link href="/messages">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100/80">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
            </Button>
            
            <Link href="/auth">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <User className="h-4 w-4 mr-2" />
                Se connecter
              </Button>
            </Link>
            
            <Link href="/publish">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                <Plus className="h-4 w-4 mr-2" />
                Publier
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <nav className="space-y-3">
                <Link href="/properties" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100/80 transition-colors">
                  <Home className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Propriétés</span>
                </Link>
                <Link href="/messages" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100/80 transition-colors">
                  <MessageSquare className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Messages</span>
                </Link>
              </nav>
              
              <div className="pt-4 border-t border-gray-200/50 space-y-3">
                <Link href="/auth" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Se connecter
                  </Button>
                </Link>
                <Link href="/publish" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Publier une annonce
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}