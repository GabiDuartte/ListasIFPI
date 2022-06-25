const prompt = require('prompt-sync')()

function main(){
      const h1 = Number(prompt('Hora do inicio do jogo: '))
      const h2 = Number(prompt('Hora do fim do jogo: '))
      const m1 = Number(prompt('Minuton inicila: '))
      const m2 = Number(prompt('Minuto final: '))

      const dur = (h2 - h1 ) 
      const durmin = (m2-m1)

      if(h2 <= 24){
          console.log('Hoara valida')
      }else{
          console.log('Hora Invalida')
      }
      console.log('A duraçao do jogo foi de : ', dur, 'horas e: ', durmin, 'minutos')

}
main()