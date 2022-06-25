const prompt = require('prompt-sync')()

function main(){
    let frase = prompt('Frase: ')

    console.log('Descriptografada: ', frase)

    var r = semvogal(frase)

    console.log('Criptografada: ', r)

    var p = posicao(frase)
    console.log('Posiçao da vogal: ', p)

    function posicao(){
    const v = 'a, e, i, o, u'
    let po = v.charCodeAt(0)
    if(po == 'a' || po == 'e' || po == 'i' || po == 'o' || po == 'u'){
        return true
    }else{
        return false
    }
}
    
}
function semvogal(remove){
    return remove.replace( /[a, e, i, o, u]/gi, '');
}

main()