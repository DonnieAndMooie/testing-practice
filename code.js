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

function analyzeArray(array){
    let object = {}
    let total = 0
    for (const i of array){
        total += i
    }
    object.average = total / array.length

    const min = array.reduce((a,b) => Math.min(a,b))
    const max = array.reduce((a,b) => Math.max(a,b))
    object.min = min
    object.max = max
    object.length = array.length
    console.log(object)
    return object
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray}