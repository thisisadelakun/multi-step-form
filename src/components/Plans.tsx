import { FormItems, selectPlan } from "../database/app";
import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import '../styles/Plans.css'

type StepProps = FormItems & {
  newFormData: (item: Partial<FormItems>) => void;
};

const Plans = ({ plan, setDuration, newFormData }: StepProps) => {

  return (
    <div className='card'>
      <h2>
        Select your plan
      </h2>

      <p>
        You have the option of monthly or yearly billing.
      </p>

      <div className="plan-container">

        <label htmlFor="arcade">
          <div className="plan-col arcade-plan">
            <div className="plan-icon">
              <img src={arcadeIcon} alt="Arcade Icon" />
            </div>

            <div className="plan-text">
              <h3> Arcade
                <span>
                  ${!setDuration ? selectPlan.Arcade.monthly : selectPlan.Arcade.yearly}/{!setDuration ? "mo" : "yr"}
                </span>
                {setDuration && <p>2 months free</p>}
              </h3>
            </div>
            <input
              className="planinput"
              type="radio"
              name="plan"
              id="arcade"
              checked={plan === "Arcade"}
              onChange={(e) => newFormData({ plan: "Arcade" })}
            />
          </div>
        </label>

        <label htmlFor="advanced">
          <div className="plan-col advance-plan">
            <div className="plan-icon">
              <img src={advancedIcon} alt="Advanced icon"/>
            </div>

            <div className="plan-text">
              <h3> Advanced
                <span>
                  ${!setDuration ? selectPlan.Advanced.monthly : selectPlan.Advanced.yearly}/{!setDuration ? "mo" : "yr"}
                </span>
                {setDuration && <p>2 months free</p>}
              </h3>
            </div>
            <input
              className="planinput"
              type="radio"
              name="plan"
              id="advanced"
              checked={plan === "Advanced"}
              onChange={(e) => newFormData({ plan: "Advanced" })}
            />
          </div>
        </label>

        <label htmlFor="pro">
          <div className="plan-col pro-plan">
            <div className="plan-icon">
              <img src={proIcon} alt=" Pro icon" />
            </div>

            <div className="plan-text">
              <h3> Pro
                <span>
                  ${!setDuration ? selectPlan.Pro.monthly : selectPlan.Pro.yearly}/{!setDuration ? "mo" : "yr"}
                </span>
                {setDuration && <p>2 months free</p>}
              </h3>
            </div>
            <input
              className="planinput"
              type="radio"
              name="plan"
              id="pro"
              checked={plan === "Pro"}
              onChange={(e) => newFormData({ plan: "Pro" })}
            />
          </div>
        </label>

      </div>

      <div className="choose-plan">
        <div className="choose-plan-col">
          <span>Monthy</span>
          <input
            type="checkbox"
            name="setPlan"
            checked={setDuration}
            onChange={(e) => newFormData({ setDuration: e.target.checked })}
          />
          <div className="plan-toggle"></div>
          <span>Yearly</span>
        </div>
      </div>

    </div>
  );
};

export default Plans