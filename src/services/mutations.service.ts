export const oblicualLeftToRight = (dna: any): boolean => {
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

export const oblicualRightToLeft = (dna: any): boolean => {
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

export const isVertical = (dna: any): boolean => {
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

export const isHorizontal = (dna: any): boolean => {
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