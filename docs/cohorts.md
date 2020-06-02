---
id: cohorts
title: COHORTS
hide_title: true
---

##### Top

# Cohorts

The cohorts described here are intended to support use cases related to COVID-19. Searches are defined in terms of standard codes, but text searches and local code mapping may be necessary to retrieve the all members of the cohort.

### Active Patient

A patient who has interacted with a health system within two years of index date and alive at the index date:

  * One or more recorded encounters within two (2) years of the index date, including face-to-face (inpatient or outpatient) encounters, and telehealth encounters, AND
  * No death recorded during the same period

### COVID-19 Positive

A patient diagnosed with COVID-19:

  * Any clinical diagnosis code in set [Confirmed COVID-19 Infection VS](/docs/vocabulary#confirmed-covid-19-infection-vs) OR
  * `Positive` or `detected` result from any test in set [SARS Coronavirus 2 Qualitative Laboratory Test VS](/docs/vocabulary#sars-coronavirus-2-qualitative-laboratory-test-vs) OR
  * `Positive` or `detected` result from any test in set [SARS-Related Qualitative Laboratory Test VS](/docs/vocabulary#sars-related-qualitative-laboratory-test-vs)

### COVID-19 Positive Date

The earliest date of a COVID-19 diagnosis:

* First date of [COVID-19 Positive](#covid-19-positive)

### COVID-19 Related Hospitalization

An inpatient visit associated with COVID-19:

  * [COVID-19 Positive Date](#covid-19-positive-date) during hospitalization OR
  * Hospitalization up to 14 days after [COVID-19 Positive Date](#covid-19-positive-date) AND clinical or billing diagnosis of [Respiratory Condition VS](/docs/vocabulary#respiratory-condition-vs) associated with the hospitalization

### Intravesical BCG

Administration of BCG vaccine into intravesical space:

* Medication administration code in [BCG Vaccine Products for Intravesical Use VS](/docs/vocabulary#bcg-vaccine-products-for-intravesical-use-vs) AND
* Medication administration route in [Intravesical Route VS](/docs/vocabulary#intravesical-route-vs)

OR

* Procedure code in [Intravesical Administration of BCG Procedure VS](/docs/vocabulary#intravesical-administration-of-bcg-procedure-vs)

OR

* Procedure code in [Intravesical Administration of Therapeutic Agent Procedure VS](/docs/vocabulary#intravesical-administration-of-therapeutic-agent-procedure-vs) AND
* Procedure itemUsed in [BCG Vaccine Products for Intravesical Use VS](/docs/vocabulary#bdg-vaccine-products-for-intravesical-use-vs)

### Inpatient Convalescent Serum of COVID-19 Use

Use of convalescent serum of COVID-19 (CS) during the course of hospitalization. Includes any dose or duration of CS, any level of disease severity while on CS, and patients on other medications.

* Medication administration code in [Convalescent Serum Products VS](/docs/vocabulary#convalescent-serum-of-covid-19-products-vs) during [COVID-19 Related Hospitalization](#covid-19-related-hospitalization)

### Inpatient Death

Patient who dies during hospitalization:

* Discharge disposition like `expired` OR date of death during hospitalization

### Inpatient HCQ Use

Use of hydroxychloroquine during a hospitalization related to COVID-19. Includes any dose, form, duration of HCQ, any level of disease severity while on HCQ, and patients on other medications.

* Medication administration code from [Hydroxychloroquine VS](/docs/vocabulary#hydroxychloroquine-vs) during [COVID-19 Related Hospitalization](#covid-19-related-hospitalization)

### Invasive Mechanical Ventilation

Any intubation procedure or mechanical ventilation-associated procedure, excluding supplemental oxygen (high or low flow), CPAP, and BiPAP, ECMO.

* Procedure code in [Invasive Mechanical Ventilation VS](/docs/vocabulary#invasive-mechanical-ventilation-vs) OR
* Evidence of mechanical ventilation in other intensive care unit (ICU) documentation (e.g. ventilator mode change in ICU flowsheet)

### Prior HCQ Use

Use of hydroxychloroquine prior to hospital admission related to COVID-19:

* Medication code from [Hydroxychloroquine VS](/docs/vocabulary#hydroxychloroquine-vs) on the admission medication list or outpatient medication list associated with [COVID-19 Related Hospitalization](#covid-19-related-hospitalization)

### Respiratory Condition

Patient exhibiting signs and symptoms of respiratory distress:

* Condition code, encounter admitting diagnosis code, or encounter chief complaint code in [Respiratory Condition VS](/docs/vocabulary#respiratory-condition-vs) value set.









| COVID-19 exposure | Defines how to identify individuals who where definitely or possibly exposed to SARS-CoV-2. | `Condition` |  |
| Suspected COVID-19 infection | Defines how to identify individuals present with COVID-19 like illness without a confirmation of exposure to SARS-CoV-2 or a definitive COVID-19 diagnosis. | `Condition.code`, `Encounter.admitting_diagnosis`, `Encounter.initial_diagnosis`, `Encounter.diagnosis`, `Laboratory_test.code`, `Laboratory_test.result`, <mark>`Order.code` (for pending lab tests) ??</mark> |  |
| COVID-19 infection confirmed | Defines how to identify individuals with a definitive diagnosis of COVID-19. | `Condition`, `Encounter.admitting_diagnosis`, `Encounter.chief_complaint`, `Encounter.discharge_diagnosis`, `Encounter.diagnosis`, `Laboratory_test.code`, `Laboratory_test.result` |  |
| High-Flow Oxygen therapy | Defines how to identify individuals who are on high-flow oxygen therapy, which can be an indicator of ICU-level care. | `Procedure.code`, `Procedure.start_datetime`, <mark>ICU flowsheet data</mark> | |

| Death during hospitalization | Defines how to identify individuals who expired during a hospitalization. | |
| ICU level of care | Defines how to identify patients receiving ICU-level of care | |
| Death within 6 weeks of COVID-19 confirmation | |








* `COVID-19-positive` [2]:
  * Any clinical diagnosis [3] code in set `Confirmed COVID-19 infection` OR
  * `Positive` or `detected` result from any test in set `SARS-CoV-2 Qualitative Laboratory Test` [4] OR
  * `Positive` or `detected` result from any test in set `SARS-related Qualitative Laboratory Test` [4]
* `COVID-19-positive-date`: earliest date of `COVID-19-positive` [5]
* `Hospitalization`:
  * encounter with class or type like `inpatient encounter` AND
  * encounter status like `completed`
* `COVID-19-related-hospitalization`: [6]
  * `COVID-19-positive-date` during `hospitalization` OR
  * (`hospitalization` up to 14 days after `COVID-19-positive-date`) AND (any clinical or billing diagnosis of `Respiratory Condition` associated with the hospitalization [7])
* `Prior-Remdesivir-use`:
  * `Hydroxychloroquine` on admission medication list or outpatient medication list
* `Inpatient-Remdesivir-use`:
  * `Hydroxychloroquine` medication administration during `COVID-19-related-hospitalization`
    * Includes any dose, form, duration of Remdesivir
    * Includes any level of disease severity while on Remdesivir
    * Includes patients on other medications

* `COVID-19-positive` [2]:
  * Any clinical diagnosis [3] code in set `Confirmed COVID-19 infection` OR
  * `Positive` or `detected` result from any test in set `SARS-CoV-2 Qualitative Laboratory Test` [4] OR
  * `Positive` or `detected` result from any test in set `SARS-related Qualitative Laboratory Test` [4]
* `COVID-19-positive-date`: earliest date of `COVID-19-positive` [5]
* `Hospitalization`:
  * encounter with class or type like `inpatient encounter` AND
  * encounter status like `completed`
* `COVID-19-related-hospitalization`: [6]
  * `COVID-19-positive-date` during `hospitalization` OR
  * (`hospitalization` up to 14 days after `COVID-19-positive-date`) AND (any clinical or billing diagnosis of `Respiratory Condition` associated with the hospitalization [7])



[TOP](#top)