const prompt = require('prompt-sync')()

function main(){
   const num0a100 = Number(prompt('Digite um numero entre 0 e 100: '))

   if(num0a100%num0a100 == 0 && num0a100/1){
       console.log('Primo')
   }else{
       console.log('Nao primo')
   }
}
main()