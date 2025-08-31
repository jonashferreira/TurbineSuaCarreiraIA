import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, Users } from "lucide-react";

export const PricingSection = () => {
  const handleInscricao = () => {
    window.open('https://www.sympla.com.br/evento-online/turbine-sua-carreira-com-a-inteligencia-artificial/3092595', '_blank');
  };

  const features = [
    "3.5 horas de conteúdo ao vivo",
    "Acesso via Zoom com interação",
    "Material de apoio incluído", 
    "Sessão de perguntas e respostas",
    "Exemplos práticos por área",
    "Certificado de participação"
  ];

  return (
    <section id="inscricao" className="py-20 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Garanta sua vaga agora
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Investimento mínimo para uma transformação máxima na sua carreira. 
            Vagas limitadas para garantir a qualidade da experiência.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-glow">
            <div className="text-center mb-8">
              <div className="inline-block bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <span className="text-white font-medium">Oferta Especial</span>
              </div>
              
              <div className="mb-4">
                <span className="text-white/60 text-lg line-through">R$ 97,00</span>
                <div className="text-6xl font-bold text-white mb-2">R$ 39</div>
                <span className="text-white/80 text-xl">,99</span>
              </div>
              
              <div className="text-white/90 mb-6">
                Parcele em até 6x de R$ 7,50
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={handleInscricao}
              size="lg"
              className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg py-4 shadow-glow transition-smooth transform hover:scale-105"
            >
              Inscrever-se Agora
            </Button>
            
            <div className="flex items-center justify-center gap-6 mt-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Inscrições até</h3>
            <p className="text-white/80">18 de Setembro</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Vagas Limitadas</h3>
            <p className="text-white/80">Para garantir qualidade</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Garantia Total</h3>
            <p className="text-white/80">7 dias para cancelar</p>
          </div>
        </div>
      </div>
    </section>
  );
};