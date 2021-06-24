function crearTabla() {
  //Obteniendo valores del formulario
  var filas = document.getElementById("filas").value; 
  var columnas = document.getElementById("columnas").value;
  /*var cargando = "Estamos creando su tabla, espere un momento.";
  alert(cargando);*/

  
  var body = document.getElementsByTagName("body")[0];

  
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var row = document.createElement("tr");
  var col = document.createElement("td");
  var center= document.createElement("center");

  
  body.appendChild(tabla);
 
  tabla.appendChild(tblBody);
  
  tabla.setAttribute("border", "5");

  tabla.setAttribute("style", "margin: 0 auto;");

  //Filas
  for (var i = 1; i <= filas; i++) {
      //Colummnas
      var row = document.createElement("tr");
      tblBody.appendChild(row);

      for (var j = 1; j <= columnas; j++) {
          var col = document.createElement("td");
          var textoCelda = document.createTextNode(1);

          row.appendChild(col);
          col.appendChild(textoCelda);
      }
  }
}