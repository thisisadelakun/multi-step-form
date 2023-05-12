import '../styles/Confirmation.css';
import thankyouicon from '../assets/icon-thank-you.svg';

const Confirmation = () => {
    return (
        <div className="card thankyoucard">
            <div className="thankyoucard-col">
                <img src={thankyouicon} alt="thank you" />
                <h1>Thank you!</h1>
                <p className="">
                    Thanks for confirming your subscription! 
                    We hope you have fun using our
                    platform. If you ever need support, please feel free to email us at
                    support@loremgaming.com.
                </p>
            </div>
        </div>
    );
};
export default Confirmation;