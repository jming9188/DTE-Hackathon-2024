
import { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
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
  }]
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