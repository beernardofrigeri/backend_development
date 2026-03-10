/* Sistema de acesso por horário das 8 às 18 -> horário comercial
fora desse intervalo -> estabelcimento fechado
*/

const prompt = require("prompt-sync")();
let texto = "Informe o horário: ";
let horario = Number(prompt(texto));

if((horario >= 8) && (horario <= 18)){
    console.log("Horário comercial!")
}
else {
    console.log("Fora de horáio comercial.")
}