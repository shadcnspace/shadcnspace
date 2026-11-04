"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Atom, CheckCircle2, Plus, RotateCcw } from "lucide-react";

export default function Questionnaire01() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <Accordion defaultValue={["mechanics"]} className="w-full">
        <AccordionItem
          value="mechanics"
          className="rounded-xl border border-border bg-card px-4 py-1"
        >
          <AccordionTrigger className="hover:no-underline py-3 **:data-[slot=accordion-trigger-icon]:hidden">
            <div className="w-full flex items-center gap-3 text-left">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Atom className="size-4" />
              </div>
              <div className="flex-1 flex flex-col gap-0.5">
                <div className="flex items-center justify-start gap-2 flex-wrap">
                  <span className="font-medium text-foreground text-sm sm:text-base">
                    Physics: Classical Mechanics
                  </span>
                  {submitted ? (
                    <Badge className="bg-teal-400/10 text-teal-400 border-teal-400/20 text-xs gap-1">
                      <CheckCircle2 className="size-3" />
                      Completed
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="text-xs font-normal text-muted-foreground"
                    >
                      3 Questions
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-normal">
                  Motion, forces, and Newton&apos;s laws
                </p>
              </div>
              <Plus className="size-4 text-foreground transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="[&_p:not(:last-child)]:mb-0">
            {submitted ? (
              <Card className="rounded-lg ring-0 bg-muted/40 border border-border p-6">
                <CardContent className="flex flex-col items-center justify-center text-center p-0 gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-teal-400/10 text-teal-400">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-foreground">
                      Quiz Completed!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      You have successfully submitted the Classical Mechanics
                      quiz.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="gap-1.5 text-xs dark:bg-background dark:border-border cursor-pointer"
                  >
                    <RotateCcw className="size-3.5" />
                    Retake Quiz
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-lg ring-0 border border-border p-4">
                <CardContent className="p-0">
                  <Questionnaire
                    defaultItem="q1"
                    shortcuts="letters"
                    onSubmit={(e: { preventDefault: () => void; }) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="gap-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">
                        Module Quiz
                      </span>
                      <QuestionnaireProgress className="text-xs font-medium text-muted-foreground" />
                    </div>
                    <Separator />
                    <QuestionnaireItem name="q1" required className="gap-2.5">
                      <QuestionnaireTitle className="text-sm font-medium text-foreground">
                        What is the SI unit of force?
                      </QuestionnaireTitle>
                      <QuestionnaireChoices className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <QuestionnaireChoice
                          value="newton"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          Newton (N)
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="joule"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          Joule (J)
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="watt"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          Watt (W)
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="pascal"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          Pascal (Pa)
                        </QuestionnaireChoice>
                      </QuestionnaireChoices>
                      <QuestionnaireError />
                    </QuestionnaireItem>
                    <QuestionnaireItem name="q2" required className="gap-2.5">
                      <QuestionnaireTitle className="text-sm font-medium text-foreground">
                        Which law states that every action has an equal and
                        opposite reaction?
                      </QuestionnaireTitle>
                      <QuestionnaireChoices className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <QuestionnaireChoice
                          value="first"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          Newton&apos;s First Law
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="second"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          Newton&apos;s Second Law
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="third"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          Newton&apos;s Third Law
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="gravity"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          Law of Gravitation
                        </QuestionnaireChoice>
                      </QuestionnaireChoices>
                      <QuestionnaireError />
                    </QuestionnaireItem>
                    <QuestionnaireItem name="q3" className="gap-2.5">
                      <QuestionnaireTitle className="text-sm font-medium text-foreground">
                        What is the standard acceleration due to gravity on
                        Earth?
                      </QuestionnaireTitle>
                      <QuestionnaireChoices className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <QuestionnaireChoice
                          value="9.8"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          9.8 m/s²
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="8.9"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          8.9 m/s²
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="10.8"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          10.8 m/s²
                        </QuestionnaireChoice>
                        <QuestionnaireChoice
                          value="6.7"
                          className="p-2.5 text-xs sm:text-sm"
                        >
                          6.7 m/s²
                        </QuestionnaireChoice>
                      </QuestionnaireChoices>
                      <QuestionnaireError />
                    </QuestionnaireItem>
                    <QuestionnaireActions>
                      <QuestionnairePrevious
                        size="sm"
                        variant="outline"
                        className="text-xs dark:bg-background dark:border-border cursor-pointer"
                      />
                      <QuestionnaireSkip
                        size="sm"
                        variant="ghost"
                        className="text-xs cursor-pointer"
                      />
                      <QuestionnaireNext
                        size="sm"
                        variant="default"
                        className="text-xs cursor-pointer"
                      />
                      <QuestionnaireSubmit
                        size="sm"
                        variant="default"
                        className="text-xs cursor-pointer"
                      >
                        Submit
                      </QuestionnaireSubmit>
                    </QuestionnaireActions>
                  </Questionnaire>
                </CardContent>
              </Card>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
