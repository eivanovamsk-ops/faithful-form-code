import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
import { doctors } from "@/data/doctors";

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
};

const DoctorCard = ({ doc, index }: { doc: typeof doctors[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link to={`/vrachi/${doc.id}`} className="group block">
        {/* Photo */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
          {doc.photo ? (
            <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand-teal/10">
              <span className="text-4xl text-brand-teal font-display font-bold">{getInitials(doc.name)}</span>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <span className="text-primary-foreground text-sm font-medium bg-brand-teal/90 px-5 py-2 rounded-full translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
              Подробнее
            </span>
          </div>
        </div>

        {/* Info */}
        <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-1 group-hover:text-brand-teal transition-colors duration-300">{doc.name}</h3>
        <p className="text-brand-teal font-medium text-sm">{doc.role}</p>
        {doc.experience && (
          <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1">
            <Briefcase className="w-3 h-3" /> Стаж: {doc.experience}
          </p>
        )}
      </Link>
    </motion.div>
  );
};

const DoctorsPage = () => {
  const leaders = doctors.filter(d => d.highlight);
  const specialists = doctors.filter(d => !d.highlight);

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
              Команда
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              Наши врачи
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Сплочённая команда профессионалов — главная гордость клиники Articon
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10 origin-left"
        />
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {leaders.map((doc, i) => (
              <DoctorCard key={doc.id} doc={doc} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">Специалисты</span>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {specialists.map((doc, i) => (
              <DoctorCard key={doc.id} doc={doc} index={i} />
            ))}
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
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-6">
              Запишитесь к специалисту
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">
              Подберём врача под вашу задачу и составим план лечения
            </p>
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-14 px-10 transition-all duration-500 hover:bg-background/90 hover:scale-[1.03] hover:shadow-xl">
              <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
