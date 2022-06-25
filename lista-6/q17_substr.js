 const prompt = require('prompt-sync')()

 function main(){
     const f = prompt('Frase com ate 20 caracteres: ')

     const s = f.substring(10, 20)

     console.log('Com subrst: ', s)

 }
 main()