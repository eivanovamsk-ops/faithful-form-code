import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, Star, Users, ArrowRight, Award, MessageCircle, Heart, Camera, UserPlus, Cake } from "lucide-react";

const statuses = [
  { name: "Бронзовый", cashback: "3%", range: "от 0 ₽ до 199 999 ₽", color: "from-amber-700 to-amber-600" },
  { name: "Серебряный", cashback: "5%", range: "от 200 000 ₽ до 999 999 ₽", color: "from-slate-400 to-slate-300" },
  { name: "Золотой", cashback: "7%", range: "от 1 000 000 ₽ до 1 799 999 ₽", color: "from-yellow-500 to-yellow-400" },
  { name: "Платиновый", cashback: "10%", range: "от 1 800 000 ₽", color: "from-slate-600 to-slate-400" },
];

const bonuses = [
  { icon: Gift, title: "Приветственный бонус", value: "1 000 ₽", desc: "Начисляется за подключение к программе лояльности" },
  { icon: Cake, title: "Бонус на день рождения", value: "3 000 ₽", desc: "Поздравляем вас с праздником приятным подарком" },
  { icon: Camera, title: "Отметка в Stories", value: "500 ₽", desc: "Отметьте клинику в сторис — получите бонусные баллы" },
  { icon: UserPlus, title: "Рекомендация другу", value: "4 000 ₽", desc: "Пригласите друга через чат-бот — бонус начислится автоматически после его визита" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

const LoyaltyPage = () => (
  <div>
    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-6">Пациентам</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-2xl">
            Бонусная программа лояльности Articon
          </h1>
          <p className="mt-6 text-primary-foreground/60 text-lg max-w-xl leading-relaxed">
            Получайте кэшбэк до 10% за каждое посещение и оплачивайте бонусами услуги клиники. Ваше лечение — выгоднее и удобнее.
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

    {/* Статусы программы */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-4 block">Накопительная система</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Статусы программы лояльности</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Чем больше вы лечитесь — тем выше ваш статус и процент кэшбэка</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statuses.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative bg-card rounded-2xl border border-border p-7 text-center hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500 overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${s.color} mx-auto mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{s.name}</h3>
              <div className="text-3xl font-bold text-brand-teal mb-2">{s.cashback}</div>
              <p className="text-xs text-muted-foreground">{s.range}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Бонусы в чат-боте */}
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-4 block">Чат-бот «Личный помощник»</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Дополнительные бонусы в Telegram</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Мы разработали удобный Telegram-бот для участников программы — отслеживайте баланс, получайте бонусы и приглашайте друзей
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-500">
                  <b.icon className="w-6 h-6 text-brand-blue group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-display font-semibold text-lg text-foreground">{b.title}</h3>
                    <span className="text-brand-teal font-bold text-lg">{b.value}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Как стать участником */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-4 block">Подключение</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Как стать участником программы</h2>
        </motion.div>

        <div className="space-y-6">
          {[
            { step: "01", title: "Попросите администратора", text: "Если вы уже пациент Articon, попросите администратора подключить вас к программе перед следующим приёмом. Бонусы начнут копиться с момента подключения." },
            { step: "02", title: "Подключите Telegram-бот", text: "В боте «Личный помощник» вы сможете отслеживать баланс, получать дополнительные бонусы и приглашать друзей." },
            { step: "03", title: "Копите и тратьте бонусы", text: "Оплачивайте бонусами услуги клиники. Чем чаще вы нас посещаете — тем выше ваш статус и процент кэшбэка." },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex gap-6 items-start"
            >
              <span className="text-4xl font-display font-bold text-brand-teal/20 shrink-0 leading-none">{item.step}</span>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Семейная программа */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-card rounded-2xl border border-border p-8"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">Семейная программа лояльности</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                По вашему желанию администратор подключит вас к семейной программе лояльности. Вам заведут общий бонусный счёт — так вы сможете быстрее накапливать бонусы и списывать их с единого счёта.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                В семейную программу подключаются ближайшие родственники — те, с кем у вас общий бюджет и с кем вы готовы делиться баллами.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Важное примечание */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-xs text-muted-foreground text-center leading-relaxed max-w-xl mx-auto"
        >
          * Программа лояльности направлена на мотивацию пациентов заботиться о здоровье зубов. Бонусы имеют ограниченный срок действия. Если пациент не посещал клинику в течение года, бонусы могут быть аннулированы. Подробности уточняйте у администраторов.
        </motion.p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-brand-teal">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-6">Хотите стать участником?</h2>
          <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">Запишитесь на приём — администратор подключит вас к программе лояльности</p>
          <Button asChild size="lg" className="bg-background text-foreground font-semibold h-14 px-10 hover:bg-background/90 hover:scale-[1.03] transition-all duration-500">
            <Link to="/contacts">Записаться на приём <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default LoyaltyPage;
