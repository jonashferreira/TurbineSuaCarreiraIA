import { CheckCircle, Brain, Zap, TrendingUp, Users, Clock } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Fundamentos da IA",
      description: "Entenda o que é IA, sua origem e aplicações no mundo real"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Comunicação Eficiente",
      description: "Aprenda a se comunicar corretamente com ferramentas de IA"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Aplicações Práticas",
      description: "Exemplos reais para vendas, TI, marketing, educação e mais"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorias Exclusivas",
      description: "Acesso direto aos especialistas para tirar suas dúvidas"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Otimização de Tempo",
      description: "Aumente sua produtividade usando IA no dia a dia"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Preparação para o Futuro",
      description: "Desenvolva habilidades essenciais para o mercado de trabalho"
    }
  ];

  return (
    <section className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que participar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolva as competências essenciais para se destacar no mercado de trabalho 
            em um mundo transformado pela Inteligência Artificial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-smooth border border-border hover:border-primary/20 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-smooth">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};