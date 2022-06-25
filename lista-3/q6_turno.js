const prompt = require('prompt-sync')()

function main(){
    var turno = prompt('Informe o turno: ')

    if( turno == 'manha'){
        console.log('Bom Dia')
    }else if(turno == 'tarde'){
        console.log('Boa Tarde')
    }else if (turno == 'noite'){
        console.log('Boa Noite')
    }else{
        console.log('Invalido')
    }

}
main()