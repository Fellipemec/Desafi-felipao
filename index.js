const nome = "cori"
const xp = 2000
console.log (" O HERÓI DE NOME  " + nome +  " TEM " + xp + " XP ");

let nivel = "";
if (xp < 1000){
     nivel = "ferro";
} else if (xp <= 1001&& xp <= 2000){
    nivel = " Bronze";
} else if (xp <= 2001 && xp <= 5000 ){
    nivel ="Prata";
} else if (xp <= 50001 && xp <= 7000){
    nivel = "Ouro";
} else if (xp <= 7001 && xp <= 8000){
    nivel = "Platina";
} else if(xp <= 8001 && xp <= 9000){
    nivel ="Ascendente";
} else if (xp <= 9001 && xp <= 1000){
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}
console.log (" O heroi de nome **" + nome +  "** esta no nivel de  **" + nivel + "**");