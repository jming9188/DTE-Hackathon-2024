import React from 'react';
import './PatientInfo.css';
const PatientInfo = () => {
    return (
        <div className="PatientInfo">
            <h1> What is Congestive Heart Failure?</h1>
            <div>
                <p> Congestive Heart Failure (CHF) is a major 
                    health condition when the human heart fails to
                    pump sufficient amounts of blood throughout the 
                    body. 
                </p>
                <p>
                    It can be caused by a variety of other health conditions
                    such as obesity and heart arrhythmia.
                </p>
                <p>
                    While treatments for CHF such as heart transplants are helpful, 
                    the most important preventative treatments include healthy diets, 
                    and getting regular exercise.  
                </p>
                <p>
                    This app aims to address patient access to treatments, diagnose the 
                    conditions for users, and provide support to users to lower CHF rates. 
                </p>
            </div>
        </div>
    );
}

export default PatientInfo;
