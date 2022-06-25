const prompt = require('prompt-sync')()

function main(){
    let r = Number(prompt('Sexo [1] para masculino e [2] para feminino: '))
    let r1 = Number(prompt('Estaddo Civil [1] para casado, [2] para solteiro [3] para divorciado e [4] para viuvo: '))
    let mm = 0
    let mh = 0
    let s1 = 0
    let s2 = 0
    let c1 = 0
    let c2 = 0
    let c3 = 0
    let c4 = 0
    let total = 0
    console.log('Digite "0" para encerrar')
    while(!(r == 0 && r1 == 0)){
        r = Number(prompt('Sexo [1] para masculino e [2] para feminino: '))
        r1 = Number(prompt('Estaddo Civil [1] para casado, [2] para solteiro [3] para divorciado e [4] para viuvo: '))
        
        if(r == '1'){
            s1++
            console.log('Masculino')
            let ih = Number(prompt('Idade: '))
            let mh = ih/s1
        }else if (r == '2'){
            s2++
            let im = Number(prompt('Idade: '))
            let mm = im/s2
            console.log('Feminino')
        }else{
            console.log('Invalido')
        }
        if( r1 == '1'){
            c1++
            console.log('Casado')
        }else if(r1 == '2'){
            c2++
            console.log('Solteiro')
        }else if(r1 == '3'){
            c3++
            console.log('Divorciado')
        }else if(r1 == '4'){
            c4++
            console.log('Viuvo')
        }else{
            console.log('Invalido')
        }
    }
        let phs = (100*s1)/total + (100*c2)/total
        let pms = (100*s2)/total + (100*c2)/total
        console.log('Media de idade das mulhesres: ', mm)
        console.log('Media de idade dos homens: ', mh)
        console.log('Percentual de homem solteiro: ', phs)
        console.log('Percentual de mulher solteira: ', pms)

    

}
main()