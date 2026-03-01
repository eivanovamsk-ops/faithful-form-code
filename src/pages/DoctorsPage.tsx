import { motion } from "framer-motion";

const doctors = [
  { name: "Артемова Елена Юрьевна", role: "Главный врач клиники Артикон" },
  { name: "Гусейнова Эльмира", role: "Заместитель главного врача, координатор лечения" },
  { name: "Василенко Анастасия Валерьевна", role: "Стоматолог-ортопед" },
  { name: "Борисов Александр Александрович", role: "Стоматолог-терапевт" },
  { name: "Мамедов Джейхун Романович", role: "Стоматолог-хирург, имплантолог, пародонтолог" },
  { name: "Одинцов Семён Олегович", role: "Стоматолог-ортопед, гнатолог" },
  { name: "Живлюк Марина Евгеньевна", role: "Стоматолог-ортодонт" },
  { name: "Мищенко Александра Александровна", role: "Стоматолог-ортодонт, гнатолог" },
  { name: "Козлова Ксения Александровна", role: "Стоматолог-ортодонт" },
  { name: "Романенко Анастасия Николаевна", role: "Стоматолог-терапевт, детский стоматолог" },
  { name: "Краснослободцева Елена Павловна", role: "Стоматолог-терапевт" },
  { name: "Таквель Виктория Александровна", role: "Стоматолог-хирург, пародонтолог" },
  { name: "Милютина Алла Андреевна", role: "Стоматолог-терапевт, детский стоматолог" },
];

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } } };

const DoctorsPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Команда</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Наши врачи</h1>
          <p className="mt-4 text-muted-foreground text-lg">Сплочённая команда профессионалов — главная гордость клиники Articon</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <motion.div
              key={doc.name}
              variants={item}
              className="group bg-card rounded-xl border border-border p-7 text-center hover:border-brand-blue/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-brand-blue font-display font-bold text-xl">{getInitials(doc.name)}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1.5">{doc.name}</h3>
              <p className="text-brand-blue text-xs font-medium">{doc.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorsPage;
