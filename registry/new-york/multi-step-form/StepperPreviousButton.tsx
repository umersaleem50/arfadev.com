import { Button } from "@/components/ui/button";
import { useMultiFormContext } from "@/hooks/use-stepped-form";
import { ArrowLeft } from "lucide-react";

function StepperPreviousButton() {
  const { isFirstStep, previousStep } = useMultiFormContext();
  return (
    <Button onClick={previousStep} disabled={isFirstStep} variant={"outline"}>
      <ArrowLeft />
      Go Back
    </Button>
  );
}

export default StepperPreviousButton;
