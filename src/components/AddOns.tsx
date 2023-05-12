import { FormItems, selectAddOns } from "../database/app";
import '../styles/AddOns.css';

type StepProps = FormItems & {
    newFormData: (item: Partial<FormItems>) => void;
};

const AddOns = ({ setOnlineService, setLargerStorage, setCustomizableProfile, newFormData, setDuration }: StepProps) => {
    return (
        <div className="card">
            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className="addons-container">

                <label htmlFor="setOnlineService" className="addonslabel" >
                    <div className="addons-col">
                        <input
                            type="checkbox"
                            name="setOnlineService"
                            checked={setOnlineService}
                            id="setOnlineService"
                            onChange={(e) => newFormData({ setOnlineService: e.target.checked })}
                        />
                        <div className="addons-text">
                            <p>Online service</p>
                            <span className="more-info">Access to multiplayer games</span>
                        </div>
                    </div>

                    <div>
                        <p className="addons-price">
                            +${!setDuration ? selectAddOns.onlineServices.monthly : selectAddOns.onlineServices.yearly}/{!setDuration ? "mo" : "yr"}
                        </p>
                    </div>
                </label>

                <label htmlFor="setLargerStorage" className="addonslabel" >
                    <div className="addons-col">
                        <input
                            type="checkbox"
                            name="setLargerStorage"
                            checked={setLargerStorage}
                            id="setLargerStorage"
                            onChange={(e) => newFormData({ setLargerStorage: e.target.checked })}
                        />
                        <div className="addons-text">
                            <p>Larger storage</p>
                            <span>Extra 1TB of cloud save</span>
                        </div>
                    </div>
                    <div>
                        <p className="addons-price">
                            +${!setDuration ? selectAddOns.largerStorage.monthly : selectAddOns.largerStorage.yearly}/{!setDuration ? "mo" : "yr"}
                        </p>
                    </div>
                </label>

                <label htmlFor="setCustomizableProfile" className="addonslabel" >
                    <div className="addons-col">
                        <input
                            type="checkbox"
                            name="setCustomizableProfile"
                            checked={setCustomizableProfile}
                            id="setCustomizableProfile"
                            onChange={(e) => newFormData({ setCustomizableProfile: e.target.checked })}
                        />
                        <div className="addons-text">
                            <p>Customizable profile</p>
                            <span>Custom theme on your profile</span>
                        </div>
                    </div>
                    <div>
                        <p className="addons-price">
                            +${!setDuration ? selectAddOns.customizableProfile.monthly : selectAddOns.customizableProfile.yearly}/{!setDuration ? "mo" : "yr"}
                        </p>
                    </div>
                </label>

            </div>
        </div>
    )
}

export default AddOns