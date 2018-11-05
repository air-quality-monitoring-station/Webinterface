require('isomorphic-fetch');

fetch('https://rrrz55p4vn.lp.gql.zone/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ hello}' }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));