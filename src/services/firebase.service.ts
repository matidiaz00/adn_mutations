import * as admin from 'firebase-admin';
import firebaseAccountCredentials from './firebase.sdk.key.json';

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://adn-mutations.firebaseio.com'
})

const db = admin.firestore()
const auth = admin.auth()

export { admin, db, auth }