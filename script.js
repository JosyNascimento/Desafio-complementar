function financiamentoImovel() {
    let valorImovel = 560000;
      let numParcelas = 120;
      let juros = 0.015; // 1,5% ao mês
      let saldoDevedor = valorImovel;
      let parcelas = [];
      let meses = [];

      for (let i = 1; i <= numParcelas; i++) {
        let parcela = (saldoDevedor * juros) + (saldoDevedor / numParcelas);
        parcelas.push(parcela.toFixed(2));
        meses.push(i);
        saldoDevedor -= parcela;
      }

      let tableBody = document.getElementById("table-body");
      for (let i = 0; i < parcelas.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `
          <td>${meses[i]}</td>
          <td>R$ ${parcelas[i]}</td>
          <td>R$ ${((saldoDevedor * juros).toFixed(2))}</td>
          <td>R$ ${((saldoDevedor - parcelas[i]).toFixed(2))}</td>
          <td>R$ ${saldoDevedor.toFixed(2)}</td>`;
        tableBody.appendChild(row);
      }

      }
      
  financiamentoImovel();