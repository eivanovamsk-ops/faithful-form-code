import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const GalleryPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Портфолио</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Фото работ</h1>
          <p className="mt-4 text-muted-foreground text-lg">Примеры работ наших специалистов</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-card border border-border rounded-xl p-14 hover:shadow-lg transition-shadow duration-300">
            <Camera className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
            <h2 className="font-display font-semibold text-foreground text-xl mb-4">Галерея обновляется</h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы готовим обновлённую галерею работ наших специалистов с примерами «до и после».
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Вы можете посмотреть наши работы на{" "}
              <a href="https://articon-clinic.ru/albums/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                текущем сайте
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
