---
id: studies
title: Studies
---

## Study 1

**RESEARCH QUESTION: For patients with new COVID-19 infection, how does the addition of hydroxychloroquine (HCQ) affect outcomes (mechanical ventilation, inpatient death)?**

### Background

Hydroxychloroquine and a related drug, chloroquine, are currently under study as possible treatments for COVID-19. Before randomized clinical trials read out, an observational trial can provide insight into the efficacy of this drug.

### Study Design

The study involves inpatient use of HCQ and its effect on two outcomes:

* Invasive mechanical ventilation (IVM)
* Inpatient death

IMV serves as a proxy for serious, life-threatening disease, as opposed to "mild" disease.

The study involves two study cohorts (those receiving or not receiving HCQ), as depicted below:

![Hydroxycholoroquine cohort pathways](img/hydroxy_cohorts.png)

### Cohorts

* `COVID-19-positive`: clinical Dx of confirmed COVID-19 OR COVID-19 confirmatory lab test [1]
* `COVID-19-positive-date`: earliest of (first confirmatory specimen collection date or first physician Dx)
  * Laboratory order date can be used in place of specimen collection date
* `COVID-19-related-hospitalization`:
  * `COVID-19-positive-date` during any hospitalization OR
  * (Hospitalization within 14 days after `COVID-19-positive-date`) AND (any inpatient respiratory diagnosis) [2]
* `Prior-HCQ-use`:
  * HCQ on admission medication list or outpatient medication list
* `Inpatient-HCQ-use`:
  * HCQ medication administration during `COVID-19-related-hospitalization`
    * Includes any dose, form, duration of HCQ
    * Includes any level of disease severity while on HCQ
    * Includes patients on other medications

#### Study Groups

* All cohorts:
  * Age at `COVID-19-positive-date` ≥ 18 years
  * `COVID-19-positive-date` after Jan 1, 2020
* **Treatment Group**:
  * `Inpatient-HCQ-use` AND NOT `Prior-HCQ-use` [3]
* **Control Group**:
  * NOT `Inpatient-HCQ-use` AND NOT `Prior-HCQ-use` [3]

#### Outcomes

* **Invasive Mechanical Ventilation (IMV)**:
  * Any intubation procedure performed OR any mechanical ventilation-associated procedure performed during `COVID-19-related-hospitalization`
    * Excludes supplemental oxygen (high or low flow), CPAP, and BiPAP
* **COVID-19 Inpatient Death**:
  * `COVID-19 related hospitalization` AND patient death prior to discharge

### Data Dictionary-Based Criteria

* **Inpatient encounter**:  `encounter` with `encounter_class` = `IMP (inpatient encounter)` or `ACUTE (inpatient acute)` or `NONAC (inpatient non-acute)`
* **Patient death prior to discharge**: `date_of_death` during `COVID-19-related-hospitalization`

### Value Sets

* Clinical Dx of confirmed COVID-19
* Confirmatory lab test
* Inpatient respiratory diagnosis (clinical or billing code)
* HCQ drug codes (for outpatient/admission medication list and inpatient medication administration )
* Any intubation procedure or mechanical ventilation-associated procedure performed

#### Notes:

[1] Study includes confirmed cases only<br/>
[2] Serves a confirmation that hospital admission is related to COVID-19 infection (as opposed to broken arm, etc.)<br/>
[3] Patients with prior use of HCQ (e.g., as treatment for autoimmune disease) are excluded from study
