const prompt = require('prompt-sync')()

function main(){
    const o = Number(prompt('Ordem: '))

    const m = nova(o)

    for(let li = 0; li<o; li++){
        for(let co = 0; co<o; co++){
        m[li][co] = Number(prompt(`Valor de Linha: ${li}: coluna ${co} `))
        }
    }
    console.log(m)

    let mc = 0
    let ml = 0
   
    for(let i = 0; i<o; i++){
        for(let j = 0; j<o; j++){
            
            if(m[i][j] == m[mc][ml]){
                mc = i
                ml = j
                console.log('Simetrica')
            }else if(m[i][j] != mc){
                console.log('Nao simetrica')
            }
        }
    }
    console.log(m[mc][ml])

}
function nova(n){
    const m = Array(n)
    for(let i = 0; i<n; i++){
        m[i] = Array(n)
    }
    return m
}
main()