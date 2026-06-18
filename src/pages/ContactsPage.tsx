import licenseAsset from "@/assets/license.jpg.asset.json";
import priceListAsset from "@/assets/prajs2026.xlsx.asset.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Mail, ArrowRight, Building2, User, CalendarDays, Landmark, CreditCard, Shield, ClipboardList, FileSignature, Download, Award } from "lucide-react";
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
              <p className="text-muted-foreground text-sm mb-8">Заполните форму — мы перезвоним в самое ближайшее время</p>

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

      {/* Requisites */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
              <Landmark className="w-4 h-4" />
              <span>Юридическая информация</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Реквизиты</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">Юридическое наименование</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">ООО Центр цифровой стоматологии «Артикон»</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">Главный врач</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Артемова Елена Юрьевна</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <CalendarDays className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">Дни и часы приёма главного врача</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Вторник с 10:00 до 15:00 (по предварительной записи)</p>
                    <p className="text-muted-foreground text-sm mt-1">Предварительная запись по телефону: <a href="tel:+74959759598" className="text-brand-blue hover:underline">+7 (495) 975-95-98</a></p>
                    <p className="text-muted-foreground text-sm mt-1">Email: <a href="mailto:dr.elena@articon.pro" className="text-brand-blue hover:underline">dr.elena@articon.pro</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">Юридический адрес</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">115191, г. Москва, ул. Серпуховский вал, д. 21, корп. 4, эт. 1, пом. II</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">Фактический адрес</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">115191, г. Москва, ул. Серпуховский вал, д. 21, корп. 4, эт. 1, пом. II</p>
                  </div>
                </div>
              </div>

              {/* Right column — Banking */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-3">Банковские реквизиты</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground/70">ОГРН</span>
                        <span className="text-foreground font-medium tabular-nums">1187746789867</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground/70">ИНН</span>
                        <span className="text-foreground font-medium tabular-nums">7725496942</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground/70">КПП</span>
                        <span className="text-foreground font-medium tabular-nums">772501001</span>
                      </div>
                      <div className="h-px bg-border my-3" />
                      <p className="text-foreground font-medium">ПАО СБЕРБАНК г. Москва</p>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground/70">БИК</span>
                        <span className="text-foreground font-medium tabular-nums">044525225</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground/70">Расчётный счёт</span>
                        <span className="text-foreground font-medium tabular-nums">40702810438000017086</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground/70">Корр. счёт</span>
                        <span className="text-foreground font-medium tabular-nums">30101810400000000225</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* License */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Лицензия</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8">Лицензия на медицинскую деятельность</h2>
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm inline-block max-w-lg w-full">
              <img
                src={licenseAsset.url}
                alt="Лицензия на осуществление медицинской деятельности № ЛО-77-01-019104"
                className="w-full h-auto rounded-xl"
              />
              <p className="mt-4 text-muted-foreground text-sm">
                Лицензия № ЛО-77-01-019104 от 15 ноября 2019 г.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <a href={priceListAsset.url} download="prajs2026.xlsx">
              <Button variant="outline" size="lg" className="h-14 px-8 border-border hover:border-brand-blue hover:text-brand-blue transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Прайс-лист 2026
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-center"
          >
            <Link to="/patient-rules">
              <Button variant="outline" size="lg" className="h-14 px-8 border-border hover:border-brand-teal hover:text-brand-teal transition-all duration-300">
                <ClipboardList className="w-5 h-5 mr-2" />
                Правила поведения пациента
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-center"
          >
            <Link to="/privacy">
              <Button variant="outline" size="lg" className="h-14 px-8 border-border hover:border-brand-blue hover:text-brand-blue transition-all duration-300">
                <Shield className="w-5 h-5 mr-2" />
                Политика конфиденциальности
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 text-center"
          >
            <Link to="/consent">
              <Button variant="outline" size="lg" className="h-14 px-8 border-border hover:border-brand-blue hover:text-brand-blue transition-all duration-300">
                <FileSignature className="w-5 h-5 mr-2" />
                Согласие на обработку персональных данных
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
