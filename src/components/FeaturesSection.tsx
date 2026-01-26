import { Calendar, RefreshCw, QrCode, BarChart3, CreditCard, MessageCircle, BarChart, TrendingUp, Smartphone, Share2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const Feature = ({ icon, title, description, delay, isVisible }: FeatureProps) => (
  <div 
    className={`group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-coral-gradient group-hover:text-white transition-all group-hover:scale-110">
      {icon}
    </div>
    <h3 className="font-bold text-xl text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation(0.1);

  const features = [
    {
      icon: <Calendar size={32} />,
      title: "Criação Rápida",
      description: "Monte seu evento em minutos com nossa interface intuitiva e moderna.",
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Virada de Lote",
      description: "Configure a virada automática de lotes e maximize suas vendas.",
    },
    {
      icon: <QrCode size={32} />,
      title: "Check-in Digital",
      description: "Valide ingressos por QR Code com nosso app exclusivo.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Relatórios Live",
      description: "Acompanhe vendas e métricas em tempo real pelo dashboard.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Nativo",
      description: "Gerencie tudo pelo celular com nosso aplicativo completo.",
    },
    {
      icon: <Share2 size={32} />,
      title: "Links Rastreáveis",
      description: "Crie links únicos para influenciadores e acompanhe conversões.",
    },
  ];

  return (
    <section id="funcionalidades" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className={`inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Recursos poderosos
          </span>
          <h2 
            className={`text-3xl md:text-5xl font-black text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Tudo para <span className="bg-coral-gradient bg-clip-text text-transparent">vender mais</span>
          </h2>
          <p 
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Ferramentas profissionais para transformar seu evento em sucesso
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              {...feature} 
              delay={index * 80 + 200}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Highlight Section */}
        <div 
          ref={ref2}
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-secondary dark:bg-mb-navy p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
                  Vendas +30%
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-secondary-foreground mb-6">
                  Aumente suas vendas com <span className="bg-coral-gradient bg-clip-text text-transparent">validação inteligente</span>
                </h3>
                <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8">
                  Nossa tecnologia de microcobrança valida cartões em segundos, 
                  evitando fraudes e aprovando compras legítimas instantaneamente.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "99.5%", label: "Taxa de aprovação" },
                    { value: "-90%", label: "Menos chargebacks" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-secondary-foreground/5 dark:bg-white/5 rounded-2xl p-5 border border-secondary-foreground/10 dark:border-white/10">
                      <p className="text-3xl font-black text-secondary-foreground mb-1">{stat.value}</p>
                      <p className="text-secondary-foreground/60 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-secondary-foreground/5 dark:bg-white/5 backdrop-blur rounded-3xl p-8 border border-secondary-foreground/10 dark:border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-coral-gradient rounded-2xl flex items-center justify-center shadow-lg">
                      <CreditCard size={28} className="text-white" />
                    </div>
                    <div>
                      <p className="text-secondary-foreground font-bold">Pagamento Seguro</p>
                      <p className="text-secondary-foreground/60 text-sm">Validação em 3 segundos</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-secondary-foreground/10 dark:bg-white/10 rounded-xl p-4 flex items-center justify-between">
                      <span className="text-secondary-foreground/80">Pix Instantâneo</span>
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    </div>
                    <div className="bg-secondary-foreground/10 dark:bg-white/10 rounded-xl p-4 flex items-center justify-between">
                      <span className="text-secondary-foreground/80">Cartão de Crédito</span>
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    </div>
                    <div className="bg-secondary-foreground/10 dark:bg-white/10 rounded-xl p-4 flex items-center justify-between">
                      <span className="text-secondary-foreground/80">Cartão de Débito</span>
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float">
                  ✓ Aprovado!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
