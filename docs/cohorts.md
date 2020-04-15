---
id: cohorts
title: Cohorts
---

The cohorts described here are intended to support use cases related to COVID-19, not particular studies.

> Notice:
This content is rough draft or placeholder quality, and is expected to change quickly as we work with C19HCC partners to align and refine definitions.


| Cohort | Description | Relevant Data Elements | Relevant Value Sets |
|---|-------|------|------|
| [COVID-19 exposure]() | Defines how to identify individuals who where definitely or possibly exposed to SARS-CoV-2. | `Condition` |  |
| [Suspected COVID-19 infection]() | Defines how to identify individuals present with COVID-19 like illness without a confirmation of exposure to SARS-CoV-2 or a definitive COVID-19 diagnosis. | `Condition.code`, `Encounter.admitting_diagnosis`, `Encounter.initial_diagnosis`, `Encounter.diagnosis`, `Laboratory_test.code`, `Laboratory_test.result`, <mark>`Order.code` (for pending lab tests) ??</mark> |  |
| [COVID-19 infection confirmed]() | Defines how to identify individuals with a definitive diagnosis of COVID-19. | `Condition`, `Encounter.admitting_diagnosis`, `Encounter.chief_complaint`, `Encounter.discharge_diagnosis`, `Encounter.diagnosis`, `Laboratory_test.code`, `Laboratory_test.result` |  |
| [High-Flow Oxygen therapy]() | Defines how to identify individuals who are on high-flow oxygen therapy, which can be an indicator of ICU-level care. | `Procedure.code`, `Procedure.start_datetime`, <mark>ICU flowsheet data</mark> | |
| [Mechanical Ventilation]()| Defines how to identify individuals who received mechanical ventilation. | `procedure.code`, <mark>completed orders, ICU flowsheet data?</mark> |  |
| [Death during hospitalization]() | Defines how to identify individuals who expired during a hospitalization. | |
| [ICU level of care]() | Defines how to identify patients receiving ICU-level of care | |
| [Death within 6 weeks of COVID-19 confirmation]() | |

