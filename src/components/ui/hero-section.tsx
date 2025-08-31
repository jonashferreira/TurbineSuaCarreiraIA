import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ai-hero.jpg";

export const HeroSection = () => {
  const scrollToProgram = () => {
    document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-float">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              20 de Setembro • 9h às 12h30 • Online
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turbine sua <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">carreira</span> com
            <br />
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Aprenda a usar IA de forma prática e estratégica para impulsionar sua carreira. 
            Domine as ferramentas que estão transformando o mercado de trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToPricing}
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-glow transition-smooth transform hover:scale-105"
            >
              Garanta sua vaga por R$ 39,99
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToProgram}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg transition-smooth"
            >
              Ver programação
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">3.5h</div>
              <div className="text-white/80">de conteúdo intensivo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">online e ao vivo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">Vagas</div>
              <div className="text-white/80">limitadas</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse-soft"></div>
        </div>
      </div>
    </section>
  );
};