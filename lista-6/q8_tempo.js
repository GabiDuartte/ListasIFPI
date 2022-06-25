const prompt = require('prompt-sync')()

function main(){
   const h = Number(prompt('hora: '))
   const m = Number(prompt('Minuto: '))
   const s = Number(prompt('Segundo: '))

   var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDay();

var hour = h
var min = m
var se = s

var reserv = new Date(year,month,day, hour, min, se)
   console.log(reserv)

}
main()