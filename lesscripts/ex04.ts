


//capitalize
function capitalize(str = '', restToLoweropt = false) : string {

    if(restToLoweropt == true) {
        lowerfunc(str)
        console.log(lowerfunc(str))
        return(lowerfunc(str))
    } else {
        console.log("la condition n'est pas vérifier")
    }
}
capitalize("la chaine de caractères", true)