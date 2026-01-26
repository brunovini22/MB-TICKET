import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowRight, Sparkles, Play, Users, Star, Zap } from "lucide-react";
import CreateEventModal from "./CreateEventModal";

const HeroSection = () => {
  const [createEventOpen, setCreateEventOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-mb-navy overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-mb-gold rounded-full animate-float opacity-30" style={{ animationDelay: "0.5s" }} />
        </div>
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">+50.000 eventos realizados</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Seus eventos,<br />
                <span className="bg-coral-gradient bg-clip-text text-transparent">seu dinheiro,</span><br />
                <span className="text-white/90">no mesmo dia.</span>
              </h1>
              
              <p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                A plataforma que revoluciona a forma de vender ingressos. 
                Crie, gerencie e receba — tudo em tempo real.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button 
                  size="lg" 
                  onClick={() => setCreateEventOpen(true)}
                  className="bg-coral-gradient hover:opacity-90 text-white font-bold px-8 py-7 text-lg rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105 gap-2"
                >
                  Começar agora
                  <ArrowRight size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white/20 font-semibold px-8 py-7 text-lg rounded-full gap-2 backdrop-blur-sm bg-white/5"
                >
                  <Play size={18} className="fill-white" />
                  Ver como funciona
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-mb-gold border-2 border-mb-navy flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i === 4 ? '+' : ''}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="fill-mb-gold text-mb-gold" />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm">+2.000 produtores satisfeitos</p>
                </div>
              </div>
            </div>

            {/* Right - Stats Cards */}
            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.5s" }}>
              {/* Main Card */}
              <div className="bg-card dark:bg-card backdrop-blur-xl rounded-3xl p-8 border border-border shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-coral-gradient rounded-xl flex items-center justify-center">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-card-foreground font-bold text-lg">Repasse Imediato</h3>
                    <p className="text-muted-foreground text-sm">Receba suas vendas no mesmo dia</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-muted rounded-2xl p-5 border border-border">
                    <p className="text-4xl font-black text-card-foreground mb-1">R$0</p>
                    <p className="text-accent font-semibold text-sm">Eventos grátis</p>
                  </div>
                  <div className="bg-muted rounded-2xl p-5 border border-border">
                    <p className="text-4xl font-black text-card-foreground mb-1">10%</p>
                    <p className="text-primary font-semibold text-sm">Eventos pagos</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Check-in por QR Code",
                    "Relatórios em tempo real",
                    "Virada de lote automática",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-card-foreground">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-xl animate-float border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Users size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-foreground">10M+</p>
                    <p className="text-muted-foreground text-xs">Ingressos vendidos</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl animate-float border border-border" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-foreground">1000+</p>
                    <p className="text-muted-foreground text-xs">Cidades atendidas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 50L48 45.8C96 41.7 192 33.3 288 29.2C384 25 480 25 576 33.3C672 41.7 768 58.3 864 62.5C960 66.7 1056 58.3 1152 50C1248 41.7 1344 33.3 1392 29.2L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      <CreateEventModal open={createEventOpen} onOpenChange={setCreateEventOpen} />
    </>
  );
};

export default HeroSection;
