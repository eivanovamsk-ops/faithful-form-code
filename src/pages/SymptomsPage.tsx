import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertTriangle, HelpCircle, ListChecks, Info, MessageCircle } from "lucide-react";
import solutionIcon from "@/assets/symptom-solution/symptom-solution.png.asset.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { symptoms } from "@/data/symptoms";

const SymptomsPage = () => {
  const location = useLocation();
  const [activeId, setActiveId] = useState(symptoms[0].id);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && symptoms.some((s) => s.id === hash)) {
      setActiveId(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const active = symptoms.find((s) => s.id === activeId);
    if (!active) return;
    document.title = active.meta.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", active.meta.description);
  }, [activeId]);

  return (
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-3xl">
              Справочник пациента: симптомы и решения
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-2xl leading-relaxed">
              Узнайте о причинах распространённых стоматологических проблем и о том, как мы решаем их в клинике Articon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 max-w-6xl mx-auto">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue mb-5">Симптомы</p>
              <nav className="flex flex-col gap-1.5">
                {symptoms.map((s) => {
                  const Icon = s.icon;
                  const isActive = activeId === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveId(s.id);
                        const el = document.getElementById(s.id);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.history.replaceState(null, "", `#${s.id}`);
                      }}
                      className={cn(
                        "flex items-center gap-3 text-left px-4 py-3 rounded-xl transition-all duration-300 border",
                        isActive
                          ? "bg-brand-blue text-primary-foreground border-brand-blue shadow-md"
                          : "bg-card border-border text-foreground hover:border-brand-blue/40 hover:bg-secondary"
                      )}
                    >
                      {s.iconImage ? (
                        <img
                          src={s.iconImage}
                          alt=""
                          className={cn(
                            "w-8 h-8 shrink-0 object-contain transition-all",
                            isActive ? "brightness-0 invert" : ""
                          )}
                        />
                      ) : (
                        <Icon className={cn("w-6 h-6 shrink-0", isActive ? "text-primary-foreground" : "text-brand-blue")} />
                      )}

                      <span className="text-sm font-medium">{s.shortTitle}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Content */}
            <div className="space-y-20">
              {symptoms.map((s, idx) => (
                <motion.article
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28"
                >
                  <div className="flex items-center gap-5 mb-8">
                    {s.iconImage ? (
                      <img src={s.iconImage} alt="" className="w-24 h-24 object-contain shrink-0" />
                    ) : (
                      <s.icon className="w-16 h-16 text-brand-blue shrink-0" />
                    )}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-tight">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-8 bg-card border border-border rounded-2xl p-8">
                    {s.content.intro && (
                      <div className="text-foreground/80 leading-relaxed">
                        {s.content.intro}
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <ListChecks className="w-5 h-5 text-brand-blue" />
                        <h3 className="font-display font-semibold text-foreground text-lg">Симптомы</h3>
                      </div>
                      <ul className="space-y-2.5">
                        {s.content.symptoms.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {s.content.warning && (
                      <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                          <p className="text-foreground/80 leading-relaxed">{s.content.warning}</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <HelpCircle className="w-5 h-5 text-brand-blue" />
                        <h3 className="font-display font-semibold text-foreground text-lg">Причины возникновения</h3>
                      </div>
                      <div className="text-foreground/80 leading-relaxed space-y-4">{s.content.causes}</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-brand-orange" />
                        <h3 className="font-display font-semibold text-foreground text-lg">Что будет, если не лечить</h3>
                      </div>
                      <div className="text-foreground/80 leading-relaxed">{s.content.untreated}</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <img src={solutionIcon.url} alt="" className="w-5 h-5 object-contain" />
                        <h3 className="font-display font-semibold text-foreground text-lg">Как мы решаем проблему в Articon</h3>
                      </div>
                      <div className="text-foreground/80 leading-relaxed space-y-4">{s.content.solution}</div>
                    </div>

                    {s.content.faq && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <MessageCircle className="w-5 h-5 text-brand-blue" />
                          <h3 className="font-display font-semibold text-foreground text-lg">Частые вопросы</h3>
                        </div>
                        <div className="space-y-5">
                          {s.content.faq.map((item, i) => (
                            <div key={i}>
                              <p className="font-medium text-foreground mb-1.5">{item.question}</p>
                              <div className="text-foreground/80 leading-relaxed">{item.answer}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {s.id !== "desny" && (
                      <div className="pt-2">
                        <Button asChild size="lg" className="bg-brand-teal text-primary-foreground font-semibold hover:bg-brand-teal/85 hover:shadow-[0_0_25px_hsl(174,72%,46%,0.3)] transition-all duration-300">
                          <Link to="/contacts">
                            Записаться на консультацию <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    )}


                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SymptomsPage;
