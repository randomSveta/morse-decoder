const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let encodedString = expr;
    let decodedString = "";

    while (encodedString) {
        let part = encodedString.slice(0, 10);

        encodedString = encodedString.slice(10);

        if (part === "**********") decodedString += " ";
        else {
            part = part
                .replace(/10/g, ".")
                .replace(/11/g, "-")
                .replace(/0/g, "")

            decodedString += MORSE_TABLE[part];
        }
    }

    return decodedString
}

module.exports = {
    decode
}