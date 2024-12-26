```javascript
// Correct usage of $sum operator in MongoDB aggregation pipeline
db.collection.aggregate([
  { $match: { /* some criteria */ } },
  { $group: { _id: "$someField", count: { $sum: 1 } } }
]);
```