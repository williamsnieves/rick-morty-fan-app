import express from 'express'
import pkg from 'body-parser'
import cors from 'cors'
import fetch from 'node-fetch'
import {firestore, loginWithEmailPassword, auth} from "./src/firebase.js"

const {json, urlencoded} = pkg

const RICK_MORTY_API_MAIN_URL = "https://rickandmortyapi.com/api"

const collectIdsAndDocs = doc => ({id: doc.id, ...doc.data()})

const port = 4000

async function startServer() {
  const app = express()
  app.use(cors())
  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.get("/character", async (req, res) => {
    const character = await fetch(`${RICK_MORTY_API_MAIN_URL}/character`)
      const characterJson = await character.json()

      res.json({data: characterJson.results})
  })

  app.get("/favorites", async (req, res) => {
    const favoritesSnapshot = await firestore.collection('favorites').get()
    res.send({data: favoritesSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))})
  })

  app.post("/favorites", async (req, res) => {

    const favoritesDocReference = await firestore.collection('favorites').add(req.body)

    const doc = await favoritesDocReference.get(doc => ({id: doc.id, ...doc.data()}))

    const newFavoriteCharacter = collectIdsAndDocs(doc)

    res.json({
      data: newFavoriteCharacter
    })
  })

  app.post("/login", async (req, res) => {

    const {email, password} = req.body.formData

    try {
      const loginResult =  await loginWithEmailPassword(auth, email, password)
      res.json({
        data: loginResult.user
      })
    } catch (error) {
      res.status(400).json({
        error
      })
    }

  })

  app.listen(port, () => {
    console.log(`Server running on ${port}`)
  })
}

startServer()


