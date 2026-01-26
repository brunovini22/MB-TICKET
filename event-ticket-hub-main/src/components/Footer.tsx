import { ArrowRight, Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin, Ticket } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-mb-navy text-secondary-foreground dark:text-white">
      {/* CTA Section */}
      <div className="border-b border-secondary-foreground/10 dark:border-white/10">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Pronto para <span className="bg-coral-gradient bg-clip-text text-transparent">revolucionar</span> seus eventos?
            </h2>
            <p className="text-secondary-foreground/60 dark:text-white/60 text-lg mb-10">
              Junte-se a milhares de produtores que já estão vendendo mais e recebendo no mesmo dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-secondary-foreground/20 dark:border-white/20 text-secondary-foreground dark:text-white hover:bg-secondary-foreground/10 dark:hover:bg-white/10 rounded-full px-8 h-14">
                Falar com especialista
              </Button>
              <Button className="bg-coral-gradient hover:opacity-90 text-white gap-2 rounded-full px-8 h-14 shadow-lg shadow-primary/30">
                Criar meu primeiro evento
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-coral-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Ticket size={22} className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">
                MB<span className="text-primary">Ticket</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/50 dark:text-white/50 mb-6 leading-relaxed">
              A plataforma mais moderna para vendas de ingressos com repasse imediato.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Youtube size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-secondary-foreground/5 dark:bg-white/5 flex items-center justify-center hover:bg-coral-gradient transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-6 text-secondary-foreground/90 dark:text-white/90">Plataforma</h3>
            <ul className="space-y-4 text-secondary-foreground/50 dark:text-white/50">
              <li><a href="#precos" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Recursos</a></li>
              <li><Link to="/eventos" className="hover:text-primary transition-colors">Explorar eventos</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Central de ajuda</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-6 text-secondary-foreground/90 dark:text-white/90">Empresa</h3>
            <ul className="space-y-4 text-secondary-foreground/50 dark:text-white/50">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-secondary-foreground/90 dark:text-white/90">Contato</h3>
            <ul className="space-y-4 text-secondary-foreground/50 dark:text-white/50">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>contato@mbticket.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/40 dark:text-white/40 text-sm">
            © 2024 MB Ticket. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-secondary-foreground/40 dark:text-white/40 text-sm">
            <a href="#" className="hover:text-secondary-foreground dark:hover:text-white transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-secondary-foreground dark:hover:text-white transition-colors">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
