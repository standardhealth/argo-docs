---
id: studies
title: Studies
---

## Study 1

**RESEARCH QUESTION: For patients with new COVID-19 infection, how does the addition of hydroxychloroquine (HCQ) affect the outcomes (1) severe disease (indicated by mechanical ventilation) and (2) inpatient death?**

### Background

Hydroxychloroquine and a related drug, chloroquine, are currently under study as possible treatments for COVID-19. Before randomized clinical trials read out, a retrospective observational study can provide insight into the efficacy of this drug.

### Study Design

The study involves inpatient use of HCQ and its effect on disease severity. The study involves two study groups, those receiving HCQ and those not receiving HCQ, as depicted below:

![Hydroxycholoroquine cohort pathways](hydroxy_cohorts.png)

Three outcomes are considered:

1. Discharge without being placed on mechanical ventilation during stay
2. Discharge after invasive mechanical ventilation (IVM) during stay
3. Inpatient death

These outcomes correspond to increasing levels disease severity. They are retrospective over the entire patient visit and capture the worst severity of illness during the visit. The study uses mechanical ventilation as a proxy for severe non-fatal disease. Worst severity means that if a patient is put on a ventilator and then succumbs to the disease, they are outcome 3 (death).

As a side note, [Siddiqi and Mehra](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7118652/) have proposed a staging system for COVID-19 aligned to the stages of the disease, from early infection (Stage 1) to pulmonary involvement (Stage 2) to systemic hyperinflammation (Stage 3). That staging system focuses of the progression, rather than the severity of the disease, although clearly the two are related.

### Cohorts

#### Definitions

* `COVID-19-positive`: Inpatient clinical Dx of confirmed COVID-19 **OR** COVID-19 confirmatory lab test [1]
* `COVID-19-positive-date`: Earliest date of `COVID-19-positive` status
  * Note that lab test date is the date of specimen collection
* `COVID-19-related-hospitalization` (also see [alternate definition](#alternate-definition-of-COVID-19-related-hospitalization) below):
  * Any respiratory-related condition at admission [2] **AND**
  * `COVID-19-positive-date` during hospitalization or up to 14 days prior to hospitalization
* `Prior-HCQ-use`:
  * HCQ on admission medication list or (if available) outpatient medication list 
* `Inpatient-HCQ-use`:
  * HCQ medication administration during `COVID-19-related-hospitalization`
    * Includes any dose, form, duration of HCQ
    * Includes any level of disease severity while on HCQ
    * Includes patients on other medications

##### **Alternate definition of `COVID-19-related-hospitalization`:**
> Based on the definitions of `COVID-19-positive` and `COVID-19-positive-date`, the criteria for `COVID-19-related-hospitalization` can be re-written as:
>
>  * Any respiratory-related condition at admission **AND**
>
>  **ANY OF**:
>
>  * Inpatient clinical Dx of confirmed COVID-19 **OR**
>  * COVID-19 confirmatory lab test during hospitalization **OR**
>  * COVID-19 confirmatory lab test up to 14 days prior to hospitalization
>

#### Study Groups

* All cohorts:
  * Age at `COVID-19-positive-date` ≥ 18 years
  * `COVID-19-positive-date` after Jan 1, 2020
* **Treatment Group**:
  * `Inpatient-HCQ-use` AND NOT `Prior-HCQ-use` [3]
* **Control Group**:
  * NOT `Inpatient-HCQ-use` AND NOT `Prior-HCQ-use` [3]

#### Study Cohort Examples

Person A (included in study):
* Presents with fever and difficulty breathing
* Admitted with diagnosis of suspected COVID-19
* Tests positive while during hospital stay (even if results received after discharge)
* No history of HCQ usage

Person B (included in study):
* Has fever and cough
* Swabbed for COVID-19, sent home
* Test results positive
* Arrives at hospital 10 days later with dyspnea
* Admitted

Person C (excluded from study):
* Presents with fever, difficulty breathing
* Admitted with admission diagnosis of suspected COVID-19
* Tests negative

Person D (excluded from study):
* Admitted to hospital for CHF
* During stay, experiences fever and cough
* Tests positive for COVID-19

Person E (excluded from study):
* Asymptomatic
* Tests positive for COVID-19 during population screening
* Admitted to hospital 5 days later for trauma injury

Person F (included in study):
* Has fever and cough
* Swabbed for COVID-19, sent home
* Test results positive
* Arrives at hospital 18 days later with dyspnea
* Admitted with suspected COVID-19
* Clinical diagnosis of COVID-19

#### Outcomes

* **Invasive Mechanical Ventilation (IMV)**:
  * Any intubation procedure performed OR any mechanical ventilation-associated procedure performed during `COVID-19-related-hospitalization`
    * Excludes supplemental oxygen (high or low flow), CPAP, and BiPAP
* **COVID-19 Inpatient Death**:
  * `COVID-19 related hospitalization` AND patient death prior to discharge

### Data Dictionary-Based Criteria

* **Clinical Dx of COVID-19**: Confirmed COVID-19 diagnosis code in `encounter.chief_complaint`, `encounter.admitting_diagnosis`, `condition.code`, or `encounter.discharge_diagnosis`
* **Inpatient encounter**: `encounter` with `encounter_class` = `IMP (inpatient encounter)` or `ACUTE (inpatient acute)` or `NONAC (inpatient non-acute)`
* **Patient death prior to discharge**: `date_of_death` during `COVID-19-related-hospitalization`

### Value Sets

* [Confirmed COVID-19 diagnosis code](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.117/definition)
* Confirmatory lab test
* Respiratory diagnosis (clinical or billing code) -- ICD 10 J00-J99
* HCQ drug codes (for outpatient/admission medication list and inpatient medication administration)
* Any intubation procedure or mechanical ventilation-associated procedure performed

#### Notes:

[1] Study is designed to include only confirmed cases<br/>
[2] Respiratory condition on admission serves as confirmation that hospital admission is related to COVID-19 infection (as opposed to broken arm, etc.)<br/>
[3] Patients with prior use of HCQ (e.g., as treatment for autoimmune disease) are excluded from study

