# 7.6 Human review and confidence calibration

Phase 7: Context and reliability · about 9 min · CCAR-F 5.5

Aggregate accuracy hides weaknesses. "97% accurate" can mean 99% on standard invoices and 70% on handwritten ones. Before reducing human review, measure accuracy **per document type and per field**.

Even after automating, keep watching. **Stratified random sampling** of high-confidence outputs (a few from each type, regularly) catches new error patterns before they pile up.

Field-level confidence scores can route low-confidence items to people. But set the thresholds from a **labelled validation set**: compare the model's confidence to whether it was actually right. Uncalibrated confidence is a guess about a guess.

Send humans the cases that need them: low confidence, ambiguous or contradictory sources, and new document types.

## Key points

- Break accuracy down by type and field before trusting it.
- Stratified sampling keeps catching new errors.
- Calibrate confidence thresholds on labelled data.
- Route ambiguous and contradictory cases to people.

## Example: Why the average misleads

```
document type      volume   accuracy
standard invoice    8,200     99.1%
delivery note       1,400     96.8%
handwritten receipt   400     71.5%   <- hidden by the 97.4% average
------------------------------------
overall            10,000     97.4%
```

## Exam traps

- Removing human review because the overall number looks high.
- Using raw self-reported confidence as a threshold.

## Quick check

1. 97% overall accuracy; the plan is to remove human review. What first?
   A. Remove it
   B. Check accuracy per document type and field
   C. Ask the model
   D. Run it twice

2. How to keep monitoring automated high-confidence outputs?
   A. Don't
   B. Stratified random sampling
   C. Only review complaints
   D. Review the first 10

3. Confidence thresholds should be set from...
   A. Intuition
   B. A labelled validation set
   C. The model's own suggestion
   D. Industry averages

<details><summary>Answers</summary>

1. **B.** Averages hide weak segments.
2. **B.** Regular samples across types catch drift.
3. **B.** Calibration needs ground truth.

</details>
