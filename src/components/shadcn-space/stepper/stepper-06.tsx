"use client";

import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const questions = [
  { title: "What brings you here?", options: ["Building a product", "Learning to code", "Client work", "Just exploring"] },
  { title: "How big is your team?", options: ["Just me", "2 to 10", "11 to 50", "More than 50"] },
  { title: "Which framework do you use?", options: ["Next.js", "Vite + React", "Remix", "Astro"] },
  { title: "How did you hear about us?", options: ["Search", "Social media", "A friend", "Newsletter"] },
];

export default function StepperDemo() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(() => questions.map(() => null));
  const finished = step === questions.length;
  const question = questions[step];

  const choose = (option: string) =>
    setAnswers((current) => current.map((value, index) => (index === step ? option : value)));

  return (
    <div className="flex w-full max-w-sm flex-col gap-5 rounded-lg border border-border bg-background p-5">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Previous step"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          <ArrowLeft />
        </Button>
        <div
          className="flex flex-1 gap-1"
          role="progressbar"
          aria-label="Onboarding progress"
          aria-valuemin={0}
          aria-valuemax={questions.length}
          aria-valuenow={Math.min(step, questions.length)}
        >
          {questions.map((item, index) => (
            <span key={item.title} className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <span
                className={cn(
                  "block h-full rounded-full bg-blue-500 transition-all duration-300 motion-reduce:transition-none",
                  index < step ? "w-full" : index === step && answers[index] ? "w-1/2" : "w-0",
                )}
              />
            </span>
          ))}
        </div>
        <span className="w-10 text-right text-xs text-muted-foreground tabular-nums">
          {Math.min(step + 1, questions.length)}/{questions.length}
        </span>
      </div>

      {finished ? (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-blue-500/15">
            <Check className="size-6 text-blue-500" />
          </span>
          <p className="text-base font-medium text-foreground">You are all set</p>
          <p className="text-sm text-muted-foreground">We tailored your workspace based on your answers.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setStep(0);
              setAnswers(questions.map(() => null));
            }}
          >
            Restart
          </Button>
        </div>
      ) : (
        <>
          <div key={step} className="flex flex-col gap-3 animate-in fade-in-0 slide-in-from-right-2 motion-reduce:animate-none">
            <p className="text-lg font-medium text-foreground" id="question-title">
              {question.title}
            </p>
            <div role="group" aria-labelledby="question-title" className="flex flex-col gap-2">
              {question.options.map((option) => {
                const selected = answers[step] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => choose(option)}
                    className={cn(
                      "flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                      selected ? "border-blue-500 bg-blue-500/5 text-foreground" : "border-border text-foreground hover:bg-muted",
                    )}
                  >
                    {option}
                    <span
                      className={cn(
                        "flex size-4 items-center justify-center rounded-full border",
                        selected ? "border-blue-500 bg-blue-500 text-white" : "border-border",
                      )}
                    >
                      {selected && <Check className="size-3" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Button variant="ghost" size="sm" onClick={() => setStep(step + 1)}>
              Skip
            </Button>
            <Button disabled={!answers[step]} onClick={() => setStep(step + 1)}>
              {step === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
