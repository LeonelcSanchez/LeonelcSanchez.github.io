
function generarCalendario(mes, año, idTabla) {
  const diasMes = new Date(año, mes + 1, 0).getDate(); 
  const primerDia = new Date(año, mes, 1).getDay(); 

  const tabla = document.getElementById(idTabla);
  tabla.innerHTML = '';

  // ==== DÍAS ESPECIALES ====
  const diasEspeciales = {
    "0-1":  { tipo: "feriado", motivo: "Año Nuevo" },
    "2-24": { tipo: "feriado", motivo: "Día Nacional de la Verdad y la Justicia" },
    "3-2":  { tipo: "feriado", motivo: "Día del Veterano y de los Caídos en Malvinas" },
    "3-17": { tipo: "feriado", motivo: "Jueves Santo" },
    "3-18": { tipo: "feriado", motivo: "Viernes Santo" },
    "4-1":  { tipo: "feriado", motivo: "Día del Trabajador" },
    "4-2":  { tipo: "feriado", motivo: "Feriado" },
    "4-25": { tipo: "feriado", motivo: "Revolución de Mayo" },
    "5-17": { tipo: "feriado", motivo: "Día Nacional de la Libertad Latinoamericana" },
    "5-20": { tipo: "feriado", motivo: "Día de la Bandera" },
    "6-9":  { tipo: "feriado", motivo: "Día de la Independencia" },
    "7-15": { tipo: "feriado", motivo: "Feriado con fines turísticos" },
    "7-17": { tipo: "feriado", motivo: "Paso a la Inmortalidad" },
    "8-11": { tipo: "feriado", motivo: "Día de los Maestros" },
    "8-21": { tipo: "feriado", motivo: "Día del Estudiante" },
    "9-11": { tipo: "feriado", motivo: "Último día de la libertad de los pueblos originarios" },
    "9-12": { tipo: "feriado", motivo: "Día del Respeto a la Diversidad Cultural" },
    "10-15":{ tipo: "feriado", motivo: "Día de la Educación Técnica" },
    "10-21":{ tipo: "feriado", motivo: "Feriado" },
    "10-24":{ tipo: "feriado", motivo: "Día de la Soberanía Nacional" },
   
  };

  // ==== FUNCION QUE MARCA LA CELDA ====
  function aplicarDiaEspecial(celda, mes, dia) {
    const clave = `${mes}-${dia}`;
    const info = diasEspeciales[clave];
    if (!info) return;

    celda.classList.add(info.tipo);
    celda.title = info.motivo;

    const badge = document.createElement("div");
    badge.className = "motivo";
    badge.textContent = info.motivo;
    celda.appendChild(badge);
  }

  // ==== ARMAR CALENDARIO ====
  let fila = document.createElement('tr');
  for (let i = 0; i < primerDia; i++) {
    fila.appendChild(document.createElement('td'));
  }

  for (let dia = 1; dia <= diasMes; dia++) {
    if ((primerDia + dia - 1) % 7 === 0 && dia !== 1) {
      tabla.appendChild(fila);
      fila = document.createElement('tr');
    }

    const celda = document.createElement('td');
    celda.textContent = dia;

    aplicarDiaEspecial(celda, mes, dia);

    fila.appendChild(celda);
  }

  tabla.appendChild(fila);
}

// === GENERAR CALENDARIOS 2025 ===
generarCalendario(0, 2025, 'dias-enero');
generarCalendario(1, 2025, "dias-febrero");
generarCalendario(2, 2025, "dias-marzo");
generarCalendario(3, 2025, "dias-abril");
generarCalendario(4, 2025, "dias-mayo");
generarCalendario(5, 2025, "dias-junio");
generarCalendario(6, 2025, "dias-julio");
generarCalendario(7, 2025, "dias-agosto");
generarCalendario(8, 2025, "dias-septiembre");
generarCalendario(9, 2025, "dias-octubre");
generarCalendario(10, 2025, "dias-noviembre");
generarCalendario(11, 2025, "dias-diciembre");



