import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Phone, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, getRelatedServices } from "@/data/services";

const renderWithLinks = (text: string) => {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIdx = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > lastIdx) parts.push(text.slice(lastIdx, m.index));
    const [, label, href] = m;
    const isInternal = href.startsWith("/");
    parts.push(
      isInternal ? (
        <Link key={key++} to={href} className="text-brand-teal underline underline-offset-4 hover:opacity-80">{label}</Link>
      ) : (
        <a key={key++} href={href} className="text-brand-teal underline underline-offset-4 hover:opacity-80">{label}</a>
      )
    );
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (!service) return;
    const desc = (service.description[0] || "").slice(0, 150).trim();
    const metaDesc = `${desc} Запишитесь в клинику цифровой стоматологии Articon в Москве.`;
    document.title = `${service.title} в Москве | Клиника Articon`;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", metaDesc);
  }, [service]);

  if (!service) return <Navigate to="/uslugi" replace />;

  const related = getRelatedServices(service.slug);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6" aria-label="Хлебные крошки">
            <Link to="/" className="hover:text-brand-teal transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/uslugi" className="hover:text-brand-teal transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-primary-foreground/90">{service.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-5">
              Клиника Articon · Москва
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-[1.1]">
              {service.h1}
            </h1>
            <p className="mt-5 text-primary-foreground/70 text-lg leading-relaxed">{service.shortDesc}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-teal text-primary-foreground font-semibold h-12 px-7 hover:bg-brand-teal">
                <Link to="/contacts">Записаться на приём <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/uslugi"><ArrowLeft className="mr-2 w-4 h-4" /> Все услуги</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GEO bar */}
      <section className="bg-secondary border-y border-border">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-foreground/80">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-teal" /> Москва, ул. Серпуховский вал 21, корп 4</span>
            <a href="tel:+74959759598" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <Phone className="w-4 h-4 text-brand-teal" /> +7 (495) 975-95-98
            </a>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-teal" /> Ежедневно с 9:00 до 21:00</span>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            {service.description.map((p, i) => (
              <p key={i} className="text-foreground/85 text-lg leading-relaxed">{renderWithLinks(p)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Indications */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
                {service.benefitsTitle || "Преимущества"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-background border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85 leading-relaxed">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Symptoms */}
      {service.symptoms && service.symptoms.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">Симптомы</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.symptoms.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-secondary/60 border border-border">
                    <AlertCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85 leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Steps */}
      {service.steps && service.steps.length > 0 && (
        <section className="py-16 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-10">
                {service.stepsTitle || "Этапы лечения"}
              </h2>
              <ol className="relative space-y-6 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-border">
                {service.steps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative flex items-start gap-5 pl-1"
                  >
                    <span className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal text-primary-foreground font-display font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="pt-2 text-foreground/85 leading-relaxed">{renderWithLinks(step)}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Prices */}
      {service.prices && service.prices.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">Стоимость</h2>
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left">
                  <thead className="bg-foreground text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">Услуга</th>
                      <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-right">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.prices.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                        <td className="px-6 py-4 text-foreground/85">{row.name}</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground whitespace-nowrap">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">* Точная стоимость определяется после консультации.</p>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-16 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
                Ещё в категории «{service.category}»
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/uslugi/${r.slug}`}
                    className="group block p-6 rounded-2xl bg-background border border-border hover:border-brand-teal/40 hover:shadow-[0_12px_36px_-12px_hsl(var(--brand-teal)/0.15)] transition-all"
                  >
                    <h3 className="font-display font-semibold text-foreground group-hover:text-brand-teal transition-colors mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{r.shortDesc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-teal">
                      Подробнее <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-brand-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-3">
            Записаться на консультацию
          </h2>
          <p className="text-primary-foreground/85 mb-8">Первичная консультация — бесплатно</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-12 px-8 hover:bg-background/90">
              <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:+74959759598"><Phone className="mr-2 w-4 h-4" /> +7 (495) 975-95-98</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
