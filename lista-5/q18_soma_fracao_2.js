const prompt = require('prompt-sync')()

function main(){

    var n = Number(prompt('N: '))
    var s = 0
    var resp = 0

    for(let i=1; i!=n; i++){
        s = s + (i+1)/(n-i)
        resp = s
    }
    console.log('Soma: ',resp)
}
main()