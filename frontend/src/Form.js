
import { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useNavigate } from 'react-router-dom';

const surveyJson = {
  elements: [{
    name: "Age",
    title: "Enter your age:",
    type: "text",
    "isRequired": true
  }, {
    "type": "radiogroup",
    "name": "education_level",
    "title": "What is your highest education level?",
    "choices": [ "None of the below", "High school or GED", "Bachelors degree", "Graduate degree" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  },{
    "type": "radiogroup",
    "name": "sex_at_birth",
    "title": "What is your sex at birth?",
    "choices": [ "Male", "Female" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    "type": "radiogroup",
    "name": "smoking_status",
    "title": "Do you currently smoke cigarettes?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    name: "cigarettes_per_day",
    title: "If you smoke, how many cigarettes do you typically smoke per day?",
    type: "text",
  }, 
  {
    "type": "radiogroup",
    "name": "bp_meds",
    "title": "Are you currently taking medication for blood pressure?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  },{
    "type": "radiogroup",
    "name": "stroke_history",
    "title": "Have you ever had a stroke?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    "type": "radiogroup",
    "name": "hypertension_history",
    "title": "Have you ever been diagnosed with high blood pressure (hypertension)?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    "type": "radiogroup",
    "name": "diabetes_history",
    "title": "Have you ever been diagnosed with diabetes?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    name: "cholesterol_level",
    title: "What is your total cholesterol level? (mg/dL)",
    type: "text",
    "isRequired": true
  }, {
    name: "systolic_bp",
    title: "What is your systolic blood pressure (the top number)?",
    type: "text",
    "isRequired": true
  }, {
    name: "diastolic_bp",
    title: "What is your diastolic blood pressure (the bottom number)?",
    type: "text",
    "isRequired": true
  },
  {
    name: "BMI",
    title: "What is your current Body Mass Index (BMI)? If you don't know, provide your height and weight. (You can also calculate BMI using height and weight if necessary)",
    type: "text",
    "isRequired": true
  },{
    name: "resting_heart_rate",
    title: "What is your resting heart rate (beats per minute)?",
    type: "text",
    "isRequired": true
  },{
    name: "blood_glucose_level",
    title: "What is your blood glucose level (mg/dL)?",
    type: "text",
    "isRequired": true
  },
]
};

function Form() {
    const navigate = useNavigate();
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const data = sender.data;
    const results = JSON.stringify(sender.data);
    const Dataarray = {};
    //alert(results);

    const educationMap = {
        "None of the below": 1,
        "High school or GED": 2,
        "Bachelors degree": 3,
        "Graduate degree": 4
      };
  
      const genderMap = {
        "Male": 0,
        "Female": 1
      };
  
      const smokingMap = {
        "Yes": 1,
        "No": 0
      };

      const BPMap = {
        "Yes": 1,
        "No": 0
      };

      const Strokemap = {
        "Yes": 1,
        "No": 0
      };

      const Hypertensionmap = {
        "Yes": 1,
        "No": 0
      };

      const Diabetesmap = {
        "Yes": 1,
        "No": 0
      };

      Dataarray.age = Number(data.Age);
      Dataarray.education = educationMap[data.education_level];
      Dataarray.sex = genderMap[data.sex_at_birth];
      Dataarray.is_smoking = smokingMap[data.smoking_status];
      Dataarray.cigsPerDay = Number(data.cigarettes_per_day);
      Dataarray.BPMeds = BPMap[data.bp_meds];
      Dataarray.prevalentStroke = Strokemap[data.stroke_history];
      Dataarray.prevalentHyp = Hypertensionmap[data.hypertension_history];
      Dataarray.diabetes = Diabetesmap[data.diabetes_history];
      Dataarray.totChol = Number(data.cholesterol_level);
      Dataarray.sysBP = Number(data.systolic_bp);
      Dataarray.diaBP = Number(data.diastolic_bp);
      Dataarray.BMI = Number(data.BMI);
      Dataarray.heartRate = Number(data.resting_heart_rate);
      Dataarray.glucose = Number(data.blood_glucose_level);


      
      fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Dataarray),
        })

      .then(response => response.json())
      .then(result => {
     
      navigate("/results", { state: { prediction: result.prediction, confidence: result.confidence } });     
    })

    .catch(error => {
      console.error('Error:', error);
      alert(error);
      alert('Error in the form submitted');
    });

  }, []);

  survey.onComplete.add(alertResults);


  return <Survey model={survey} />;
}

export default Form;