import { type ReactNode, useEffect, useState } from "react";
import {
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  useForm,
} from "react-hook-form";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FieldSet } from "@/components/ui/field";
import { MultiStepFormProvider } from "@/registry/new-york/multi-step-form/context/MultiStepFormContext";
import type {
  MultiFormContextProps,
  MultiFormStep,
} from "@/types/multi-step-form";
import { useLocalStorage } from "@mantine/hooks";
import { toast } from "sonner";
import MultiFormProgressIndicator from "./MultiFormProgressIndicator";
import MultiStepFormFooter from "./MultiStepFormFooter";
import MultiStepFormHeader from "./MultiStepFormTitle";

type StoredFormState<T extends FieldValues> = {
  currentStepIndex: number;
  formValues: T;
};

type MultiStepFormProps<T extends FieldValues> = {
  steps: MultiFormStep<T>[];
  localStorageKey: string;
  children: ReactNode;
  onSubmit: (data: T) => void;
  isLoading?: boolean;
  data?: T;
};

function MultiStepForm<T extends FieldValues>({
  steps,
  localStorageKey,
  children,
  onSubmit,
  isLoading,
  data,
}: MultiStepFormProps<T>) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [savedFormState, setSavedFormState] =
    useLocalStorage<StoredFormState<T> | null>({
      key: localStorageKey,
      defaultValue: null,
    });

  const methods = useForm<T>({ mode: "all" });
  const [currentStepIndex, setCurrentStepIndex] = useState(() => {
    methods.reset(savedFormState?.formValues);
    return savedFormState?.currentStepIndex ?? 0;
  });
  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;

  useEffect(() => {
    if (data) {
      methods.reset(data);
    }
  }, [data, methods]);

  function saveFormState(stepIndex: number) {
    setSavedFormState({
      currentStepIndex: stepIndex,
      formValues: methods.getValues(),
    });
  }

  function clearFormState() {
    methods.reset();
    setCurrentStepIndex(0);
    setSavedFormState(null);
    window.localStorage.removeItem(localStorageKey);
  }

  function handleOnCloseDialog() {
    setIsOpenDialog(false);
  }

  async function handleNext() {
    // Trigger validation for the current step fields
    const isValid = await methods.trigger(currentStep.fields);

    if (!isValid) return;

    const currentStepValues = methods.getValues(currentStep.fields);

    const formValues = Object.fromEntries(
      currentStep.fields.map((field, index) => [
        field,
        currentStepValues[index] ?? "",
      ]),
    );

    if (currentStep.validationSchema) {
      const validateResults =
        currentStep.validationSchema.safeParse(formValues);

      if (!validateResults.success) {
        validateResults.error.issues.map((err) => {
          methods.setError(err.path.join(".") as any, {
            message: err.message,
            type: "manual",
          });
        });
        return;
      }
    }

    if (currentStepIndex < steps.length - 1) {
      saveFormState(currentStepIndex + 1);
      setCurrentStepIndex((current: number) => current + 1);
    }
  }

  function handlePrevious() {
    if (currentStepIndex > 0) {
      saveFormState(currentStepIndex - 1);
      setCurrentStepIndex((c) => c - 1);
    }
  }

  function handleGotoStep(position: number) {
    if (position >= 0 && position < steps.length) {
      setCurrentStepIndex(position);
    }
  }

  // Generic submit handler for last step
  const handleSubmitSteppedForm: SubmitHandler<T> = async (data) => {
    try {
      onSubmit(data);
      handleOnCloseDialog();
    } catch (err: unknown | any) {
      toast.error(err?.name, { description: err?.message });
    }
  };

  const value: MultiFormContextProps<T> = {
    currentStep,
    currentStepIndex,
    isFirstStep: currentStepIndex === 0,
    isLastStep: isLastStep,
    goToStep: handleGotoStep,
    nextStep: handleNext,
    previousStep: handlePrevious,
    clearFormState,
    steps,
    isLoading,
  };

  return (
    <MultiStepFormProvider value={value}>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <MultiStepFormHeader />

          <MultiFormProgressIndicator
            currentStep={currentStepIndex + 1}
            onNext={handleNext}
            onPrevious={handlePrevious}
            totalSteps={steps.length} // dynamic
            actions={false}
          />

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmitSteppedForm)}>
              <FieldSet>
                {currentStep.component}
                <MultiStepFormFooter />
              </FieldSet>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </MultiStepFormProvider>
  );
}

export default MultiStepForm;
