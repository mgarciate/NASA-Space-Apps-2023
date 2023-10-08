import joblib

model_filename = "model/random_forest_solar_model.pkl"
joblib.dump(rf_classifier, model_filename)

model_filename