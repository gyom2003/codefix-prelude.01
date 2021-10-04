

function swapCase(str = '') {
    for (let i = 0; i < str.length; i++) {

        if (str[i] == str.toUpperCase()) {
            console.log(str[i].toLowerCase)
        } else {
            console.log(str[i].toUpperCase())
        }
    }
}

swapCase("la chaine de caractere")