import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Современный интерьер стоматологии Articon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 text-sm font-medium tracking-widest uppercase text-brand-orange">
              Dental Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary-foreground mb-6"
          >
            Искусство безупречной{" "}
            <span className="text-brand-blue">улыбки</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-primary-foreground/80 mb-8 max-w-lg font-body"
          >
            Современные технологии, индивидуальный подход и команда экспертов для вашего здоровья и красоты.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-brand-blue text-primary-foreground font-semibold text-base hover:bg-brand-blue/90 transition-colors">
              <a href="#contacts">
                Записаться на приём
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="#services">Наши услуги</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
