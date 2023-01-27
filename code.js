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
export {capitalize, reverseString}