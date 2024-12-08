let prompt = require("prompt-sync")()



function calcularPrecoComImposto(nomeProduto, preco, imposto) {

    const precoFinal = preco + (preco * imposto / 100);
    return precoFinal;
}


function main() {
    
    const nomeProduto = prompt("Digite o nome do produto: ");
    const preco = parseFloat(prompt("Digite o preço do produto: "));
    const imposto = parseFloat(prompt("Digite a alíquota do imposto (em %): "));

 
    const precoFinal = calcularPrecoComImposto(nomeProduto, preco, imposto);


    console.log(`\nProduto: ${nomeProduto}`);
    console.log(`Preço: R$ ${preco.toFixed(2)}`);
    console.log(`Imposto: ${imposto.toFixed(2)}%`);
    console.log(`Preço final com imposto: R$ ${precoFinal.toFixed(2)}`);
}


main();