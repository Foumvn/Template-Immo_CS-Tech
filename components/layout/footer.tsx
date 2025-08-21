import Link from 'next/link';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Immo
              </span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              La plateforme immobilière nouvelle génération avec visites 3D. 
              Trouvez votre bien idéal en quelques clics.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@immo.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/properties" className="text-gray-600 hover:text-gray-900 transition-colors">Propriétés</Link></li>
              <li><Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">Tableau de bord</Link></li>
              <li><Link href="/messages" className="text-gray-600 hover:text-gray-900 transition-colors">Messages</Link></li>
              <li><Link href="/publish" className="text-gray-600 hover:text-gray-900 transition-colors">Publier</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/buy" className="text-gray-600 hover:text-gray-900 transition-colors">Acheter</Link></li>
              <li><Link href="/rent" className="text-gray-600 hover:text-gray-900 transition-colors">Louer</Link></li>
              <li><Link href="/sell" className="text-gray-600 hover:text-gray-900 transition-colors">Vendre</Link></li>
              <li><Link href="/agents" className="text-gray-600 hover:text-gray-900 transition-colors">Agents</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Recevez les dernières annonces et actualités immobilières
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="votre@email.com"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-600">
              &copy; 2025 Immo. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                Confidentialité
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                Conditions
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-gray-900 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}