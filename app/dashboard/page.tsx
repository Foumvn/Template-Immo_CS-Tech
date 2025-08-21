'use client'

import { useState } from 'react'

// Layout
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

// UI Components
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,   // ✅ ajouté ici
  CardFooter 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Icons
import { 
  Home, 
  Eye, 
  Heart, 
  MessageSquare, 
  Calendar,
  TrendingUp,
  Users,
  Star,
  Plus,
  Settings,
  Bell,
  Search,
  Filter,
  MoreHorizontal
} from 'lucide-react'

const dashboardStats = [
  {
    title: 'Propriétés vues',
    value: '24',
    change: '+12%',
    icon: Eye,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Favoris',
    value: '8',
    change: '+3',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Messages',
    value: '12',
    change: '+5',
    icon: MessageSquare,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Visites planifiées',
    value: '3',
    change: '+1',
    icon: Calendar,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
]

const recentProperties = [
  {
    id: 1,
    title: 'Appartement moderne avec vue mer',
    location: 'Nice, Alpes-Maritimes',
    price: '450 000€',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300',
    status: 'Vu récemment',
    isFavorite: true
  },
  {
    id: 2,
    title: 'Villa contemporaine avec piscine',
    location: 'Cannes, Alpes-Maritimes',
    price: '2 800€/mois',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=300',
    status: 'Visite planifiée',
    isFavorite: false
  },
  {
    id: 3,
    title: 'Loft industriel rénové',
    location: 'Lyon, Rhône',
    price: '320 000€',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=300',
    status: 'En favoris',
    isFavorite: true
  }
]

const upcomingVisits = [
  {
    id: 1,
    property: 'Appartement 3P - Nice',
    agent: 'Marie Dubois',
    date: 'Demain',
    time: '14:00',
    type: 'Visite physique'
  },
  {
    id: 2,
    property: 'Villa 5P - Cannes',
    agent: 'Thomas Martin',
    date: 'Vendredi',
    time: '10:30',
    type: 'Visite 3D'
  }
]

// ⚠️ Exemple de données "conversations" manquantes dans ton code original
const conversations = [
  {
    id: 1,
    name: 'Jean Dupont',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: 'Bonjour, je voulais savoir si...',
    property: 'Appartement 3P - Nice',
    time: '09:15',
    unread: 2
  },
  {
    id: 2,
    name: 'Sophie Martin',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    lastMessage: 'Merci pour la visite !',
    property: 'Villa 5P - Cannes',
    time: 'Hier',
    unread: 0
  },
  {
    id: 3,
    name: 'Thomas Bernard',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    lastMessage: 'Quand est prévue la signature ?',
    property: 'Loft - Lyon',
    time: 'Lundi',
    unread: 1
  }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
              <p className="text-gray-600 mt-1">Gérez votre activité immobilière</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle recherche
              </Button>
            </div>
          </div>
        </div>

        {/* Onglets */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-white border border-gray-200 p-1 rounded-xl">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="properties">Mes propriétés</TabsTrigger>
            <TabsTrigger value="visits">Visites</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          {/* --- Vue d’ensemble --- */}
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                            {stat.change}
                          </Badge>
                        </div>
                      </div>
                      <div className={`h-12 w-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Properties + Visits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Properties */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Propriétés récentes</CardTitle>
                    <Button variant="ghost" size="sm">Voir tout</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentProperties.map((property) => (
                    <div key={property.id} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{property.title}</h4>
                        <p className="text-sm text-gray-500">{property.location}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm font-semibold text-gray-900">{property.price}</span>
                          <Badge variant="outline" className="text-xs">{property.status}</Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Heart className={`h-4 w-4 ${property.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Visits */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Visites à venir</CardTitle>
                    <Button variant="ghost" size="sm">Planifier</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingVisits.map((visit) => (
                    <div key={visit.id} className="p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{visit.property}</h4>
                        <Badge className="bg-blue-100 text-blue-700">{visit.type}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{visit.date} à {visit.time}</span>
                        </div>
                        <span className="text-gray-500">avec {visit.agent}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* --- Propriétés --- */}
          <TabsContent value="properties" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Mes propriétés suivies</CardTitle>
                <CardDescription>
                  Gérez vos propriétés favorites et suivez leur évolution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Home className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune propriété suivie</h3>
                  <p className="mb-4">Commencez à explorer nos propriétés pour les ajouter ici</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Explorer les propriétés
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- Visites --- */}
          <TabsContent value="visits" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Historique des visites</CardTitle>
                <CardDescription>
                  Consultez toutes vos visites passées et à venir
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingVisits.map((visit) => (
                    <div key={visit.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50">
                      <div>
                        <h4 className="font-medium text-gray-900">{visit.property}</h4>
                        <p className="text-sm text-gray-600">Agent: {visit.agent}</p>
                        <p className="text-sm text-gray-500">{visit.date} à {visit.time}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-blue-100 text-blue-700">{visit.type}</Badge>
                        <Button variant="outline" size="sm">Modifier</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- Messages --- */}
          <TabsContent value="messages" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Aperçu des messages</CardTitle>
                <CardDescription>
                  Vos dernières conversations avec les agents et propriétaires
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversations.slice(0, 3).map((conv) => (
                    <div key={conv.id} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conv.avatar} />
                        <AvatarFallback>{conv.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900">{conv.name}</h4>
                          <span className="text-xs text-gray-500">{conv.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                        <Badge variant="outline" className="text-xs mt-1">{conv.property}</Badge>
                      </div>
                      {conv.unread > 0 && (
                        <Badge className="bg-blue-600 text-white">{conv.unread}</Badge>
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    Voir tous les messages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  )
}
