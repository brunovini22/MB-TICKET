import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Ticket } from "lucide-react";
import CreateEventModal from "./CreateEventModal";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [createEventOpen, setCreateEventOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-5">
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
            <a href="#precos" className="text-white/80 hover:text-white transition-colors font-medium">
              Preços
            </a>
            <a href="#funcionalidades" className="text-white/80 hover:text-white transition-colors font-medium">
              Recursos
            </a>
            <Link to="/eventos" className="text-white/80 hover:text-white transition-colors font-medium">
              Explorar
            </Link>
            <ThemeToggle />
            <Button 
              onClick={() => setCreateEventOpen(true)}
              className="bg-coral-gradient hover:opacity-90 text-white font-semibold rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            >
              Criar Evento
            </Button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-mb-navy/98 backdrop-blur-xl p-6 animate-fade-in border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <a href="#precos" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Preços
              </a>
              <a href="#funcionalidades" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Recursos
              </a>
              <Link to="/eventos" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Explorar
              </Link>
              <Button 
                onClick={() => setCreateEventOpen(true)}
                className="bg-coral-gradient text-white font-semibold rounded-full w-full"
              >
                Criar Evento
              </Button>
            </nav>
          </div>
        )}
      </header>

      <CreateEventModal open={createEventOpen} onOpenChange={setCreateEventOpen} />
    </>
  );
};

export default Header;
