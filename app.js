// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//alert("bienenido a mi desaio");
//primer
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validación más robusta (solo letras y espacios)
  if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
    return;
  }

  // Evitar duplicados
  if (amigos.includes(nombre)) {
    alert("El amigo ya existe en la lista.");
    input.value = "";
    return;
  }

  // Si se pasa ambas validaciones, agregar el amigo y mostrar mensaje de éxito
  amigos.push(nombre);
  alert("Amigo agregado correctamente.");

  actualizarListaDeAmigos();
  localStorage.setItem("amigos", JSON.stringify(amigos)); // Guardar en localStorage
  input.value = "";
  input.focus();
  console.log(amigos);
}

function actualizarListaDeAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(li);
  });
}

//Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert(
      "La lista de amigos está vacía. ¡Agrega al menos un nombre antes de sortear!"
    );
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar cualquier resultado anterior

  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}

function reiniciarJuego() {
  amigos = []; // Vaciar la lista de amigos
  localStorage.removeItem("amigos"); // Borrar datos del almacenamiento local

  // Limpiar la lista visible y el resultado
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";

  alert("El juego ha sido reiniciado.");
}
