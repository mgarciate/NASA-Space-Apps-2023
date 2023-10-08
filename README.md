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

## Parameters

Column 01 -> Date YYYY-MM-DD hh:mm:ss
Column 02 -> Component of the magnetic field vector (nT GSE)
Column 03 -> Component of the magnetic field vector (nT GSE)
Column 04 -> Component of the magnetic field vector (nT GSE)
Column 05 -> IMF spacecraft ID
Column 06 -> Plasma spacecraft ID
Column 07 -> IMF FTS PTS
Column 08 -> Plasma FTS PTS
Column 09 -> Average magnetic field magnitude
Column 10 -> Magnitude of average magnetic field vector
Column 11 -> Elevation angle of average magnetic field vector
Column 12 -> Azimuthal angle of average magnetic field vector
Column 13 -> Magnetic field vector, GSE
Column 13 -> Bx, GSE
Column 13 -> Magnetic field vector, GSM
Column 13 -> Bx, GSM
Column 14 -> By, GSE
Column 15 -> Bz, GSE
Column 16 -> By, GSM
Column 17 -> Bz, GSM
Column 18 -> Standard deviation in average magnetic field magnitude
Column 19 -> Standard deviation of average magnetic field vector
Column 20 -> sigma Bx, GSE
Column 21 -> sigma By, GSE
Column 22 -> sigma Bz, GSE
Column 23 -> Plasma proton temperature
Column 24 -> Plasma proton density
Column 25 -> Plasma proton flow speed
Column 26 -> Flow azimuth angle
Column 27 -> Flow elevation angle
Column 28 -> Alpha to proton density ratio
Column 29 -> Flow pressure
Column 30 -> SigmaT
Column 31 -> SigmaN
Column 32 -> SigmaV
Column 33 -> sigmaPhiV
Column 34 -> SigmaThetaV
Column 35 -> SigmaNa/Np
Column 36 -> VxB Electric Field
Column 37 -> Plasma beta
Column 38 -> Alfven Mach Number
Column 39 -> Kp Index
Column 40 -> Sunspot Number
Column 41 -> Dst Index
Column 42 -> AE Index
Column 43 -> Energetic Proton Fluxes
Column 43 -> Proton flux >1 Mev
Column 44 -> Proton flux >2 Mev
Column 45 -> Proton flux >4 Mev
Column 46 -> Proton flux >10 Mev
Column 47 -> Proton flux >30 Mev
Column 48 -> Proton flux >6 Mev
Column 50 -> ap Index
Column 51 -> F10.7 Index
Column 52 -> Polar Cap (N) Index
Column 53 -> AL Index
Column 54 -> AU Index
