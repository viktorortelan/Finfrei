import prompt from "prompt-sync";
let ler = prompt();
import {texto, menu, opcaoMenu} from './programas.js'


let continuar = true;
let saldo = 0
while(continuar) {
    let opcao = menu();
    if(opcao == 4) {
        console.log("tchau");
        continuar = false;
    }

    opcaoMenu(opcao)

}