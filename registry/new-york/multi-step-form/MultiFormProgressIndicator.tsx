"use client";

import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/components/ui/stepper";
import { ChevronLeftIcon } from "lucide-react";

export default function MultiFormProgressIndicator({
  totalSteps = 3,
  currentStep,
  onPrevious,
  onNext,
  actions = true,
}: {
  totalSteps: number;
  currentStep: number;
  onPrevious: () => void;
  onNext: () => void;
  actions?: boolean;
}) {
  const steps = Array(totalSteps)
    .fill("")
    .map((_, i) => i + 1);

  return (
    <div className="relative mx-auto w-full max-w-xl space-y-8 text-center">
      <div className="flex items-center gap-2">
        {actions ? (
          <Button
            className="shrink-0"
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            disabled={currentStep === 1}
            aria-label="Prev step"
          >
            <ChevronLeftIcon size={16} aria-hidden="true" />
          </Button>
        ) : null}
        <Stepper value={currentStep} onValueChange={onNext} className="gap-1">
          {steps.map((step) => (
            <StepperItem key={step} step={step} className="flex-1">
              <StepperTrigger
                className="w-full flex-col items-start gap-2"
                asChild
              >
                <StepperIndicator asChild className="h-1 w-full bg-border">
                  <span className="sr-only">{step}</span>
                </StepperIndicator>
              </StepperTrigger>
            </StepperItem>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
