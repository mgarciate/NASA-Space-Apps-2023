import pandas as pd

# Load the data
data = pd.read_csv("filtered_data.csv")

# Remove the last 5 columns
trimmed_data = data.iloc[:, :-5]

# Save the trimmed data to a new file
trimmed_data.to_csv("filtered_data_mod.csv", index=False)