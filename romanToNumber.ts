// Given a string s representing a roman numeral. Convert s into an integer.
// https://afteracademy.com/problems/roman-to-integer/

const chars: {[char: string]: number} = {
    M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1
};
function romanToNumber(roman: string) {
    if (!roman) {
        return 0;
    }
    for (let char of roman) {
        if (isNaN(chars[char])) {
            throw("Invalid roman numeral");
        }
    }
    let sum = 0;
    let i = 0;
    while (i < roman.length) {
        if (chars[roman[i]] < chars[roman[i + 1]]) {
            sum = sum - chars[roman[i]] + chars[roman[i+1]];
            i = i + 2;  
        } else {
            sum = sum + chars[roman[i]];
            i++;
        }
    }
    return sum;
}


console.log(romanToNumber("IVB"));