const prompt = require('prompt-sync')()

function main(){

    var n = Number(prompt('N: '))
    var s = 0
    var resp = 0

    for(let i=1; i!=n; i++){
        s = s + (1/i)
        resp = s
        if(i == 1){
            break
        }
    }
    console.log('Soma: ',resp)
}
main()