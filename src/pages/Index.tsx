import { Button } from "@/components/ui/button";
import { Package, ShoppingBag, TrendingUp, MessageCircle, Instagram, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import kitImage from "@/assets/kit-jewelry.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary-glow" />
            <span className="font-serif text-xl tracking-wide text-primary-foreground">
              Clara <span className="font-light italic">Folheados</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/90">
            <a href="#como-funciona" className="hover:text-primary-glow transition-smooth">Como Funciona</a>
            <a href="#contato" className="hover:text-primary-glow transition-smooth">Contato</a>
          </nav>
          <Button variant="gold" size="sm" asChild>
            <a href="https://wa.me/5561994280708?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20ser%20uma%20revendedora" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center">
        <img
          src={heroImage}
          alt="Mostruário de semijoias folheadas a ouro Clara Folheados"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="container relative z-10 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-glow/30 mb-8">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground">Seja uma revendedora de sucesso</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.05] mb-6">
              Sua parceira no mundo das <em className="text-gradient-gold not-italic font-normal">semijoias</em>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed font-light">
              Fornecemos kits completos para você revender e lucrar, sem investimento inicial. Transforme sua vida com peças que encantam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <a href="https://wa.me/5561994280708?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20ser%20uma%20revendedora" target="_blank" rel="noopener noreferrer">Quero ser revendedora</a>
              </Button>
              <Button variant="outlineGold" size="xl" className="text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground hover:text-foreground" asChild>
                <a href="#como-funciona">Como funciona</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 md:py-32 bg-gradient-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">O Processo</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Como Funciona</h2>
            <p className="text-muted-foreground leading-relaxed">
              Três passos simples para transformar sua vida e começar a lucrar com semijoias de qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { num: "01", icon: Package, title: "Pegue seu Kit", desc: "Receba um mostruário completo com nossas peças mais desejadas, prontas para conquistar suas clientes." },
              { num: "02", icon: ShoppingBag, title: "Venda para suas clientes", desc: "Apresente as semijoias para sua rede. Peças sofisticadas que vendem sozinhas." },
              { num: "03", icon: TrendingUp, title: "Lucre com a gente", desc: "Receba sua margem de lucro a cada venda. Sem riscos, sem investimento inicial." },
            ].map((step, i) => (
              <div key={i} className="group relative bg-card p-10 rounded-sm shadow-soft hover:shadow-elegant transition-smooth border border-border/50">
                <span className="absolute top-6 right-8 font-serif text-6xl text-primary/10 group-hover:text-primary/20 transition-smooth">{step.num}</span>
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre / Imagem */}
      <section className="py-24 md:py-32">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={kitImage}
              alt="Kit de semijoias folheadas a ouro Clara Folheados"
              className="rounded-sm shadow-elegant w-full"
              loading="lazy"
              width={1200}
              height={1200}
            />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-gradient-gold p-8 rounded-sm shadow-gold max-w-[220px]">
              <div className="text-primary-foreground">
                <div className="font-serif text-4xl mb-1">+1.000</div>
                <div className="text-xs uppercase tracking-widest opacity-90">revendedoras de sucesso</div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Sobre a Clara</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 leading-tight">
              Peças sofisticadas, <em className="text-gradient-gold not-italic">resultados reais</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Somos uma distribuidora de semijoias folheadas a ouro, comprometida em oferecer peças de altíssima qualidade para mulheres que desejam empreender e transformar sua vida financeira.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Trabalhamos com o sistema de consignação para que você comece sem custos e cresça no seu ritmo, com todo o suporte da nossa equipe.
            </p>
            <ul className="space-y-3">
              {["Sem investimento inicial", "Suporte completo para revendedoras", "Peças com garantia e qualidade premium", "Margem de lucro atrativa"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contato CTA */}
      <section id="contato" className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-gold" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-8 w-8 text-primary-glow mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
              Pronta para começar a <em className="text-gradient-gold not-italic">brilhar</em>?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-12 leading-relaxed font-light">
              Seja você uma revendedora experiente ou esteja começando agora, temos o suporte e os kits ideais para você. Fale com nossa equipe.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "(61) 99428-0708" },
                { icon: Mail, label: "E-mail", value: "contato@clarafolheados.com.br" },
                { icon: Instagram, label: "Instagram", value: "@clara.folheadoss" },
              ].map((c) => (
                <div key={c.label} className="p-6 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm hover:border-primary-glow/40 transition-smooth">
                  <c.icon className="h-5 w-5 text-primary-glow mb-3" />
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-1">{c.label}</div>
                  <div className="text-sm">{c.value}</div>
                </div>
              ))}
            </div>

            <div id="area-revendedora" className="flex justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href="https://wa.me/5561994280708?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20ser%20uma%20revendedora" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-serif text-xl tracking-wide">
                  Clara <span className="font-light italic">Folheados</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Distribuidora de semijoias folheadas a ouro. Especialistas em revenda e consignação para mulheres empreendedoras.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Informações</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="text-foreground">Razão Social:</span> CLARA FOLHEADOS LTDA</li>
                <li><span className="text-foreground">CNPJ:</span> 42.268.882/0001-10</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Endereço</h4>
              <p className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                Vicente Pires, Rua 05, Chácara 116, Lote 1E, Sala 510 — Brasília/DF
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Clara Folheados Ltda. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-smooth">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-smooth">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
