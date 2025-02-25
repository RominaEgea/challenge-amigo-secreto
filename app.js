let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturar el campo de entrada
    let nombre = input.value.trim(); // Obtener el valor y eliminar espacios innecesarios

    if (nombre === "") { // Validar que el campo no esté vacío
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array de amigos
    actualizarLista(); // Actualizar la lista en el HTML
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
