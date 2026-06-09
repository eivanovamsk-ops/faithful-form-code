import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, GraduationCap, Award, Star, Play, ChevronLeft, ChevronRight, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";
import { useState } from "react";

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
};

const DoctorProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find(d => d.id === id);
  const [activeReview, setActiveReview] = useState(0);

  if (!doctor) return <Navigate to="/vrachi" replace />;

  const doctorIndex = doctors.indexOf(doctor);
  const prevDoctor = doctorIndex > 0 ? doctors[doctorIndex - 1] : null;
  const nextDoctor = doctorIndex < doctors.length - 1 ? doctors[doctorIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/vrachi" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-teal transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Все врачи
          </Link>
        </div>
      </section>

      {/* Hero — Photo + Info */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted">
                {doctor.photo ? (
                  <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-brand-teal/10">
                    <span className="text-7xl text-brand-teal font-display font-bold">{getInitials(doctor.name)}</span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-brand-teal/20 rounded-3xl -z-10" />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:sticky lg:top-32"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4">
                {doctor.name}
              </h1>

              <p className="text-lg text-brand-teal font-medium mb-4">{doctor.role}</p>

              {doctor.degree && (
                <p className="text-sm text-muted-foreground font-medium mb-4">{doctor.degree}</p>
              )}

              {doctor.description && (
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{doctor.description}</p>
              )}

              <div className="flex flex-wrap gap-3 mb-8">
                {doctor.experience && (
                  <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal rounded-full px-4 py-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm font-semibold">Стаж: {doctor.experience}</span>
                  </div>
                )}
                {doctor.workDays && (
                  <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{doctor.workDays}</span>
                  </div>
                )}
              </div>

              {/* Skills */}
              {doctor.skills && (
                <div className="mb-8">
                  <h2 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                    <Award className="w-4 h-4 text-brand-teal" />
                    Специализация
                  </h2>
                  <div className="space-y-3">
                    {doctor.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <p className="text-muted-foreground leading-relaxed text-sm">{skill}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <Button asChild size="lg" className="h-14 px-10 rounded-full font-semibold transition-all duration-500 hover:scale-[1.03] hover:shadow-xl">
                <Link to="/contacts">
                  Записаться к врачу <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      {(doctor.education || doctor.additionalEducation) && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-10 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-brand-teal" />
                Образование
              </h2>

              {doctor.education && (
                <div className="mb-10">
                  <div className="space-y-4">
                    {doctor.education.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-3 h-3 rounded-full border-2 border-brand-teal mt-1 shrink-0 group-hover:bg-brand-teal transition-colors" />
                        <p className="text-foreground/80 leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {doctor.additionalEducation && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider mb-6">
                    <BookOpen className="w-4 h-4 text-brand-teal" />
                    Дополнительное образование и курсы
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {doctor.additionalEducation.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className="bg-background rounded-xl p-4 border border-border hover:border-brand-teal/30 transition-colors"
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Video Interview placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
              Видео-интервью
            </h2>
            {doctor.videoUrl ? (
              <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-xl">
                <video
                  src={doctor.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video rounded-2xl bg-foreground/5 border border-border flex items-center justify-center group cursor-pointer hover:bg-foreground/10 transition-colors duration-500 relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-brand-teal/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <p className="absolute bottom-6 text-sm text-muted-foreground">Видео скоро будет добавлено</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Works Gallery placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
              Работы врача
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="aspect-square rounded-2xl bg-background border border-border flex items-center justify-center"
                >
                  <p className="text-xs text-muted-foreground">Фото {i}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Фотографии работ скоро будут добавлены</p>
          </motion.div>
        </div>
      </section>

      {/* Certificates placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
              Сертификаты и дипломы
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="aspect-[3/4] rounded-2xl bg-muted border border-border flex items-center justify-center shadow-sm"
                >
                  <GraduationCap className="w-8 h-8 text-muted-foreground/30" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Сертификаты скоро будут добавлены</p>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      {doctor.reviews && doctor.reviews.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-10 flex items-center gap-3">
                <Star className="w-6 h-6 text-brand-teal" />
                Отзывы пациентов
              </h2>

              <div className="relative">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background rounded-3xl p-8 md:p-12 border border-border"
                >
                  <div className="text-5xl text-brand-teal/20 font-serif leading-none mb-4">"</div>
                  <p className="text-lg text-foreground/80 leading-relaxed italic mb-6">
                    {doctor.reviews[activeReview].text}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-brand-teal font-semibold">
                      — {doctor.reviews[activeReview].author}
                    </p>
                    {doctor.reviews[activeReview].date && (
                      <p className="text-xs text-muted-foreground">{doctor.reviews[activeReview].date}</p>
                    )}
                  </div>
                </motion.div>

                {doctor.reviews.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                      onClick={() => setActiveReview(prev => prev === 0 ? doctor.reviews!.length - 1 : prev - 1)}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex gap-2">
                      {doctor.reviews.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveReview(i)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeReview ? 'bg-brand-teal w-6' : 'bg-border hover:bg-muted-foreground/30'}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveReview(prev => prev === doctor.reviews!.length - 1 ? 0 : prev + 1)}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation between doctors */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center">
            {prevDoctor ? (
              <Link to={`/vrachi/${prevDoctor.id}`} className="group flex items-center gap-3 hover:text-brand-teal transition-colors">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Предыдущий врач</p>
                  <p className="text-sm font-semibold">{prevDoctor.name.split(' ').slice(0, 2).join(' ')}</p>
                </div>
              </Link>
            ) : <div />}

            <Link to="/vrachi" className="text-sm text-muted-foreground hover:text-brand-teal transition-colors">
              Все врачи
            </Link>

            {nextDoctor ? (
              <Link to={`/vrachi/${nextDoctor.id}`} className="group flex items-center gap-3 hover:text-brand-teal transition-colors text-right">
                <div>
                  <p className="text-xs text-muted-foreground">Следующий врач</p>
                  <p className="text-sm font-semibold">{nextDoctor.name.split(' ').slice(0, 2).join(' ')}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfilePage;
