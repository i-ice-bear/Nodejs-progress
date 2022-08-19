const fetch = require('node-fetch');

fetch('https://httpbin.org/post', {
  method: 'GET',
  body: 'a=1'
})
  .then(res => res.json())
  .then(json => {
    console.log(json)
  })
  .catch(err => console.log(err));