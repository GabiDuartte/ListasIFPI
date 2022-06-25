const prompt = require('prompt-sync')()

function main(){
    var letra = prompt('Digite uma letra: ')
    
    if(letra == 'a ' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        console.log('Vogal')
    }else{
        console.log('Consoante')
    }
}
main()