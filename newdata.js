

function calculater() {
    var inicial = document.getElementById("ini").value;
    var dias = parseInt(document.getElementById("dias").value);
    var partes = inicial.split("-");
    var ano = partes[0];
    var mes = partes[1] - 1;
    var dia = partes[2];

    inicial = new Date(ano, mes, dia);
    final = new Date(inicial);
    final.setDate(final.getDate() + dias);
    final.setDate(final.getDate() - 14); // menos 14 dias do resultado

    var dd = ("0" + final.getDate()).slice(-2);
    var mm = ("0" + (final.getMonth() + 1)).slice(-2);
    var y = final.getFullYear();

    var dataformatada = y + '-' + mm + '-' + dd;
    document.getElementById('datafin').value = dataformatada;
}
