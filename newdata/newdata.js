

function calculater() {
    var inicial = document.getElementById("ini").value; //a variavel inicial vai pegar o id ini do html e vai pegar o data que esta escolhida 
    var dias = parseInt(document.getElementById("dias").value);// parseInt ele vai analizar o id dias 
    var partes = inicial.split("-"); //vai pegar as partes e separar os numeros inicial
    var ano = partes[0];
    var mes = partes[1] - 1; // pegar as partes do ano mes e dia 
    var dia = partes[2];

    inicial = new Date(ano, mes, dia); // vai fazer um new date do ano mes e dia 
    milissegundos_por_dia = 1000 * 60 * 60 * 24; // vai fazer ele por milisegundos 
    final = new Date(inicial.getTime() - dias * milissegundos_por_dia); // vai pegar o tempo - dias trocar os milisegundos do dia

    var dd = ("0" + final.getDate()).slice(-2);
    var mm = ("0" + (final.getMonth() + 1)).slice(-2); // pegar os dd, mm , y & separar eles 
    var y = final.getFullYear();

    var dataformatada = y + '-' + mm + '-' + dd; //vai a juntar os numeros e a jeitar eles pra os lugares certos 
    document.getElementById('datafin').value = dataformatada;// vai pegar a resposta e vai mandar para o id datafin 
}
