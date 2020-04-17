---
id: studies
title: Studies
---

## Study 1

**RESEARCH QUESTION: For patients with new COVID-19 infection, how does the addition of hydroxychloroquine (HCQ) affect the outcomes (1) severe disease (indicated by mechanical ventilation) and (2) inpatient death?**

### Background

Hydroxychloroquine and a related drug, chloroquine, are currently under study as possible treatments for COVID-19. Before randomized clinical trials read out, a retrospective observational study can provide insight into the efficacy of this drug.

### Study Design

The study examines the effect of initiation of HCQ in hospitalized COVID-19 patients on disease severity. The study involves two study groups (those receiving or not receiving HCQ), as depicted below:

**Study Period**: January 1 2020 - Present (Index date: `COVID-19-positive-date`)

![Hydroxycholoroquine cohort pathways](img/hydroxy_cohorts.png)

Three outcomes are considered:

1. Discharge without being placed on mechanical ventilation during stay
2. Discharge after invasive mechanical ventilation (IVM) during stay
3. Inpatient death

These outcomes correspond to increasing levels disease severity. They are retrospective over the entire patient visit and capture the worst severity of illness during the visit. The study uses mechanical ventilation as a proxy for severe non-fatal disease. Worst severity means that if a patient is put on a ventilator and then succumbs to the disease, they are outcome 3 (death).

As a side note, [Siddiqi and Mehra](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7118652/) have proposed a staging system for COVID-19 aligned to the stages of the disease, from early infection (Stage 1) to pulmonary involvement (Stage 2) to systemic hyperinflammation (Stage 3). That staging system focuses of the progression, rather than the severity of the disease, although clearly the two are related.

### Cohorts

#### Study Populations

* **Entry Cohort**:
  * Age at `COVID-19-positive-date` ≥ 18 years AND
  * `COVID-19-positive-date` after Jan 1, 2020 AND
  * `COVID-19-related hospitalization`
* **Target Cohort**:
  * Entry Cohort AND
  * `Inpatient-HCQ-use` AND NOT `Prior-HCQ-use` [1]
* **Control Cohort**:
  * Entry Cohort AND 
  * NOT `Inpatient-HCQ-use` AND NOT `Prior-HCQ-use` [1]

#### Definitions

* `COVID-19-positive`[2]:
  * Clinical diagnosis[3] of `Confirmed COVID-19 infection` OR
  * Laboratory confirmation of COVID-19 infection[4]: `SARS-CoV-2 Qualitative Laboratory Test` or `SARS-related Qualitative Laboratory Test` result is `positive` or `detected`
* `COVID-19-positive-date`: earliest of (any specimen collection date[5] for `SARS-CoV-2 Qualitative Laboratory Test`, any clinical diagnosis of `Confirmed COVID-19 Infection`)

* `Hospitalization`:
  * encounter with encounter class ~ (`IMP (inpatient encounter)` OR `ACUTE (inpatient acute)` OR`NONAC (inpatient non-acute)`) AND
  * encounter status ~ `completed`

* `COVID-19-related-hospitalization`:
  * `COVID-19-positive-date` during `hospitalization` OR
  * (`hospitalization` within 14 days after `COVID-19-positive-date`) AND any clinical or billing diagnosis of `Respiratory Condition` associated with the hospitalization[6]
* `Prior-HCQ-use`:
  * `Hydroxychloroquine` on admission medication list or outpatient medication list
* `Inpatient-HCQ-use`:
  * `Hydroxychloroquine` medication administration during `COVID-19-related-hospitalization`
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
  * `Invasive mechanical ventilation` procedure during `COVID-19-related-hospitalization` OR
  * Evidence of ICU flowsheet documentation (e.g. PEEP, vent mode change, FiO2 documentation)[8]

* **COVID-19 Inpatient Death**:
  * `COVID-19 related hospitalization` discharge disposition is ~`expired` OR date of death is during `COVID-19 related hospitalization`

### Value Sets

* [C19HCC Confimed COVID-19 Infection](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.117/definition) (SNOMED CT, ICD-10-CM)
* [C19HCC SARS-CoV-2 Qualitative Laboratory Test](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.109/definition) (LOINC)
* [C19HCC SARS-related Qualitative Laboratory Test](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.113/definition) (LOINC)
* Respiratory Condition (ICD-10-CM J00-J99)
* [Hydroxychloroquine](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.1564.2220/definition) (RxNorm)
* Invasive mechanical ventilation: Any intubation procedure or mechanical ventilation-associated procedure. Excludes supplemental oxygen (high or low flow), CPAP, and BiPAP, ECMO (SNOMED CT, CPT, ICD-10-PCS)

#### Notes:
[1] Patients with prior use of HCQ (e.g., as treatment for autoimmune disease) are excluded from study
[2] Study includes confirmed cases only<br/>
[3] A clinical diagnosis can be any diagnosis associated with an encounter, such as chief complaint, admitting diagnosis, working diagnosis, final diagnosis, or discharge diagnosis. It can also be a problem list entry.<br/>
[4] There may be local value sets/groupers for laboratory tests to detect SARS-CoV-2. Only PCR and NAAT tests with qualitative results should be considered for this purpose. See [C19HCC SARS-CoV-2 Qualitative Laboratory Test](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.109/definition) and [C19HCC SARS-related Qualitative Laboratory Test]() for details on inclusions and exclusions.<br/>
[5] Laboratory order date can be used when specimen collection date is not available<br/>
[6] Serves a confirmation that hospital admission is related to COVID-19 infection (as opposed to broken arm, etc.)<br/>
[8] ICU flowsheet data may not be accessible to all data partners


