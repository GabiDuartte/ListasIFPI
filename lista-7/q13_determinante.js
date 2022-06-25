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
}
function nova(n){
    const m = Array(n)
    for(let i = 0; i<n; i++){
        m[i] = Array(n)
    }
    return m
}
main()