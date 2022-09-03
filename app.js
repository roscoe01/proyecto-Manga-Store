//alert("Bienvenido a la Mejor Tienda de Manga del Pais");
document.write("<h1 class='text-center mt-4'> Gappy Manga Store </h1>");



const productos = [
    { id: 1, nombre: "Naruto 13", precio: "$1100", autor: "Masashi Kishimoto"},
    { id: 2, nombre: "Berserk 6", precio: "$1100", autor: "Kentaro Miura"},
    { id: 3, nombre: "Jujutsu Kaisen 11", precio: "$900", autor: "Gege Akutami"},
    { id: 4, nombre: "Wotakoi 01", precio: "$750", autor: "Fujita"},
    { id: 5, nombre: "Banana Fish 02", precio: "$1900", autor: "Akimi Yoshida"}
]

productos.forEach(manga => {
    document.write("<br>");
    document.write("<div class='fs-4 text-danger' > ID: " + manga.id + " Nombre: " + manga.nombre + " Precio: " + manga.precio + " Autor: " + manga.autor + "</div> ");
  
});

document.write("<button onclick='funcionComprar()' class= 'btn btn-primary btn-lg m-2'> Comprar </button>");
document.write("<span class= 'primary btn-lg ' id='totalcarrito'></span> ")


function funcionComprar(){
    var seguir = true;
    var carrito = 0;
    alert("Bienvenido!")
    while(seguir){        
        rta = prompt("Escriba el ID del producto que desea llevar o SALIR para dejar de añadir productos al carrito. Total actual: " + carrito)
        if(rta == 1){
            carrito = carrito + 1100;
        } else if(rta == 2){
            carrito = carrito + 1100;
        } else if(rta == 3){
            carrito = carrito + 900;
        } else if(rta == 4){
            carrito = carrito + 750;
        } else if(rta == 5){
            carrito = carrito + 1900;
        } else if(rta == "SALIR"){
            let total = document.querySelector('#totalcarrito');
            total.textContent = 'Total : ' + carrito;
            seguir = false;
        }
        else {
            alert("No has ingresado un ID de producto correcto, revisa la lista nuevamente!")
            seguir = false;           
        }
    }
}


