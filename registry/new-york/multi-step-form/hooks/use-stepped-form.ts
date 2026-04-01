import { MultiStepFormContext } from "@/registry/new-york/multi-step-form/context/MultiStepFormContext";
import { useContext } from "react";
import { type MultiFormContextProps } from "../types";

export function useMultiFormContext<T extends Record<string, unknown>>() {
  const ctx = useContext(MultiStepFormContext);
  if (!ctx) {
    throw new Error(
      "useMultiFormContext must be used within MultiStepProvider",
    );
  }
  return ctx as unknown as MultiFormContextProps<T>;
}
