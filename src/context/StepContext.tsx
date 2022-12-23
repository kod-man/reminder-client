import { createContext, useState } from "react";

export type STEP = 1 | 2 | 3;

export type StepContextType = {
  step: STEP;
  setStep: (step: STEP) => void;
};

export const StepContext = createContext({} as StepContextType);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<STEP>(1);
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
