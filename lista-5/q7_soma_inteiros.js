const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('N: '))
    var s = 0
    
    for(let i = 1; i <= n; i++){
        s = s + i
    }
    console.log('Soma: ', s)
}
main()