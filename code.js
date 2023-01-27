function capitalize(string){
    let newString = string[0].toUpperCase() + string.slice(1)
    return newString
}

function reverseString(string){
    let reversedString = ""
    for (let i = string.length-1; i >=0; i--){
        reversedString += string[i]
    }
    return reversedString
}

const calculator = {
    add : function(num1, num2){return num1 + num2},
    subtract : function(num1, num2){return num1 - num2},
    divide : function(num1, num2){return num1 / num2},
    multiply : function(num1, num2){return num1 * num2},
}

function caesarCipher(string, shift){
    let cipher = []
    for (let i=0; i < string.length; i++){
        cipher[i] = string[i]
        for (let j=0; j < shift; j++){
            cipher[i] = nextCharacter(cipher[i])
        }
    }
    cipher = cipher.join("")
    return cipher
}

function nextCharacter(character){
    if (character === "z"){
        return "a"
    }
    else if (character === "Z"){
        return "A"
    }
    else if (character.match(/[a-z]/i)){
        let charCode = character.charCodeAt(0)
        charCode += 1
        let newCharacter = String.fromCharCode(charCode)
        return newCharacter
    }
    else{
        return character
    }
}

export {capitalize, reverseString, calculator, caesarCipher}