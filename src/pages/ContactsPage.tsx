import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const specialists = [
  "Стоматолог-ортопед", "Детский врач-стоматолог", "Стоматолог-терапевт",
  "Стоматолог-ортодонт", "Стоматолог-имплантолог", "Стоматолог-хирург",
  "Детский стоматолог-хирург", "Стоматолог-пародонтолог",
];

const contactInfo = [
  { icon: MapPin, title: "Адрес", text: "г. Москва, ул. Серпуховский вал 21, корп 4" },
  { icon: Phone, title: "Телефон", text: "+7 (495) 975-95-98", href: "tel:+74959759598" },
  { icon: Mail, title: "Email", text: "clinic@articon.pro", href: "mailto:clinic@articon.pro" },
  { icon: Clock, title: "Режим работы", text: "Ежедневно с 9:00 до 21:00" },
];

const ContactsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", specialist: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Заявка отправлена!", description: "Администратор свяжется с вами в ближайшее время." });
    setFormData({ name: "", phone: "", specialist: "", message: "" });
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-6">
              Свяжитесь с нами
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              Контакты
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Запишитесь на приём или задайте вопрос
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10 origin-left"
        />
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 sm:p-10 border border-border"
            >
              <h2 className="font-display font-bold text-foreground text-2xl mb-2">Запись на приём</h2>
              <p className="text-muted-foreground text-sm mb-8">Заполните форму — мы перезвоним в течение 15 минут</p>

              <div className="space-y-5">
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'top-1 text-[10px] text-brand-teal font-medium'
                      : 'top-3.5 text-sm text-muted-foreground'
                  }`}>Ваше имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="h-14 pt-5 bg-secondary/50 border-border focus:border-brand-teal focus:ring-brand-teal/20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                    focusedField === 'phone' || formData.phone
                      ? 'top-1 text-[10px] text-brand-teal font-medium'
                      : 'top-3.5 text-sm text-muted-foreground'
                  }`}>Телефон</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="h-14 pt-5 bg-secondary/50 border-border focus:border-brand-teal focus:ring-brand-teal/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block tracking-wider uppercase">Специалист</label>
                  <Select value={formData.specialist} onValueChange={(v) => setFormData({ ...formData, specialist: v })}>
                    <SelectTrigger className="h-14 bg-secondary/50 border-border focus:border-brand-teal"><SelectValue placeholder="Выберите специалиста" /></SelectTrigger>
                    <SelectContent>
                      {specialists.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block tracking-wider uppercase">Сообщение</label>
                  <Textarea
                    placeholder="Опишите вашу проблему или пожелания..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-brand-teal focus:ring-brand-teal/20 transition-all duration-300"
                  />
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6 mb-5">Нажимая «Записаться», вы соглашаетесь с условиями обработки персональных данных</p>
              <Button type="submit" size="lg" className="w-full bg-brand-teal text-primary-foreground font-semibold h-14 transition-all duration-500 hover:bg-brand-teal/85 hover:shadow-[0_0_30px_hsl(174,72%,46%,0.2)] hover:scale-[1.02]">
                Записаться <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-6"
            >
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="group flex items-start gap-5 p-5 rounded-2xl hover:bg-card hover:shadow-lg transition-all duration-400"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-400">
                    <item.icon className="w-5 h-5 text-brand-teal group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-0.5">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-brand-teal transition-colors duration-300 text-sm">{item.text}</a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="rounded-2xl overflow-hidden border border-border shadow-lg mt-4"
              >
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor&ll=37.608649%2C55.711355&z=15&pt=37.608649%2C55.711355%2Cpm2blm"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  title="Карта Articon"
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
