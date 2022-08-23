import { dna_data_interface, mutations_request_interface } from '../interfaces/mutations.interface'

// Check if DNA have mutation or not
export const mutation = (dna: Array<string>): boolean => {
    if (
        isVertical(dna) || isHorizontal(dna) ||
        oblicualLeftToRight(dna) || oblicualRightToLeft(dna)
    ) return true
    else return false
}

// Set DNA request in specific format for next functions
const convertDNA = (data: Array<string>): Array<string> => {
    return data.map(
        (dna: any) => {
            if (dna.length == data[0].length)
                return dna.split('').map(
                    (val: string) => {
                        return val.match(/A|T|C|G/img) ? val : false
                    })
            else return false;
        })
}

// Set if request body is valid and if not the case set the error type
export const setDataDNA = (req: mutations_request_interface | any): dna_data_interface => {
    let data: dna_data_interface = {
        error_type: undefined,
        valid: false,
        dna: undefined
    }
    data.error_type = "not_contain_dna";
    if (req.hasOwnProperty('dna')) {
        data.error_type = "is_not_Array";
        if (Array.isArray(req.dna)) {
            data.error_type = "empty";
            if (req.dna.length != 0) {
                data.error_type = "not_length_6";
                if (req.dna.length === 6) {
                    data.error_type = "items_string_not_length_4";
                    if (req.dna.every( (x: string) => x.length === 6)) {
                        const newDna = convertDNA(req.dna);
                        data.error_type = "bad_letters";
                        if (newDna.every( (x: any) => x.every((x: any) => x !== false) )) {
                            data.error_type = undefined;
                            data.dna = newDna
                            data.valid = true;
                        }
                    }
                }
            }
        }
    }
    return data
}

// Check if DNA contain mutation in oblicual/diagonal position (left to right)
export const oblicualLeftToRight = (dna: Array<string>): boolean => {
    let isMutated = false;
    for (let i = 0; i < dna.length && !isMutated; i++) {
        let flag = true,
            posX = i,
            posY = i + 1;
        let count = 1;
        do {
            try {
                if (dna[posX][posX] == dna[posY][posY])
                    count++;
                else
                    flag = false;
            } catch (err) {
                flag = false;
            }

            posX++;
            posY++;
        } while (flag == true);

        if (count > 3)
            isMutated = true;
    }
    return isMutated;
}

// Check if DNA contain mutation in oblicual/diagonal position (right to left)
export const oblicualRightToLeft = (dna: Array<string>): boolean => {
    let isMutated = false;
    for (let i = 0; i < dna.length && !isMutated; i++) {
        let flag = true,
            posX = dna[i].length - 1,
            posY = dna[i].length - 2,
            posA = i,
            posB = i + 1;
        let count = 1;
        do {
            try {
                if (dna[posA][posX] == dna[posB][posY])
                    count++;
                else
                    flag = false;
            } catch (err) {
                flag = false;
            }

            posX--;
            posY--;
            posA++;
            posB++;
        } while (flag == true);

        if (count > 3)
            isMutated = true;
    }
    return isMutated;
}

// Check if DNA contain mutation in horizontal position
export const isHorizontal = (dna: Array<string>): boolean => {
    let isMutated = false;
    for (let i = 0; i < dna.length && !isMutated; i++) {
        for (let x = 0; x < dna[i].length && !isMutated; x++) {
            let flag = true,
                counter = 1,
                posX = x;
            do {
                if (dna[i][posX] == dna[i][posX + 1])
                    counter++;
                else
                    flag = false;

                posX++;
            } while (flag == true);

            if (counter > 3)
                isMutated = true;
        }
    }
    return isMutated;
}

// Check if DNA contain mutation in vertical position
export const isVertical = (dna: Array<string>): boolean => {
    let isMutated = false;
    for (let i = 0; i < dna.length && !isMutated; i++) {
        for (let x = 0; x < dna[i].length && !isMutated; x++) {
            let flag = true,
                counter = 1,
                posX = i;
            do {
                try {
                    if (dna[posX][x] == dna[posX + 1][x])
                        counter++;
                    else
                        flag = false;

                    posX++;
                } catch (err) {
                    flag = false;
                }
            } while (flag == true);

            if (counter > 3)
                isMutated = true;
        }
    }
    return isMutated;
}