import { DialogFooter } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import StepperNextButton from "./StepperNextButton";
import StepperPreviousButton from "./StepperPreviousButton";

function MultiStepFormFooter() {
  return (
    <DialogFooter>
      <Field orientation="horizontal" className="flex w-full justify-end">
        <StepperPreviousButton />
        <StepperNextButton />
      </Field>
    </DialogFooter>
  );
}

export default MultiStepFormFooter;
