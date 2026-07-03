import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? servicesData[slug] : null;

  useEffect(() => {
    if (!service) return;
    // Update document title and meta for SEO
    document.title = service.seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", service.seoDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = service.seoDescription;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", service.keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = service.keywords;
      document.head.appendChild(meta);
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-2xl font-display font-bold">Услуга не найдена</h1>
        <Button asChild variant="outline">
          <Link to="/uslugi"><ArrowLeft className="mr-2 w-4 h-4" /> Все услуги</Link>
        </Button>
      </div>
    );
  }

  const hasPrices = service.prices && service.prices.length > 0 && service.prices.some(p => p.price || p.name);
  const hasSteps = service.steps && service.steps.length > 0;
  const hasBenefits = service.benefits && service.benefits.length > 0;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-primary-foreground/40 mb-8"
          >
            <Link to="/" className="hover:text-primary-foreground/70 transition-colors">Главная</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/uslugi" className="hover:text-primary-foreground/70 transition-colors">Услуги</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground/60 truncate max-w-[200px]">{service.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-6">
              Клиника Articon · Москва
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-[1.15] max-w-2xl">
              {service.title}
            </h1>
            {service.description && (
              <p className="mt-6 text-primary-foreground/60 text-base sm:text-lg max-w-xl leading-relaxed">
                {service.description.split('\n')[0]}
              </p>
            )}
            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                asChild
                size="lg"
                className="bg-brand-teal text-white font-semibold h-12 px-8 hover:bg-brand-teal/90 hover:scale-[1.02] transition-all duration-300"
              >
                <Link to="/contacts">Записаться на приём <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Link to="/uslugi"><ArrowLeft className="mr-2 w-4 h-4" /> Все услуги</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10 origin-left"
        />
      </section>

      {/* GEO Trust Bar */}
      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Москва, ул. Большая Полянка, д. 28, стр. 2</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-teal shrink-0" />
              <a href="tel:+74993945959" className="hover:text-foreground transition-colors">+7 (499) 394-59-59</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Пн–Сб: 9:00–21:00 · Вс: 10:00–18:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Full description */}
            {service.description && service.description.split('\n').length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">О процедуре</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                  {service.description.split('\n').filter(Boolean).map((para: string, i: number) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Benefits */}
            {hasBenefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-display font-bold mb-8">Преимущества и показания</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary border border-border"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Steps / Process */}
            {hasSteps && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-display font-bold mb-8">Этапы лечения</h2>
                <div className="space-y-4">
                  {service.steps.map((step: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-brand-teal">{i + 1}</span>
                      </div>
                      <div className="flex-1 pt-1 pb-4 border-b border-border last:border-0">
                        <p className="text-sm text-foreground leading-relaxed">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Extra info */}
            {service.extra && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-2xl bg-secondary border border-border"
              >
                <h2 className="text-xl font-display font-bold mb-4">Дополнительная информация</h2>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                  {service.extra.split('\n').filter(Boolean).map((para: string, i: number) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Prices */}
            {hasPrices && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">Стоимость</h2>
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div className="bg-foreground px-6 py-4">
                    <p className="text-xs text-primary-foreground/50 uppercase tracking-widest">Прайс-лист · Москва</p>
                  </div>
                  <div className="divide-y divide-border">
                    {service.prices.map((row: { name: string; price: string }, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors"
                      >
                        <span className="text-sm text-foreground pr-4">{row.name}</span>
                        {row.price && (
                          <span className="text-sm font-semibold text-brand-teal whitespace-nowrap">{row.price}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-secondary px-6 py-4">
                    <p className="text-xs text-muted-foreground">* Точная стоимость определяется после консультации врача. Цены указаны в рублях.</p>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-teal">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
              Записаться на консультацию
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto text-lg">
              Первичная консультация — бесплатно. Составим план лечения и ответим на все вопросы.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground font-semibold h-14 px-10 hover:bg-background/90 hover:scale-[1.03] hover:shadow-xl transition-all duration-500"
              >
                <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <a href="tel:+74993945959"><Phone className="mr-2 w-4 h-4" /> +7 (499) 394-59-59</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
