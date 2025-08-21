import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Monitor } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à révolutionner votre recherche immobilière ?
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui ont déjà adopté la visite immobilière 3D. 
            Gagnez du temps et trouvez le bien parfait depuis chez vous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-slate-100 font-semibold px-8 py-3"
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3"
            >
              Planifier une démonstration
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Monitor className="h-5 w-5" />
              <span>Application web responsive</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5" />
              <span>Bientôt sur mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}