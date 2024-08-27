import joblib

# Save the trained model
joblib.dump(lgbm_model, 'lgbm_model.pkl')
