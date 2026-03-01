import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const specialists = [
  "Стоматолог-ортопед",
  "Детский врач-стоматолог",
  "Стоматолог-терапевт",
  "Стоматолог-ортодонт",
  "Стоматолог-имплантолог",
  "Стоматолог-хирург",
  "Детский стоматолог-хирург",
  "Стоматолог-пародонтолог",
];

const ContactsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", specialist: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Заявка отправлена!", description: "Администратор свяжется с вами в ближайшее время." });
    setFormData({ name: "", phone: "", specialist: "", message: "" });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Контакты</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 border border-border space-y-5"
          >
            <h2 className="font-display font-semibold text-foreground text-lg mb-2">Запись на приём</h2>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Ваше имя</label>
              <Input
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон</label>
              <Input
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Выбрать специалиста</label>
              <Select value={formData.specialist} onValueChange={(v) => setFormData({ ...formData, specialist: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите специалиста" />
                </SelectTrigger>
                <SelectContent>
                  {specialists.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Сообщение</label>
              <Textarea
                placeholder="Опишите вашу проблему или пожелания..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Нажимая «Записаться», вы соглашаетесь с условиями обработки персональных данных
            </p>
            <Button type="submit" size="lg" className="w-full bg-brand-blue text-primary-foreground font-semibold hover:bg-brand-blue/90">
              Записаться
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {[
              { icon: MapPin, title: "Адрес", text: "г. Москва, ул. Серпуховский вал 21, корп 4" },
              { icon: Phone, title: "Телефон", text: "+7 (495) 975-95-98", href: "tel:+74959759598" },
              { icon: Mail, title: "Email", text: "clinic@articon.pro", href: "mailto:clinic@articon.pro" },
              { icon: Clock, title: "Режим работы", text: "Ежедневно с 9:00 до 21:00" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-brand-blue flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground text-sm hover:text-brand-blue transition-colors">{item.text}</a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Yandex Map embed */}
            <div className="rounded-xl overflow-hidden border border-border mt-4">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor&ll=37.608649%2C55.711355&z=15&pt=37.608649%2C55.711355%2Cpm2blm"
                width="100%"
                height="300"
                frameBorder="0"
                title="Карта Articon"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
