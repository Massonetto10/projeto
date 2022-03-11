
const prompt = require(`prompt-sync`)();
console.clear();
//História
console.log("Quando as forças aliadas te convocam e você com sua sabedoria, força e agilidade, precisa encarar seus medos e reconquistar sua glória.");

console.log();

console. log("Agora me responda S para SIm ou N para Não.");
 contador = 0;

 console.log();

//Perguntas 
const perg1 = prompt("Você se armou?: ");
if (perg1.toUpperCase() == "S") {
    contador++;
}
console.log();

const perg2 = prompt("Você leu o plano?: ");
if (perg2.toUpperCase() == "S") {
    contador++;
}
console.log();

const perg3 = prompt("Você convocou aliados: ");
if (perg3.toUpperCase() == "S") {
    contador++;
}
console.log();

const perg4 = prompt("Você levou algum pet: ");
if (perg4.toUpperCase() == "S") {
    contador++;
}
console.log();

const perg5 = prompt("Você lutou até o fim?: ");
if (perg5.toUpperCase() == "S") {
    contador++;
}
console.log();
//Respostas
if (contador == 0){
    console.log("Você é um fracasso.");
}else if (contador == 1 || contador ==2){
    console.log("Você é covarde.");
}else if(contador == 3){
    console.log("Você precisa se dedicar mais.");
}else if (contador == 4){
    console.log("Obrigado pela ajuda Guerreiro.");
}else if (contador == 5){
    console.log("Parabéns guerreiro a vitoria foi graças a você.");
}