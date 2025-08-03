const cines = {
    1: {
        nombre: "Cine A",
        salas: 3,
        capacidadPorSala: 30,
        sala: [
            {
                id: "01", pelicula: "Había una vez", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: false }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: false }, { numero: 6, ocupado: false },
                    { numero: 7, ocupado: false }, { numero: 8, ocupado: false }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: false }, { numero: 11, ocupado: false }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: true }, { numero: 14, ocupado: true }, { numero: 15, ocupado: false },
                    { numero: 16, ocupado: true }, { numero: 17, ocupado: true }, { numero: 18, ocupado: false },
                    { numero: 19, ocupado: true }, { numero: 20, ocupado: true }, { numero: 21, ocupado: true },
                    { numero: 22, ocupado: true }, { numero: 23, ocupado: true }, { numero: 24, ocupado: true },
                    { numero: 25, ocupado: false }, { numero: 26, ocupado: false }, { numero: 27, ocupado: true },
                    { numero: 28, ocupado: false }, { numero: 29, ocupado: true }, { numero: 30, ocupado: true },
                ]
            },
            {
                id: "02", pelicula: "Colorín colorado", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: false }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: false }, { numero: 6, ocupado: false },
                    { numero: 7, ocupado: false }, { numero: 8, ocupado: false }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: false }, { numero: 11, ocupado: false }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: false }, { numero: 15, ocupado: false },
                    { numero: 16, ocupado: false }, { numero: 17, ocupado: true }, { numero: 18, ocupado: true },
                    { numero: 19, ocupado: true }, { numero: 20, ocupado: true }, { numero: 21, ocupado: false },
                    { numero: 22, ocupado: false }, { numero: 23, ocupado: false }, { numero: 24, ocupado: false },
                    { numero: 25, ocupado: false }, { numero: 26, ocupado: false }, { numero: 27, ocupado: false },
                    { numero: 28, ocupado: false }, { numero: 29, ocupado: false }, { numero: 30, ocupado: false },
                ]
            },
            {
                id: "03", pelicula: "SuperPerro", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: false }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: true }, { numero: 6, ocupado: false },
                    { numero: 7, ocupado: true }, { numero: 8, ocupado: true }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: false }, { numero: 11, ocupado: true }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: true }, { numero: 15, ocupado: false },
                    { numero: 16, ocupado: false }, { numero: 17, ocupado: true }, { numero: 18, ocupado: true },
                    { numero: 19, ocupado: false }, { numero: 20, ocupado: true }, { numero: 21, ocupado: true },
                    { numero: 22, ocupado: false }, { numero: 23, ocupado: true }, { numero: 24, ocupado: true },
                    { numero: 25, ocupado: false }, { numero: 26, ocupado: true }, { numero: 27, ocupado: true },
                    { numero: 28, ocupado: false }, { numero: 29, ocupado: false }, { numero: 30, ocupado: false },
                ]
            }
        ]
    },
    2: {
        nombre: "Cine B",
        salas: 5,
        capacidadPorSala: 15,
        sala: [
            {
                id: "01", pelicula: "Había una vez", asientos: [
                    { numero: 1, ocupado: true }, { numero: 2, ocupado: true }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: true }, { numero: 5, ocupado: true }, { numero: 6, ocupado: true },
                    { numero: 7, ocupado: false }, { numero: 8, ocupado: true }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: true }, { numero: 11, ocupado: true }, { numero: 12, ocupado: true },
                    { numero: 13, ocupado: true }, { numero: 14, ocupado: true }, { numero: 15, ocupado: true }
                ]
            },
            {
                id: "02", pelicula: "Colorín colorado", asientos: [
                    { numero: 1, ocupado: true }, { numero: 2, ocupado: true }, { numero: 3, ocupado: true },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: false }, { numero: 6, ocupado: false },
                    { numero: 7, ocupado: true }, { numero: 8, ocupado: true }, { numero: 9, ocupado: true },
                    { numero: 10, ocupado: true }, { numero: 11, ocupado: false }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: false }, { numero: 15, ocupado: false }
                ]
            },
            {
                id: "03", pelicula: "SuperPerro", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: false }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: true }, { numero: 5, ocupado: true }, { numero: 6, ocupado: true },
                    { numero: 7, ocupado: false }, { numero: 8, ocupado: false }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: false }, { numero: 11, ocupado: false }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: true }, { numero: 15, ocupado: false }
                ]
            },
            {
                id: "04", pelicula: "El Caballero del Mar", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: true }, { numero: 3, ocupado: true },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: true }, { numero: 6, ocupado: true },
                    { numero: 7, ocupado: true }, { numero: 8, ocupado: false }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: true }, { numero: 11, ocupado: true }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: true }, { numero: 15, ocupado: true }
                ]
            },
            {
                id: "05", pelicula: "Happy House 2", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: false }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: true }, { numero: 5, ocupado: true }, { numero: 6, ocupado: true },
                    { numero: 7, ocupado: true }, { numero: 8, ocupado: false }, { numero: 9, ocupado: true },
                    { numero: 10, ocupado: true }, { numero: 11, ocupado: true }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: true }, { numero: 14, ocupado: true }, { numero: 15, ocupado: false }
                ]
            }
        ]
    },
    3: {
        nombre: "Cine C",
        salas: 4,
        capacidadPorSala: 20,
        sala: [
            {
                id: "01", pelicula: "El Caballero del Mar", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: false }, { numero: 3, ocupado: true },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: false }, { numero: 6, ocupado: false },
                    { numero: 7, ocupado: true }, { numero: 8, ocupado: true }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: false }, { numero: 11, ocupado: false }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: false }, { numero: 15, ocupado: false },
                    { numero: 16, ocupado: false }, { numero: 17, ocupado: false }, { numero: 18, ocupado: false },
                    { numero: 19, ocupado: false }, { numero: 20, ocupado: true }
                ]
            },
            {
                id: "02", pelicula: "Colorín colorado", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: true }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: false }, { numero: 6, ocupado: false },
                    { numero: 7, ocupado: true }, { numero: 8, ocupado: false }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: false }, { numero: 11, ocupado: false }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: true }, { numero: 15, ocupado: true },
                    { numero: 16, ocupado: false }, { numero: 17, ocupado: false }, { numero: 18, ocupado: false },
                    { numero: 19, ocupado: true }, { numero: 20, ocupado: false }
                ]
            },
            {
                id: "03", pelicula: "Happy House 2", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: false }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: true }, { numero: 6, ocupado: false },
                    { numero: 7, ocupado: true }, { numero: 8, ocupado: true }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: true }, { numero: 11, ocupado: false }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: false }, { numero: 15, ocupado: false },
                    { numero: 16, ocupado: false }, { numero: 17, ocupado: true }, { numero: 18, ocupado: false },
                    { numero: 19, ocupado: false }, { numero: 20, ocupado: false }
                ]
            },
            {
                id: "04", pelicula: "SuperPerro", asientos: [
                    { numero: 1, ocupado: false }, { numero: 2, ocupado: false }, { numero: 3, ocupado: false },
                    { numero: 4, ocupado: false }, { numero: 5, ocupado: true }, { numero: 6, ocupado: true },
                    { numero: 7, ocupado: true }, { numero: 8, ocupado: false }, { numero: 9, ocupado: false },
                    { numero: 10, ocupado: false }, { numero: 11, ocupado: false }, { numero: 12, ocupado: false },
                    { numero: 13, ocupado: false }, { numero: 14, ocupado: true }, { numero: 15, ocupado: true },
                    { numero: 16, ocupado: true }, { numero: 17, ocupado: true }, { numero: 18, ocupado: true },
                    { numero: 19, ocupado: true }, { numero: 20, ocupado: true }
                ]
            },
            
        ]
    }
}

