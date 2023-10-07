import csv
from decimal import Decimal
from datetime import datetime

# Array of input CSV filenames
input_csv_paths = ['dsc_fc_summed_spectra_2016_v01.csv',
    'dsc_fc_summed_spectra_2017_v01.csv',
    'dsc_fc_summed_spectra_2018_v01.csv',
    'dsc_fc_summed_spectra_2019_v01.csv',
    'dsc_fc_summed_spectra_2020_v01.csv',
    'dsc_fc_summed_spectra_2021_v01.csv',
    'dsc_fc_summed_spectra_2022_v01.csv',
    'dsc_fc_summed_spectra_2023_v01.csv',
]  # Add your filenames here

for input_csv_path in input_csv_paths:
    # Path to your output CSV file with _mod prefix
    output_csv_path = input_csv_path.replace('.csv', '_mod.csv')

    # Read the input CSV and write the first 34 columns to the output CSV
    with open(input_csv_path, 'r') as infile, open(output_csv_path, 'w', newline='') as outfile:
        reader = csv.reader(infile)
        writer = csv.writer(outfile)
        
        for row in reader:
            # Convert string values to Decimal for columns Column2 to Column54
            for i in range(1, 54):
                row[i] = Decimal(row[i])

            # Convert Column1 to UNIX timestamp
            dt = datetime.strptime(row[0], '%Y-%m-%d %H:%M:%S')
            minute = dt.minute
            # Check if the minute is divisible by 10
            if minute % 10 != 0:
                continue

            unix_timestamp = int(dt.timestamp())
            row[0] = unix_timestamp

            # Check if any value in the row is '0.0'
            if all(value != '0.0' for value in row[:34]):
                writer.writerow(row[:34])

    print(f"Modified CSV saved to {output_csv_path}")
