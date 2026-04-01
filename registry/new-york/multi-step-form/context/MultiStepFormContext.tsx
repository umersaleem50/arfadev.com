import { createContext } from "react";
import { MultiFormContextProps } from "../types";

export const MultiStepFormContext =
  createContext<MultiFormContextProps<any> | null>(null);

export const MultiStepFormProvider = <T extends Record<string, unknown>>({
  value,
  children,
}: {
  value: MultiFormContextProps<T>;
  children: React.ReactNode;
}) => {
  return (
    <MultiStepFormContext.Provider value={value}>
      {children}
    </MultiStepFormContext.Provider>
  );
};
