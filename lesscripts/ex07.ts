

//à revoir
function snakeCase(str = '') {

    for (let i = 0; i < str.length; i++) {
        var formate = str.slice(0, parseInt(str[i])) + '_'
        console.log(formate)
    }
}

snakeCase("la chaine de caractère")