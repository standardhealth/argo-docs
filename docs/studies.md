---
id: studies
title: Studies
---

## Study 1

Version: 1.1
Last updated: April 16 2020

**RESEARCH QUESTION: For patients with new COVID-19 infection, how does the addition of hydroxychloroquine (HCQ) affect outcomes (mechanical ventilation, inpatient death)?**

### Background

Hydroxychloroquine and a related drug, chloroquine, are currently under study as possible treatments for COVID-19. Before randomized clinical trials read out, an observational trial can provide insight into the efficacy of this drug.

### Study Design

The study examines the effect of initiation of HCQ in hospitalized patients on COVID-19 disease severity. The study involves two study groups (those receiving or not receiving HCQ), as depicted below:

Study Period: January 1 2020 - Present (Index date: `COVID-19-positive-date`)

![Hydroxycholoroquine cohort pathways](img/hydroxy_cohorts.png)

Three outcomes are considered:

1. Discharge without being placed on mechanical ventilation during stay
2. Discharge after invasive mechanical ventilation (IVM) during stay
3. Inpatient death

These outcomes correspond to three levels disease severity. They are retrospective over the entire patient visit and captures the worst severity of illness during the visit. The study uses mechanical ventilation as a proxy for severe but not fatal disease. If the patient succumbs to the disease, they would be classified as outcome 3, regardless of whether they were ventilated during the stay.

[Siddiqi and Mehra](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7118652/) have proposed a staging system for COVID-19 aligned to the stages of the disease, from early infection (Stage 1) to pulmonary involvement (Stage 2) to systemic hyperinflammation (Stage 3). This system focuses of the progression, rather than the severity of the disease, although clearly the two are related.

### Cohorts

#### Study Populations

* **Entry Cohort**:
  * Age at `COVID-19-positive-date` ≥ 18 years AND
  * `COVID-19-positive-date` after Jan 1, 2020 AND
  *   * `COVID-19-related hospitalization`
* **Target Cohort**:
  * Entry Cohort AND
  * `Inpatient-HCQ-use` AND NOT `Prior-HCQ-use` [1]
* **Control Cohort**:
  * Entry Cohort AND 
  * NOT `Inpatient-HCQ-use` AND NOT `Prior-HCQ-use` [1]

#### Definitions

* `COVID-19-positive`[2]:
  * clinical diagnosis[3] of `Confirmed COVID-19 infection` OR
  * laboratory confirmation of COVID-19 infection[4]: `SARS-CoV-2 Qualitative Laboratory Test` or `SARS-related Qualitative Laboratory Test` result is `positive` or `detected`
* `COVID-19-positive-date`: earliest of (any specimen collection date[5] for `SARS-CoV-2 Qualitative Laboratory Test`, any clinical diagnosis of `Confirmed COVID-19 Infection`)

* `COVID-19-related-hospitalization`:
  * Hospitalization: encounter with encounter class ~ (`IMP (inpatient encounter)` OR `ACUTE (inpatient acute)` OR`NONAC (inpatient non-acute)`)
  * `COVID-19-positive-date` during any hospitalization OR
  * (Hospitalization within 14 days after `COVID-19-positive-date`) AND any clinical or billing diagnosis of `Respiratory Condition` associated with the hospitalization[6]
* `Prior-HCQ-use`:
  * `Hydroxychloroquine` on admission medication list or outpatient medication list
* `Inpatient-HCQ-use`:
  * `Hydroxychloroquine` medication administration during `COVID-19-related-hospitalization`
    * Includes any dose, form, duration of HCQ
    * Includes any level of disease severity while on HCQ
    * Includes patients on other medications

#### Outcomes

* **Invasive Mechanical Ventilation (IMV)**:
  * Any intubation procedure performed OR any mechanical ventilation-associated procedure performed during `COVID-19-related-hospitalization` OR
  * Evidence of ICU flowsheet documentation (e.g. PEEP, ventilator settings[7]

* **COVID-19 Inpatient Death**:
  * `COVID-19 related hospitalization` discharge disposition is ~`expired` OR date of death is during `COVID-19 related hospitalization`


* **Hospitalization**:
  * An encounter with encounter_class  of  ~`IMP (inpatient encounter)` or ~`ACUTE (inpatient acute)` or ~`NONAC (inpatient non-acute)` AND

### Value Sets

* [C19HCC Confimed COVID-19 Infection](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.117/definition) (SNOMED CT, ICD-10-CM)
* [C19HCC SARS-CoV-2 Qualitative Laboratory Test](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.109/definition) (LOINC)
* [C19HCC SARS-related Qualitative Laboratory Test](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.113/definition) (LOINC)
* Respiratory Condition: ICD-10-CM J00-J99
* [Hydroxychloroquine](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.1564.2220/definition): RxNorm
* Invasive mechanical ventilation: Any intubation procedure or mechanical ventilation-associated procedure. Excludes supplemental oxygen (high or low flow), CPAP, and BiPAP, ECMO (SNOMED CT, ICD-10-CM)

#### Notes:
[1] Patients with prior use of HCQ (e.g., as treatment for autoimmune disease) are excluded from study
[2] Study includes confirmed cases only<br/>
[3] A clinical diagnosis can be any diagnosis associated with an encounter, such as chief complaint, admitting diagnosis, working diagnosis, final diagnosis, or discharge diagnosis. It can also be a problem list entry.<br/>
[4] There may be local value sets/groupers for laboratory tests to detect SARS-CoV-2. Only PCR and NAAT tests with qualitative results should be considered for this purpose. See [C19HCC SARS-CoV-2 Qualitative Laboratory Test](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.109/definition) and [C19HCC SARS-related Qualitative Laboratory Test]() for details on inclusions and exclusions.<br/>
[5] Laboratory order date can be used when specimen collection date is not available<br/>
[6] Serves a confirmation that hospital admission is related to COVID-19 infection (as opposed to broken arm, etc.)<br/>
[7] May not be accessible to all data partners


