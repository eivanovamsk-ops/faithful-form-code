import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Артикон</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">О клинике</h1>
        </motion.div>

        <div className="space-y-6">
          {[
            { title: "Здравствуйте!", content: [
              <>Меня зовут <strong className="text-foreground">Елена Артемова</strong>, я основатель и главный врач Центра цифровой стоматологии Articon. Рада знакомству с вами!</>,
              "За моими плечами пятнадцатилетний опыт работы с пациентами, я всегда старалась совершенствовать свои знания и стремилась вперед. В определенный момент пришло понимание, что пора воплотить накопленный опыт и создать клинику — клинику своей мечты!",
              "Группа компаний «Артикон» более 10 лет поставляет в Россию и страны СНГ CAD/CAM оборудование и расходные материалы из Германии, США и Южной Кореи для стоматологических клиник.",
              <><strong className="text-foreground">В нашей семье, клинике Артикон, самое главное — искренность.</strong> Искренняя заинтересованность в наилучшем результате для пациента.</>,
            ]},
            { title: "Наша работа", content: [
              "Мы не лечим «под ключ» и не заманиваем пациентов акциями. Высокий профессионализм наших врачей, индивидуальный подход к каждому пациенту, инновации, высокий уровень сервиса — на эти параметры мы делаем ставки.",
              "Наша работа направлена не на массовость, а на качественное лечение и долгосрочные отношения с пациентом.",
            ]},
            { title: "Безопасность", content: [
              "Одной из главных задач клиники Articon является обеспечение полной безопасности пациентов. Мы применяем многоступенчатую систему очистки и обработки инструментов, что позволяет добиться 100% стерилизации.",
            ]},
          ].map((section, i) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-display font-semibold text-foreground mb-5">{section.title}</h2>
              {section.content.map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{p}</p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button asChild size="lg" className="bg-brand-blue text-primary-foreground font-semibold h-12 px-8 hover:bg-brand-blue/90 transition-colors">
            <Link to="/contacts">Записаться на приём</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
