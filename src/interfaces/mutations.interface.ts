export interface mutations_response_interface {
  hasMutation: boolean;
  message: string;
  data: {
    success_example: mutations_request_interface;
    dna: Array<string>;
    hasMutation: boolean;
    upsert: boolean;
    new: boolean;
    setDefaultsOnInsert: boolean;
  }
}

export interface mutations_request_interface {
  dna: Array<string>
}

export interface dna_data_interface {
  error_type: error_type_interface;
  valid: boolean;
  dna: Array<string> | undefined;
}

type error_type_interface = 
  undefined | "not_contain_dna" | "is_not_Array" |
  "bad_letters" | "empty" | "not_length_6" |
  "items_string_not_length_4";

type server_type_interface = 'server' | 'hasMutation' | 'hasNotMutation';

export type message_type = error_type_interface | server_type_interface;