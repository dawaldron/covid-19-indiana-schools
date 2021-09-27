# Indiana COVID-19 School Data by School District

This folder contains five datasets related to COVID-19 in Indiana.

## Mask mandate policy timeline for all 290 Indiana public school corporations

This dataset is based on my inspection of school websites and news reports on mask mandates and implementation of virtual school during the 2021-2022 school year. I believe it is mostly complete through 2021-08-30, but let me know if you find any inaccuracies or have any updates to contribute. I’m trying to keep documentation of every record in this dataset.

| name               | type      | description                                         |
|--------------------|-----------|-----------------------------------------------------|
| ncesID             | character | NCES District ID                                    |
| corpName           | character | Corporation Name                                    |
| effectiveDate      | Date      | Effective date of policy change                     |
| masksRequired      | character | Indicator (Yes/No) of a student mask mandate policy |
| masksRequiredNotes | character | Notes about the language of the mask mandate policy |
| virtualSchool      | character | Indication of any virtual school implementation     |

## COVID-19 cases by public school corporation

This is based on a weekly download of Indiana Management and Performance Hub’s [COVID-19 CASES BY SCHOOL](https://hub.mph.in.gov/dataset/covid-19-cases-by-school) dataset, summarized by public school corporation and differences to get “new” cases. Caution is advised when interpreting this data, as there might be some discrepancies between the state data and what individual school websites report. Also, calculated “new” cases may not have actually occurred in the last week if the reports include old cases.

| name            | type      | description                                                                                                    |
|-----------------|-----------|----------------------------------------------------------------------------------------------------------------|
| ncesID          | character | NCES District ID                                                                                               |
| corpID          | character | IDOE Corporation ID                                                                                            |
| corpName        | character | Corporation Name                                                                                               |
| downloadDate    | Date      | Date downloaded from Management and Performance Hub website. This file is currently updated weekly on Mondays. |
| studentCasesTot | numeric   | Total cases since dataset was created in fall of 2020                                                          |
| studentCasesNew | numeric   | Difference in cases since last downloaded version of file                                                      |

Several schools appear to have reported incomplete numbers to the state. New case numbers for the following school districts were corrected based on separate reports from school districts. Total case numbers havenot been adjusted, so new case numbers will not add up for these districts.

| ncesID  | corpName                           |
|---------|------------------------------------|
| 1800270 | Avon Community School Corp         |
| 1803940 | Greater Clark County Schools       |
| 1804770 | Indianapolis Public Schools        |
| 1807620 | Nineveh-Hensley-Jackson United     |
| 1809690 | Merrillville Community School Corp |
| 1810650 | Hamilton Southeastern Schools      |
| 1812090 | Vigo County School Corp            |
| 1812720 | MSD Washington Township            |
| 1812810 | MSD Wayne Township                 |
| 1813080 | Westfield-Washington Schools       |


## School corporation data

This is a collection of data from various sources, including Indiana Department of Education, the American Community Survey, the Voting and Election Science Team (VEST) and the Urbanization Perceptions Small Area Index. All of this data accounts for the 2020 split of West Clark Community Schools.

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
| upsai           | character | Urbanization Perceptions Small Area Index type (urban/suburban/rural) calculated for entire school district                                                                |

## Estimated vaccination rate for district

This is a rough estimate of vaccination rate by school district based on ZIP code data weighted to school district by 2010 census block population.

| name           | type      | description                                                                                                                                                                                                                                         |
|----------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ncesID         | character | NCES District ID                                                                                                                                                                                                                                    |
| corpName       | character | Corporation Name                                                                                                                                                                                                                                    |
| downloadDate   | Date      | Date file was downloaded from MPH                                                                                                                                                                                                                   |
| pctFullyVaxxed | numeric   | Estimated percent of population fully vaccinated based on ZCTA data from MPH and 2015-2019 ACS population estimate for ZCTAs. Apportionment to school districts is done based on census block populations, which might be inaccurate is some cases. |

## School corporation shapefile

This is the Census Bureau’s school district (unified) shapefile for Indiana, modified to account for the split of West Clark Community Schools in 2020.
