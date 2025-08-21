'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Building2, Mail, Phone, User, Eye, EyeOff, ArrowLeft, Github, Chrome } from 'lucide-react';

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('buyer');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
      
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-md mx-auto">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Bienvenue sur Immo
            </h1>
            <p className="text-gray-600 mt-2">
              Accédez à votre espace personnel
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100/80">
                <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Connexion
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Inscription
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">Se connecter</CardTitle>
                  <CardDescription>
                    Connectez-vous à votre compte Immo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <Button variant="outline" type="button" className="w-full">
                        <Chrome className="h-4 w-4 mr-2" />
                        Google
                      </Button>
                      <Button variant="outline" type="button" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </div>

                    <div className="relative mb-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="votre@email.com"
                          className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Mot de passe</Label>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm text-gray-600">Se souvenir de moi</Label>
                      </div>
                      <Button variant="link" className="text-sm text-blue-600 hover:text-blue-700 p-0">
                        Mot de passe oublié ?
                      </Button>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Connexion...' : 'Se connecter'}
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
              
              <TabsContent value="register">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">Créer un compte</CardTitle>
                  <CardDescription>
                    Rejoignez la communauté Immo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Social Registration */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <Button variant="outline" type="button" className="w-full">
                        <Chrome className="h-4 w-4 mr-2" />
                        Google
                      </Button>
                      <Button variant="outline" type="button" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </div>

                    <div className="relative mb-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Ou s'inscrire avec</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="firstName" 
                            placeholder="Jean"
                            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Dupont" 
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="userType">Type de compte</Label>
                      <Select value={userType} onValueChange={setUserType}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20">
                          <SelectValue placeholder="Sélectionnez votre profil" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buyer">🏠 Acheteur</SelectItem>
                          <SelectItem value="renter">🔑 Locataire</SelectItem>
                          <SelectItem value="seller">💼 Vendeur</SelectItem>
                          <SelectItem value="agent">🏢 Agent immobilier</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="registerEmail" 
                          type="email" 
                          placeholder="votre@email.com"
                          className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="06 12 34 56 78"
                          className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Mot de passe</Label>
                      <div className="relative">
                        <Input 
                          id="registerPassword" 
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm text-gray-600">
                        J'accepte les{' '}
                        <Button variant="link" className="p-0 h-auto text-sm text-blue-600 hover:text-blue-700">
                          conditions d'utilisation
                        </Button>
                        {' '}et la{' '}
                        <Button variant="link" className="p-0 h-auto text-sm text-blue-600 hover:text-blue-700">
                          politique de confidentialité
                        </Button>
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Création du compte...' : 'Créer mon compte'}
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Additional Info */}
          <div className="text-center text-sm text-gray-500 mt-6">
            <p>En vous connectant, vous acceptez nos conditions d'utilisation</p>
          </div>
        </div>
      </div>
    </div>
  );
}