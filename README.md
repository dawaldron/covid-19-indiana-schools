# Indiana COVID-19 School Data

This project contains four datasets related to COVID-19 in Indiana. The purpose of the project is to help accurately describe the circumstances under which Indiana public schools opened for the 2021-2022 school year during the Delta wave of the COVID-19 pandemic.

## Mask mandate policy timeline for all 290 Indiana public school corporations

This dataset is based on my inspection of school websites and news reports on mask mandates and implementation of virtual school during the 2021-2022 school year. I believe it is mostly complete through 2021-08-20, but let me know if you find any inaccuracies or have any updates to contribute. I’m trying to keep documentation of every record in this dataset.

| name               | type      | description                                         |
|--------------------|-----------|-----------------------------------------------------|
| ncesID             | character | NCES District ID                                    |
| corpName           | character | Corporation Name                                    |
| effectiveDate      | Date      | Effective date of policy change                     |
| masksRequired      | character | Indicator (Yes/No) of a student mask mandate policy |
| masksRequiredNotes | character | Notes about the language of the mask mandate policy |
| virtualSchool      | character | Indication of any virtual school implementation     |

## COVID-19 cases by public school corporation

This is based on a weekly download of Indiana Management and Performance Hub’s [COVID-19 CASES BY SCHOOL](https://hub.mph.in.gov/dataset/covid-19-cases-by-school) dataset, summarized by public school corporation and differences to get “new” cases.

Caution is advised when interpreting this data, as there might be some discrepancies between the state data and what individual school websites report. Also, calculated “new” cases may not have actually occurred in the last week if the reports include old cases.

| name            | type      | description                                                                                                    |
|-----------------|-----------|----------------------------------------------------------------------------------------------------------------|
| ncesID          | character | NCES District ID                                                                                               |
| corpID          | character | IDOE Corporation ID                                                                                            |
| corpName        | character | Corporation Name                                                                                               |
| downloadDate    | Date      | Date downloaded from Management and Performance Hub website. This file is currently updated weekly on Mondays. |
| studentCasesTot | numeric   | Total cases since dataset was created in fall of 2020                                                          |
| studentCasesNew | numeric   | Difference in cases since last downloaded version of file                                                      |

## School corporation data

This is a collection of data from various sources, including IDOE, the American Community Survey, and the Voting and Election Science Team (VEST). All of this data accounts for the 2020 split of West Clark Community Schools.

| name            | type      | description                                                                                                                                                                |
|-----------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ncesID          | character | NCES District ID                                                                                                                                                           |
| corpID          | character | IDOE Corporation ID                                                                                                                                                        |
| corpName        | character | Corporation Name                                                                                                                                                           |
| firstDay2122    | Date      | Students' first day of school, fall of 2021-2022 school year                                                                                                               |
| enrollment2021  | numeric   | Total PK-12 enrollment during 2020-2021 school year, from IDOE                                                                                                             |
| maskMandate     | logical   | Whether the corporation has had a student mask mandate at any point in the 2021-2022 school year                                                                           |
| maskMandateDate | Date      | The earliest date of student mask mandate in the 2021-2022 school year. If the mandate was enacted prior to the school year, the date might be set to 2021-07-01           |
| virtual         | logical   | Whether any school in the district has gone to virtual schooling in the 2021-2022 school year                                                                              |
| virtualDate     | Date      | The earliest date of virtual schooling in the 2021-2022 school year                                                                                                        |
| vote16Trump     | numeric   | Republicans' share of two-party presidential vote in 2016, calculated from precinct-level data from the Voting and Election Science Team, and 2010 Census Block statistics |
| acsSchPub       | numeric   | Total PK-12 public school enrollment, ACS 2019 5-year estimates                                                                                                            |
| acsSchPrv       | numeric   | Total PK-12 private school enrollment, ACS 2019 5-year estimates                                                                                                           |
| acsWhiteNonHisp | numeric   | White non-Hispanic population, ACS 2019 5-year estimates                                                                                                                   |
| acsBlackNonHisp | numeric   | Black or African American non-Hispanic population, ACS 2019 5-year estimates                                                                                               |
| acsAsianNonHisp | numeric   | Asian non-Hispanic population, ACS 2019 5-year estimates                                                                                                                   |
| acsHispanic     | numeric   | Hispanic or Latino population, ACS 2019 5-year estimates                                                                                                                   |
| acsOther        | numeric   | Other race/ethnicity population, ACS 2019 5-year estimates                                                                                                                 |
| acsBAorMore     | numeric   | Percent of 25 and older population with a bachelor's degree or higher                                                                                                      |

## School corporation shapefile

This is the Census Bureau’s school district (unified) shapefile for Indiana, modified to account for the split of West Clark Community Schools in 2020.