function mostrarPelicula() {
    const cineReserva = document.querySelector('select').value;
    let salaReserva = document.getElementById('numeroSala').value;
    const resultadoReserva = document.getElementById('resultadoReserva');

    if (!cineReserva || !salaReserva || isNaN(salaReserva)) {
        resultadoReserva.textContent = 'Seleccione un cine e ingrese un número de sala válido';
        return;
    }
    salaReserva = String(salaReserva).padStart(2,'0');

    const cineSeleccionado = cines[cineReserva];
    const salaSeleccionada = cineSeleccionado.sala.find(s => s.id === salaReserva);
    if(!salaSeleccionada) {
        resultadoReserva.textContent = `La sala ${salaReserva} no existe.`;
        return;
    }
    let pelicula = salaSeleccionada.pelicula;

    console.log(pelicula);
    resultadoReserva.textContent = `La película es "${pelicula}"`
}

function reservarAsiento() {
    const cineReserva = document.querySelector('select').value;
    const salaReserva = document.getElementById('numeroSala').value;
    const asientoReserva = document.getElementById('numeroAsiento').value;
    const resultadoReserva = document.getElementById('resultadoReserva');

    if (!cineReserva || isNaN(salaReserva) || !salaReserva || !asientoReserva || isNaN(asientoReserva)) {
        resultadoReserva.textContent = 'Seleccione un cine e ingrese un número de sala y asiento válido';
        return;
    }

    const salaId = String(salaReserva).padStart(2,'0');
    const asientoId = Number(asientoReserva);

    const cine = cines[cineReserva];
    const sala = cine.sala.find(s => s.id === salaId);
    if (!sala) {
        resultadoReserva.textContent = `La sala ${salaReserva} no existe.`;
        return;
    }
    const asiento = sala.asientos.find (a=>a.numero === asientoId);
    if (!asiento) {
        resultadoReserva.textContent = `El asiento ${asientoReserva} no existe.`;
        return;
    }

    //Disponibilidad
    if (asiento.ocupado) {
        resultadoReserva.textContent = `El asiento ${asientoReserva} ya está ocupado.`;
        return;
    } else {
        asiento.ocupado = true;
        resultadoReserva.textContent = `El asiento ${asientoReserva} ha sido reservado.`;
        return;
    
    }
}

