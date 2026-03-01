import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const GalleryPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Фото работ</h1>
          <p className="mt-3 text-muted-foreground">Примеры работ наших специалистов</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-card border border-border rounded-xl p-12">
            <Camera className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
            <h2 className="font-display font-semibold text-foreground text-lg mb-3">Галерея обновляется</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Мы готовим обновлённую галерею работ наших специалистов с примерами «до и после». 
              Примеры работ скоро появятся на этой странице.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Вы можете посмотреть наши работы на{" "}
              <a
                href="https://articon-clinic.ru/albums/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
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
