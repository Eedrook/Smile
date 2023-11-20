const Change = document.getElementById('Change')

// Función para cerrar la ventana emergente
function cerrarVentana() {
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.style.display = 'none';
}

document.querySelector('.btn-info').addEventListener('click', function() {
    // Obtener el contenedor de la ventana emergente
    var ventanaEmergente = document.getElementById('ventanaEmergente');

    // Mostrar la ventana emergente
    ventanaEmergente.style.display = 'block';

    // Cargar las imágenes en la ventana emergente con tamaño medio
    ventanaEmergente.innerHTML = `
        <img src="./img/galeria1.jpg" alt="" class="imagen-mediana">
        <img src="./img/galeria2.jpg" alt="" class="imagen-mediana">
        <img src="./img/galeria3.jpg" alt="" class="imagen-mediana">
        <!-- Agrega las otras imágenes según sea necesario -->
        <button type="button" onclick="cerrarVentana()" class="btn-cerrar">Cerrar</button>
    `;
});

function cambio(){
    Change.src = './img/galeria2.jpg'
}
function cambio2(){
    Change.src = './img/galeria3.jpg'
}
function cambio3(){
    Change.src = './img/galeria1.jpg'
}


function descripción(titulo,mensaje){
    var Caja = document.getElementById('alertacaja')
    var Nombrealerta = document.getElementById('Nombrealerta')
    var alertainfo = document.getElementById('alertainfo')
    Nombrealerta.innerText = titulo;
    alertainfo.innerText = mensaje;
    Caja.style.display = 'flex'
}
function cerrar(){
   var Caja = document.getElementById('alertacaja')
   Caja.style.display = "none"
}

function mostrarInformacion() {
    // Obtén la imagen activa en el carrusel
    var imagenActiva = document.querySelector('.carousel-item.active img');
    
    // Obtén el alt de la imagen para determinar qué información mostrar
    var altImagen = imagenActiva.alt;
    
    // Muestra la información correspondiente según la imagen
    var informacionDiv = document.getElementById('informacion');

    switch (altImagen) {
        case 'Imagen 1':
            informacionDiv.innerHTML = '<p>Lio es chico muy tranquilo que tuvo depresión por causas del bullyng y lo supera con el tiempo y se vuelve tranquilo y frio pero le gusta ayudar a los demas que se sienten mal</p>';
            break;
        case 'Imagen 2':
            informacionDiv.innerHTML = '<p>Alejo es tranquilo pero con un pasado bastante duro gracias a al bullyng y la depresión que tuvo que lidiar</p>';
            break;
        case 'Imagen 3':
            informacionDiv.innerHTML = '<p>Gracias al pasado de andres desarrollo un trauma el cual lo hace creer que las personas le quieren hacer daño y por ese trauma desarrolla una depresión</p>';
            break;
        // Agrega más casos según sea necesario
        default:
            informacionDiv.innerHTML = '<p>Información del Personaje Desconocido</p>';
    }
}



// $(document).ready(function() {
//     $('#comicCarousel').on('slid.bs.carousel', function () {
//         // Obtiene el índice de la diapositiva activa
//         var slideIndex = $('#comicCarousel .carousel-item.active').index() + 1;

//         // Cambia el texto según la diapositiva activa
//         if (slideIndex === 1) {
//             $('#comicDescription').text('Lio es alguien que tubo un pasado complicado y no le fue muy bien pero aun asi le gusta ayudar a los demas cuando lo necesitan');
//         } else if (slideIndex === 2) {
//             $('#comicDescription').text('Alejo es un joven tranquilo sin procupaciones pero con un pasado no tan bueno');
//         }else if (slideIndex === 3){
//             $('#comicDescription').text('andres es un chico que de verdad le afecto y la deprecion era muy grave pero Lio y alejo lo ayudaron hasta el final');
//         }
        
//         // Añade más 'else if' si hay más diapositivas con texto diferente
//     });
// });