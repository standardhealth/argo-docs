---
id: studies-hcq
title: HYDROXYCHLOROQUINE STUDY
hide_title: true
hide_table_of_contents: true
---

##### Top

# Hydroxychloroquine

**RESEARCH QUESTION: For patients with new COVID-19 infection, how does the addition of hydroxychloroquine (HCQ) affect the outcomes (1) severe disease (indicated by mechanical ventilation) and (2) inpatient death?**

### Background

Hydroxychloroquine and a related drug, chloroquine, are currently under study as possible treatments for COVID-19. Before randomized clinical trials read out, a retrospective observational study can provide insight into the efficacy of this drug.

### Study Design

The study examines the effect of initiation of HCQ in hospitalized COVID-19 patients on disease severity. The study involves two study groups (those receiving or not receiving HCQ), as depicted below:

![Hydroxycholoroquine cohort pathways](hydroxy_cohorts.png)

Four outcomes are considered:

1. Discharge without being placed on mechanical ventilation during stay
2. Discharge after invasive mechanical ventilation (IMV) during stay
3. Inpatient death without being placed on mechanical ventilation during stay
4. Inpatient death after invasive mechanical ventilation (IMV) during stay

These outcomes correspond to increasing levels disease severity. The study uses mechanical ventilation as a proxy for severe but non-fatal disease. The outcome is retrospective over the entire patient visit and capture the worst severity of illness during the visit. For example:

* Patient is put on a ventilator (level 2) and then succumbs to the disease (level 3); the outcome is level 3 (death).
* Patient is temporarily put on a ventilator (level 2), then taken off the ventilator (level 1) and discharged; the outcome level 2.

As a side note, [Siddiqi and Mehra](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7118652/) proposed a staging system for COVID-19 aligned to the stages of the disease, from early infection (Stage 1) to pulmonary involvement (Stage 2) to systemic hyperinflammation (Stage 3). That staging system focuses on progression rather than severity, although the two are related.

[TOP](#top)

### Study Populations

**Study Period**: January 1, 2020 - Present

**Index date**: [COVID-19 Positive Date](/docs/cohorts#covid-19-positive-date)

* **Entry Cohort**:
  * Age at [COVID-19 Positive Date](/docs/cohorts#covid-19-positive-date) ≥ 18 years AND
  * [COVID-19 Positive Date](/docs/cohorts#covid-19-positive-date) after Jan 1, 2020 AND
  * [COVID-19 Related Hospitalization](/docs/cohorts#covid-19-related-hospitalization)
* **Target Cohort**:
  * Entry Cohort AND
  * [Inpatient HCQ Use](/docs/cohorts#inpatient-hcq-use) AND NOT [Prior HCQ Use](/docs/cohorts#prior-hcq-use) [1]
* **Control Cohort**:
  * Entry Cohort AND
  * NOT [Inpatient HCQ Use](/docs/cohorts#inpatient-hcq-use) AND NOT [Prior HCQ Use](/docs/cohorts#prior-hcq-use)

### Outcome Definitions

* **Invasive Mechanical Ventilation (IMV)**:
  * [Invasive Mechanical Ventilation](/docs/cohorts#invasive-mechanical-ventilation) during [COVID-19 Related Hospitalization](/docs/cohorts#covid-19-related-hospitalization) OR
  * Evidence of mechanical ventilation in other ICU documentation (e.g. ventilator mode change in ICU flowsheet)[8]

* **COVID-19 Inpatient Death**:
  * [Inpatient Death](/docs/cohorts#inpatient-death) during [COVID-19 Related Hospitalization](/docs/cohorts#covid-19-related-hospitalization)


### Study Cohort Examples

Person A (included in study):
* Presents with fever and difficulty breathing
* Admitted with diagnosis of suspected COVID-19
* Tests positive during hospital stay (even if results received after discharge)
* No history of HCQ usage

Person B (excluded from study):
* Presents with fever and difficulty breathing
* Admitted with diagnosis of suspected COVID-19
* Tests positive during hospital stay
* Taking HCQ for lupus

Person C (included in study):
* Has fever and cough
* Swabbed for COVID-19, sent home
* Test results positive
* Arrives at hospital 10 days later with dyspnea
* Admitted
* No history of HCQ usage

Person D (excluded from study):
* Presents with fever, difficulty breathing
* Admitted with admission diagnosis of suspected COVID-19
* Tests negative for COVID-19
* No history of HCQ usage

Person E (included from study):
* Admitted to hospital for congestive heart failure
* During stay, experiences fever and cough
* During stay, tests positive for COVID-19
* No history of HCQ usage

Person F (excluded from study):
* Asymptomatic
* Tests positive for COVID-19 during outpatient population screening
* Admitted to hospital 5 days later for trauma injury
* No history of HCQ usage

Person F (included in study):
* Has fever and cough
* Swabbed for COVID-19, sent home
* Test results positive
* Arrives at hospital 22 days later with dyspnea
* Admitted with suspected COVID-19
* Receives clinical diagnosis of COVID-19 as inpatient

#### Notes:
[1] Patients with prior use of HCQ (e.g., treatment for autoimmune disease) are excluded from study<br/>
[2] Study includes confirmed cases only<br/>
[3] A clinical diagnosis can be any diagnosis associated with an encounter, such as chief complaint, admitting diagnosis, working diagnosis, final diagnosis, or discharge diagnosis. It can also be a problem list entry.<br/>
[4] There may be local value sets/groupers for laboratory tests to detect SARS-CoV-2. Only PCR and NAAT tests with qualitative results should be considered for this purpose. See [C19HCC SARS-CoV-2 Qualitative Laboratory Test](#c19hcc-sars-cov-2-qualitative-laboratory-test) and [C19HCC SARS-related Qualitative Laboratory Test](#c19hcc-sars-related-qualitative-laboratory-test) for details on inclusions and exclusions.<br/>
[5] The relevant date for laboratory test is the specimen collection data, not when results are reported. Laboratory order date can be used when specimen collection date is not available.<br/>
[6] This definition includes patients diagnosed with COVID-19 during a hospital visit even if the reason for hospitalization is not COVID-related; e.g., patients with undetected COVID-19 admitted for other reasons, and nosocomial COVID-19 infections ​<br/>
[7] Serves a confirmation that hospital admission is related to COVID-19 infection (as opposed to broken arm, etc.)<br/>
[8] ICU flowsheet data may not be accessible to all Aggregators


[TOP](#top)