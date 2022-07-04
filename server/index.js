const express = require('express');
const cors = require('cors')
const fetch = require("node-fetch")
const {ApolloServer, gql} = require('apollo-server-express')

const RICK_MORTY_API_MAIN_URL = "https://rickandmortyapi.com/api"

const port = 4000

const typeDefs = gql`
  type Location {
    name: String
  }
  type Character {
    id: ID,
    name: String!
    status: String,
    species: String,
    gender: String,
    image: String,
    location: Location,
    episode: [String!]

  }

  type Query {
    character: [Character]!
  }
`

const resolvers = {
  Query: {
    async character() {

      const character = await fetch(`${RICK_MORTY_API_MAIN_URL}/character`)
      const characterJson = await character.json()
      
      return characterJson.results
    }
  }
}

async function startServer() {
  //const app = express()
  //app.use(cors())
  //const apolloServer = new ApolloServer({
    //typeDefs,
    //resolvers
  //})
  
  //await apolloServer.start()
  //apolloServer.applyMiddleware({app: app})

  const app = express()
  app.use(cors())
  app.get("/character", async (req, res) => {
    const character = await fetch(`${RICK_MORTY_API_MAIN_URL}/character`)
      const characterJson = await character.json()

      res.send({data: characterJson.results})
  })

  app.listen(port, () => {
    console.log(`Server running on ${port}`)
  })
}

startServer()


