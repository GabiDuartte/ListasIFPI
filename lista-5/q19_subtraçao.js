const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('N: '))
    var su = 0
    var resp = 0

    for(let i = 1; i!=n ; i++){
        su = su - (1/i) - ((i-1)/2)
        resp = su
    }
    console.log('Subtraçao: ', su)
}
main()