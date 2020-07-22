const generateHelpers = client => {
  const fetchAllBottles = () => {
    const query = 'SELECT bottles.*, spirit_types.name AS spirit_name, spirit_types.description AS spirit_description FROM bottles JOIN spirit_types ON spirit_types.id = bottles.spirit_type_id'
    console.log(client.query(query))
    console.log(client.query)
    return client.query(query)
  }

  const fetchSpecificBottle = (bottleId) => {
    const query = 'SELECT bottles.*, spirit_types.name AS spirit_name, spirit_types.description AS spirit_description FROM bottles JOIN spirit_types ON spirit_types.id = bottles.spirit_type_id WHERE bottles.id = $1'
    return client.query(query, [bottleId])
  }

  return { fetchAllBottles, fetchSpecificBottle }
}



module.exports = generateHelpers