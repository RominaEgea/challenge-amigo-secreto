let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Capturar el campo de entrada
    const nombre = inputAmigo.value.trim(); // Obtener y limpiar espacios en blanco

    if (nombre === "") { // Validar que el campo no esté vacío
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    actualizarListaAmigos(); // Actualizar la lista en pantalla
    inputAmigo.value = ""; // Limpiar el campo de entrada
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de volver a renderizar
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 1) {
        alert("No hay mas de 1 amigo en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: ${amigoSorteado}! 🎁</li>`;
}