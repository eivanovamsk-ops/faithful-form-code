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

const DoctorsPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Наши врачи</h1>
          <p className="mt-3 text-muted-foreground">Сплочённая команда профессионалов — главная гордость клиники Articon</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="bg-card rounded-xl border border-border p-6 text-center hover:border-brand-blue/30 hover:shadow-md transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-blue font-display font-bold text-xl">{getInitials(doc.name)}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{doc.name}</h3>
              <p className="text-brand-blue text-xs font-medium">{doc.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
