import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8 text-center">О клинике</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-sm max-w-none space-y-5"
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Здравствуйте!</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Меня зовут <strong className="text-foreground">Елена Артемова</strong>, я основатель и главный врач 
              Центра цифровой стоматологии Articon. Рада знакомству с вами!
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              За моими плечами пятнадцатилетний опыт работы с пациентами, я всегда старалась совершенствовать 
              свои знания и стремилась вперед. В определенный момент пришло понимание, что пора воплотить 
              накопленный опыт и создать клинику — клинику своей мечты!
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Группа компаний «Артикон» более 10 лет поставляет в Россию и страны СНГ CAD/CAM оборудование 
              и расходные материалы из Германии, США и Южной Кореи для стоматологических клиник. Базируясь 
              на опыте и профессионализме такой крупной компании мы смогли создать стоматологическую клинику, 
              где реализованы цифровые протоколы и технологии, которые только появляются в России.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">В нашей семье, клинике Артикон, самое главное — искренность.</strong>{" "}
              Искренняя заинтересованность в наилучшем результате для пациента. Искренние и тёплые 
              взаимоотношения между сотрудниками. Все это чувствуется, это нельзя изобразить.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Наша работа</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Мы не лечим «под ключ» и не заманиваем пациентов акциями. Высокий профессионализм наших 
              врачей, индивидуальный подход к каждому пациенту, инновации, высокий уровень сервиса — 
              на эти параметры мы делаем ставки.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Наша работа направлена не на массовость, а на качественное лечение и долгосрочные 
              отношения с пациентом.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Все виды диагностики</h2>
            <ul className="space-y-2">
              {[
                "Прицельные снимки",
                "Компьютерная томография (КТ) зубов, костной ткани и гайморовых пазух",
                "ОПТГ — панорамные снимки зубов",
                "ТРГ — рентгенологический снимок черепа",
                "КТ ВНЧС — компьютерная томография височно-нижнечелюстного сустава",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Безопасность</h2>
            <p className="text-muted-foreground leading-relaxed">
              Одной из главных задач клиники Articon является обеспечение полной безопасности пациентов. 
              Мы применяем многоступенчатую систему очистки и обработки инструментов, что позволяет 
              добиться 100% стерилизации. Используем все существующие одноразовые материалы.
            </p>
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <Button asChild className="bg-brand-blue text-primary-foreground font-semibold hover:bg-brand-blue/90">
            <Link to="/contacts">Записаться на приём</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
