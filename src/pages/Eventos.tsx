import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Search, Filter, Music, Heart, Utensils, Users, Theater, Mic, Ticket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  city: string;
  category: string;
  price: number;
  image: string;
  gradient: string;
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Festival de Música Eletrônica",
    date: "25 Jan 2025",
    time: "22:00",
    location: "Arena Festival",
    city: "São Paulo, SP",
    category: "Festas e Shows",
    price: 150,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "2",
    title: "Stand Up Comedy Night",
    date: "28 Jan 2025",
    time: "20:00",
    location: "Teatro Municipal",
    city: "Rio de Janeiro, RJ",
    category: "Stand Up Comedy",
    price: 80,
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "3",
    title: "Festival Gastronômico",
    date: "01 Fev 2025",
    time: "12:00",
    location: "Parque da Cidade",
    city: "Brasília, DF",
    category: "Gastronômico",
    price: 0,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "4",
    title: "Congresso de Tecnologia",
    date: "05 Fev 2025",
    time: "09:00",
    location: "Centro de Convenções",
    city: "Curitiba, PR",
    category: "Congressos e Palestras",
    price: 250,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "5",
    title: "Show de Rock Nacional",
    date: "10 Fev 2025",
    time: "21:00",
    location: "Estádio Municipal",
    city: "Belo Horizonte, MG",
    category: "Festas e Shows",
    price: 120,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    id: "6",
    title: "Espetáculo de Teatro",
    date: "15 Fev 2025",
    time: "19:30",
    location: "Teatro Nacional",
    city: "Salvador, BA",
    category: "Teatros e Espetáculos",
    price: 90,
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800",
    gradient: "from-cyan-500 to-sky-600",
  },
];

const categories = [
  { value: "all", label: "Todas as categorias", icon: null },
  { value: "festas", label: "Festas e Shows", icon: <Music size={16} /> },
  { value: "religiao", label: "Religião", icon: <Heart size={16} /> },
  { value: "gastronomico", label: "Gastronômico", icon: <Utensils size={16} /> },
  { value: "congressos", label: "Congressos", icon: <Users size={16} /> },
  { value: "teatro", label: "Teatro", icon: <Theater size={16} /> },
  { value: "standup", label: "Stand Up", icon: <Mic size={16} /> },
];

const EventCard = ({ event }: { event: Event }) => (
  <div className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className="aspect-[4/3] relative overflow-hidden">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Category Badge */}
      <div className={`absolute top-4 left-4 bg-gradient-to-r ${event.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
        {event.category}
      </div>
      
      {/* Price Badge */}
      {event.price === 0 ? (
        <div className="absolute top-4 right-4 bg-mb-teal text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
          Grátis
        </div>
      ) : (
        <div className="absolute top-4 right-4 bg-white text-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
          R$ {event.price}
        </div>
      )}

      {/* Event info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-bold text-xl text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
      </div>
    </div>
    
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Calendar size={16} className="text-primary" />
          <span>{event.date} • {event.time}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-5">
        <MapPin size={16} className="text-primary" />
        <span>{event.city}</span>
      </div>
      <Button className="w-full rounded-full bg-coral-gradient hover:opacity-90 text-white font-semibold gap-2 h-12 shadow-lg shadow-primary/20">
        Comprar ingresso
        <ArrowRight size={16} />
      </Button>
    </div>
  </div>
);

const Eventos = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-mb-navy px-6 py-5">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Ticket size={22} className="text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">
              MB<span className="text-primary">Ticket</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#precos" className="text-white/70 hover:text-white transition-colors font-medium">
              Preços
            </Link>
            <Link to="/#funcionalidades" className="text-white/70 hover:text-white transition-colors font-medium">
              Recursos
            </Link>
            <Link to="/eventos" className="text-white font-bold">
              Explorar
            </Link>
            <Button className="bg-coral-gradient hover:opacity-90 text-white font-semibold rounded-full px-6">
              Criar Evento
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero-gradient py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            Descubra experiências incríveis
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Encontre seu próximo <span className="bg-coral-gradient bg-clip-text text-transparent">evento</span>
          </h1>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
            Os melhores eventos perto de você, com ingressos seguros e entrada garantida
          </p>
          
          {/* Search */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-3 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Buscar eventos, artistas, locais..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-12 h-14 bg-muted/50 border-0 rounded-xl text-base"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="md:w-[220px] h-14 bg-muted/50 border-0 rounded-xl">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      <div className="flex items-center gap-2">
                        {cat.icon}
                        <span>{cat.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="h-14 px-8 rounded-xl bg-coral-gradient hover:opacity-90 text-white font-bold shadow-lg shadow-primary/30">
                <Search size={20} className="mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-2">
                Eventos em destaque
              </h2>
              <p className="text-muted-foreground">
                {mockEvents.length} eventos encontrados
              </p>
            </div>
            <Button variant="outline" className="rounded-full gap-2">
              <Filter size={16} />
              Filtros
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" className="rounded-full px-10 h-14 text-base">
              Carregar mais eventos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
