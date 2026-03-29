import { Button } from "./ui/button";
// Asumiendo que en el futuro instales estos componentes de shadcn:
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
          05 // Get in touch
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6">
          Iniciemos una conversación
        </h2>
        <p className="text-outline text-lg">
          Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible por responderte.
        </p>
      </div>

      <form className="glass-card p-8 rounded-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="font-label text-sm text-on-surface">Nombre</label>
            <Input id="name" className="w-full bg-surface-container-high border border-white/10 rounded-md p-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="font-label text-sm text-on-surface">Email</label>
            <Input id="email" type="email" className="w-full bg-surface-container-high border border-white/10 rounded-md p-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="font-label text-sm text-on-surface">Mensaje</label>
          <Textarea id="message" rows={5} className="w-full bg-surface-container-high border border-white/10 rounded-md p-3 text-on-surface focus:outline-none focus:border-primary transition-colors resize-none" placeholder="¿En qué te puedo ayudar?..." />
        </div>
        <Button className="w-full bg-primary text-on-primary font-bold py-6">
          Enviar Mensaje
        </Button>
      </form>
    </section>
  );
};