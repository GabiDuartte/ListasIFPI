const prompt = require('prompt-sync')()

function main(){
    let bin = prompt('Binario: ')
    const rev = bin.split('').reverse().toString();
    let dec = 0;

    for(let c = 0; c<rev.length; c++){
        if(rev[c] === '1'){
            dec += Math.pow(2,c)
        }
    }
    return dec;
}
console.log(bin == parseInt(bin, 2))
main()