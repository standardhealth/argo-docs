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

OR

* Procedure code in [Intravesical Administration of BCG Procedure VS](/docs/vocabulary#intravesical-administration-of-bcg-procedure-vs)

OR

* Procedure code in [Intravesical Administration of Therapeutic Agent Procedure VS](/docs/vocabulary#intravesical-administration-of-therapeutic-agent-procedure-vs) AND
* Procedure itemUsed in [BCG Vaccine Products for Intravesical Use VS](/docs/vocabulary#bcg-vaccine-products-for-intravesical-use-vs)

### Inpatient Convalescent Serum of COVID-19 Use

Use of convalescent serum of COVID-19 (CS) during the course of hospitalization. Includes any dose or duration of CS, any level of disease severity while on CS, and patients on other medications.

* Medication administration code in [Convalescent Serum Products VS](/docs/vocabulary#convalescent-serum-of-covid-19-products-vs) during [COVID-19 Related Hospitalization](#covid-19-related-hospitalization)

### Inpatient Death

Patient who dies during hospitalization:

* Discharge disposition like `expired` OR date of death during hospitalization

### Inpatient HCQ Use

Use of hydroxychloroquine during a hospitalization related to COVID-19. Includes any dose, form, duration of HCQ, any level of disease severity while on HCQ, and patients on other medications.

* Medication administration code from [Hydroxychloroquine VS](/docs/vocabulary#hydroxychloroquine-vs) during [COVID-19 Related Hospitalization](#covid-19-related-hospitalization)

### Inpatient Remdesivir Use

Use of Remdesivir during a hospitalization related to COVID-19. Includes any dose, form, duration of Remdesivir, any level of disease severity while on Remdesivir, and patients on other medications.

* Medication administration code from [Remdesivir VS](/docs/vocabulary#remdesivir-vs) during [COVID-19 Related Hospitalization](#covid-19-related-hospitalization)

### Invasive Mechanical Ventilation

Any intubation procedure or mechanical ventilation-associated procedure, excluding supplemental oxygen (high or low flow), CPAP, and BiPAP, ECMO.

* Procedure code in [Invasive Mechanical Ventilation VS](/docs/vocabulary#invasive-mechanical-ventilation-vs) OR
* Evidence of mechanical ventilation in other intensive care unit (ICU) documentation (e.g. ventilator mode change in ICU flowsheet)

### Prior HCQ Use

Use of hydroxychloroquine prior to hospital admission related to COVID-19:

* Medication code from [Hydroxychloroquine VS](/docs/vocabulary#hydroxychloroquine-vs) on the admission medication list or outpatient medication list associated with [COVID-19 Related Hospitalization](#covid-19-related-hospitalization)

### Respiratory Condition

Patient exhibiting signs and symptoms of respiratory distress (could be noted in admitting diagnosis code or encounter chief complaint):

* Condition code in [Respiratory Condition VS](/docs/vocabulary#respiratory-condition-vs) value set.


[TOP](#top)