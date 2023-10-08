# Storm Destroyers - NASA Space Apps 2023
Storm Destroyers visualizes data from the Experimental Data Repository, offering real-time insights into solar activities. Users can track key metrics and trends, ensuring timely awareness. Be alert: the oracle will signal impending solar storms!

## Tasks
The objective is to identify essential variables to predict solar storms. We started by downloading CSV files of experimental data sets, followed by extensive cleaning of columns and rows with invalid data, e.g. null values. Using a Python script, we injected the clean data into our database, which was then integrated into Grafana for visualization. We then undertook a research task, tracking past solar storms and observing changes in parameters, which helped in our analysis phase.

By ingesting data in real time and having developed a trained model, we can now predict future storms further in advance than current methods allow, thanks to data analysis. Having achieved this objective, we are in a position to establish warning systems, aimed not only at researchers but also at the general public.

## Project
[https://www.spaceappschallenge.org/2023/challenges/develop-the-oracle-of-dscovr/?tab=details]()

## Dataset
[https://www.spaceappschallenge.org/develop-the-oracle-of-dscovr-experimental-data-repository/]()

## Demo website
[https://mgarciate.github.io/StormDestroyers_NASASpaceApps2023]()

## Tools
- PostgreSQL
- Grafana
- Python
- TensorFlow
- React
- Github actions
