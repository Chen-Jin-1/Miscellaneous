const CHAR_SET = [
    '\u200B',
    '\u200D',
    '\u200C',
    '\uFEFF',
    '\u200F',
    '\u200E',
    '\u202A',
    '\u202B',
    '\u202D',
    '\u202E',
    '\u202C',
    '\u0009',
    '\u00A0',
    '\u3164',
];

const BASE = CHAR_SET.length;
const DIGITS = 5;

const CHAR_TO_NUM = Object.fromEntries(CHAR_SET.map((ch, i) => [ch, i]));

function encode(str) {
    if (!str) return '';
    
    const result = [];
    
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        
        for (let j = DIGITS - 1; j >= 0; j--) {
            const power = Math.pow(BASE, j);
            const digit = Math.floor(code / power);
            result.push(CHAR_SET[digit]);
            code = code % power;
        }
    }
    
    return result.join('');
}

function decode(str) {
    if (!str) return '';
    
    const result = [];
    
    for (let i = 0; i < str.length; i += DIGITS) {
        let code = 0;
        
        for (let j = 0; j < DIGITS; j++) {
            const ch = str[i + j];
            const num = CHAR_TO_NUM[ch];
            if (num === undefined) continue;
            code = code * BASE + num;
        }
        
        if (code >= 0 && code <= 0xFFFF) {
            result.push(String.fromCharCode(code));
        }
    }
    
    return result.join('');
}

export { encode, decode };