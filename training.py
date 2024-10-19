import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv('data_cardiovascular_risk.csv')

df_cleaned = df.dropna()
df_cleaned['sex'] = df_cleaned['sex'].map({'M': 1, 'F': 0})
df_cleaned['is_smoking'] = df_cleaned['is_smoking'].map({'YES': 1, 'NO': 0})
X = df_cleaned.drop(columns=['id', 'TenYearCHD'])
y = df_cleaned['TenYearCHD']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
clf = RandomForestClassifier(random_state=42)
clf.fit(X_train, y_train)

joblib.dump(clf, 'retrained_CHF_model.pkl')
print("Model retrained and saved as 'retrained_CHF_model.pkl'")
