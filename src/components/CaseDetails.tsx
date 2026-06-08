import { useState } from "react";
import { ChevronDown, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseDetails as CaseDetailsType } from "@/data/galleryCases";

interface Props {
  details: CaseDetailsType;
  className?: string;
}

const CaseDetails = ({ details, className }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background overflow-hidden transition-all duration-500",
        open ? "shadow-lg" : "shadow-sm hover:shadow-md",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Подробнее о кейсе
            </p>
            <p className="font-display font-semibold text-foreground truncate">
              {open ? "Свернуть описание" : "Читать историю лечения"}
            </p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-500",
            open && "rotate-180 text-brand-blue"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 pt-1 space-y-5">
            {details.tagline && (
              <p className="text-foreground font-display font-semibold text-base sm:text-lg leading-snug">
                {details.tagline}
              </p>
            )}

            {details.blocks.map((b, i) => {
              if (b.type === "heading") {
                return (
                  <h4
                    key={i}
                    className="font-display font-semibold text-foreground text-base pt-1"
                  >
                    {b.text}
                  </h4>
                );
              }
              if (b.type === "paragraph") {
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">
                    {b.text}
                  </p>
                );
              }
              if (b.type === "list") {
                return (
                  <ul key={i} className="space-y-2">
                    {b.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[15px] text-foreground/90"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              // highlight
              return (
                <div
                  key={i}
                  className="relative rounded-xl bg-brand-blue/5 border-l-4 border-brand-blue px-4 py-3 text-[15px] text-foreground leading-relaxed"
                >
                  {b.text}
                </div>
              );
            })}

            {details.duration && (
              <div className="flex items-center gap-3 pt-2 mt-2 border-t border-border">
                <div className="w-9 h-9 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Срок лечения
                  </p>
                  <p className="font-display font-semibold text-foreground">
                    {details.duration}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
