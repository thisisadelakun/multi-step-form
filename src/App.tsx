import { FormEvent, useState } from "react";
import './App.css';
import styles from './styles/Step.module.css'
import useFormStep from './hooks/useFormStep';
import PersonalInfo from './components/PersonalInfo';
import Plans from './components/Plans'
import { FormItems } from './database/app';
import Buttons from "./hooks/Buttons";
import AddOns from "./components/AddOns";
import Finishing from "./components/Finishing";
import Confirmation from "./components/Confirmation";



const initialValues: FormItems = {
  name: "",
  email: "",
  number: "",
  plan: "Arcade",
  isFormSubmitted: false,
  setDuration: false,
  setOnlineService: false,
  setLargerStorage: false,
  setCustomizableProfile: false,

};

const navBar = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARRY"];

function App() {
  const [formData, setFormData] = useState(initialValues);

  const newFormData = (newForm: Partial<FormItems>) =>
    setFormData((prev) => ({ ...formData, ...newForm }));

const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    initialStep,
    prevSteps,
    nextSteps,
    setFirstStep,
    setLastStep,
    goToSection,
    setConfirmation,
  } = useFormStep(navBar.length + 1);

  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    nextSteps();
    setIsFormSubmitted(false);

  };


  return (
    <div className='App'>

      <aside>
        <div className="step-container">
          <div className="steps-col">
            {navBar.map((item, index) => (
              <div className="steps-col-row" key={item}>

                <div className={`${styles.stepsColNum} ${initialStep === index ? styles.isActive : ""}`}>
                  <span>{index + 1}</span>
                </div>

                <div className="stepname">
                  <p className="step-num">STEP {index + 1}</p>
                  <p className="step-item">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main>
        <div className="form-col">
          <form onSubmit={handleSubmit}>
            <div className="step-page">
              {initialStep === 0 && (
                <PersonalInfo {...formData} newFormData={newFormData} isFormSubmitted={isFormSubmitted}  />
              )}

              {initialStep === 1 && (
                <Plans {...formData} newFormData={newFormData} />
              )}

              {initialStep === 2 && (
                <AddOns {...formData} newFormData={newFormData} />
              )}

              {initialStep === 3 && (
                <Finishing {...formData} newFormData={newFormData} />
              )}

              {initialStep === 4 &&
                <Confirmation />
              }
            </div>

            <div hidden={setConfirmation}>
              <div className="footer">
                <div className="btn-col" hidden={setConfirmation}>
                  <div className="prev-col">
                    {!setFirstStep && (
                      <Buttons style="back" text="Go Back" type="button" onClick={prevSteps} />
                    )}
                  </div>
                  <div className="next-col">
                    <Buttons
                      style={setLastStep ? "submit" : "default"}
                      text={setLastStep ? "Confirm" : "Next Step"}
                    />
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </main>

    </div>
  );
}

export default App
