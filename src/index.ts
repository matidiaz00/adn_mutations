/**
 * @module server
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Node JS server.js
 */

"use strict";

import { https } from 'firebase-functions'
import MainRoute from './routes/main.route'
import express from 'express'
import { HeadersMiddleWare, ParserJSONMiddleWare, ParserURLMiddleWare, StaticMiddleWare } from './middlewares/main.middleware'
import v1Route from './routes/v1/v1.route'

/** Express object */
const app = express();

/** Setting General Middlewares */
app.use(HeadersMiddleWare, ParserJSONMiddleWare, ParserURLMiddleWare, StaticMiddleWare);

/** Main Routes */
app.use('/api', MainRoute);

/** ADN Routes */
app.use('/api/v1', v1Route);

/** Export functions for Firebase */
exports.app = https.onRequest(app)