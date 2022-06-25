const prompt = require('prompt-sync')()

function main(){
    const o = Number(prompt('Ordem da matriz: '))

    const m = nova(o)

    for(let li = 0; li<o; li++){
        for(let co = 0; co<o; co++){
        m[li][co] = Number(prompt(`Valor de Linha: ${li}: coluna ${co} `))
    }
    }
    console.log(m)
    let s = 0
    let s1 = 0

    for(let i = 0; i<o; i++){
        for(let j = 0; j<o; j++){
           if(m[i][j] >  0){
               s = s + m[i][j]
               console.log('Soma positivo: ', s)
           }else if(m[i][j] < 0  ){
               s1 = s1 + m[i][j]
               console.log('Soma neg: ', s1)
           }
        }
    }
    
    function nova(n){
        const m = Array(n)
        for(let i = 0; i<n; i++){
            m[i] = Array(n)
        }
        return m
    }
}
    main()  