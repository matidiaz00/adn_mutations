import { mutations_request_interface } from './interfaces/mutations.interface'

interface mutations_example_interface {
    [key: string]: mutations_request_interface;
}

export const mutations_examples: mutations_example_interface = {
    is_horizontal:        { dna: [ "ATGTGA", "CAATGC", "TTATGT", "TGAGAG", "ccccTA", "TCACTG" ] },
    is_vertical:          { dna: [ "CTGAgA", "CATTgC", "TTATgT", "TGAAgG", "AAGATA", "TCACTG" ] },
    oblicual_left_right:  { dna: [ "aTGTGA", "CaTTTC", "TTaTGT", "GGAaGG", "CCGCTA", "TCACTG" ] },
    oblicual_right_left:  { dna: [ "ATGTGc", "CATTcC", "TTGcGT", "GGcAGG", "CGGCTA", "TCACTG" ] },
    multiple_Mutation:    { dna: [ "ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "AGTCAG", "TCACTG" ] },
    no_Mutation:          { dna: [ "ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG" ] }
}

export const mutations_bad_examples: mutations_example_interface | any = {
    not_contain_dna:            {  },
    bad_letters:                { dna: [ "QDOPAC", "CAATGC", "TTATGT", "TGAGAG", "ccccTA", "TCACTG" ] },
    empty:                      { dna: [] },
    not_length_6:               { dna: [ "ATGCGA", "CAGTGC", "TTATGT" ] },
    items_string_not_length_4:  { dna: [ "TRT3WR", "R234WER", "R322WWW", "GEERG", "ERTERT", "ERTERT" ] },
    is_not_Array:               { dna: "ATGCGA" },
}