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

function sortearAmigo() {
    if (amigos.length === 1) { // Validar que haya amigos disponibles
        alert("No hay mas de 1 amigo en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre sorteado
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: ${amigoSorteado}! 🎁</li>`; // Mostrar el resultado
}