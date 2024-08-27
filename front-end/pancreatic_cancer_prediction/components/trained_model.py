from sklearn.model_selection import train_test_split
from lightgbm import LGBMClassifier
from sklearn.metrics import accuracy_score
import joblib

# Assume Tum_Veri is your dataset
df = Tum_Veri.copy()

# Features and target variable
X = df.drop(["diagnosis"], axis=1)
y = df["diagnosis"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=63)

# Train the model
lgbm_model = LGBMClassifier()
lgbm_model.fit(X_train, y_train)

# Evaluate the model
y_pred = lgbm_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)



# Save the trained model
joblib.dump(lgbm_model, 'lgbm_model.pkl')