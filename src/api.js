const quotesUrl = 'http://localhost:3000/quotes'

const getQuotes = () =>
  fetch(quotesUrl)
    .then(resp => resp.json())

const updateQuote = (quoteToUpdate, attrToUpdate) =>
  fetch(quotesUrl + '/' + quoteToUpdate.id, {
    method: 'PATCH',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(attrToUpdate)
  })
    .then(resp => resp.json())