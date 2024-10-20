import "./NextSteps.css";
import React from "react";

const NextSteps = () => {
    return (
        <div className="NextSteps">
            <h1> Next Steps</h1>
            <div>
                <p> Congestive Heart Failure (CHF) is a serious condition,
                    but here are steps you should take based on your input data. 
                </p>
                <ul>
                    <li>Schedule a physical with your current doctor or schedule an online 
                    appointment through the CVS Minute Clinic: <a href="https://www.cvs.com/minuteclinic/virtual-care" target="_blank" rel="noopener noreferrer">CVS Minute Clinic</a></li>
                    <li>Exercise for 30 minutes a day to lose weight and manage stress. </li> 
                    <li>Increase your consumption of fruits and vegetables. </li>
                    <li>Guidance from mental health professionals at the following link will give you additional support: <a href="https://www.psychologytoday.com/us/psychiatrists" target="_blank" rel="noopener noreferrer">Psychology Today</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NextSteps;