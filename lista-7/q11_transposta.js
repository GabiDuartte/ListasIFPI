const prompt = require('prompt-sync')()

function main(){
    const o = Number(prompt('Ordem da matriz: '))

    const m = nova(o)


    for(let li = 0; li<o; li++){
        for(let co = 0; co<o; co++){
        m[li][co] = Number(prompt(`Valor de Linha: ${li} - Coluna: ${co}: `))
        }
    }
    console.log(m)
    let t = 0
    for(let i =0; i<o; i++){
        for(let j = 0; j<o; j++){
            if(m[i][j] == m[j][i]){
                t = m[i][j]
                m[i][j] = m[j][i]
                m[j][i] = t
                console.log('Transposta', m[j][i])
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