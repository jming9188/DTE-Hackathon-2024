
import { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useNavigate } from 'react-router-dom';
import { ContrastLight } from "survey-core/themes"

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
  survey.applyTheme({    "themeName": "contrast",
    "colorPalette": "dark",
    "isPanelless": false,
    "backgroundImage": "",
    "backgroundOpacity": 1,
    "backgroundImageAttachment": "scroll",
    "backgroundImageFit": "cover",
    "cssVariables": {
        "--sjs-questionpanel-backcolor": "rgba(237, 234, 217, 1)",
        "--sjs-corner-radius": "4px",
        "--sjs-base-unit": "8px",
        "--sjs-shadow-small": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
        "--sjs-shadow-inner": "0px 0px 0px 2px rgba(0, 0, 0, 1),0px -2px 0px 2px rgba(0, 0, 0, 1)",
        "--sjs-border-default": "rgba(0, 0, 0, 1)",
        "--sjs-border-light": "rgba(232, 192, 51, 1)",
        "--sjs-general-backcolor": "rgba(255, 216, 77, 1)",
        "--sjs-general-backcolor-dark": "rgba(255, 255, 255, 1)",
        "--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 1)",
        "--sjs-general-backcolor-dim-dark": "rgba(255, 255, 255, 1)",
        "--sjs-general-forecolor": "rgba(0, 0, 0, 1)",
        "--sjs-general-forecolor-light": "rgba(0, 0, 0, 1)",
        "--sjs-general-dim-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-general-dim-forecolor-light": "rgba(255, 255, 255, 1)",
        "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
        "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
        "--sjs-secondary-forecolor": "rgba(48, 48, 48, 1)",
        "--sjs-secondary-forecolor-light": "rgba(48, 48, 48, 0.25)",
        "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 1)",
        "--sjs-shadow-medium": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
        "--sjs-shadow-large": "0px 6px 0px 0px rgba(0, 0, 0, 1)",
        "--sjs-shadow-inner-reset": "0px 0px 0px 0px rgba(0, 0, 0, 1),0px 0px 0px 0px rgba(0, 0, 0, 1)",
        "--sjs-border-inside": "rgba(255, 255, 255, 0.08)",
        "--sjs-special-red-forecolor": "rgba(48, 48, 48, 1)",
        "--sjs-special-green": "rgba(36, 197, 164, 1)",
        "--sjs-special-green-light": "rgba(36, 197, 164, 0.1)",
        "--sjs-special-green-forecolor": "rgba(48, 48, 48, 1)",
        "--sjs-special-blue": "rgba(91, 151, 242, 1)",
        "--sjs-special-blue-light": "rgba(91, 151, 242, 0.1)",
        "--sjs-special-blue-forecolor": "rgba(48, 48, 48, 1)",
        "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
        "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-special-yellow-forecolor": "rgba(48, 48, 48, 1)",
        "--sjs-article-font-xx-large-textDecoration": "none",
        "--sjs-article-font-xx-large-fontWeight": "700",
        "--sjs-article-font-xx-large-fontStyle": "normal",
        "--sjs-article-font-xx-large-fontStretch": "normal",
        "--sjs-article-font-xx-large-letterSpacing": "0",
        "--sjs-article-font-xx-large-lineHeight": "64px",
        "--sjs-article-font-xx-large-paragraphIndent": "0px",
        "--sjs-article-font-xx-large-textCase": "none",
        "--sjs-article-font-x-large-textDecoration": "none",
        "--sjs-article-font-x-large-fontWeight": "700",
        "--sjs-article-font-x-large-fontStyle": "normal",
        "--sjs-article-font-x-large-fontStretch": "normal",
        "--sjs-article-font-x-large-letterSpacing": "0",
        "--sjs-article-font-x-large-lineHeight": "56px",
        "--sjs-article-font-x-large-paragraphIndent": "0px",
        "--sjs-article-font-x-large-textCase": "none",
        "--sjs-article-font-large-textDecoration": "none",
        "--sjs-article-font-large-fontWeight": "700",
        "--sjs-article-font-large-fontStyle": "normal",
        "--sjs-article-font-large-fontStretch": "normal",
        "--sjs-article-font-large-letterSpacing": "0",
        "--sjs-article-font-large-lineHeight": "40px",
        "--sjs-article-font-large-paragraphIndent": "0px",
        "--sjs-article-font-large-textCase": "none",
        "--sjs-article-font-medium-textDecoration": "none",
        "--sjs-article-font-medium-fontWeight": "700",
        "--sjs-article-font-medium-fontStyle": "normal",
        "--sjs-article-font-medium-fontStretch": "normal",
        "--sjs-article-font-medium-letterSpacing": "0",
        "--sjs-article-font-medium-lineHeight": "32px",
        "--sjs-article-font-medium-paragraphIndent": "0px",
        "--sjs-article-font-medium-textCase": "none",
        "--sjs-article-font-default-textDecoration": "none",
        "--sjs-article-font-default-fontWeight": "400",
        "--sjs-article-font-default-fontStyle": "normal",
        "--sjs-article-font-default-fontStretch": "normal",
        "--sjs-article-font-default-letterSpacing": "0",
        "--sjs-article-font-default-lineHeight": "28px",
        "--sjs-article-font-default-paragraphIndent": "0px",
        "--sjs-article-font-default-textCase": "none",
        "--sjs-general-backcolor-dim": "#f5f1fb",
        "--sjs-primary-backcolor": "#000000",
        "--sjs-primary-backcolor-dark": "rgba(83, 83, 83, 1)",
        "--sjs-primary-backcolor-light": "rgba(255, 255, 255, 1)",
        "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-primary-forecolor-light": "rgba(32, 32, 32, 0.25)",
        "--sjs-special-red": "rgba(254, 76, 108, 1)",
        "--sjs-special-red-light": "rgba(254, 76, 108, 0.1)"
    },
    "headerView": "basic"});
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