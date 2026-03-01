import { motion } from "framer-motion";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const doctors = [
  {
    name: "Елена Артикова",
    role: "Главный врач, имплантолог",
    experience: "18 лет опыта",
    image: doctor1,
  },
  {
    name: "Дмитрий Соколов",
    role: "Хирург-имплантолог",
    experience: "12 лет опыта",
    image: doctor2,
  },
  {
    name: "Анна Белова",
    role: "Ортодонт",
    experience: "10 лет опыта",
    image: doctor3,
  },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-brand-blue">Наша команда</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Врачи-эксперты
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-5 aspect-[3/4]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">{doctor.name}</h3>
              <p className="text-brand-blue font-medium text-sm mt-1">{doctor.role}</p>
              <p className="text-muted-foreground text-sm mt-1">{doctor.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
