$(function() {
    let arrayImg = [
        "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/sunny-flashcard.jpg",
        "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/rainy-flashcard.jpg",
        "https://i2.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/windy-flashcard.jpg",
        "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/cloudy-flashcard.jpg",
        "https://i2.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/snowy-flashcard.jpg",
        "https://i0.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/stormy-flashcard.jpg",
        "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/sunny-flashcard.jpg",
        "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/rainy-flashcard.jpg",
        "https://i2.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/windy-flashcard.jpg",
        "https://i1.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/cloudy-flashcard.jpg",
        "https://i2.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/snowy-flashcard.jpg",
        "https://i0.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2015/07/stormy-flashcard.jpg"
    ]

    let elColor = "https://images-na.ssl-images-amazon.com/images/I/11npH-ZC3aL._SX331_BO1,204,203,200_.jpg";

    let contador = 0;
    let primeraCarta = true;
    let carta1;
    let carta2;
    let victorias = 0;

    $('img').click(function(e) {
        if (primeraCarta) {
            carta1 = this.src = arrayImg[e.target.id];
            primeraCarta = false;
        } else {
            carta2 = this.src = arrayImg[e.target.id];
        }
        contador = contador+1;
        console.log(contador);
        if (contador >= 2) {
            compararImagenes();
            contador = 0;
            primeraCarta = true;
        }
    });


    function compararImagenes() {
        if (carta1 === carta2) {
            $('#mensaje').text('Has acertado!');
            $('#mensaje').css({'color':'lightgreen'});
            victorias++
            $('#victorias').text(`Número de victorias: ${victorias}`);
        } else {
            $('#mensaje').text('Has fallado, vuelve a intentarlo');
            $('#mensaje').css({'color':'red'});

            setTimeout(() => {
                $('img').attr('src', elColor);
            }, 1000);
        }
    }

});