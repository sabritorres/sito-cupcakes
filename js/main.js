var lista_cupcackes= document.querySelector('#descrizioni');

function mostraCupcakes(cupcakes) {
    for (var i = 0; i < cupcakes.length; i++) {
        var contenitore = $('<div></div>').addClass('row mb-2 ml-2');

        if (i%2 == 0) {
            var rowimmagine = $('<div></div>').addClass('col-md-4');
            var immagine = $('<img></img>').addClass("img-fluid").attr("src", cupcakes[i].foto).css('width','200px');
            console.log(immagine);
            var rowdescrizione = $('<div></div>').addClass("col-md-8 text-justify");           
            var nome=$('<h3></h3>').html(cupcakes[i].nome);
            var descrizione = $('<p></p>').html(cupcakes[i].descrizione);
            var ingredienti = $('<p></p>').html("Ingredienti:<br />"+cupcakes[i].ingredienti);
            var prezzo = $('<p></p>').html(cupcakes[i].prezzo + "Euro");

            immagine.appendTo(rowimmagine);
            rowimmagine.appendTo(contenitore);
            nome.appendTo(rowdescrizione);
            descrizione.appendTo(rowdescrizione);
            ingredienti.appendTo(rowdescrizione);
            prezzo.appendTo(rowdescrizione);

            rowdescrizione.appendTo(contenitore);
            contenitore.appendTo(lista_cupcackes);

            
        }
        else{
            var rowdescrizione = $('<div></div>').addClass("col-md-8");
            var nome = $('<h3></h3>').html(cupcakes[i].nome);
            var descrizione = $('<p></p>').html(cupcakes[i].descrizione);
            var ingredienti = $('<p></p>').html("Ingredienti:<br />" +cupcakes[i].ingredienti);
            var prezzo = $('<p></p>').html(cupcakes[i].prezzo + "Euro");

            var rowimmagine = $('<div></div>').addClass('col-md-4');
            var immagine = $('<img></img>').addClass("img-fluid").attr("src", cupcakes[i].foto).css('width', '200px');

            nome.appendTo(rowdescrizione);
            descrizione.appendTo(rowdescrizione);
            ingredienti.appendTo(rowdescrizione);
            prezzo.appendTo(rowdescrizione);

            rowdescrizione.appendTo(contenitore);
            contenitore.appendTo(lista_cupcackes);

            immagine.appendTo(rowimmagine);
            rowimmagine.appendTo(contenitore);

        }
        console.log(immagine);
        ;

        
        
    }
    
}
mostraCupcakes(cupcakes);