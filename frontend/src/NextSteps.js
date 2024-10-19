import "./NextSteps.css";
import React from "react";

const NextSteps = () => {
    return (
        <div className="NextSteps">
            <h1> Next Steps</h1>
            <div>
                <p> Congestive Heart Failure (CHF) is a serious condition,
                    but there are several proactive steps you can take to reduce your risk of developing it.
                </p>
                <p>
                    If you believe your risk level is high, it's wise to consult a healthcare professional. 
                    You can either reach out to your current doctor or schedule a quick online appointment 
                    through a service like the CVS Minute Clinic: <a href="https://www.cvs.com/minuteclinic/virtual-care" target="_blank" rel="noopener noreferrer">CVS Minute Clinic</a>
                </p>
                <p>
                    Adopting healthier habits is another effective way to lower your risk of CHF.
                    Maintaining a healthy weight, exercising regularly, eating a balanced diet, 
                    quitting smoking, getting adequate sleep, and managing stress are all beneficial countermeasures.
                </p>
                <p>
                    Your mental health is equally important. If you're feeling distressed about your health or need support
                    in managing stress, consider reaching out to a mental health professional. 
                    You can find a local psychiatrist through this link: <a href="https://www.psychologytoday.com/us/psychiatrists" target="_blank" rel="noopener noreferrer">Psychology Today</a>
                </p>
            </div>
        </div>
    );
}

export default NextSteps;