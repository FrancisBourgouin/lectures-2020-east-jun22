const net = require('net')

let clientList = []

// Helper functions 
// exchange messages between clients

const broadcastMessage = (clientList, message) => {
  for (const client of clientList) {
    client.write(message)
  }
}


const broadcastToEveryoneButTheSender = (clientList, message, nameTag) => {
  for (const client of clientList) {
    if (client.nameTag !== nameTag) {
      client.write(message + '\n')
    }
  }
}

broadcastToEveryoneButTheSender(clientList, "Trololo")


// Create a server, a chat server named Hanzo
const hanzo = net.createServer()

// Console log a new client when they come in
hanzo.on('connection', () => {
  console.log("Somebody tried to connect")
})

// Connection event, manage what to do with the client
hanzo.on('connection', (specificClient) => {
  // assign a id to each a client
  specificClient.nameTag = Math.round(Math.random() * 1000) //0 then 1, then 2....
  clientList.push(specificClient)

  // We want an Echelon like server, so record everything
  console.log(specificClient)
  // when someone connects, we want to greet them
  specificClient.setEncoding('utf-8')
  specificClient.write('Hello anonymous person ?')

  specificClient.on('data', (data) => {
    console.log(data)
    // setTimeout(() => {
    //   client.write(data)
    // }, 1000)

    // broadcastMessage(clientList, data)
    broadcastToEveryoneButTheSender(clientList, data, specificClient.nameTag)
  })
})

// disconnect
hanzo.on('close', (currentClient) => {
  console.log("Somebody left")
  const newClientList = []
  for (const client of clientList) {
    if (client.nameTag !== currentClient.nameTag) {
      newClientList.push(client)
    }
  }
  clientList = newClientList

})
// request / data
hanzo.listen(1337, () => {
  console.log('Server is ready.')
})

// How will the client connect ?