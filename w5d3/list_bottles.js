const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'cellar',
  password: 'francis',
  port: 5432,
})

// const query = 'SELECT * FROM bottles'
const query = 'SELECT bottles.*, spirit_types.name AS spirit_name, spirit_types.description AS spirit_description FROM bottles JOIN spirit_types ON spirit_types.id = bottles.spirit_type_id'

// { id: 3,
//   name: 'Jacobo Poli',
//   brand: 'Jacobo Poli',
//   age: 0,
//   volume: 40,
//   spirit_type_id: 4 },


const parseBottleData = (bottle) => {
  console.log(`One bottle of ${bottle.name}, ${bottle.age ? `${bottle.age} years old` : 'unaged'}, ${bottle.volume} ounces `)
}
const parseSpiritType = (spirit) => {
  console.log(`The bottle previsouly mentionned is a ${spirit.spirit_name} and here's a small description: ${spirit.spirit_description}`)
}
client.connect()

client.query(query, (err, res) => {
  if (err) {
    client.end()
    return err
  }
  for (const bottle of res.rows) {
    parseBottleData(bottle)
    parseSpiritType(bottle)
  }
  client.end()
})

const smallFunction = () => {
  console.log('Hello!')
  console.log('Hello!')
  console.log('Hello!')
  return 'Hello!'
  console.log('Hello!')
  console.log('Hello!')
}