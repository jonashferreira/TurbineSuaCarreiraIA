import { Clock, Play, MessageCircle } from "lucide-react";

export const ProgramSection = () => {
  const programItems = [
    {
      time: "09:00 - 09:30",
      title: "Introdução à IA",
      description: "Entenda o que é, sua origem e aplicações atuais",
      highlight: false
    },
    {
      time: "09:30 - 10:00", 
      title: "O que é e o que não é IA",
      description: "Desmistificando conceitos e separando fatos de ficção",
      highlight: false
    },
    {
      time: "10:00 - 10:30",
      title: "Como interagir com a IA",
      description: "Fundamentos de comunicação com assistentes inteligentes",
      highlight: true
    },
    {
      time: "10:30 - 11:30",
      title: "Prompting para Áreas Profissionais",
      description: "Exemplos práticos aplicados em vendas, TI, marketing, educação e mais",
      highlight: true
    },
    {
      time: "11:30 - 12:00",
      title: "Futuro da IA - Como me preparar?",
      description: "Tendências, oportunidades e habilidades do profissional do futuro",
      highlight: false
    },
    {
      time: "12:00 - 12:30",
      title: "Perguntas e Respostas",
      description: "Espaço para tirar dúvidas diretamente com o professor",
      highlight: false
    }
  ];

  return (
    <section id="programa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Programação Completa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3.5 horas de conteúdo prático e interativo para dominar a IA 
            e aplicá-la na sua área profissional.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {programItems.map((item, index) => (
              <div 
                key={index}
                className={`relative bg-card rounded-2xl p-6 border transition-smooth hover:shadow-soft ${
                  item.highlight 
                    ? 'border-primary/30 bg-primary/5' 
                    : 'border-border hover:border-primary/20'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-40 flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium text-primary">{item.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <Play className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {item.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Destaque
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-accent/10 rounded-2xl p-8 border border-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-accent">Interação Ao Vivo</h3>
            </div>
            <p className="text-muted-foreground">
              Durante todo o evento, você poderá fazer perguntas no chat e interagir 
              diretamente com o instrutor. Aproveite esta oportunidade única para 
              esclarecer suas dúvidas em tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};