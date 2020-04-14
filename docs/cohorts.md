---
id: cohorts
title: Cohorts
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Notice:
This content is preliminary and is expected to change quickly as we work with C19HCC partners to align and refine definitions.

## Introduction

The cohorts described here are intended to support an initial use case of produced federated observational studies on EHR data to regarding treatment options and outcomes of COVID-19.


### EHR data-based cohorts to identify COVID-19 populations


| Cohort | Description | Related EHR Data Domains and Elements |
| --- |--- | --- |
| [Influenza-like illness]() | Defines how to identify individuals who present with COVID-19 like illness without a confirmation of exposure to SARS-CoV-2 or a definitive COVID-19 diagnosis. | `Condition`, `Encounter.admitting_diagnosis`, `Encounter.chief_complaint`, `Encounter.discharge_diagnosis`,  `Encounter.diagnosis` |
| [COVID-19 exposure]() | Defines how to identify individuals who where definitely or possibly exposed to SARS-CoV-2. | `Condition`, `Encounter.admitting_diagnosis`, `Encounter.chief_complaint`, `Encounter.discharge_diagnosis`, `Encounter.diagnosis` |
| [Suspected COVID-19 infection]() | Defines how to identify individuals for whom there is a suspicion of COVID-19 infection. | `Condition`, `Encounter.admitting_diagnosis`, `Encounter.chief_complaint`, `Encounter.discharge_diagnosis`, `Encounter.diagnosis`, `Laboratory_test.code`, `Laboratory_test.result`, <mark>`Order.code` (for pending lab tests) ??</mark> |
| [COVID-19 infection confirmed]() | Defines how to identify individuals with a definitive diagnosis of COVID-19. | `Condition`, `Encounter.admitting_diagnosis`, `Encounter.chief_complaint`, `Encounter.discharge_diagnosis`, `Encounter.diagnosis`, `Laboratory_test.code`, `Laboratory_test.result` |

### EHR data-based cohorts to assess COVID-19 outcomes

| Cohort | Description | Related EHR Data Elements |
| --- | --- | --- |
| <mark>TODO </mark>[High-Flow Oxygen therapy]() | Defines how to identify individuals who are on high-flow oxygen therapy, which can be an indicator of ICU-level care. | `Procedure.code`, `Procedure.start_datetime`, <mark>`ICU flowsheet data`</mark> |
| <mark>TODO </mark>[Mechanical Ventilation]()        | Defines how to identify individuals who received mechanical ventilation. | `procedure.code`, <mark>completed orders, ICU flowsheet data?</mark>
<mark>TODO </mark>[Death during hospitalization]() | Defines how to identify individuals who expired during a hospitalization. |
| <mark>TODO </mark>[ICU level of care]() | Defines how to identify patients receiving ICU-level of care |
| <mark>TODO </mark>[Death within 6 weeks of COVID-19 confirmation]() |


### EHR data cohorts for evaluating effect of drugs on COVID-19 outcomes

#### Hydroxychloroquine

##### Novel use of hydroxycloroquine for COVID-19 treatment

For patients with new COVID-19 infection, how does the addition of hydroxychloroquine affect the development of severe symptoms, hospitalization, ICU admission/intubation/mechanical ventilation, or death?

![Hydroxycholoroquine cohort pathways](img/hydroxy_cohorts.png)

| Entry cohort | Choose one of three entry cohorts[Adult Hospitalization](c-19-adult-hosp.md) AND [COVID-19 like illness]() AND [] OR [Adult Hospitalization](c-19-adult-hosp.md) AND [Suspected COVID-19 Infection]() OR [Adult Hospitalization](c-19-adult-hosp.md) AND [COVID-19 infection confirmed]()|
| --- | --- |

| Cohort | Outcome: Death | Outcome: No Death
| --- | --- | --- |
| Target: Entry cohort AND [Novel use of hydroxychloroquine during hospitalization](c-19-new-hydroxy.md) | Target Cohort AND [Death during hospitalization]() | Target Cohort AND NOT [Death during hospitalization]() |
| Control: Entry cohort AND NOT [Novel use of hydroxychloroquine during hospitalization](c-19-new-hydroxy.md) | Control Cohort AND [Death during hospitalization]() | Control Cohort AND NOT [Death during hospitalization]() |
