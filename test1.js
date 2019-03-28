let searchCategory = 'groceries';
const sampleTransactions = [
    {
      id: 123,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -14,
      category: 'groceries',
      time: '2018-03-04'
    },
    {
        id: 125,
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -30,
        category: 'eating_out',
        time: '2018-03-12'
    },
    {
        id: 124,
        sourceAccount: 'my_account',
        targetAccount: 'supermarket',
        amount: -3,
        category: 'groceries',
        time: '2018-03-15'
    },
    {
        id: 126,
        sourceAccount: 'my_account',
        targetAccount: 'cinema',
        amount: -12,
        category: 'movies',
        time: '2018-05-15'
    }
];
function getBalanceByCategoryInPeriod (transactions, category, start, end ) {
    let filteredData = transactions
    .filter((item) => {
        var d1 = new Date(start).getTime(),
        d2 = new Date(end).getTime(),
        d3 = new Date(item.time).getTime();
        return item.category === searchCategory && (d1 <  d3 && d2 > d3);
    });
    return filteredData.reduce((sum, elem) => sum  + elem.amount, 0)
}
console.log(JSON.stringify(getBalanceByCategoryInPeriod(sampleTransactions, searchCategory, new Date("2018-03-01"), new Date("2018-03-31"))));