function cancelarReserva() {
    const cineReserva = document.querySelector('select').value;
    const salaReserva = document.getElementById('numeroSala').value;
    const asientoReserva = document.getElementById('numeroAsiento').value;
    const resultadoReserva = document.getElementById('resultadoReserva');

    if (!cineReserva || isNaN(salaReserva) || !salaReserva || !asientoReserva || isNaN(asientoReserva)) {
        resultadoReserva.textContent = 'Seleccione un cine e ingrese un número de sala y asiento válido';
        return;
    }

    const salaId = String(salaReserva).padStart(2,'0');
    const asientoId = Number(asientoReserva);
    const cine = cines[cineReserva];
    const sala = cine.sala.find(s=>s.id === salaId);

    if (!sala) {
        resultadoReserva.textContent = `La sala ${salaReserva} no existe.`;
        return;
    }
    const asiento = sala.asientos.find (a=>a.numero === asientoId);
    if (!asiento) {
        resultadoReserva.textContent = `El asiento ${asientoReserva} no existe.`;
        return;
    }
    // Verificar y cancelar
    if (!asiento.ocupado){
        resultadoReserva.textContent = `El asiento ${asientoReserva} no está reservado.`;
        return;
    }else {
        asiento.ocupado = false;
        resultadoReserva.textContent = `La reserva del asiento ${asientoReserva} ha sido cancelada.`;
        return;
    }
}

function mostrarDisponibles() {
    const cineReserva = document.querySelector('select').value;
    const salaReserva = document.getElementById('numeroSala').value;
    const resultadoReserva = document.getElementById('resultadoReserva');

    if (!cineReserva || isNaN(salaReserva) || !salaReserva) {
        resultadoReserva.textContent = 'Seleccione un cine e ingrese un número de sala y asiento válido';
        return;
    }
    const salaId = String(salaReserva).padStart(2,'0');
    const cine = cines[cineReserva];

    const sala = cine.sala.find(s=>s.id === salaId);
    if (!sala) {
        resultadoReserva.textContent = `La sala ${salaReserva} no existe.`;
        return;
    }
    const asientosDisponibles = sala.asientos.filter(a=>!a.ocupado);
    const asientosOcupados = sala.asientos.filter(a=> a.ocupado);

    resultadoReserva.innerHTML = 
        `<p>La sala ${salaReserva} tiene ${sala.asientos.length} asientos y cuenta con ${asientosDisponibles.length} asientos disponibles.</p>
        <p><strong> > Asientos Disonibles: </strong>${asientosDisponibles.map(a=>a.numero).join(', ')}</p>
        <p><strong> > Asientos Ocupados: </strong>${asientosOcupados.map(a=>a.numero).join(', ')}</p>
        `;    

}