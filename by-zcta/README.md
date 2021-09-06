# Indiana COVID-19 School Data by ZIP Code Tabulation Area (ZCTA)

This folder contains five datasets related to COVID-19 in Indiana.

## Exposure to school and to school with no mask mandate by ZCTA (daily)

This merges the timeline data by school corporation with census block population data to calculate measures of exposure to school and to school with no mask mandates by ZCTA. See documentation for the school corporation policy timeline dataset for more details on that data.

| name      | type      | description                                                      |
|-----------|-----------|------------------------------------------------------------------|
| zcta      | character | ZIP Code Tabulation Area                                         |
| date      | Date      | Date                                                             |
| inSchool  | numeric   | Measure of schools open in person                                |
| noMandate | numeric   | Measure of lack of mask mandate while schools are open in person |
| mandate   | numeric   | Measure of existing mask mandate                                 |

The comparison maps below demonstrate the apportionment of school district policies to ZCTAs, showing mask mandates as of August 30, 2021.

![Comparison of school district vs ZCTA-based measures of mask mandates](comparison.png?raw=true)

## COVID-19 cases by ZCTA (trend)

This is based on a weekly download of Indiana Management and Performance Hub’s [COVID-19 CASES BY ZIP](https://hub.mph.in.gov/dataset/covid-19-cases-by-zip) dataset.

Caution is advised when interpreting this data, as calculated “new” cases by differencing may not have actually occurred since the last download if the reports include old cases.

| name           | type      | description                                                                                                                                                                                                                                         |
|----------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| zcta           | character | ZIP Code Tabulation Area                                                                                                                                                                                                                            |
| downloadDate   | Date      | Date file was downloaded from MPH                                                                                                                                                                                                                   |
| cases          | numeric   | Total COVID-19 cases since beginning of dataset                                                                                                                                                                                                     |


## ZCTA data

This is a collection of data from various sources, including the American Community Survey, the Voting and Election Science Team (VEST) and the Urbanization Perceptions Small Area Index.

| name            | type      | description                                                                                                                                                                |
|-----------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| zcta            | character | ZIP Code Tabulation Area                                                                                                                                                   |
| vote16Trump     | numeric   | Republicans' share of two-party presidential vote in 2016, calculated from precinct-level data from the Voting and Election Science Team, and 2010 Census Block statistics |
| acsSchPub       | numeric   | Total PK-12 public school enrollment, ACS 2019 5-year estimates                                                                                                            |
| acsSchPrv       | numeric   | Total PK-12 private school enrollment, ACS 2019 5-year estimates                                                                                                           |
| acsWhiteNonHisp | numeric   | White non-Hispanic population, ACS 2019 5-year estimates                                                                                                                   |
| acsBlackNonHisp | numeric   | Black or African American non-Hispanic population, ACS 2019 5-year estimates                                                                                               |
| acsAsianNonHisp | numeric   | Asian non-Hispanic population, ACS 2019 5-year estimates                                                                                                                   |
| acsHispanic     | numeric   | Hispanic or Latino population, ACS 2019 5-year estimates                                                                                                                   |
| acsOther        | numeric   | Other race/ethnicity population, ACS 2019 5-year estimates                                                                                                                 |
| acsBAorMore     | numeric   | Percent of 25 and older population with a bachelor's degree or higher                                                                                                      |
| upsai           | character | Urbanization Perceptions Small Area Index type (urban/suburban/rural) calculated for ZCTA based on census block population data                                            |


## Estimated vaccination rate for ZCTA

This is based on downloads of Indiana Management and Performance Hub’s [COVID-19 CASES BY ZIP](https://hub.mph.in.gov/dataset/covid-19-cases-by-zip) dataset, combined with population data from the American Community Survey 2019 5-year population estimate.

| name           | type      | description                                                                                                                                                                                                                                         |
|----------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| zcta           | character | ZIP Code Tabulation Area                                                                                                                                                                                                                            |
| downloadDate   | Date      | Date file was downloaded from MPH                                                                                                                                                                                                                   |
| population     | numeric   | Population from ACS 2019 5-year estimate                                                                                                                                                                                                            |
| fullyVaxxed    | numeric   | Number fully vaccinated based on ZCTA data from MPH                                                                                                                                                                                                 |
| pctFullyVaxxed | numeric   | Estimated percent of population fully vaccinated based on ZCTA data from MPH and 2015-2019 ACS population estimate for ZCTAs.                                                                                                                       |
