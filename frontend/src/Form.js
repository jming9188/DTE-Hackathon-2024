
import { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  elements: [{
    name: "Age",
    title: "Enter your age:",
    type: "text",
    "isRequired": true
  }, {
    "type": "checkbox",
    "name": "education level",
    "title": "What is your highest education level?",
    "choices": [ "None of the below", "High school or GED", "Bachelors degree", "Graduate degree" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  },{
    "type": "checkbox",
    "name": "sex",
    "title": "What is your sex at birth?",
    "choices": [ "Male", "Female" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    "type": "checkbox",
    "name": "sex",
    "title": "Do you currently smoke cigarettes?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    name: "cigarettes per day",
    title: "If you smoke, how many cigarettes do you typically smoke per day?",
    type: "text",
  }, 
  {
    "type": "checkbox",
    "name": "BP",
    "title": "Are you currently taking medication for blood pressure?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  },{
    "type": "checkbox",
    "name": "Stroke",
    "title": "Have you ever had a stroke?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    "type": "checkbox",
    "name": "high BP",
    "title": "Have you ever been diagnosed with high blood pressure (hypertension)?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    "type": "checkbox",
    "name": "diabetes",
    "title": "Have you ever been diagnosed with diabetes?",
    "choices": [ "Yes", "No" ],
    "isRequired": true,
    "colCount": 1,
    "showNoneItem": false,
    "showOtherItem": false,
    "showSelectAllItem": false,
    "separateSpecialChoices": true
  }, {
    name: "cholesterol level",
    title: "What is your total cholesterol level? (mg/dL)",
    type: "text",
    "isRequired": true
  }, {
    name: "systolic BP",
    title: "What is your systolic blood pressure (the top number)?",
    type: "text",
    "isRequired": true
  }, {
    name: "diastolic BP",
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
    name: "BPM",
    title: "What is your resting heart rate (beats per minute)?",
    type: "text",
    "isRequired": true
  },{
    name: "blood glucose level",
    title: "What is your blood glucose level (mg/dL)?",
    type: "text",
    "isRequired": true
  },
]
};

function Form() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default Form;