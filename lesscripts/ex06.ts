
//à revoir
function kebabCase(str = '') {

    for (let i = 0; i < str.length; i++) {
        var formate = str.slice(0, parseInt(str[i])) + '-'
        console.log(formate)
    }
}

kebabCase("la chaine de caractère")