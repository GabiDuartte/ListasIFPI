const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('N: '))
    let t = 0
    let t1 = 1

    for(let i = 0; i >= 2; i++){
        console.log(t)
        console.log(t1)
        f(t, t1)
    }
    function f(a,b,c){
        let a = 0
        let b = 0
        let c = 0
        n = a + b
        a += b
        b += c
    }
}
main()