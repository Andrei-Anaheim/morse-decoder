const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let code = Object.keys(MORSE_TABLE).map((key) => (key));
    let codebi1 = []
    for (let i=0; i<code.length; i+=1) {
        let codebi = [];
        for (let j=0; j<code[i].length; j+=1){
            if (code[i][j] === '-') {
                codebi.push('11')
            } else {
                codebi.push('10')
            }
        }
        codebi1[i] = codebi.toString().replace(/,/g,'').padStart(10,'0');
    }
    let letter = Object.keys(MORSE_TABLE).map((key) => MORSE_TABLE[key]);
    let x = expr.length;
    let result = [];
    for (z=0;z<x;z+=10) {
        let y = expr.slice(z,z+10);
        result.push(y);
    }
    let finalResult = [];
    for (k=0; k<result.length; k+=1){
        if (result[k]==='**********') {
            finalResult.push(' ');
        } else {
            let l = codebi1.indexOf(result[k]);
            finalResult.push(letter[l]);
        }
    }
    return finalResult.join('');
}

module.exports = {
    decode
}