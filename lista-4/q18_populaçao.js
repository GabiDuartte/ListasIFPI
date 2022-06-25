const prompt = require('prompt-sync')()

function main(){
    console.log('Populaçao --> ')
    let a = Number(prompt('populaçao de a: '))
    let b = Number(prompt('populaao de b: '))
    let anos = 0

    while(a < b){
        a = a + (a * 0.35)
        b = b + (b * 0.135)
        anos++
        a = Number(prompt('pop de a '))
        b = Number(prompt('pop de b: '))
    }
    console.log('Anos para populaçao A passar a B: ', anos)
}
main()