/**
 * @module controllers/mutation
 * @author Jose de Jesus Alvarez Hernandez
 * @desc mutation Controllers
 */

import { Request, Response, NextFunction } from 'express'
 //import ApiDNACrud './../models/dna';

const getStats = (req: Request, res: Response, next: NextFunction) => {
    /*
     try {
         ApiDNACrud.find({}, (err, DNAs) => {
             const count_mutations = DNAs.reduce((total, item) => item.hasMutation ? total + 1 : total, 0),
                 count_no_mutation = DNAs.length,
                 ratio = count_mutations / count_no_mutation;
             res.status(200).send({ count_mutations, count_no_mutation, ratio });
         });
     } catch (err) {
         res.status(400).send({ msg: err.message });
     }
    */
    res.status(200).send('Stats OK!');
}     
 
export default getStats