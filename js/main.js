// Arrays de marcas de alimento balanceado para perros y gatos
const marcasPerros = ["Royal Canin Perro", "Proplan Perro", "Excellent Perro", "Purina Perro"];
const marcasGatos = ["Royal Canin Gato", "Proplan Gato", "Excellent Gato", "Purina Gato"];

// Carrito de compras
let carrito = [];

// Función para mostrar las marcas disponibles
function mostrarMarcas(tipoAnimal) {
  let marcasDisponibles;
  // Convertir el tipo de animal a minúsculas para comparación insensible a mayúsculas/minúsculas
  tipoAnimal = tipoAnimal.toLowerCase();
  if (tipoAnimal === "perro") {
    marcasDisponibles = marcasPerros;
  } else if (tipoAnimal === "gato") {
    marcasDisponibles = marcasGatos;
  } else {
    alert("Tipo de animal no válido");
    return;
  }

  console.log("Marcas disponibles para " + tipoAnimal + ":");
  for (let i = 0; i < marcasDisponibles.length; i++) {
    console.log((i + 1) + ". " + marcasDisponibles[i]);
  }

  // Preguntar al usuario si desea agregar algún producto al carrito
  const agregarAlCarrito = confirm("¿Deseas agregar algún producto al carrito?");
  if (agregarAlCarrito) {
    const indiceProducto = prompt("Ingresa el número del producto que deseas agregar al carrito:");
    const productoSeleccionado = marcasDisponibles[indiceProducto - 1];
    if (productoSeleccionado) {
      carrito.push(productoSeleccionado);
      alert("Producto agregado al carrito: " + productoSeleccionado);
    } else {
      alert("Número de producto no válido");
    }
  }
}

// Función principal para la interacción con el usuario
function ventaAlimento() {
  alert("¡Bienvenido a la tienda de alimentos balanceados!");
  const tipoAnimal = prompt("¿Para que tipo de animal deseas comprar el alimento? (perro/gato)");

  switch (tipoAnimal.toLowerCase()) {
    case "perro":
      mostrarMarcas("perro");
      break;
    case "gato":
      mostrarMarcas("gato");
      break;
    default:
      alert("Tipo de animal no válido");
  }
}

// Llamada a la función principal
ventaAlimento();