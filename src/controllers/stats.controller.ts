/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */

import { Request, Response, NextFunction } from 'express'
import { db } from '../services/firebase.service'

const getStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const snapshot = await db.collection('mutations').get(),
            statsDB = snapshot.docs.map(doc => doc.data()),
            count_mutations = statsDB.reduce((total: any, item: any) => item.hasMutation ? total + 1 : total, 0),
            count_no_mutation = statsDB.reduce((total: any, item: any) => !item.hasMutation ? total + 1 : total, 0),
            ratio = count_mutations / count_no_mutation;
        res.status(200).send({
            "count_mutations":count_mutations,
            "count_no_mutation":count_no_mutation,
            "ratio":ratio
        });
    } catch (err) { 
        res.status(400).send({ message: 'Problem with save data in server.', err });
    }
}     
 
export default getStats