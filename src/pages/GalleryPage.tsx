import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseSlider from "@/components/CaseSlider";
import CaseDetails from "@/components/CaseDetails";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CinematicSlider from "@/components/CinematicSlider";
import { galleryCategories } from "@/data/galleryCases";


const GalleryPage = () => {
  return (
    <div>

      {/* Video */}
      <section className="bg-background pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-foreground">
            <video
              className="w-full block"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/SmileCloud_case_1.mp4" type="video/mp4" />
            </video>
          </div>
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
                <div
                  className={`grid gap-10 mx-auto ${
                    category.id === "ortopediya" || category.id === "ortodontiya"
                      ? "grid-cols-1 lg:grid-cols-2 max-w-5xl"
                      : "grid-cols-1 max-w-2xl"
                  }`}
                >
                  {category.cases.map((c) => (
                    <div key={c.id} className="space-y-5">
                      {c.slides && c.slides.length > 0 && (
                        <CaseSlider slides={c.slides} />
                      )}
                      {c.comparisons && c.comparisons.length > 0 && (
                        <div className="space-y-5">
                          {c.comparisons.map((p, i) => (
                            <BeforeAfterSlider key={i} pair={p} />
                          ))}
                        </div>
                      )}
                      {c.cinematic && c.cinematic.length > 0 && (
                        <CinematicSlider slides={c.cinematic} />
                      )}
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-lg">
                          {c.title}
                        </h3>
                        {c.description && (
                          <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                        )}
                      </div>
                      {c.details && <CaseDetails details={c.details} />}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default GalleryPage;
