---
id: c-19-new-hydroxy
title: New user of hydroxychloroquine
hide_title: true
---

> Notice:
This content is preliminary and is expected to change quickly as we work with C19HCC partners to align and refine definitions.

**Cohort name**: New user of hydroxychloroquine

**Cohort identifier**: c-19-new-hydroxy

**Cohort version**: 0.1

**Cohort description**: People having drug exposure to hydroxychloroquine for the first time, and not having an indication that might suggest prior hydroxychloroquine use.

## EHR Data Domains and Data Elements

* Condition: `condition_code`, `condition_type`
* Medication exposure: `code`, `start_date`

## Cohort Definition

### Initial Event Cohort

Patients meeting meeting _all_ of the following:

* **Drug exposure to hydroxychloroquine**
    * At least 1 occurrence of a `med_exposure` meeting all of the following:
        * `code` in in [CH19HCC Hydroxychloroquine]()
        * `start_date` is on or after index date

### Exclusion Criteria

Patients meeting meeting _any_ of the following:

* **No previous exposure to hydroxychloroquine**
    * Exactly 0 occurrences of a `med_exposure` meeting all of the following:
        * `code` in in [CH19HCC Hydroxychloroquine]() 
        * `start_date` is before index date
        * 
    _Note_: `med_exposure` includes medications in the admission medication list at admission or on outpatient medication list prior to admission

* **Condition suggesting prior hydroxychloroquine use**:
    * **Diagnosis of systemic lupus erythematosus (`Lupus_confirmed`)**:
        * At least 1 occurrence of a `condition` meeting _all_ of the following:
            * `condition_code` in [CH19HCC Lupus condition]()
            * `condition_type` is (**chief complaint** or **admitting diagnosis** or **problem list entry** or **encounter diagnosis** or **final diagnosis** or **discharge diagnosis**)
    * **Diagnosis of a chronic rheumatic condition (`Rheumatic_condition_confirmed`)**:
        * At least 1 occurrence of a `condition` meeting _all_ of the following:
            * `condition_code` in [CH19HCC Chronic Rheumatic condition]()
            * `condition_type` is (**chief complaint** or **admitting diagnosis** or **problem list entry** or **encounter diagnosis** or **final diagnosis** or **discharge diagnosis**)
