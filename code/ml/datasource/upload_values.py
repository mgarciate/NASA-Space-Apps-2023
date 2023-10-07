import csv
import psycopg2
from decimal import Decimal
from datetime import datetime

# Database connection parameters
db_params = {
    'dbname': 'nasachallenge',
    'user': 'postgres',
    'password': 'password',
    'host': 'localhost',
    'port': '5432'
}

# Connect to the database
conn = psycopg2.connect(**db_params)
cursor = conn.cursor()

# Path to your CSV file
csv_file_path = 'dsc_fc_summed_spectra_2021_v01_mod.csv'

# Read the CSV file and insert data into the database
with open(csv_file_path, 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        try:
            # Convert Column1 to UNIX timestamp
            # dt = datetime.strptime(row[0], '%Y-%m-%d %H:%M:%S')
            # unix_timestamp = int(dt.timestamp())
            # row[0] = unix_timestamp
            
        
            # Convert string values to Decimal for columns Column2 to Column54
            for i in range(1, 34):
                row[i] = Decimal(row[i])

            # Check if the timestamp already exists in the database
            # cursor.execute("SELECT 1 FROM dscovr WHERE Column1 = %s", (unix_timestamp,))
            # if cursor.fetchone():
            #     print(f"Timestamp {unix_timestamp} already exists. Skipping...")
            #     continue

            # Construct the INSERT statement
            insert_query = """
                INSERT INTO dscovr (
                    Column1, Column2, Column3, Column4, Column5, Column6, Column7, Column8, Column9, Column10,
                    Column11, Column12, Column13, Column14, Column15, Column16, Column17, Column18, Column19, Column20,
                    Column21, Column22, Column23, Column24, Column25, Column26, Column27, Column28, Column29, Column30,
                    Column31, Column32, Column33, Column34
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
            """
            cursor.execute(insert_query, row)
            # Commit the changes and close the connection
            conn.commit()
        except Exception as e:
            print(f"Error processing row {row[0]}: {e}")
            conn.rollback()  # Roll back the transaction in case of an error

cursor.close()
conn.close()
