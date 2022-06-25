const prompt = require('prompt-sync')()

function main(){

    var c = 1
    var s = 0
    
    for(let i = 1; i < 50; i++){
        s += ((c+2)/i)
    }
    console.log('Soma: ',s)
}
main()