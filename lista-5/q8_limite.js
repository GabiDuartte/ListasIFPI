const prompt = require('prompt-sync')()

function main(){

    var n = Number(prompt('N: '))
    var li = Number(prompt('Limite inferior: '))
    var ls = Number(prompt('Limite superior: '))

    let m = n

    for(let i=0; i<ls; i++){
        m = i * n
    
        if(m>=li && m<=ls){
            console.log('Multiplos: ',m)
        }
    }
}
main()