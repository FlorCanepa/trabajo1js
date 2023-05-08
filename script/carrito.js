const listaProductos = document.getElementById("lista-productos");
const totalCarrito = document.getElementById("total-carrito");
const botonVaciar = document.getElementById("boton-vaciar");
const botonComprar = document.getElementById("boton-comprar");

let carrito = [];

const productosGuardados = localStorage.getItem("productos-carrito");
if (productosGuardados) {
  carrito = JSON.parse(productosGuardados);
}

function renderizarCarrito() {
  listaProductos.innerHTML = "";
  let total = 0;
  
  for (let producto of carrito) {
    const itemProducto = document.createElement("li");
    itemProducto.textContent = `${producto.nombre} - ${producto.precio}$`;

    listaProductos.appendChild(itemProducto);
    
    total += producto.precio;
  }
  
  totalCarrito.textContent = `TOTAL: $${total}`;
  
  localStorage.setItem("productos-carrito", JSON.stringify(carrito));
}


function vaciarCarrito() {
  carrito = [];
  
  renderizarCarrito();
}


function agregarProducto(nombre, precio) {
  const nuevoProducto = {
    nombre,
    precio
  };
  
  carrito.push(nuevoProducto); 
  renderizarCarrito();
}

botonVaciar.addEventListener("click", vaciarCarrito);
botonComprar.addEventListener("click", function() {
  alert("Gracias por tu compra");
});

document.getElementById("boton-agregar-1").addEventListener("click", function() {
  agregarProducto("Monitor Gamer 1", 120000);
});

document.getElementById("boton-agregar-2").addEventListener("click", function() {
  agregarProducto("PC Gamer 2", 200000);
});

document.getElementById("boton-agregar-3").addEventListener("click", function() {
  agregarProducto("GPU Gamer 3", 390000);
});

renderizarCarrito();
