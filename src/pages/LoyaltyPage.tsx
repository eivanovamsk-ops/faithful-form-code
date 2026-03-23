import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, Star, Users, ArrowRight, Percent, Heart } from "lucide-react";

const benefits = [
  { icon: Percent, title: "Скидки до 15%", desc: "Постоянные пациенты получают накопительную скидку на все виды лечения" },
  { icon: Users, title: "Семейная программа", desc: "Приведите членов семьи — каждый получит дополнительную скидку 5%" },
  { icon: Gift, title: "Бонусы за рекомендации", desc: "Рекомендуйте нас друзьям и получайте бонусы на следующее посещение" },
  { icon: Heart, title: "Приоритетная запись", desc: "Участники программы записываются вне очереди на удобное время" },
  { icon: Star, title: "Эксклюзивные акции", desc: "Первыми узнавайте о специальных предложениях и сезонных скидках" },
];

const LoyaltyPage = () => (
  <div>
    <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-6">Пациентам</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
            Программа лояльности
          </h1>
          <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
            Благодарим за доверие — дарим привилегии постоянным пациентам
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-500">
                <b.icon className="w-6 h-6 text-brand-blue group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-brand-teal">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-6">Хотите стать участником?</h2>
          <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">Запишитесь на приём — участие в программе лояльности начинается автоматически</p>
          <Button asChild size="lg" className="bg-background text-foreground font-semibold h-14 px-10 hover:bg-background/90 hover:scale-[1.03] transition-all duration-500">
            <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default LoyaltyPage;
