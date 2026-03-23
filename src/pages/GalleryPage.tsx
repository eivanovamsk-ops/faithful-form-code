import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      {/* Coming Soon */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-8">
              <Camera className="w-9 h-9 text-muted-foreground/40" />
            </div>
            <h2 className="font-display font-bold text-foreground text-2xl mb-4">Галерея обновляется</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Мы готовим обновлённую галерею работ наших специалистов с примерами «до и после».
            </p>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 border-brand-teal/30 text-brand-teal hover:bg-brand-teal hover:text-primary-foreground transition-all duration-400">
              <a href="https://articon-clinic.ru/albums/" target="_blank" rel="noopener noreferrer">
                Смотреть на сайте <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
