import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const specialists = [
  "Стоматолог-ортопед", "Детский врач-стоматолог", "Стоматолог-терапевт",
  "Стоматолог-ортодонт", "Стоматолог-имплантолог", "Стоматолог-хирург",
  "Детский стоматолог-хирург", "Стоматолог-пародонтолог",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const ContactsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", specialist: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Заявка отправлена!", description: "Администратор свяжется с вами в ближайшее время." });
    setFormData({ name: "", phone: "", specialist: "", message: "" });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Свяжитесь с нами</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Контакты</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="bg-card rounded-xl p-8 border border-border space-y-5 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="font-display font-semibold text-foreground text-xl mb-4">Запись на приём</h2>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Ваше имя</label>
              <Input placeholder="Иван Иванов" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон</label>
              <Input placeholder="+7 (___) ___-__-__" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-12" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Выбрать специалиста</label>
              <Select value={formData.specialist} onValueChange={(v) => setFormData({ ...formData, specialist: v })}>
                <SelectTrigger className="h-12"><SelectValue placeholder="Выберите специалиста" /></SelectTrigger>
                <SelectContent>
                  {specialists.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Сообщение</label>
              <Textarea placeholder="Опишите вашу проблему или пожелания..." rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </div>
            <p className="text-xs text-muted-foreground">Нажимая «Записаться», вы соглашаетесь с условиями обработки персональных данных</p>
            <Button type="submit" size="lg" className="w-full bg-brand-blue text-primary-foreground font-semibold h-12 hover:bg-brand-blue/90 transition-colors">
              Записаться
            </Button>
          </motion.form>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="space-y-6">
            {[
              { icon: MapPin, title: "Адрес", text: "г. Москва, ул. Серпуховский вал 21, корп 4" },
              { icon: Phone, title: "Телефон", text: "+7 (495) 975-95-98", href: "tel:+74959759598" },
              { icon: Mail, title: "Email", text: "clinic@articon.pro", href: "mailto:clinic@articon.pro" },
              { icon: Clock, title: "Режим работы", text: "Ежедневно с 9:00 до 21:00" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-brand-blue transition-colors duration-300">{item.text}</a>
                  ) : (
                    <p className="text-muted-foreground">{item.text}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-xl overflow-hidden border border-border mt-4">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor&ll=37.608649%2C55.711355&z=15&pt=37.608649%2C55.711355%2Cpm2blm" width="100%" height="300" frameBorder="0" title="Карта Articon" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
