import { ArrowRight, Check, Zap, Shield, Clock, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="precos" ref={ref} className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span 
            className={`inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Preços transparentes
          </span>
          <h2 
            className={`text-3xl md:text-5xl font-black text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Simples e <span className="bg-coral-gradient bg-clip-text text-transparent">sem surpresas</span>
          </h2>
          <p 
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Você recebe o valor integral no mesmo dia da venda. Sem taxas escondidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Events Card */}
          <div 
            className={`bg-card rounded-3xl p-8 shadow-xl border-2 border-border hover:border-mb-teal/50 transition-all duration-500 hover:shadow-2xl group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-mb-teal/10 flex items-center justify-center group-hover:bg-mb-teal group-hover:text-white transition-all">
                <Zap size={24} className="text-mb-teal group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground">Eventos Gratuitos</h3>
                <p className="text-muted-foreground text-sm">Perfeito para começar</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-black text-foreground">R$0</span>
              </div>
              <p className="text-mb-teal font-semibold">100% gratuito, sempre</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Todos os recursos inclusos",
                "Ingressos ilimitados",
                "Check-in por QR Code",
                "Relatórios completos",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-mb-teal/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-mb-teal" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button className="w-full h-14 rounded-full bg-mb-teal/10 text-mb-teal hover:bg-mb-teal hover:text-white font-semibold transition-all">
              Criar evento gratuito
            </Button>
          </div>

          {/* Paid Events Card */}
          <div 
            className={`relative bg-secondary dark:bg-mb-navy rounded-3xl p-8 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-primary/20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Popular badge */}
            <div className="absolute top-6 right-6 bg-coral-gradient text-white text-xs font-bold px-3 py-1.5 rounded-full">
              POPULAR
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-coral-gradient flex items-center justify-center">
                  <CreditCard size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-secondary-foreground">Eventos Pagos</h3>
                  <p className="text-secondary-foreground/60 text-sm">Receba no mesmo dia</p>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-black text-secondary-foreground">10</span>
                <span className="text-3xl font-bold text-secondary-foreground">%</span>
              </div>
                <p className="text-primary font-semibold">Taxa repassada ao comprador</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { icon: <Clock size={14} />, text: "Repasse no mesmo dia" },
                  { icon: <Shield size={14} />, text: "Zero custo de antecipação" },
                  { icon: <Check size={14} />, text: "Pix e cartões aceitos" },
                  { icon: <Check size={14} />, text: "Suporte prioritário" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                      {item.icon}
                    </div>
                    <span className="text-secondary-foreground/80">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full h-14 rounded-full bg-coral-gradient hover:opacity-90 text-white font-bold transition-all gap-2 shadow-lg shadow-primary/30">
                Criar evento pago
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
