import React from 'react';
import './PatientInfo.css';

const PatientInfo = () => {
    return (
        <div className="PatientInfo">
            <h1>What is Congestive Heart Failure?</h1>
            <ul>
                <li>
                    Congestive Heart Failure (CHF) is a major health condition when the human heart fails to pump sufficient amounts of blood throughout the body.
                </li>
                <li>
                    It can be caused by a variety of other health conditions such as obesity and heart arrhythmia.
                </li>
                <li>
                    While treatments for CHF such as heart transplants are helpful, the most important preventative treatments include healthy diets and getting regular exercise.
                </li>
                <li>
                    This app aims to address patient access to treatments, diagnose the conditions for users, and provide support to users to lower CHF rates.
                </li>
            </ul>
            <div className="video-container">
                <iframe
                    width="100%"  
                    height="400" 
                    src="https://www.youtube.com/embed/GnpLm9fzYxU?cc_load_policy=1"
                    title="What is Congestive Heart Failure?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default PatientInfo;

