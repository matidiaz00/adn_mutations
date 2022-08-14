import { https } from 'firebase-functions'
import express from 'express'
import { addEntry } from './controllers/entry.controller';

const app = express()

app.get('/', (req, res) => res.status(200).send('hola mundo5!'))
app.post('/mutat', addEntry)

exports.app = https.onRequest(app)