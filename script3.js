
const horarios = {
  "1A": [
    ["Lunes", "Matemática", "Lengua", "Educación Física"],
    ["Martes", "Ciencias Naturales", "Historia", "Tecnología"],
    ["Miércoles", "Geografía", "Lengua", "Educación Artística"],
    ["Jueves", "Matemática", "Inglés", "Educación Ciudadana"],
    ["Viernes", "Prácticas del Lenguaje", "Taller", "Taller"]
  ],
  "2B": [
    ["Lunes", "Inglés", "Matemática", "Taller"],
    ["Martes", "Lengua", "Ciencias Naturales", "Educación Física"],
    ["Miércoles", "Tecnología", "Geografía", "Taller"],
    ["Jueves", "Historia", "Lengua", "Taller"],
    ["Viernes", "Matemática", "Educación Ciudadana", "Taller"]
  ],
  "4C": [
    ["Lunes", "Control de Procesos", "Matemática", "Taller"],
    ["Martes", "Física", "Lengua", "Educación Física"],
    ["Miércoles", "Química", "Tecnología de los Materiales", "Taller"],
    ["Jueves", "Matemática", "Historia", "Taller"],
    ["Viernes", "Instrumentación", "Práctica Profesionalizante", "Taller"]
  ]
};

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const cursoSelect = document.getElementById("curso");
const divisionSelect = document.getElementById("division");
const horarioDiv = document.getElementById("horario");
const btnMostrar = document.getElementById("btnMostrar");

function mostrarHorario() {
  const clave = cursoSelect.value + divisionSelect.value;

  let horario = horarios[clave];

  if (!horario) {
    // Crear tabla vacía editable si no existe horario cargado
    horario = dias.map(dia => [dia, "", "", ""]);
  }

  let html = "<table><tr><th>Día</th><th>1° hora</th><th>2° hora</th><th>3° hora</th></tr>";
  horario.forEach((dia) => {
    html += `<tr>
      <td>${dia[0]}</td>
      <td contenteditable="true">${dia[1]}</td>
      <td contenteditable="true">${dia[2]}</td>
      <td contenteditable="true">${dia[3]}</td>
    </tr>`;
  });
  html += "</table>";

  horarioDiv.innerHTML = html;
}

btnMostrar.addEventListener("click", mostrarHorario);
