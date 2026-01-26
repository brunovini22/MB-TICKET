import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Ticket, MapPin, Calendar, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

const StatItem = ({ icon, value, label, delay, isVisible }: StatItemProps) => (
  <div 
    className={`text-center p-8 rounded-3xl bg-card-gradient border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 group ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-coral-gradient group-hover:text-white transition-all">
      {icon}
    </div>
    <div className="text-3xl md:text-4xl font-black text-primary mb-2">
      {value}
    </div>
    <div className="text-muted-foreground">{label}</div>
  </div>
);

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const stats = [
    { icon: <Ticket size={28} />, value: "+10M", label: "Ingressos vendidos" },
    { icon: <Calendar size={28} />, value: "+50K", label: "Eventos realizados" },
    { icon: <MapPin size={28} />, value: "+1.000", label: "Cidades atendidas" },
    { icon: <Award size={28} />, value: "+7", label: "Anos no mercado" },
  ];

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span 
            className={`inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Números que impressionam
          </span>
          <h2 
            className={`text-3xl md:text-5xl font-black text-foreground transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Um ingresso vendido a cada <span className="bg-coral-gradient bg-clip-text text-transparent">20 segundos</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              {...stat} 
              delay={index * 100 + 200} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
