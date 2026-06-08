import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseSlider from "@/components/CaseSlider";
import { galleryCategories } from "@/data/galleryCases";


const GalleryPage = () => {
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
              Портфолио
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              Фото работ
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Примеры работ наших специалистов
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

      {/* Full-width Video */}
      <section className="bg-foreground">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full"
        >
          <video
            className="w-full block"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source src="/videos/SmileCloud_case_1.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </section>

      {/* Categories with case sliders */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {galleryCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="scroll-mt-28"
            >
              <div className="flex items-end justify-between flex-wrap gap-4 mb-10 pb-6 border-b border-border">
                <div>
                  <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-blue mb-3">
                    {String(idx + 1).padStart(2, "0")} — Раздел
                  </span>
                  <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl">
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="text-muted-foreground mt-2 max-w-xl">{category.description}</p>
                  )}
                </div>
                {category.cases.length > 0 && (
                  <span className="text-sm text-muted-foreground">
                    {category.cases.length}{" "}
                    {category.cases.length === 1 ? "кейс" : category.cases.length < 5 ? "кейса" : "кейсов"}
                  </span>
                )}
              </div>

              {category.cases.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-4">
                    <Camera className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                  <p className="text-muted-foreground">
                    Кейсы скоро появятся — мы готовим материалы
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {category.cases.map((c) => (
                    <div key={c.id} className="space-y-4">
                      <CaseSlider slides={c.slides} />
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-lg">
                          {c.title}
                        </h3>
                        {c.description && (
                          <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          <div className="max-w-lg mx-auto text-center pt-8">
            <Button asChild variant="outline" size="lg" className="h-12 px-8 border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-primary-foreground transition-all duration-400">
              <a href="https://articon-clinic.ru/albums/" target="_blank" rel="noopener noreferrer">
                Смотреть на сайте <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GalleryPage;
