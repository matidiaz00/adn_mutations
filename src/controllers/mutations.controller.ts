import { Request, Response, NextFunction } from 'express'
import { setDataDNA, mutation } from '../services/mutations.service'
import { db } from '../services/firebase.service'
import { message_type, dna_data_interface, mutations_response_interface, mutations_request_interface } from 'interfaces/mutations.interface'

const hasMutation = async (req: Request, res: Response, next: NextFunction) => { 
    const dna_data: dna_data_interface = setDataDNA(req.body);
    // Check if DNA is valid
    if (dna_data.valid === true && dna_data.dna != undefined) {
      // Create data response
      let data: mutations_response_interface["data"] = {
          success_example: dna_example,
          dna: req.body.dna,
          hasMutation: false,
          upsert: true, new: true, setDefaultsOnInsert: true,
      }
      // Get collection of database
      const muatationsDB = db.collection('mutations');
      // Check if DNA have mutation or not
      if (mutation(dna_data.dna)) {
        data.hasMutation = true;
        // Try to save in database and send response
        try {
          await muatationsDB.doc().set(data, {merge: true});
          res.status(200).send({
            hasMutation: data.hasMutation,
            message: message('hasMutation'),
            data: data
          });
        } catch (err) {
          res.status(403).send({
            error_type: "server",
            hasMutation: data.hasMutation,
            message: message('server'),
            data: data,
            err
          });
        }
      } else {
        // Try to save in database and send response
        try {
          await muatationsDB.doc().set(data, {merge: true});
          res.status(200).send({
            hasMutation: data.hasMutation,
            message: message('hasNotMutation'),
            data: data
          });
        } catch (err) {
          res.status(403).send({
            error_type: "server",
            hasMutation: data.hasMutation,
            message: message('server'),
            data: data,
            err
          });
        }
      };
    } else {
      res.status(400).send({
        valid: dna_data.valid,
        error_type: dna_data.error_type,
        message: message(dna_data.error_type),
        success_example: dna_example
      });
    }
}

const dna_example: mutations_request_interface = {
  dna: [
    "ATGCGA","CAGTGC","TTATGT",
    "AGAAGG","AGTCAG","TCACTG"
  ]
}

const message = (type: message_type): string => {
  if (type === 'not_contain_dna') return 'The request body not contain a "dna" array.'
  else if (type === 'is_not_Array') return 'Incorrect request body.'
  else if (type === 'bad_letters') return 'The items of "DNA" not contains this specific letthers A,T,C,G.'
  else if (type === 'empty') return 'The array is empty.'
  else if (type === 'not_length_6') return 'The items in DNA not have 6 items.'
  else if (type === 'items_string_not_length_4') return 'One of the items not contains 4 chracters'
  else if (type === 'server') return 'Problem with save data in server'
  else if (type === 'hasMutation') return 'This DNA have mutation'
  else if (type === 'hasNotMutation') return 'This DNA not have mutation'
  else return ''
};
 
export default hasMutation;