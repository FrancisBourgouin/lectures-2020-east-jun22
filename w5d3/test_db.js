const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'cellar',
  password: 'francis',
  port: 5432,
})

client.connect()

client.query('SELECT * FROM bottles', (err, res) => {
  console.log(res.rows, res.rowCount)
  client.end()
})