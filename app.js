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
