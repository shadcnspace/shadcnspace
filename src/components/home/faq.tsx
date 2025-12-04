import { faqs } from "@/description/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <>
      <p className="uppercase mb-3 font-semibold text-muted-foreground tracking-tight">
        Frequently Asked Questions
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 bg-muted gap-1 p-1 rounded-lg border border-border/50">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={cn(
              "relative border bg-card -ms-px -mt-px text-start overflow-hidden",
              "first:rounded-t-md md:first:rounded-tr-none md:nth-[2]:rounded-tr-md md:nth-last-[2]:rounded-bl-md last:rounded-b-md md:last:rounded-bl-none"
            )}
          >
            <div className="isolate">
              <span className="absolute top-0 left-0 py-0.75 px-2 rounded-br-md bg-muted text-[11px] font-mono border-e border-b border-border/50">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2 text-base font-medium border-b border-dashed px-6 ps-11 py-3">
                {faq.question}
              </div>
              <div className="px-6 ps-11 py-5 text-sm text-start text-foreground/70">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
