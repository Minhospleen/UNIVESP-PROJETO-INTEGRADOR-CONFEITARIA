function main() {
    // Custo Pão de Ló
    var quantidadeOvoCompra;
    var valorOvo;
    var quantidadeOvo;

    window.alert("Digite a quantidade ovo comprada :");
    quantidadeOvoCompra = Number(window.prompt('Enter a value for quantidadeOvoCompra'));
    window.alert("Digite o valor (R$) de ovo comprado:");
    valorOvo = Number(window.prompt('Enter a value for valorOvo'));
    window.alert("Digite a quantidade de ovo usado no preparo: ");
    quantidadeOvo = Number(window.prompt('Enter a value for quantidadeOvo'));
    var valortotalOvo;

    valortotalOvo = quantidadeOvo * valorOvo / quantidadeOvoCompra;
    var pesoOvo;

    pesoOvo = quantidadeOvo * 40;
    var quantidadeLeite;
    var valorLeite;
    var valortotalLeite;

    window.alert("Digite a quantidade (mililitros) de leite:");
    quantidadeLeite = Number(window.prompt('Enter a value for quantidadeLeite'));
    window.alert("Digite  o valor (R$) de leite: ");
    valorLeite = Number(window.prompt('Enter a value for valorLeite'));
    valortotalLeite = quantidadeLeite / 1000 * valorLeite;
    var quantidadeFarinha;
    var valorFarinha;
    var valortotalFarinha;

    window.alert("Digite a quantidade (grama) farinha: ");
    quantidadeFarinha = Number(window.prompt('Enter a value for quantidadeFarinha'));
    window.alert("Digite o valor da farinha (R$): ");
    valorFarinha = Number(window.prompt('Enter a value for valorFarinha'));
    valortotalFarinha = quantidadeFarinha / 1000 * valorLeite;
    var quantidadeAcucar;
    var valorAcucar;
    var valortotalAcucar;

    window.alert("Digite a quantidade (grama) de açúcar: ");
    quantidadeAcucar = Number(window.prompt('Enter a value for quantidadeAcucar'));
    window.alert("Digite o valor (R$) do açúcar: ");
    valorAcucar = Number(window.prompt('Enter a value for valorAcucar'));
    valortotalAcucar = quantidadeAcucar / 1000 * valorAcucar;
    var quantidadeFermento;
    var valorFermento;
    var valortotalFermento;

    window.alert("Digite a quantidade (grama) do fermento(colher de sopa tem 10g): ");
    quantidadeFermento = Number(window.prompt('Enter a value for quantidadeFermento'));
    window.alert("Digite o valor (R$) de fermento: ");
    valorFermento = Number(window.prompt('Enter a value for valorFermento'));
    valortotalFermento = quantidadeFermento * valorFermento;
    var totalPaodelo;

    totalPaodelo = pesoOvo + quantidadeAcucar + quantidadeLeite + quantidadeFarinha + quantidadeFermento;
    var valorPaodelo;

    valorPaodelo = valortotalAcucar + valortotalLeite + valortotalFermento + valortotalFarinha + valortotalOvo;

    // Custos Variaveis
    var quantidadeCalda;
    var valorCalda;
    var valortotalCalda;

    window.alert("Digite a quantidade (grama) de calda: ");
    quantidadeCalda = Number(window.prompt('Enter a value for quantidadeCalda'));
    window.alert("Digite o valor (R$) da calda: ");
    valorCalda = Number(window.prompt('Enter a value for valorCalda'));
    valortotalCalda = quantidadeCalda / 1000 * valorCalda;
    var quantidadeChantilly;
    var valorChantilly;
    var valortotalChantilly;

    window.alert("Digite a quantidade (grama) de chantilly: ");
    quantidadeChantilly = Number(window.prompt('Enter a value for quantidadeChantilly'));
    window.alert("Digite  o valor (R$) do  chantilly:");
    valorChantilly = Number(window.prompt('Enter a value for valorChantilly'));
    valortotalChantilly = quantidadeChantilly / 1000 * valorChantilly;
    var quantidadeDoceleite;
    var valorDoceleite;
    var valortotalDoceleite;

    window.alert("Digite a quantidade (grama) de doce de leite: ");
    quantidadeDoceleite = Number(window.prompt('Enter a value for quantidadeDoceleite'));
    window.alert("Digite o valor (R$) do doce de leite: ");
    valorDoceleite = Number(window.prompt('Enter a value for valorDoceleite'));
    valortotalDoceleite = quantidadeDoceleite / 1000 * valorDoceleite;
    var quantidadeChocolate;
    var valorChocolate;
    var valortotalchocolate;

    window.alert("Digite a quantidade (grama) de chocolate: ");
    quantidadeChocolate = Number(window.prompt('Enter a value for quantidadeChocolate'));
    window.alert("Digite o valor (R$) do chocolate");
    valorChocolate = Number(window.prompt('Enter a value for valorChocolate'));
    valortotalchocolate = quantidadeChocolate / 1000 * valorChocolate;
    var quantidadeCoco;
    var valorCoco;
    var valortotalCoco;

    window.alert("Digite a quantidade(grama) de coco:");
    quantidadeCoco = Number(window.prompt('Enter a value for quantidadeCoco'));
    window.alert("Digite o valor (R$) do coco: ");
    valorCoco = Number(window.prompt('Enter a value for valorCoco'));
    valortotalCoco = quantidadeCoco / 1000 * valorCoco;
    var quantidadeFruta;
    var valorFruta;
    var valortotalFruta;

    window.alert("Digite  a quantidade (grama) de fruta: ");
    quantidadeFruta = Number(window.prompt('Enter a value for quantidadeFruta'));
    window.alert("Digite o valor (R$) da fruta: ");
    valorFruta = Number(window.prompt('Enter a value for valorFruta'));
    valortotalFruta = quantidadeFruta / 1000 * valorFruta;
    var quantidadeEmbalagem;
    var valorEmbalagem;
    var valortotalEmbalagem;

    window.alert("Digite a quantidade de embalagem: ");
    quantidadeEmbalagem = Number(window.prompt('Enter a value for quantidadeEmbalagem'));
    window.alert("Digite o valor (R$) da embalagem: ");
    valorEmbalagem = Number(window.prompt('Enter a value for valorEmbalagem'));
    valortotalEmbalagem = quantidadeEmbalagem * valorEmbalagem;
    var valorCustoVariavel;

    valorCustoVariavel = valorPaodelo + valortotalChantilly + valortotalDoceleite + valortotalchocolate + valortotalCoco + valortotalFruta + valortotalCalda + valortotalEmbalagem;

    // Custos Fixos
    var minutoTrabalho;

    window.alert("Digite o tempo de preparo em minutos: ");
    minutoTrabalho = Number(window.prompt('Enter a value for minutoTrabalho'));
    var valorAgua;

    valorAgua = minutoTrabalho * 0.00081;
    var valorLuz;

    valorLuz = minutoTrabalho * 0.7;
    var valorTelefone;

    valorTelefone = minutoTrabalho * 0.22;
    var valorGas;

    valorGas = minutoTrabalho * 0.018;
    var mei;

    mei = minutoTrabalho * 0.6375;
    var valorCustoFixo;

    valorCustoFixo = mei + valorTelefone + valorLuz + valorAgua + valorGas;
    var lucro;

    window.alert("Digite valor do lucro: ");
    lucro = Number(window.prompt('Enter a value for lucro'));
    var lucroPorcento;

    lucroPorcento = lucro / 100;
    var quantidadeTotal;

    quantidadeTotal = totalPaodelo + quantidadeCalda + quantidadeChantilly + quantidadeDoceleite + quantidadeChocolate + quantidadeFruta + quantidadeCoco;
    window.alert("Quantidade total em gramas : " + quantidadeTotal);
    window.alert("O valor total do custo variavel: " + valorCustoVariavel);
    window.alert("O valor total dos custos fixos: " + valorCustoFixo);
    var custoFixoVariavel;

    custoFixoVariavel = valorCustoFixo + valorCustoVariavel;
    var custototalLucro;

    custototalLucro = (valorCustoVariavel + valorCustoFixo) * (1 + lucroPorcento);
    window.alert("Valor total com  lucro: " + custototalLucro);

    // Markup = 100 / [100 – (% Custo fixo + % Custo variável + % Lucro)]
    var markup;

    markup = 100 / (100 - (valorCustoFixo / 100 + valorCustoVariavel / 100 + (1 + lucroPorcento)));
    window.alert("Markup: " + markup);
    var markupPrecoVenda;

    markupPrecoVenda = custoFixoVariavel * markup;
    window.alert("Preço de venda com  o markup: " + markupPrecoVenda);
    var margemLucro;

    margemLucro = (custototalLucro - custoFixoVariavel) / custototalLucro * 100;
    window.alert("Margem de lucro do preço de venda: " + margemLucro);
    var margemLucroMarkup;

    margemLucroMarkup = (markupPrecoVenda - custoFixoVariavel) / markupPrecoVenda * 100;
    window.alert("Margem de lucro com Markup: " + margemLucroMarkup);
}
