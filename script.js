
//Jogo da escadinha
/* 
let carac = prompt("Qual caractere desejado?");
let tam = prompt("Qual o tamanho da escada?");
let texto = carac;

function escadinha(carac, tam){
    for (let i = 0; i < tam; i++){
        console.log(texto);
        texto = texto+carac;
    }
}

escadinha(carac, tam); */

//Jogo adivinhe o número
/* 
let numAchar = Math.floor(Math.random() * 50 + 1);

function acharValor(numAchar){
    let chuteUser;
    while (chuteUser | numAchar) {
        chuteUser = prompt("Adivinhe o valor:");
        if (chuteUser < numAchar) {
            alert("Valor procurado é maior...");
        } else if (chuteUser > numAchar) {
            alert("Valor procurado é menor...");
        }
        else {
            alert("Acertou!!!!");
            break;
        }
    }
}

acharValor(numAchar); */

//Jogo achar valor

let senha ="81111";
let pSenha = [];
let obtemDigito;
let localDigito;
let userSenha ="88311";

 /* for (let i = 0; i < 5; i++){
    pSenha [i] = (Math.floor(Math.random() * 9 +1));
    senha = senha+pSenha[i].toString();
} */
 function senhaConta(senha, obtemDigito, localDigito, userSenha){
    userSenha = "12289";
    senha = "12289";
    for (j=0 ; j<=4; j++){
    obtemDigito = userSenha.charAt(j);
    localDigito = senha.indexOf(obtemDigito);
    /* console.log(obtemDigito);
    console.log(localDigito); */
    if(localDigito == j){
        userSenha = userSenha.replace(obtemDigito, "O");
        console.log(userSenha);
    }else if((localDigito | j) && (obtemDigito === -1)){
        userSenha = userSenha.replace(obtemDigito, "-");
    }
    else{
        userSenha=userSenha.replace(obtemDigito, "X");
    }
    }
    console.log(userSenha);
 }
 senhaConta(senha, obtemDigito, localDigito, userSenha);
