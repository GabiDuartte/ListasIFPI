const prompt = require('prompt-sync')()

function main(){
const frase = prompt('Frase de ate 20 caracteres: ')

const t = frase.length

for(const char of frase){
    console.log(char)
if(t > 20){
    console.log('invalido/ limite ultrapassado')
}else{
    console.log()
}
}
console.log('Tamanho: ', t)
}
main()