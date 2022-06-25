const prompt = require('prompt-sync')()

function main(){
    const n = 20

    let vA = Array(n)
     
    let s = 0

    for(let i = 0; i<n; i++){
       vA[i] = Number(prompt(`Elementos ${i} `))
    
       s = Math.pow((vA[1] - vA[20]), 2) + Math.pow((vA[2] - vA[19]), 2) + Math.pow((vA[3] - vA[18]), 2) + Math.pow((vA[4] - vA[17]), 2) + Math.pow((vA[5] - vA[16]), 2) + Math.pow((vA[6] - vA[15]), 2) + Math.pow((vA[7] - vA[14]), 2) + Math.pow((vA[8] - vA[13]), 2) + Math.pow((vA[9] - vA[12]), 2) + Math.pow((vA[10] - vA[11]), 2)

    }
    console.log('O calculo e: ', s)

    
}
main()