---
id: studies-remd
title: REMDESIVIR STUDY
hide_title: true
hide_table_of_contents: true
---

##### Top

# Remdesivir

**RESEARCH QUESTION: For patients with new COVID-19 infection, how does the addition of Remdesivir affect the outcomes (1) severe disease (indicated by mechanical ventilation) and (2) inpatient death?**

### Background

Remdesivir are currently under study as possible treatments for COVID-19. Before randomized clinical trials read out, a retrospective observational study can provide insight into the efficacy of this drug.

### Study Design

**Study Period**: January 1, 2020 - Present

**Index date**: `COVID-19-positive-date`

The study examines the effect of initiation of Remdesivir in hospitalized COVID-19 patients on disease severity. The study involves two study groups (those receiving or not receiving Remdesivir), as depicted below:

![Remdesivir cohort pathways](remd_cohorts.png)

Four outcomes are considered:

1. Discharge without being placed on mechanical ventilation during stay
2. Discharge after invasive mechanical ventilation (IMV) during stay
3. Inpatient death without being placed on mechanical ventilation during stay
4. Inpatient death after invasive mechanical ventilation (IMV) during stay

These outcomes correspond to increasing levels disease severity. The study uses mechanical ventilation as a proxy for severe but non-fatal disease. The outcome is retrospective over the entire patient visit and capture the worst severity of illness during the visit. For example:

* Patient is put on a ventilator (level 2) and then succumbs to the disease (level 3); the outcome is level 3 (death).
* Patient is temporarily put on a ventilator (level 2), then taken off the ventilator (level 1) and discharged; the outcome level 2.

### Study Populations

* **Entry Cohort**:
  * Age at [COVID-19-positive-date](/docs/cohorts#covid-19-positive-date) ≥ 18 years AND
  * [COVID-19-positive-date](/docs/cohorts#covid-19-positive-date) after Jan 1, 2020 AND
  * [COVID-19-related-hospitalization](/docs/cohorts#covid-19-hospitalization)
* **Target Cohort**:
  * Entry Cohort AND
  * [Inpatient-Remdesivir-use](/docs/cohorts#inpatient-remdesivir-use) AND NOT [Prior-Remdesivir-use](/docs/cohorts#prior-remdesivir-use) [1]
* **Control Cohort**:
  * Entry Cohort AND
  * NOT [Inpatient-Remdesivir-use](/docs/cohorts#inpatient-remdesivir-use) AND NOT [Prior-Remdesivir-use](/docs/cohorts#prior-remdesivir-use)

### Outcome Definitions

* **Invasive Mechanical Ventilation (IMV)**:
  * [Invasive-mechanical-ventilation](/docs/cohorts#invasive-mechanical-ventilation) during [COVID-19-related-hospitalization](/docs/cohorts#covid-19-hospitalization) OR
  * Evidence of mechanical ventilation in other ICU documentation (e.g. ventilator mode change in ICU flowsheet)[8]

* **COVID-19 Inpatient Death**:
  * [Inpatient-death](/docs/cohorts#inpatient-death) during [COVID-19-related-hospitalization](/docs/cohorts#covid-19-hospitalization)

#### Notes

[2] Study includes confirmed cases only<br/>
[3] A clinical diagnosis can be any diagnosis associated with an encounter, such as chief complaint, admitting diagnosis, working diagnosis, final diagnosis, or discharge diagnosis. It can also be a problem list entry.<br/>
[4] There may be local value sets/groupers for laboratory tests to detect SARS-CoV-2. Only PCR and NAAT tests with qualitative results should be considered for this purpose. See [C19HCC-SARS-CoV-2-Qualitative-Laboratory-Test]() and [C19HCC SARS-related-Qualitative-Laboratory-Test]() for details on inclusions and exclusions.<br/>
[5] The relevant date for laboratory test is the specimen collection data, not when results are reported. Laboratory order date can be used when specimen collection date is not available.<br/>
[6] This definition includes patients diagnosed with COVID-19 during a hospital visit even if the reason for hospitalization is not COVID-related; e.g., patients with undetected COVID-19 admitted for other reasons, and nosocomial COVID-19 infections ​<br/>
[7] Serves a confirmation that hospital admission is related to COVID-19 infection (as opposed to broken arm, etc.)<br/>
[8] ICU flowsheet data may not be accessible to all aggregators

[TOP](#top)



