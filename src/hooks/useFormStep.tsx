import { useState } from "react";

const useFormStep = (formSteps: number) => {
    const [initialStep, setInitialStep] = useState(0);

    const prevSteps = () => {
        if (initialStep === 0) return;
        setInitialStep((prev) => prev - 1);
    };

    const nextSteps = () => {
        if (initialStep === formSteps - 1) return;
        setInitialStep((prev) => prev + 1);
    };

    const goToSection = (item: number) => {
        setInitialStep(item);
    };



    return {
        initialStep,
        nextSteps,
        prevSteps,
        goToSection,
        setFirstStep: initialStep === 0,
        setLastStep: initialStep === formSteps - 2,
        setConfirmation: initialStep === formSteps - 1,

    };
}

export default useFormStep