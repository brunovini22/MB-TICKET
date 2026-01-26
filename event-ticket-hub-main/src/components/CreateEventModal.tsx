import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, ArrowRight, Image, Calendar, MapPin, Ticket, X } from "lucide-react";

interface CreateEventModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "oque" | "quando" | "onde" | "quanto";

const steps: { id: Step; label: string }[] = [
  { id: "oque", label: "O quê?" },
  { id: "quando", label: "Quando?" },
  { id: "onde", label: "Onde?" },
  { id: "quanto", label: "Quanto?" },
];

const CreateEventModal = ({ open, onOpenChange }: CreateEventModalProps) => {
  const [currentStep, setCurrentStep] = useState<Step>("oque");
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    visibilidade: "publico",
    descricao: "",
    dataInicio: "",
    horaInicio: "",
    dataTermino: "",
    horaTermino: "",
    local: "",
    endereco: "",
    numero: "",
    complemento: "",
    estado: "",
    cidade: "",
    tipoIngresso: "pago",
    tituloIngresso: "",
    lote: "1",
    preco: "",
    quantidade: "",
  });

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  const goNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1].id);
    }
  };

  const goPrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1].id);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        {/* Step Navigation */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b">
          <div className="flex items-center gap-8">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`text-sm font-medium transition-colors pb-2 border-b-2 ${
                  currentStep === step.id
                    ? "text-foreground border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              Dúvida?
            </Button>
          </div>
        </div>

        <div className="p-6">
          {/* Step: O quê? */}
          {currentStep === "oque" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-foreground">Detalhes sobre seu evento</h2>
              
              {/* Banner Upload */}
              <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <Image className="text-muted-foreground group-hover:text-primary" size={32} />
                </div>
                <p className="text-muted-foreground mb-4">
                  Recomendamos imagem com 1400 x 700. Tamanho máximo 2 MB
                </p>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full">
                  Carregar Banner
                </Button>
              </div>

              <Input
                placeholder="Título do Evento"
                value={formData.titulo}
                onChange={(e) => handleChange("titulo", e.target.value)}
                className="h-12"
              />

              <Select value={formData.categoria} onValueChange={(v) => handleChange("categoria", v)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Categoria do Evento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="festa">Festa e Show</SelectItem>
                  <SelectItem value="religiao">Religião e Espiritualidade</SelectItem>
                  <SelectItem value="gastronomico">Gastronômico</SelectItem>
                  <SelectItem value="congresso">Congressos e Palestras</SelectItem>
                  <SelectItem value="teatro">Teatros e Espetáculos</SelectItem>
                  <SelectItem value="standup">Stand Up Comedy</SelectItem>
                </SelectContent>
              </Select>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Visibilidade do evento
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visibilidade"
                      checked={formData.visibilidade === "publico"}
                      onChange={() => handleChange("visibilidade", "publico")}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-foreground">Público</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visibilidade"
                      checked={formData.visibilidade === "oculto"}
                      onChange={() => handleChange("visibilidade", "oculto")}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="text-foreground">Oculto</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Descrição
                </label>
                <Textarea
                  placeholder="Descreva seu evento com o máximo de detalhes. Quanto mais detalhado mais vendas 🔥"
                  value={formData.descricao}
                  onChange={(e) => handleChange("descricao", e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
            </div>
          )}

          {/* Step: Quando? */}
          {currentStep === "quando" && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Data do evento</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Informe aos participantes quando seu evento vai acontecer.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Início do evento
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="date"
                        value={formData.dataInicio}
                        onChange={(e) => handleChange("dataInicio", e.target.value)}
                        className="h-12"
                      />
                      <Input
                        type="time"
                        value={formData.horaInicio}
                        onChange={(e) => handleChange("horaInicio", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Término do evento
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="date"
                        value={formData.dataTermino}
                        onChange={(e) => handleChange("dataTermino", e.target.value)}
                        className="h-12"
                      />
                      <Input
                        type="time"
                        value={formData.horaTermino}
                        onChange={(e) => handleChange("horaTermino", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                <button className="text-primary font-medium text-sm mt-4 hover:underline">
                  + Nova data (Opcional)
                </button>
              </div>
            </div>
          )}

          {/* Step: Onde? */}
          {currentStep === "onde" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-foreground">Onde será o seu evento?</h2>

              <div className="bg-secondary text-secondary-foreground rounded-full px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{formData.local || "Buscar local..."}</span>
                </div>
                <button className="hover:bg-secondary-foreground/10 p-1 rounded-full">
                  <X size={18} />
                </button>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Confirme se está tudo certo</h3>

                <div className="space-y-4">
                  <Input
                    placeholder="Nome do local"
                    value={formData.local}
                    onChange={(e) => handleChange("local", e.target.value)}
                    className="h-12"
                  />

                  <div className="grid grid-cols-4 gap-3">
                    <div className="col-span-3">
                      <Input
                        placeholder="Rua / Avenida / Logradouro"
                        value={formData.endereco}
                        onChange={(e) => handleChange("endereco", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <Input
                      placeholder="Número"
                      value={formData.numero}
                      onChange={(e) => handleChange("numero", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      placeholder="Complemento"
                      value={formData.complemento}
                      onChange={(e) => handleChange("complemento", e.target.value)}
                      className="h-12"
                    />
                    <Select value={formData.estado} onValueChange={(v) => handleChange("estado", v)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BA">Bahia</SelectItem>
                        <SelectItem value="SP">São Paulo</SelectItem>
                        <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                        <SelectItem value="MG">Minas Gerais</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Cidade"
                      value={formData.cidade}
                      onChange={(e) => handleChange("cidade", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step: Quanto? */}
          {currentStep === "quanto" && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-foreground">Crie ingressos para o seu evento</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Criar ingresso</h3>

                  <div className="flex gap-2 mb-6">
                    <Button
                      variant={formData.tipoIngresso === "pago" ? "default" : "outline"}
                      onClick={() => handleChange("tipoIngresso", "pago")}
                      className="rounded-full"
                    >
                      Pago
                    </Button>
                    <Button
                      variant={formData.tipoIngresso === "gratuito" ? "default" : "outline"}
                      onClick={() => handleChange("tipoIngresso", "gratuito")}
                      className="rounded-full"
                    >
                      Gratuito
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        placeholder="Título"
                        value={formData.tituloIngresso}
                        onChange={(e) => handleChange("tituloIngresso", e.target.value)}
                        className="h-12"
                      />
                      <Select value={formData.lote} onValueChange={(v) => handleChange("lote", v)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Lote" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1º LOTE</SelectItem>
                          <SelectItem value="2">2º LOTE</SelectItem>
                          <SelectItem value="3">3º LOTE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        placeholder="Preço"
                        type="number"
                        value={formData.preco}
                        onChange={(e) => handleChange("preco", e.target.value)}
                        className="h-12"
                        disabled={formData.tipoIngresso === "gratuito"}
                      />
                      <Input
                        placeholder="Quantidade"
                        type="number"
                        value={formData.quantidade}
                        onChange={(e) => handleChange("quantidade", e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <Button className="w-full h-12 bg-muted text-muted-foreground hover:bg-muted/80">
                      Criar
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8">
                  <div className="text-center text-muted-foreground">
                    <Ticket size={48} className="mx-auto mb-4 opacity-30" />
                    <p>Você ainda não criou nenhum ingresso, adicione ingressos preenchendo o formulário ao lado</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-3 p-6 border-t">
          {currentStepIndex > 0 && (
            <Button
              variant="outline"
              onClick={goPrev}
              className="rounded-full w-12 h-12 p-0"
            >
              <ArrowLeft size={20} />
            </Button>
          )}
          <Button
            onClick={goNext}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 h-12 gap-2"
          >
            {currentStepIndex === steps.length - 1 ? "Finalizar" : "AVANÇAR"}
            {currentStepIndex < steps.length - 1 && <ArrowRight size={18} />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventModal;
