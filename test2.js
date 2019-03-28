var transactions = [
    {
      "id": 3,
      "sourceAccount": "A",
      "targetAccount": "B",
      "amount": 100,
      "category": "eating_out",
      "time": "2018-03-02T10:34:30.000Z"
    },
    {
      "id": 1,
      "sourceAccount": "A",
      "targetAccount": "B",
      "amount": 100,
      "category": "eating_out",
      "time": "2018-03-02T10:33:00.000Z"
    },
    {
      "id": 6,
      "sourceAccount": "A",
      "targetAccount": "C",
      "amount": 250,
      "category": "other",
      "time": "2018-03-02T10:33:05.000Z"
    },
    {
      "id": 4,
      "sourceAccount": "A",
      "targetAccount": "B",
      "amount": 100,
      "category": "eating_out",
      "time": "2018-03-02T10:36:00.000Z"
    },
    {
      "id": 2,
      "sourceAccount": "A",
      "targetAccount": "B",
      "amount": 100,
      "category": "eating_out",
      "time": "2018-03-02T10:33:50.000Z"
    },
    {
      "id": 5,
      "sourceAccount": "A",
      "targetAccount": "C",
      "amount": 250,
      "category": "other",
      "time": "2018-03-02T10:33:00.000Z"
    }
];

const data = {};
const resultSet =[];
transactions.sort((a,b) => new Date(a.time) - new Date(b.time))
.filter((item, index) => {
    var key = item.sourceAccount + item.targetAccount + item.category + item.amount;
    data.hasOwnProperty(key) ? data[key].push(transactions[index]) : data[key] = [transactions[index]];
});

for (const key in data) {
    resultSet.push(data[key]);
}

const output = resultSet.map((tr, i) => {
    return tr.filter((t, j) => {
      if (resultSet[i][j - 1]) {
        let d1 = new Date(t.time);
        let d2 = new Date(resultSet[i][j - 1].time);
        return (d1.getTime() - d2.getTime()) <= 60000;
      }
      return true;
    });
  })
.filter((item) => item.length > 1 ? true : false );
  
console.log(output);