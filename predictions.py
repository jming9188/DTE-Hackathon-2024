from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

model = 'best_model.pkl'
clf = joblib.load(model)
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/predict', methods=['OPTIONS', 'POST'])
def predict():
    if request.method == 'OPTIONS':
        return '', 200
    
    try:
        print("test1")
        data = request.get_json()
        print("Data received:", data)
        print("Keys in received data:", data.keys())
        age = data['age']
        education = data['education']
        sex = data['sex'] #
        is_smoking = data['is_smoking'] #
        cigsPerDay = data.get('cigsPerDay', 0) 
        BPMeds = data['BPMeds'] #
        prevalentStroke = data['prevalentStroke'] #
        prevalentHyp = data['prevalentHyp'] #
        diabetes = data['diabetes'] #
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
        print("An error occurred:", str(e))
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
