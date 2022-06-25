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
    console.log(dia(m))

    function dia(m){
    const count = m.length
    let r = 0
    for(let i = 0; i<count; i++){
        for(let j = 0; j<count; j++){
            r += m[i[j]]
    }
    }
    return r
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