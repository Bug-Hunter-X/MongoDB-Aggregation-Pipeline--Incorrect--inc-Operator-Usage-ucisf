# MongoDB Aggregation Pipeline Bug: Incorrect $inc Operator Usage

This repository demonstrates a common error when using the `$inc` operator within a MongoDB aggregation pipeline.  The `$inc` operator is designed for updating documents, not for performing calculations within the pipeline.  Using it incorrectly can lead to unexpected results.

The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected version.

## Bug Description

The original code attempts to increment the `count` field in the aggregation pipeline using `$inc`. This is incorrect because `$inc` is for document updates, not aggregation calculations. This will not increment the values as expected.

## Solution

The solution uses the `$sum` operator to correctly accumulate the count values within the aggregation pipeline, providing the expected result.