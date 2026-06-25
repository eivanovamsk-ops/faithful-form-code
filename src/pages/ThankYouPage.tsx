import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Phone, Clock, Home } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-10 h-10 text-brand-teal" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Спасибо!
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-2">
            Ваша заявка успешно отправлена.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Администратор клиники свяжется с вами в ближайшее время для уточнения деталей и подтверждения записи.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 border-border hover:bg-card hover:border-brand-teal/30 transition-all duration-300"
              >
                <Home className="mr-2 w-5 h-5" />
                На главную
              </Button>
            </Link>
            <Link to="/contacts">
              <Button
                size="lg"
                className="h-14 px-8 bg-brand-teal text-primary-foreground font-semibold transition-all duration-500 hover:bg-brand-teal/85 hover:shadow-[0_0_30px_hsl(174,72%,46%,0.2)] hover:scale-[1.02]"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Вернуться к контактам
              </Button>
            </Link>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 text-left">
            <h3 className="font-display font-semibold text-foreground text-lg mb-4 text-center">
              Нужна срочная помощь?
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Телефон</p>
                  <a
                    href="tel:+74959759598"
                    className="text-foreground font-semibold hover:text-brand-teal transition-colors"
                  >
                    +7 (495) 975-95-98
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Режим работы</p>
                  <p className="text-foreground font-semibold">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;
