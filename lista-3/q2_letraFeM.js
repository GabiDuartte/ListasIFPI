const prompt = require('prompt-sync')()

function main(){
   var nome = prompt('Informe um nome: ')
   
   var F = String['feminino']
   var m = String['masculino']
   if(nome == 'F'){
       console.log('Feminino')
   }else if(nome == 'm'){
       console.log('Masculino')
   }else{
       console.log('Sexo invalido')
   }
   
}
main()
