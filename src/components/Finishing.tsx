import { FormItems, selectPlan, selectAddOns } from "../database/app";
import '../styles/Finish.css';


type StepProps = FormItems & {
    newFormData: (item: Partial<FormItems>) => void;
};
const Finishing = ({
    plan,
    setDuration,
    newFormData,
    setOnlineService,
    setLargerStorage,
    setCustomizableProfile,
}: StepProps) => {
    const planTotal = !setDuration
        ? selectPlan[plan].monthly
        : selectPlan[plan].yearly;

    const addOnsTotal = [
        setOnlineService,
        setLargerStorage,
        setCustomizableProfile,
    ].reduce((acc, addOns, index) => {
        if (!addOns) return acc;
        const name = ["onlineServices", "largerStorage", "customizableProfile"][
            index
        ] as "onlineServices" | "largerStorage" | "customizableProfile";
        const planNames = !setDuration ? "monthly" : "yearly";
        const toAdd = selectAddOns[name][planNames];
        return acc + toAdd;
    }, 0);

    return (
        <div className="card ">
            <h2>Finishing up</h2>
            <p>
                Double-check everything looks OK before confirming.
            </p>

            <div className="totals-col">
                <div className="totals-row">
                    <div className="total-grid">
                        <h4>
                            {plan} {setDuration ? "(Yearly)" : "(Monthly)"}
                        </h4>
                        <button
                            type="button"
                            className="btn-change"
                            onClick={() => newFormData({ setDuration: !setDuration })}
                        >
                            Change
                        </button>
                    </div>
                    <div className="total-grid-price">
                        <p>
                            $
                            {!setDuration ? selectPlan[plan].monthly : selectPlan[plan].yearly}
                            /{!setDuration ? "mo" : "yr"}
                        </p>
                    </div>
                </div>
                <div className="divider"></div>
                {setOnlineService && (
                    <div className="totals-row">
                        <div>
                            <p className="gray">Online Service</p>
                        </div>
                        <div className="total-row-price">
                            ${!setDuration
                                ? selectAddOns.onlineServices.monthly
                                : selectAddOns.onlineServices.yearly}
                            /{!setDuration ? "mo" : "yr"}
                        </div>
                    </div>
                )}

                {setLargerStorage && (
                    <div className="totals-row">
                        <div>
                            <p className="gray">Larger Storage</p>
                        </div>
                        <div className="total-row-price">
                            ${!setDuration
                                ? selectAddOns.largerStorage.monthly
                                : selectAddOns.largerStorage.yearly}
                            /{!setDuration ? "mo" : "yr"}
                        </div>
                    </div>
                )}

                {setCustomizableProfile && (
                    <div className="totals-row">
                        <div>
                            <p className="gray">Larger Storage</p>
                        </div>
                        <div className="total-row-price">
                            ${!setDuration
                                ? selectAddOns.customizableProfile.monthly
                                : selectAddOns.customizableProfile.yearly}
                            /{!setDuration ? "mo" : "yr"}
                        </div>
                    </div>
                )}
            </div>

            <div className="totals-row final-total">
                <div>
                    <p className="gray">
                        Total ({!setDuration ? "month" : "year"})
                    </p>
                </div>
                <span className="final-price">
                    {" "}
                    <strong>
                        ${planTotal + addOnsTotal}/{!setDuration ? "mo" : "yr"}
                    </strong>
                </span>
            </div>

        </div>
    )
}

export default Finishing