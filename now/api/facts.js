import fetch from 'isomorphic-fetch'

module.exports = (req, res) => {
  fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(json => res.json(json))
}
