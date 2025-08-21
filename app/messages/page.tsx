'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Send, 
  Phone, 
  Video, 
  MoreVertical, 
  Paperclip,
  Smile,
  Star,
  Archive,
  Trash2
} from 'lucide-react';

const conversations = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Agent immobilier',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    lastMessage: 'La visite est confirmée pour demain à 14h',
    time: '2 min',
    unread: 2,
    online: true,
    property: 'Appartement 3P - Nice'
  },
  {
    id: 2,
    name: 'Thomas Martin',
    role: 'Propriétaire',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    lastMessage: 'Merci pour votre intérêt, quand souhaitez-vous visiter ?',
    time: '1h',
    unread: 0,
    online: false,
    property: 'Villa 5P - Cannes'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Agent immobilier',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    lastMessage: 'J\'ai d\'autres biens qui pourraient vous intéresser',
    time: '3h',
    unread: 1,
    online: true,
    property: 'Loft 2P - Lyon'
  },
  {
    id: 4,
    name: 'Pierre Moreau',
    role: 'Propriétaire',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
    lastMessage: 'Le dossier est complet, nous pouvons procéder',
    time: '1j',
    unread: 0,
    online: false,
    property: 'Maison 4P - Bordeaux'
  }
];

const messages = [
  {
    id: 1,
    sender: 'Marie Dubois',
    content: 'Bonjour ! J\'ai vu que vous étiez intéressé par l\'appartement à Nice. Souhaitez-vous planifier une visite ?',
    time: '14:30',
    isOwn: false
  },
  {
    id: 2,
    sender: 'Vous',
    content: 'Bonjour Marie, oui je suis très intéressé. Quand serait-il possible de visiter ?',
    time: '14:32',
    isOwn: true
  },
  {
    id: 3,
    sender: 'Marie Dubois',
    content: 'Parfait ! Je peux vous proposer demain à 14h ou vendredi à 10h. Qu\'est-ce qui vous arrange le mieux ?',
    time: '14:35',
    isOwn: false
  },
  {
    id: 4,
    sender: 'Vous',
    content: 'Demain à 14h me convient parfaitement. Faut-il que je prépare des documents particuliers ?',
    time: '14:37',
    isOwn: true
  },
  {
    id: 5,
    sender: 'Marie Dubois',
    content: 'Excellent ! Pour la visite, apportez simplement une pièce d\'identité. Si vous souhaitez faire une offre, nous verrons les documents nécessaires après.',
    time: '14:40',
    isOwn: false
  },
  {
    id: 6,
    sender: 'Marie Dubois',
    content: 'La visite est confirmée pour demain à 14h. Je vous envoie l\'adresse exacte par SMS.',
    time: '14:42',
    isOwn: false
  }
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchConversations, setSearchConversations] = useState('');

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Here you would typically send the message to your backend
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="flex h-full">
            {/* Conversations Sidebar */}
            <div className="w-80 border-r border-gray-200/50 flex flex-col">
              {/* Sidebar Header */}
              <div className="p-6 border-b border-gray-200/50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Messages</h2>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une conversation..."
                    value={searchConversations}
                    onChange={(e) => setSearchConversations(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Conversations List */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedConversation === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        
                        <p className="text-sm text-gray-500 mb-1">{conversation.role}</p>
                        <p className="text-sm text-gray-600 truncate mb-2">{conversation.lastMessage}</p>
                        
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {conversation.property}
                          </Badge>
                          {conversation.unread > 0 && (
                            <Badge className="bg-blue-600 text-white text-xs">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedConv ? (
                <>
                  {/* Chat Header */}
                  <div className="p-6 border-b border-gray-200/50 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={selectedConv.avatar} />
                            <AvatarFallback>{selectedConv.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          {selectedConv.online && (
                            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{selectedConv.name}</h3>
                          <p className="text-sm text-gray-500">{selectedConv.role} • {selectedConv.property}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Phone className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Video className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Star className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                          message.isOwn 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                            : 'bg-white border border-gray-200 text-gray-900'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          <p className={`text-xs mt-2 ${
                            message.isOwn ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-6 border-t border-gray-200/50 bg-white">
                    <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
                      <div className="flex-1">
                        <div className="relative">
                          <Input
                            placeholder="Tapez votre message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="pr-20 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                          />
                          <div className="absolute right-2 top-2 flex items-center space-x-1">
                            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                              <Paperclip className="h-4 w-4 text-gray-400" />
                            </Button>
                            <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                              <Smile className="h-4 w-4 text-gray-400" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
                        disabled={!newMessage.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50/50">
                  <div className="text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto">
                      <MessageSquare className="h-8 w-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Sélectionnez une conversation</h3>
                      <p className="text-gray-500">Choisissez une conversation pour commencer à discuter</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Messages favoris</h3>
              <p className="text-sm text-gray-600">Accédez rapidement à vos conversations importantes</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Archive className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Messages archivés</h3>
              <p className="text-sm text-gray-600">Consultez vos anciennes conversations</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center mx-auto mb-4">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Messages supprimés</h3>
              <p className="text-sm text-gray-600">Récupérez vos messages supprimés</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}