import { Button } from "@/components/ui/button";
import { Clock, MapPin, Mail } from "lucide-react";

export const Footer = () => {
  const handleInscricao = () => {
    window.open('https://www.sympla.com.br/evento-online/turbine-sua-carreira-com-a-inteligencia-artificial/3092595', '_blank');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Turbine sua carreira com IA
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Prepare-se para o futuro do trabalho dominando as ferramentas de 
              Inteligência Artificial que estão transformando todas as áreas profissionais.
            </p>
            <Button 
              onClick={handleInscricao}
              className="gradient-hero text-white hover:opacity-90 transition-smooth"
            >
              Garantir minha vaga
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Informações do Evento</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span>20/09/2025 • 9h às 12h30</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Online via Zoom</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>Suporte incluso</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-card-foreground">Garantias</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Cancelamento até 7 dias</li>
              <li>✓ Pagamento 100% seguro</li>
              <li>✓ Acesso imediato após compra</li>
              <li>✓ Suporte durante o evento</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 ERMASEG Soluções Empresariais. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Evento realizado via plataforma Sympla. Pagamentos processados com segurança.
          </p>
        </div>
      </div>
    </footer>
  );
};