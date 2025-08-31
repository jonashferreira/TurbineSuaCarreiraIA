import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Gerente de Marketing",
      content: "O curso me abriu os olhos para as possibilidades da IA no marketing. Agora uso ferramentas de IA diariamente para criar campanhas mais eficientes.",
      rating: 5
    },
    {
      name: "João Santos", 
      role: "Desenvolvedor",
      content: "Excelente didática! Consegui entender conceitos complexos de forma simples e aplicar no meu trabalho imediatamente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Empreendedora",
      content: "Investimento que se paga sozinho. A IA está me ajudando a automatizar processos e focar no que realmente importa no meu negócio.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            O que dizem nossos alunos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de profissionais que transformaram suas carreiras 
            com o conhecimento em Inteligência Artificial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-soft border border-border relative">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};