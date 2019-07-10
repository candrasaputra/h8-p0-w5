/*
* Logic Challenge - Password Generator
* Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator
* Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):
*   - Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
*   - Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
*   - Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
*   - Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
* Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
    let listOfVowel = 'aAiIuUeEoO';
    let newStr = '';
    let isVowel = false;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < listOfVowel.length; j++) {
            if (str[i] === listOfVowel[j]) {
                isVowel = true;
                break;
            }
        }

        if (isVowel) {
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
            isVowel = false;
        } else {
            newStr += str[i];
        }
    }

    return newStr;
}

function reverseWord (str) {
    let tmp = '';

    for (let i = str.length - 1; i >= 0 ; i--) {
        tmp += str[i];
    }

    return tmp;
}

function setLowerUpperCase (str) {
    let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let isSymbol = true;
    let tmpStr = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < 26; j++) {
            if (str[i] === lowerAlphabet[j]) {
                tmpStr += upperAlphabet[j];
                isSymbol = false;
                break;
            }

            if (str[i] === upperAlphabet[j]) {
                tmpStr += lowerAlphabet[j];
                isSymbol = false;
                break;
            }

            isSymbol = true;
        }

        if (isSymbol) {
            tmpStr += str[i];
        }
    }

    return tmpStr;
}

function removeSpaces (str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr += '';
        } else {
            newStr += str[i];
        }
    }

    return newStr;
}

function passwordGenerator (name) {

    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }

    name = changeVocals(name);
    name = reverseWord(name);
    name = setLowerUpperCase(name);
    name = removeSpaces(name);
    
    return name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'