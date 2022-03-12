
const prompt = require(`prompt-sync`)();
console.clear();
//História
console.log("Quando as forças aliadas te convocam e você com sua sabedoria, força e agilidade, precisa encarar seus medos e reconquistar sua glória.");

console.log();

console. log("Agora me responda S para SIm ou N para Não.");
 verificar = 0;

 console.log();

//Perguntas 
const perg1 = prompt("Você se armou?: ");
if (perg1.toUpperCase() == "S") {
    verificar++;
}
console.log();

const perg2 = prompt("Você leu o plano?: ");
if (perg2.toUpperCase() == "S") {
    verificar++;
}
console.log();

const perg3 = prompt("Você convocou aliados: ");
if (perg3.toUpperCase() == "S") {
    verificar++;
}
console.log();

const perg4 = prompt("Você esteve na linha de frente: ");
if (perg4.toUpperCase() == "S") {
    verificar++;
}
console.log();

const perg5 = prompt("Você lutou até o fim?: ");
if (perg5.toUpperCase() == "S") {
    verificar++;
}
console.log();
//Respostas
if (verificar == 0){
    console.log("Você foi um fracasso.");
}else if (verificar == 1 || verificar ==2){
    console.log("Você foi um covarde.");
}else if(verificar == 3){
    console.log("Poderia ter se empenhado mais.");
}else if (verificar == 4){
    console.log("Obrigado pela ajuda Guerreiro.");
}else if (verificar == 5){
    console.log("Parabéns guerreiro a vitória foi graças a você.");
}