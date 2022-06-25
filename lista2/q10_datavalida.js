const prompt = require('prompt-sync')()

function main(){
   const dia = Number(prompt('Dia: '))
   const mes = Number(prompt('Mes: '))
   const ano = Number(prompt('Ano: '))

   const data = dia/mes/ano

   if(dia > 31){
       console.log('Data invalida')
   }else if(mes > 12){
       console.log('Data invalida')
   }else{
       console.log('Data valida')
   }

}
main()