const prompt = require('prompt-sync')()

function main(){
    const frase = prompt("Frase: ")

    let fraseinvertida = inverter_texto(frase)

    console.log(fraseinvertida)

    const final = subst_consoante(fraseinvertida,'####' )

    console.log(final)

}
function subst_consoante(frase, subt){
    let nf = ''
    let caracter = ''

    for(let i = 0; i < frase.length; i++ ){
        caracter = frase[1]
        if(e_cons(caracter)){
            nf = nf + subt
        }else{
            nf = nf + caracter
        }
    }
    return nf
}
function inverter_texto(frase){
    let nf = " "

    for(let i = frase.length - 1; i > 0; i--){
        nf = nf + frase[i]
    }
    return nf
}
function e_cons(caracter){
    if(e_letra(caracter) && !e_vogal(caracter)){
        return true
    }else{
        return false
    }
}
function e_letra(caracter){
    const c = caracter.charCodeAt(0)
    if((c >= 65 && c <= 90) || (c >= 97 && c <= 122)){
        return true
    }else{
        return false
    }
}
function e_vogal(caracter){
    if(e_letra(caracter)){
        const c = caracter.charCodeAt(0)
        if(c == 65 || c == 97 || c == 69){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
main()