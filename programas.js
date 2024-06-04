import prompt from "prompt-sync";
let ler = prompt();
let saldo = 0
export function texto(mensagem){
    console.log(mensagem)
}

export function menu(){
    let opcao;
    console.log(`me fale o que deseja:
    1 - depositar money
    2 - sacar money
    3 - saldo
    4 - sair`);
    opcao = Number(ler()) 
    return opcao;
}

export function opcaoMenu(opcao) {
    
    if(opcao == 1) {
        let continuar = true;
        while(continuar) {
            console.log("quanto vc quer depositar?/ caso não queira depositar coloque '-1'");
            let valor = Number(ler());
                if(valor == -1) {
                    console.log(`R$${saldo.toFixed(2)}`)
                    break;
                }
            saldo += valor;
        }
    }

    else if(opcao == 2){
        let continuar = true;
        while(continuar) {
            console.log("quanto vc quer sacar?/ caso não queira mais fazer retiradas digite '0'");
            let valor = Number(ler());
            

                if(valor == 0) {
                    console.log(`R$${saldo.toFixed(2)}`)
                    break;
                }
                else if (valor > saldo) {
                    console.log('valor não compativel...');
                    continue;
                }

                saldo -= valor;
        }
      }

      else if (opcao == 3) {
        console.log(`o seu saldo é de R$${saldo.toFixed(2)}`)
      }
}







