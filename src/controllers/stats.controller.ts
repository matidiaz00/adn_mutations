import { Request, Response, NextFunction } from 'express'
import { db } from '../services/firebase.service'

const getStats = async (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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