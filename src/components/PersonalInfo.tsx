import { FormItems } from "../database/app";
import "../styles/PersonalInfo.css";
import style from '../styles/App.module.css'
import { useState } from 'react';

type StepProps = FormItems & {
    newFormData: (item: Partial<FormItems>) => void;
    isFormSubmitted: boolean;
};

const PersonalInfo = ({
    name,
    email,
    number,
    newFormData,
    isFormSubmitted,
}: StepProps) => {
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNumberValid, setIsNumberValid] = useState(true);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameValue = e.target.value;
        setIsNameValid(nameValue !== "");
        newFormData({ name: nameValue });
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        setIsEmailValid(emailValue !== "");
        newFormData({ email: emailValue });
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numberValue = e.target.value;
        setIsNumberValid(numberValue !== "");
        newFormData({ number: numberValue });
    };

    return (
        <div className="card">
            <h2>Personal info</h2>

            <p>Please provide your name, email address, and phone number.</p>

            <div className="cardform">
                <label className="cardLabel" htmlFor="name">
                    <div className="labelspan">
                        <span>Name</span>
                        <span>{isNameValid ? "" : "This field is required"}</span>
                    </div>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="e.g. Stephen King"
                        required
                        className={`${isFormSubmitted && !isNameValid ? "" : style.invalid}`}
                        value={name}
                        onChange={handleNameChange}
                    />
                </label>

                <label className="cardLabel" htmlFor="email">
                    <div className="labelspan">
                        <span>Email</span>
                        <span>{isEmailValid ? "" : "This field is required"}</span>
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="e.g. stephenking@lorem.com"
                        required
                        className={`${isFormSubmitted && !isEmailValid ? style.invalid : ""}`}
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label className="cardLabel" htmlFor="number">
                    <div className="labelspan">
                        <span>Phone Number</span>
                        <span>{isNumberValid ? "" : "This field is required"}</span>
                    </div>
                    <input
                        id="number"
                        name="number"
                        type="number"
                        placeholder="e.g. +1 234 567 890"
                        required
                        className={`${isFormSubmitted && !isNumberValid ? style.invalid : ""}`}
                        value={number}
                        onChange={handleNumberChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default PersonalInfo;
