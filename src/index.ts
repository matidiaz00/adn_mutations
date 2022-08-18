"use strict";

import { https } from 'firebase-functions'
import MainRoute from './routes/main.route'
import express from 'express'
import { HeadersMiddleWare, ParserJSONMiddleWare, ParserURLMiddleWare, StaticMiddleWare } from './middlewares/main.middleware'
import v1Route from './routes/v1/v1.route'

const app = express();

app.use(HeadersMiddleWare, ParserJSONMiddleWare, ParserURLMiddleWare, StaticMiddleWare);

app.use('/', MainRoute);

app.use('/v1', v1Route);

exports.api = https.onRequest(app)