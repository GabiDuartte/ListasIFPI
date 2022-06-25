const prompt = require('prompt-sync')()

function main(){
    
    var n = Number(prompt('Informe um numero: '))
    let resp = n
    let ant = n - 1

    for(let i = n; i!=0; i--){
        ant--

        if(ant != 0){
            resp = resp*ant
        }
    }
    console.log('Fatorial: ',resp)
}
main()