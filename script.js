

function simularFinanciamento(valorImovel, entrada, taxaJuros, prazo) {
    let totalParcela = 120;
    let valorParcela = 0;
    let valorRestante = valorImovel -  entrada;


    //parcela inicial
    valorParcela = valorRestante / (prazo * 120);

    //parcelas
    let i = 0;
    while (valorRestante > 0) {
        for ( let j = 1; j <= 120; j++){

            //calcula o valor das parcelas
            valorParcela = valorRestante / (prazo * 120);

            //valor das parcelas
                console.log("parcela $ {i + 1} - valor: R$${valorParcela.toFixed(2)}")
            
                //atualizar o valo restante
            valorRestante -= valorParcela;

            //total de parcelas
            totalParcelaslas++;

            i++;

        }

    }
    //total de parcelas
    console.log("total de parcelas: ${totalParcelas}");

}
//uso
simularFinanciamento(5450000, 10000, 9.5, 30);