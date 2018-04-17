function klic(vhodna, callback){
  var zahteva = new XMLHttpRequest();
  zahteva.onreadystatechange = function (){
    if( zahteva.readyState == 4 && zahteva.status == 200 ){
        console.log( 'Odgovor' + zahteva.responseText );
        try{
          var vhod = JSON.parse(zahteva.responseText);
        } catch (err){
          console.log( 'Napaka' + err.message );
          return;
        }
          callback (vhod);
      }
  };
  
  zahteva.open('GET', vhodna, true);
  zahteva.send();
}

klic('vhod.json', function(vhod){
    var htmlStr="<table><tr><th>ime</th><th>starost</th></tr>"
    for (var i = 0; i < vhod.steviloOseb; i++){
           htmlStr += "<tr><td>" + vhod.seznam[i].ime + "</td><td>" + vhod.seznam[i].starost + "</td></tr>";
    }
    htmlStr +="</table>"
    document.getElementById('demo').innerHTML = htmlStr;
});