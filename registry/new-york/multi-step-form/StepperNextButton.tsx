import { Button } from "@/components/ui/button";
import { useMultiFormContext } from "@/hooks/use-stepped-form";

function StepperNextButton() {
  const { isLastStep, isLoading, nextStep } = useMultiFormContext();
  return isLastStep ? (
    <Button type="submit" disabled={isLoading}>
      Submit
    </Button>
  ) : (
    <Button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      Next
    </Button>
  );
}

export default StepperNextButton;
