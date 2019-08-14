import Airtable from 'airtable'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
})

const base = Airtable.base('apphnYD44H7n9McFL')

const data = {
  fetch: callback => {
    base('Table 1')
      .select({
        view: 'Grid view'
      })
      .firstPage(function page(err, records) {
        callback(records)
      })
  }
}

export default data
