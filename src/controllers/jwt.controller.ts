/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */

import { Request, Response, NextFunction } from 'express'
import { auth } from '../services/firebase.service'
 
const getToken = async (req: Request, res: Response, next: NextFunction) => { 
    auth.createUser({})
        .then((userRecord) => {
            res.status(200).send(userRecord);
        })
        .catch((error) => {
            res.status(500).send({
                message: 'Error creating anonymous user',
                error
            });
        });
}

export default getToken;