const prompt = require('prompt-sync')()

function main(){
         const n = Number(prompt('Informe um valor: '))

         if(n%2 == 0){
             console.log('PAR')
         }else{
             console.log('IMPAR')
         }
 
}
main()