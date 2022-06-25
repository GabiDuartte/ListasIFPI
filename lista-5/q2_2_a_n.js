const prompt = require('prompt-sync')()

function main(){
    
    var n = Number(prompt('N: '))

    for(let i = 1; i!=n; i++){

        if (i%2 == 0) {
            console.log(i)
        }
    }
    console.log('Valor de N: ',n)
}
main()