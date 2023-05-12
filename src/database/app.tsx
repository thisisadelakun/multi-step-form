export type FormItems = {
    name: string;
    email: string;
    number: string;
    plan: "Arcade" | "Advanced" | "Pro";
    setDuration: boolean;
    setOnlineService: boolean;
    setLargerStorage: boolean;
    setCustomizableProfile: boolean;
    isFormSubmitted: boolean,
};

export const selectPlan = {
    Arcade: {
        monthly: 9,
        yearly: 90,
    },
    Advanced: {
        monthly: 12,
        yearly: 120,
    },
    Pro: {
        monthly: 15,
        yearly: 150,
    }
};

export const selectAddOns = {
    onlineServices: {
        monthly: 1,
        yearly: 10,
    },
    largerStorage: {
        monthly: 2,
        yearly: 20,
    },
    customizableProfile: {
        monthly: 2,
        yearly: 20,
    }
};
