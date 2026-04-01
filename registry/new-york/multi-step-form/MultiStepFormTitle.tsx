import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMultiFormContext } from "@/hooks/use-stepped-form";

function MultiStepFormHeader() {
  const { currentStep } = useMultiFormContext();
  return (
    <DialogHeader>
      <DialogTitle>{currentStep.title}</DialogTitle>
      <DialogDescription>{currentStep.description}</DialogDescription>
    </DialogHeader>
  );
}

export default MultiStepFormHeader;
