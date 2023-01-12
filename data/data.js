  function calculater() {
  var inicial = document.getElementById("date2");
  var date2 = parseInt(document.getElementById("date2"));
 
  let submit = document.getElementById("submit");
  let output = document.getElementById("output");

  
  submit.addEventListener("click", () => {
  var data = new Date();

  document.write('Hoje é: ' + data.toLocaleString());

  data.setDate(data.getDate() - date2);

  document.write('<br>14 dias atrás: ' + data.toLocaleString());
  })}
 /* 
    let Fulater = new Date(document.getElementById("calculater").value);
    let date2 = new Date(document.getElementById("date2").value);
  
    var partes = inicial.split("-");
    var ano = partes[0];
    var mes = partes[1] - 1;
    var dia = partes[2]; 
    if (calculater && date2.getDate()) {
      inicial = new Date(ano,mes,dia)
      final = new Date(inicial);
      final.setDate(final.getDate() + date2);
      final.setDate(final.getDate() - calculater);

         let  = date2.getDate() - calculater; 
  
       var dd = ("0" + final.getDate()).slice(-2);
       var mm = ("0" + (final.getMonth() + 1)).slice(-2);
       var y = final.getFullYear();

       var dataformatada = y + '-' + mm + '-' + dd;
       document.getElementById('date2' ,dataformatada);    
       output.innerHTML = `A diferença entra as datas é <span>${dataformatada}</span> dias`;
    }
   
    else {
      output.innerHTML = "Por favor escolha uma data valida";
    }
  });}

  
 let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {
 
  let date1 = new Date(document.getElementById("calculater").value);
  let date2 = new Date(document.getElementById("date-2").value);

  if (date1.getDate() && date2.getDate()) {
  
    let timeDifference = date2.getDate() - date1.getDate();

   
    let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
    output.innerHTML = `A diferencia entra as datas é <span>${dayDifference}</span> dias`;
  }

  else {
    output.innerHTML = "Por favor escolha uma data valida";
       
  