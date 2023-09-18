//# Exercício 1

//Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. 
//Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.


// EXERCÍCIO 1
function verificarPar(constante){
if (constante % 2 === 0){
return "O número é par";
}
else { 
    return "O número é par";
}
}
const numero = 10;
const resultado = verificarPar(2)
console.log(resultado)

// EXERCÍCIO 2
function verificarSituacao(idade, terminouEnsinoMedeio, estaCursandoFaculdade) {
if (idade>=18){
    console.log("A pessoa tem 18 anos ou mais."); 
} else{
    console.log("A pessoa tem 18 anos ou mais."); 
}
if (terminouEnsinoMedeio){
    console.log("A pessoa terminou o ensino médio");
} else {
    console.log("A pessoa não terminou o ensino médio");
}
if (!estaCursandoFaculdade){
    console.log("A pessoa não está cursando faculdade.");
} else {console.log("A pessoa está cursand faculdade.");
}
}
verificarSituacao(20, true, false)

// EXERCÍCIO 3
function verificarNacionalidade() {
    const nacionalidade = prompt("Escreva aqui sua nascionalidade:");
    if (nacionalidade.toLowerCase() === "Brasileira"){
        console.log("Nacionalidade: Brasileira")
    } else if (nacionalidade.toLowerCase() === "Argentina"){
        console.log("Nacionalidade: Argentina")
    } else if (nacionalidade.toLowerCase()==="uruguaia") {
        console.log("Nacionalidade: Uruguaia");
    } else if (nacionalidade.toLowerCase()==="chilena"){
        console.log("Nascionalidade: Chilena")}
else if (nacionalidade.toLowerCase()=== "colombiana"){
    console.log("Nacionalidade: Colombiana")
} }
verificarNacionalidade()