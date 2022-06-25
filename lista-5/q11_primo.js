const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('N: '))
    var li = Number(prompt('Limite inferior: '))
    var ls = Number(prompt('Limite superior: '))
    let resp = n
    
    for(let i=1; i<ls; i++){
        resp = (i%i == 0 && i%1 == 0 )
        
        if(resp>=li && resp<=ls){
            console.log('Primos: ',resp)
        }
    }
}
main()