import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Award, Heart, ShieldCheck, Sparkles, Users, Cpu, Star, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const values = [
  { icon: Heart, title: "Искренность", desc: "Искренняя заинтересованность в наилучшем результате для каждого пациента" },
  { icon: Award, title: "Профессионализм", desc: "Специалисты высшей категории с постоянным повышением квалификации" },
  { icon: Sparkles, title: "Инновации", desc: "CAD/CAM оборудование и цифровые протоколы из Германии, США и Южной Кореи" },
  { icon: ShieldCheck, title: "Безопасность", desc: "Многоступенчатая система стерилизации и контроль качества на каждом этапе" },
];

const advantages = [
  { icon: Cpu, title: "Цифровые протоколы лечения", desc: "Первыми внедряем технологии, которые только появляются на российском рынке" },
  { icon: Users, title: "Команда экспертов", desc: "Каждый специалист обладает уникальными сильными сторонами, которые мы раскрываем и усиливаем" },
  { icon: Star, title: "Индивидуальный подход", desc: "Не массовость, а качественное лечение и долгосрочные отношения с пациентом" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const AboutPage = () => {
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
              О клинике
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-2xl">
              Центр цифровой стоматологии Articon
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Современная стоматология с 15-летним опытом, передовыми технологиями и искренней заботой о каждом пациенте
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10 origin-left"
        />
      </section>

      {/* Founder Letter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue mb-4 block">Слово основателя</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8 leading-tight">
              Здравствуйте! Рада знакомству с вами
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="relative"
          >
            <div className="absolute -top-8 -left-4 text-8xl text-brand-teal/15 font-display font-bold select-none">«</div>
            <blockquote className="relative z-10 pl-8 border-l-2 border-brand-teal/30 space-y-5">
              <p className="text-lg text-foreground leading-relaxed">
                Меня зовут <strong className="font-semibold">Елена Артемова</strong>, я основатель и главный врач Центра цифровой стоматологии Articon.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                За моими плечами пятнадцатилетний опыт работы с пациентами. Я всегда стремилась совершенствовать свои знания и двигаться вперёд. В определённый момент пришло понимание — пора воплотить накопленный опыт и создать клинику своей мечты.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Именно тогда поступило предложение от компании Articon — крупнейшего поставщика CAD/CAM оборудования и расходных материалов из Германии, США и Южной Кореи для стоматологических клиник России и стран СНГ.
              </p>
              <p className="text-foreground leading-relaxed font-medium bg-secondary/50 p-4 rounded-xl">
                Опираясь на опыт и ресурсы такой компании, мы создали клинику, где реализованы цифровые протоколы и технологии мирового уровня — всё лучшее, что есть в современной стоматологии.
              </p>
              <footer className="text-muted-foreground text-sm pt-2">
                — Елена Артемова, основатель и главный врач клиники
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Mission & Team */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue mb-4 block">Наша команда</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6 leading-tight">
                Только лучшие специалисты
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                К нам попадают только профессионалы высшего класса. Каждый врач обладает уникальными сильными сторонами, которые мы раскрываем и усиливаем. Задача руководства — поддержать коллектив, помочь развиться и внедрить лучшие практики на благо пациентов.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Сотрудники компании «Артикон» имеют постоянный доступ к новым разработкам в области CAD/CAM технологий и адаптируют их под российский стоматологический рынок. Это даёт нашим врачам преимущество — работать с оборудованием, которое ещё не появилось в большинстве клиник.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue mb-4 block">Философия</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6 leading-tight">
                Искренность — наша главная ценность
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                В нашей клинике самое главное — искренность. Искренняя заинтересованность в наилучшем результате для пациента. Тёплые и честные взаимоотношения между сотрудниками. Это невозможно изобразить — это чувствуется.
              </p>
              <p className="text-foreground leading-relaxed font-medium bg-background/50 p-4 rounded-xl border border-border">
                «Мы выбрали вашу клинику, потому что здесь в воздухе добро и профессионализм» — такие слова наших пациентов дают силы и энергию двигаться дальше.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Почему Articon</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-foreground">Наши преимущества</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Не массовость, а качественное лечение и долгосрочные отношения с каждым пациентом
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-teal/10 group-hover:scale-110 transition-all duration-500">
                  <a.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-teal transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-brand-teal transition-colors duration-300">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Ценности</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-foreground">Что нас определяет</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-teal/10 group-hover:scale-110 transition-all duration-500">
                  <v.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-teal transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-brand-teal transition-colors duration-300">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-brand-teal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
                Напишите мне лично
              </h2>
              <p className="text-primary-foreground/80 max-w-md mx-auto">
                Если у вас есть вопросы или пожелания к Главному врачу, то буду рада обратной связи!
              </p>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (!trimmed.firstName || !trimmed.phone) {
      toast({ title: "Заполните обязательные поля", description: "Имя и телефон обязательны", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Сообщение отправлено!", description: "Мы свяжемся с вами в ближайшее время" });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 bg-background/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/10"
      >
        <CheckCircle className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
        <h3 className="text-2xl font-display font-bold text-primary-foreground mb-2">Спасибо за обращение!</h3>
        <p className="text-primary-foreground/70">Елена Артемова свяжется с вами лично</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-primary-foreground/70 text-sm mb-1.5 block">Имя *</label>
          <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Ваше имя" maxLength={100}
            className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50" />
        </div>
        <div>
          <label className="text-primary-foreground/70 text-sm mb-1.5 block">Фамилия</label>
          <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Ваша фамилия" maxLength={100}
            className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-primary-foreground/70 text-sm mb-1.5 block">Телефон *</label>
          <Input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+7 (___) ___-__-__" maxLength={20}
            className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50" />
        </div>
        <div>
          <label className="text-primary-foreground/70 text-sm mb-1.5 block">Email</label>
          <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" maxLength={255}
            className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50" />
        </div>
      </div>
      <div>
        <label className="text-primary-foreground/70 text-sm mb-1.5 block">Ваши пожелания</label>
        <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Опишите ваш вопрос или пожелание..." rows={4} maxLength={1000}
          className="bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50 resize-none" />
      </div>
      <Button type="submit" size="lg" className="w-full bg-background text-foreground font-semibold h-14 transition-all duration-500 hover:bg-background/90 hover:scale-[1.01] hover:shadow-xl">
        Написать главному врачу <Send className="ml-2 w-5 h-5" />
      </Button>
    </form>
  );
};

export default AboutPage;
