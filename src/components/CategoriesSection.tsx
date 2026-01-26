import { Music, Heart, Utensils, Users, Theater, Mic, PartyPopper, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CategoryProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  delay: number;
  isVisible: boolean;
}

const Category = ({ icon, label, color, delay, isVisible }: CategoryProps) => (
  <div 
    className={`group cursor-pointer transition-all duration-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className={`flex flex-col items-center gap-4 p-6 rounded-3xl bg-card border border-border hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${color}`}>
      <div className="w-14 h-14 rounded-2xl bg-muted backdrop-blur flex items-center justify-center text-foreground group-hover:bg-white/90 group-hover:text-gray-700 group-hover:scale-110 transition-all shadow-sm">
        {icon}
      </div>
      <span className="text-sm font-semibold text-foreground group-hover:text-white text-center transition-colors">
        {label}
      </span>
    </div>
  </div>
);

const CategoriesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const categories = [
    { icon: <Music size={26} />, label: "Festas & Shows", color: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-600" },
    { icon: <Mic size={26} />, label: "Stand Up", color: "hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600" },
    { icon: <Utensils size={26} />, label: "Gastronômico", color: "hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600" },
    { icon: <Users size={26} />, label: "Congressos", color: "hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600" },
    { icon: <Theater size={26} />, label: "Teatro", color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600" },
    { icon: <Heart size={26} />, label: "Religioso", color: "hover:bg-gradient-to-br hover:from-cyan-500 hover:to-sky-600" },
    { icon: <PartyPopper size={26} />, label: "Festivais", color: "hover:bg-gradient-to-br hover:from-primary hover:to-orange-600" },
    { icon: <Briefcase size={26} />, label: "Corporativo", color: "hover:bg-gradient-to-br hover:from-slate-600 hover:to-gray-700" },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className={`inline-block px-4 py-2 bg-mb-teal/10 text-mb-teal rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Categorias
          </span>
          <h2 
            className={`text-3xl md:text-5xl font-black text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Para <span className="bg-coral-gradient bg-clip-text text-transparent">todo tipo</span> de evento
          </h2>
          <p 
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            De pequenas reuniões a grandes festivais, temos a solução perfeita
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Category 
              key={index} 
              {...category} 
              delay={index * 60 + 200}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
