---
id: c-19-new-hydroxy
title: New user of hydroxychloroquine
---


**Cohort name**: New user of hydroxychloroquine

**Cohort identifier**: c-19-new-hydroxy

**Cohort version**: 0.1

**Cohort description**: People having drug exposure to hydroxychloroquine for the first time, and not having an indication that might suggest prior hydroxychloroquine use.

## EHR Data Domains and Data Elements

* Condition: `condition_code`, `condition_type`
* Medication exposure: `code`, `start_date`

## Cohort Definition

### Initial Event Cohort

Individuals having any of the following:

* **Drug exposure to hydroxychloroquine**
    * `med_exposure` :
        * `code` in in [CH19HCC Hydroxychloroquine Ingredient]()
        * `start_date` is on or after index date
        * for the first time in the person's history

* **Condition suggesting prior hydroxychloroquine use**:
    * **Diagnosis of systemic lupus erythematosus (`Lupus_confirmed`)**:
        * At least 1 occurrence of a `condition` meeting _all_ of the following:
            * `condition_code` in [CH19HCC Lupus condition]()
            * `condition_type` is (**chief complaint** or **admitting diagnosis** or **problem list entry** or **encounter diagnosis** or **final diagnosis** or **discharge diagnosis**)
    * **Diagnosis of a chronic rheumatic condition (`Rheumatic_condition_confirmed`)**:
        * At least 1 occurrence of a `condition` meeting _all_ of the following:
            * `condition_code` in [CH19HCC Chronic Rheumatic condition]()
            * `condition_type` is (**chief complaint** or **admitting diagnosis** or **problem list entry** or **encounter diagnosis** or **final diagnosis** or **discharge diagnosis**)
