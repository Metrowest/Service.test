// tambah data
function insert_value() {
    
    $("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');
   
    var id1= $("#id").val();
    var nombre= $("#nombre").val();
    var gender= $("#gender").val();
    var telefono= $("#telefono").val();
    var direccion= $("#direccion").val();
    var territorio= $("#territorio").val();
    var categoria= $("#categoria").val();
    var tema= $("#tema").val();
    var observaciones= $("#observaciones").val();//////////////////
    
    var url = script_url+"?callback=ctrlq&observaciones="+observaciones+"&tema="+tema+"&categoria="+categoria+"&territorio="+territorio+"&direccion="+direccion+"&telefono="+telefono+"&gender="+gender+"&nombre="+nombre+"&id="+id1+"&action=insert";
     
       var request = jQuery.ajax({               
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }
   
   // perbaharui data
     function update_value(){
    $("#re").css("visibility","hidden");
        document.getElementById("loader").style.visibility = "visible";
    
    var id1= $("#id").val();
    var nombre= $("#nombre").val();
    var gender= $("#gender").val();
    var telefono= $("#telefono").val();
    var direccion= $("#direccion").val();
    var territorio= $("#territorio").val();
    var categoria= $("#categoria").val();
    var tema= $("#tema").val();
    var observaciones= $("#observaciones").val();//////////////////
    
    var url = script_url+"?callback=ctrlq&observaciones="+observaciones+"&tema="+tema+"&categoria="+categoria+"&territorio="+territorio+"&direccion="+direccion+"&telefono="+telefono+"&gender="+gender+"&nombre="+nombre+"&id="+id1+"&action=update";
    
       var request = jQuery.ajax({
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }
   
   //hapus data
     function delete_value(){
    $("#re").css("visibility","hidden");
        document.getElementById("loader").style.visibility = "visible";
     
    $('#mySpinner').addClass('spinner');
    var id1= $("#id").val();
    var nombre= $("#nombre").val();
    var gender= $("#gender").val();
    var telefono= $("#telefono").val();
    var direccion= $("#direccion").val();
    var territorio= $("#territorio").val();
    var categoria= $("#categoria").val();
    var tema= $("#tema").val();
    var observaciones= $("#observaciones").val();//////////////////
    
    var url = script_url+"?callback=ctrlq&observaciones="+observaciones+"&tema="+tema+"&categoria="+categoria+"&territorio="+territorio+"&direccion="+direccion+"&telefono="+telefono+"&gender="+gender+"&nombre="+nombre+"&id="+id1+"&action=delete";
   
       var request = jQuery.ajax({
         crossDomain: true,
         url: url ,
         method: "GET",
         dataType: "jsonp"
       });
     }
   
   
     // print the returned data
     function ctrlq(e) {
    $("#re").html(e.result);
    $("#re").css("visibility","visible");
    read_value('');
     }
     
   function read_value(srch) {
     
       $("#re").css("visibility","hidden");
       document.getElementById("loader").style.visibility = "visible";
       var url = script_url+"?action=read";
   
       $.getJSON(url, function (json) {
    
   // buat tabel yang menampilkan data
           var table = document.createElement("table");
           table.setAttribute("id", "myTable");
           var header = table.createTHead();
     var row = header.insertRow(0);     
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     var cell6 = row.insertCell(5);
     var cell7 = row.insertCell(6);
     var cell8 = row.insertCell(7);
     var cell9 = row.insertCell(8);///////////////////
     row.style.background = "#000000";
    
     cell1.innerHTML = "<b>ID</b>";
     cell2.innerHTML = "<b>Nombre</b>";
     cell3.innerHTML = "<b>Sexo</b>";
     cell4.innerHTML = "<b>Teléfono</b>";
     cell5.innerHTML = "<b>Dirección</b>";
     cell6.innerHTML = "<b>Territorio</b>";
     cell7.innerHTML = "<b>Categoria</b>";
     cell8.innerHTML = "<b>Tema</b>";
     cell9.innerHTML = "<b>Observaciones</b>";//////////////////
           
   //        alert(json.records);
        // masukkan data ke dalam tabel
         if (srch!=''){
           for (var i = 0; i < json.records.length; i++) {
             
             if(srch==json.records[i].ID){
               tr = table.insertRow(-1);
       var tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].ID;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Nombre;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Sexo;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Teléfono; 
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Dirección;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Territorio;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Categoria;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Tema;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Observaciones;////////////////
               }
           }
            $("#re").html("Datos de la Persona");
           $("#re").css("visibility","visible");
         } else {
            for (var i = 0; i < json.records.length; i++) {
              
               tr = table.insertRow(-1);
       var tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].ID;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Nombre;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Sexo;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Teléfono; 
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Dirección;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Territorio;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Categoria;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Tema;
       tabCell = tr.insertCell(-1);
       tabCell.innerHTML = json.records[i].Observaciones;////////////////
             }
          }
           
           var divContainer = document.getElementById("showData");
           divContainer.innerHTML = "";
           divContainer.appendChild(table);
           document.getElementById("loader").style.visibility = "hidden";
        $("#re").css("visibility","visible");
    
        $("#id").val("")
        $("#nombre").val("")
        $("#gender").val("")
        $("#telefono").val("")
        $("#direccion").val("")
        $("#territorio").val("")
        $("#categoria").val("")
        $("#tema").val("")
        $("#observaciones").val("")
         getData2Input();///////////////////
       });
    }
   //////////// Ketika data dalam tabel diklik
    function getData2Input(){
     var table = document.getElementById("myTable");
     
     if (table) {
       for (var i = 0; i < table.rows.length; i++) {
         table.rows[i].onclick = function() {
           tableText(this);        
         }
       }
     }
   }
   
   ///////////////////Ekstrak data dari Spreadsheet dan tampilkan di kolom.
   
   function tableText(tableRow) {
     var id = tableRow.childNodes[0].innerHTML;
     var nombre = tableRow.childNodes[1].innerHTML;
     var gender = tableRow.childNodes[2].innerHTML;
     var telefono = tableRow.childNodes[3].innerHTML;
     var direccion = tableRow.childNodes[4].innerHTML;
     var territorio = tableRow.childNodes[5].innerHTML;
     var categoria = tableRow.childNodes[6].innerHTML;
     var tema = tableRow.childNodes[7].innerHTML;
     var observaciones = tableRow.childNodes[8].innerHTML;//////////
     $("#id").val(id)
     $("#nombre").val(nombre)
     $("#gender").val(gender)
     $("#telefono").val(telefono)  
     $("#direccion").val(direccion)
     $("#territorio").val(territorio)
     $("#categoria").val(categoria)
     $("#tema").val(tema)
     $("#observaciones").val(observaciones)
   }   


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

var script_url =
    "https://script.google.com/macros/s/AKfycbz_7zFBqlslQETEEmJItWFLoFPkMCUrkndsAcdzjTd9KicA7gm56j2OrfnA6MnmHGMb/exec"; /////////////////

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
        '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
