import { Users, Percent, Link, TrendingUp, Share2, BarChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "./ui/button";

const InfluencerSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-mb-teal/10 text-mb-teal rounded-full text-sm font-semibold mb-6">
              Marketing de afiliados
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              Monte sua <span className="bg-coral-gradient bg-clip-text text-transparent">rede de vendedores</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Transforme influenciadores e parceiros em sua força de vendas. 
              Distribua links personalizados, acompanhe conversões e pague comissões automaticamente.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Users size={24} />, value: "∞", label: "Afiliados" },
                { icon: <TrendingUp size={24} />, value: "+40%", label: "Em vendas" },
                { icon: <BarChart size={24} />, value: "Real-time", label: "Tracking" },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className={`text-center p-4 bg-card rounded-2xl border border-border transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <p className="text-xl font-black text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button className="bg-coral-gradient hover:opacity-90 text-white font-bold rounded-full px-8 h-14 gap-2 shadow-lg shadow-primary/20">
              Conhecer programa de afiliados
              <Share2 size={18} />
            </Button>
          </div>

          {/* Visual */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-card-gradient rounded-3xl p-8 border border-border shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-coral-gradient rounded-xl flex items-center justify-center">
                    <Link size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Painel de Afiliados</p>
                    <p className="text-sm text-muted-foreground">Dashboard em tempo real</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-foreground">R$ 12.450</p>
                  <p className="text-xs text-mb-teal font-medium">+23% este mês</p>
                </div>
              </div>

              {/* Affiliates list */}
              <div className="space-y-4">
                {[
                  { name: "Maria Silva", sales: 156, revenue: "R$ 4.680", trend: "+12%" },
                  { name: "João Costa", sales: 98, revenue: "R$ 2.940", trend: "+8%" },
                  { name: "Ana Paula", sales: 87, revenue: "R$ 2.610", trend: "+15%" },
                ].map((affiliate, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-mb-gold flex items-center justify-center text-white text-sm font-bold">
                        {affiliate.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{affiliate.name}</p>
                        <p className="text-xs text-muted-foreground">{affiliate.sales} vendas</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground text-sm">{affiliate.revenue}</p>
                      <p className="text-xs text-mb-teal">{affiliate.trend}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
                <div className="bg-mb-teal/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-mb-teal">341</p>
                  <p className="text-xs text-muted-foreground">Vendas totais</p>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-primary">R$ 2.245</p>
                  <p className="text-xs text-muted-foreground">Comissões pagas</p>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -top-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-mb-teal rounded-lg flex items-center justify-center">
                  <Percent size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Nova venda!</p>
                  <p className="text-xs text-muted-foreground">Comissão: R$ 15,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;
