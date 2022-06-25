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
    
    let li_ma = 0
    let li_me = 0
    let co_ma = 0
    let co_me = 0
    for(let i = 0; i<o; i++){
        for(let j = 0; j<o; j++){
            if(m[i][j] > m[li_ma][co_ma]){
                li_ma = i
                co_ma = j
            }else if(m[i][j] < m[li_ma][co_ma]){
                li_me = i
                co_me = j
            }
        }
    }
    console.log('Maior: ', m[li_ma][co_ma])
    console.log(`Maior posiçao linha ${li_ma} coluna ${co_ma}`)
    console.log('Menor: ', m[li_me][co_me])
    console.log(`Menor posiçao linha ${li_me} coluna ${co_me}`)
}
function nova(n){
    const m = Array(n)
    for(let i = 0; i<n; i++){
        m[i] = Array(n)
    }
    return m
}
main()