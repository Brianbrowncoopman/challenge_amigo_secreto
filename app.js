// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
alert("¡Bienvenido a mi desafío!");

// Inicialización de la lista de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validación que permite letras, espacios, acentos y la letra "ñ"
  if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
    alert(
      "Por favor, ingresa un nombre válido (solo letras, espacios y acentos)."
    );
    return;
  }

  // Evitar duplicados
  if (amigos.includes(nombre)) {
    alert("El amigo ya existe en la lista.");
    input.value = "";
    return;
  }

  // Agregar amigo si pasa las validaciones
  amigos.push(nombre);
  alert("Amigo agregado correctamente.");

  actualizarListaDeAmigos();
  localStorage.setItem("amigos", JSON.stringify(amigos)); // Guardar en localStorage
  input.value = "";
  input.focus();
  console.log(amigos);
}

// Función para actualizar la lista visible
function actualizarListaDeAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(li);
  });

  // Habilitar el botón de sortear si hay amigos en la lista
  document.getElementById("botonSortear").disabled = amigos.length === 0;
}

// Función para sortear un amigo secreto (solo una vez)
function sortearAmigo() {
  if (amigos.length === 0) {
    alert(
      "La lista de amigos está vacía. ¡Agrega al menos un nombre antes de sortear!"
    );
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  mostrarResultado(amigoSecreto);

  // Deshabilitar el botón después de sortear
  const botonSortear = document.getElementById("botonSortear");
  botonSortear.disabled = true;
  alert(
    "El sorteo se ha realizado. Para reiniciar, haz clic en 'Reiniciar juego'."
  );
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar cualquier resultado anterior

  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}

// Función para reiniciar el juego
function reiniciarJuego() {
  amigos = []; // Vaciar la lista de amigos
  localStorage.removeItem("amigos"); // Borrar datos del almacenamiento local

  // Limpiar la lista visible y el resultado
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";

  // Habilitar el botón de sortear
  document.getElementById("botonSortear").disabled = true;

  alert("El juego ha sido reiniciado.");
}

// Cargar los amigos guardados en localStorage al cargar la página
window.onload = () => {
  const amigosGuardados = JSON.parse(localStorage.getItem("amigos"));
  if (amigosGuardados) {
    amigos = amigosGuardados;
    actualizarListaDeAmigos();
  }
};
