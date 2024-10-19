import joblib
import numpy as np

# Load the retrained model
model_path = 'retrained_CHF_model.pkl'  # Ensure this file is in the same folder
clf = joblib.load(model_path)

# Example input: Prepare new data in the same format as training data
# The order must match the features: ['age', 'education', 'sex', 'is_smoking', 'cigsPerDay', 'BPMeds', 
# 'prevalentStroke', 'prevalentHyp', 'diabetes', 'totChol', 'sysBP', 'diaBP', 'BMI', 'heartRate', 'glucose']
new_data = np.array([[55, 1, 1, 0, 0, 0, 0, 1, 0, 250, 130, 80, 25.0, 72, 85]])

# Make a prediction
prediction = clf.predict(new_data)

# Output prediction result: 0 = No CHF, 1 = CHF
print("Prediction:", prediction[0])


prediction_proba = clf.predict_proba(new_data)
print("Prediction Probability:", prediction_proba)
 # condifence score (how likely its right)