const prompt = require('prompt-sync')()

function main(){
    var n = Number(prompt('N: '))
    let m = 0
    let me = 0
    let ig = 0
    for(let i = 0; i= Math.sqrt(n, 2) ;i++){
        i++
        
        if(i < me){
            me = i
        }else if(i > m){
            m = i
        }else if(i == ig ){
            ig = i
        }
    }
    console.log('Maior Quadrado: ', m)
    console.log('Menor quadrado: ', me)
    console.log('Igual ', ig)
}
main()