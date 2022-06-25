const prompt = require('prompt-sync')()


function quadrante(){
    console.log('Encontre o quadrante.')
}

quadrante()

const quadrante_1 = Number(prompt('Valor entre 0 e 90 graus: '))
const quadrante_2 = Number(prompt('Valor entre 90 e 180 graus: '))
const quadrante_3 = Number(prompt('Valor entre 180 e 270 graus: '))
const quadrante_4 = Number(prompt('Valor entre 270 e 360 graus: '))


if(quadrante_1 >= 90){
    console.log('O ângulo se encontra no quadrante 1.')
}else if(quadrante_2 > 90  && quadrante_2 <= 180){
    console.log('O ângulo se encontra no quadrante 2.')
}else if(quadrante_3 > 180 && quadrante_3 <= 270){
    console.log('O ângulo se encontra no quadrante 3.')
}else if(quadrante_4 > 270 && quadrante_4 <= 360){
    console.log('O ângulo se encontra no quadrante 4.')
}else{
    console.log('Sem quadrante ou quadrante 0.')
}