---
id: c-19-adult-hosp
title: COVID-19-like illness adult hospitalizations
---


**Cohort name**: COVID-19-like illness adult hospitalizations

**Cohort identifier**: c-19-adult-hosp

**Cohort version**: 0.1

**Cohort description**: Patients aged 18 years or older, hospitalized for COVID-19-like illness (confirmed or suspected) on or after January 1 2020, who have not been hospitalized for COVID-19 in the 6 months prior to the index hospitalization.

## EHR Data Domains and Data Elements

* Encounter: `encounter_type`, `encounter_start_date`, `encounter_end_date`
* Condition: `condition_code`, `condition_onset`, `condition_type`
* Laboratory test: `code`, `result_date`, `result`
* Demographics: `date_of_birth`

## Cohort Definition

### Initial Event Cohort

Individuals meeting _any_ of the following:

* **Hospitalization on or after Jan 1 2020 (`c19_hosp`)**
    * At least 1 occurrence of an `encounter` meeting _all_ of the following criteria:
        * `encounter_type` is `inpatient`
        * `start_date` is on or after 2020-01-01
        * meeting _any_ of the following:
            * `end_date` is not null
            * `encounter_status` is `completed`

For individuals matching the Index Event (`c19_hosp`), include individuals matching _any_ of the following criteria:

* **Confirmed or suspected COVID-19 (`c19_like_illness`)**:
    * **Confirmed COVID-19 condition (`c19_condition_confirmed`)**:
        * At least 1 occurrence of a `condition` meeting _all_ of the following:
            * `condition_code` in [CH19HCC Confirmed COVID-19](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.117/definition)
            * `condition_onset` between 21 days before index start date and 0 days after index end date
            * `condition_type` is (**chief complaint** or **admitting diagnosis** or **problem list entry** or **encounter diagnosis** or **final diagnosis** or **discharge diagnosis**)

    * **Laboratory-confirmed COVID-19 infection (`c19_lab_confirmed`)**:
        * At least 1 occurrence of a `laboratory_test` meeting _all_ of the following criteria:
            * `code` in [C19HCC SARSCoV2 Qualitative Detection Laboratory Test](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.109/definition) or in [C19HCC SARS-related Qualitative Detection Laboratory Test](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.113/definition)
            *   `result_date` between 21 days before index start date and 0 days after index end date
            *   `result` is **positive** or **detected** or **present**

    * **Suspected COVID-19 or COVID-19-like condition (`c19_condition_suspected`)**:
        * At least 1 occurrence of a `condition` meeting _all_ of the following:
            * `code` in [C19HCC Suspected COVID19 Infection](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.116/definition)
            * `onset` between 21 days before index start date and 0 days after index end date
            * `type` is (**chief complaint** or **admitting diagnosis** or **problem list entry** or **encounter diagnosis** or **final diagnosis** or **discharge diagnosis**)


    <mark>Consider inclusion of documented SARS-CoV2 exposures?</mark>

    <mark>Consider inclusion of documented presence/absence of COVID-19 signs and symptoms?</mark>

    <mark>Consider inclusion of documented COVID-19 status (confirmed, suspected)?</mark>

### Inclusion Criteria

Patients meeting meeting _all_ of the following:

* **Age 18 at admission (`18_at_hosp_adm`)**:
    * index start date - `date_of_birth` >= 18

### Exclusion Criteria

Patients meeting meeting _all_ of the following:

* **Previous COVID-19 hospitalization (`c19_prev_hosp`)**:
    * Exactly 0 occurrences of an `encounter` meeting _all_ of the following:
        * `encounter_type` is `inpatient`
        * `start_date` is <= 180 days before index start date
        * meeting _any_ of the following:
            * **Confirmed COVID-19 condition (`c19_condition_confirmed`)** where Index Event is `c19_prev_hosp`
            * **Laboratory-confirmed COVID-19 infection (`c19_lab_confirmed`)** where Index Event is `c19_prev_hosp`
            * **Suspected COVID-19 or COVID-19-like condition (`c19_condition_suspected`)** where Index Event is `c19_prev_hosp`
