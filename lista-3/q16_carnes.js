const prompt = require('prompt-sync')()

function main(){
    var tipocarne = prompt('Tipo de carne (file/picanha/alcatra): ')
    const quant = Number(prompt('Quantidade carne: '))
    
    const pfile_ate5 = 4.90*quant
    const file_5 = 5.80*quant
    const palcatra_ate5 = 5.90*quant
    const alcatra = 6.80*quant
    const p_ate5 = 6.90*quant
    const p5 = 7.80*quant
    if(tipocarne == 'file' && quant <= 5){
        console.log('Preço: ', pfile_ate5 )
    }else if(tipocarne = 'file' && quant > 5){
        console.log('Preço: ', file_5)
    }else{
        console.log()
    }
    if(tipocarne == 'alcatra' && quant <= 5){
        console.log('Preço: ', palcatra_ate5)
    }else if(tipocarne == 'alcatra' && quant > 5){
        console.log('Preço: ', alcatra)
    }
    if(tipocarne = 'picanha' && quant <= 5){
        console.log('Preço: ', p_ate5)
    }else{
        console.log(p5)
    }
}
main()