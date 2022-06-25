const prompt = require('prompt-sync')()

function main(){
    console.log('###### CRIME #####')
    const p1 = prompt('Telefonou para vitima? ')
    const p2 = prompt('Esteve no local do crime? ')
    const p3 = prompt('Mora perto da vitima? ')
    const p4 = prompt('Devia para vitima? ')
    const p5 = prompt('Ja trabalhou com a vitima? ')

    if(p1 == 'sim' && p2 == 'sim' && p3 == 'nao'  && p4 == 'nao' && p5 == 'nao'){
        console.log('Suspeito')
    }else if(p3 == 'sim' && p4 == 'sim' && p5 == 'sim' && p1 == 'nao' && p2 == 'nao'){
        console.log('Cumplice')
    }else if( p1 == 'sim' && p2 == 'sim' && p3 == 'sim' && p4 == 'sim' && p5 == 'sim'){
        console.log('Assassino')
    }else{
        console.log('Inocente')
    }

}
main()