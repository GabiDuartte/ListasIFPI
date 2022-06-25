const prompt = require('prompt-sync')()


function main(){
    console.log('### DATA 1 -->')
  const d1 = Number(prompt('dia: '))
  const m1 = Number(prompt('mês: '))
  const a1 = Number(prompt('ano: '))

  console.log('### DATA 2 -->')
  const d2 = Number(prompt('dia: '))
  const m2 = Number(prompt('mes: '))
  const a2 = Number(prompt('ano: '))

  du1 = d1, m2, a1 
  du2 = d2, m2, a2 

  if(m1 > 12 || m2 > 12){
      console.log('INVALIDO')
  }else if (d1 > 31 || d2 > 31){
      console.log('Invalido')
  }else{
      console.log('Data valida')
  }
    let maior
    if (du1 > du2){
        maior = du1
    }else{
        maior = du2
    }
  console.log('A data mais recente e: ', maior)
   
}
main()
