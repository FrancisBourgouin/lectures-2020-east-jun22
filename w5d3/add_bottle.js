const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'cellar',
  password: 'francis',
  port: 5432,
})

console.log(process.argv)
// const name = process.argv[2]
// const brand = process.argv[3]
// const age = process.argv[4]
// const volume = process.argv[5]
// const spirit_type_id = process.argv[6]
const [, , name, brand, age, volume, spirit_type_id] = process.argv
// const query = "INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('Macallan 18 Cask', 'Macallan', 18, 40, 1);"
const query = "INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('Macallan 18 Cask', 'Macallan', 18, 40, 1) RETURNING *"

const betterQuery = `INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ('${name}', '${brand}', ${age}, ${volume}, ${spirit_type_id}) RETURNING *`

const bettererQuery = `INSERT INTO bottles (name, brand, age, volume, spirit_type_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`
const values = [name, brand, age, volume, spirit_type_id]



console.log(betterQuery)

client.connect()


client.query(bettererQuery, values, (err, res) => {
  console.log(err, res.rows)
  client.end()
})
// client.query(betterQuery, (err, res) => {
//   console.log(err, res.rows)
//   client.end()
// })
