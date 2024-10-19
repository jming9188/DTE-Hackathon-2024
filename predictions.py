from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

model = 'retrained_CHF_model.pkl'
clf = joblib.load(model)
app = Flask(__name__)

# Configure CORS to allow requests from your frontend
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

@app.route('/predict', methods=['OPTIONS', 'POST'])
def predict():
    if request.method == 'OPTIONS':
        return '', 200
    
    try:
        data = request.get_json()
        age = data['age']
        education = data['education']
        sex = data['sex']
        is_smoking = data['is_smoking']
        cigsPerDay = data.get('cigsPerDay', 0)  
        BPMeds = data['BPMeds']
        prevalentStroke = data['prevalentStroke']
        prevalentHyp = data['prevalentHyp']
        diabetes = data['diabetes']
        totChol = data['totChol']
        sysBP = data['sysBP']
        diaBP = data['diaBP']
        BMI = data['BMI']
        heartRate = data['heartRate']
        glucose = data['glucose']

        new_data = np.array([[age, education, sex, is_smoking, cigsPerDay, BPMeds,
                              prevalentStroke, prevalentHyp, diabetes, totChol,
                              sysBP, diaBP, BMI, heartRate, glucose]])

        prediction = clf.predict(new_data)
        prediction_proba = clf.predict_proba(new_data)

        return jsonify({
            'prediction': int(prediction[0]),  
            'confidence': float(prediction_proba[0][prediction[0]]) 
        })
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
