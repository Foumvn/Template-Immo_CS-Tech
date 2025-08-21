import { Card, CardContent } from '@/components/ui/card';
import { 
  View, 
  Shield, 
  MessageSquare, 
  CreditCard, 
  Bell, 
  Users 
} from 'lucide-react';

const features = [
  {
    icon: View,
    title: 'Visites 3D Immersives',
    description: 'Explorez chaque propriété en détail grâce à notre technologie 3D révolutionnaire. Navigation intuitive et réalisme saisissant.',
    color: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'Transactions Sécurisées',
    description: 'Système de paiement intégré et sécurisé. Protection complète de vos données personnelles conforme RGPD.',
    color: 'text-green-600'
  },
  {
    icon: MessageSquare,
    title: 'Communication Directe',
    description: 'Messagerie intégrée pour échanger directement avec les propriétaires et agents immobiliers.',
    color: 'text-purple-600'
  },
  {
    icon: CreditCard,
    title: 'Paiements Intégrés',
    description: 'Réglez vos transactions d\'achat ou de location directement sur la plateforme en toute sécurité.',
    color: 'text-orange-600'
  },
  {
    icon: Bell,
    title: 'Notifications Intelligentes',
    description: 'Recevez des alertes personnalisées pour les nouvelles annonces correspondant à vos critères.',
    color: 'text-red-600'
  },
  {
    icon: Users,
    title: 'Multi-Profils',
    description: 'Interface adaptée pour acheteurs, locataires, vendeurs et agents immobiliers.',
    color: 'text-indigo-600'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Fonctionnalités avancées
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une plateforme complète qui révolutionne votre expérience immobilière
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-full ${feature.color.replace('text-', 'bg-')}/10 group-hover:scale-125 transition-transform duration-300`}></div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}