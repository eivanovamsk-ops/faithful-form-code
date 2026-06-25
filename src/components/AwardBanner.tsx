import { useState } from "react";
import { motion } from "framer-motion";
import { Award, X, ExternalLink } from "lucide-react";
import certAsset from "@/assets/startsmile-cert.jpg.asset.json";
import certPdfAsset from "@/assets/startsmile-cert.pdf.asset.json";

const AwardBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary via-primary to-[hsl(var(--primary)/0.85)] shadow-xl"
        >
          {/* decorative star */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="grid md:grid-cols-[auto,1fr,auto] items-center gap-6 md:gap-8 p-6 md:p-8">
            {/* Cert thumbnail */}
            <button
              onClick={() => setOpen(true)}
              className="group relative shrink-0 mx-auto md:mx-0"
              aria-label="Открыть сертификат"
            >
              <div className="absolute -inset-1 rounded-xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={certAsset.url}
                alt="Сертификат StartSmile TOP 2026 — Articon"
                className="relative h-32 md:h-40 w-auto rounded-lg shadow-2xl ring-1 ring-white/30 transition-transform group-hover:scale-[1.03]"
              />
            </button>

            {/* Text */}
            <div className="text-center md:text-left text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs md:text-sm font-medium mb-3">
                <Award className="h-4 w-4" />
                STARTSMILE TOP 2026
              </div>
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2">
                Articon — в топе лучших стоматологий России 2026
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/85 max-w-xl">
                Ежегодный некоммерческий рейтинг частных стоматологий от экспертного журнала
                STARTSMILE при поддержке Forbes Russia. Категория «Клиники, действующие более 3-х лет».
              </p>
            </div>

            {/* CTA */}
            <div className="flex md:flex-col gap-3 justify-center">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-primary font-medium text-sm hover:bg-white/90 transition-colors shadow-md"
              >
                Сертификат
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={certAsset.url}
            alt="Сертификат StartSmile TOP 2026"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto max-w-full rounded-lg shadow-2xl"
          />
          <a
            href={certPdfAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-primary font-medium text-sm hover:bg-white/90 transition-colors shadow-lg"
          >
            Скачать PDF
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
    </section>
  );
};

export default AwardBanner;
