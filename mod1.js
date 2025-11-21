document.addEventListener("DOMContentLoaded", () => {
  const horarios = {
    "1A":[
      ["Lunes", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica","Taller Carpintería","Taller Carpintería","Taller Carpintería","Taller Carpintería","Taller Carpintería"],
      ["Martes", "F.E. y C.","F.E. y C.","Matemática","Matemática","Biología","Biología","Matemática"],
      ["Miércoles", "Dibujo Técnico","Dibujo Técnico","Geografía","Matemática","Matemática","Música","Ed Física Mujeres","Ed Física Mujeres"],
      ["Jueves", "Lengua y Literatura","Lengua y Literatura","Biología","Biología","Lengua y Literatura","Música","Música"],
      ["Viernes", "Lengua y Literatura","Lengua y Literatura","Geografía","Geografía","Geografía","Educación Física Varones","Educación Física Varones","Educación Física Mujeres","Educación Física Mujeres"]
    ],
    "1B":[
      ["Lunes", "Educación Tecnológica","Educación Tecnológica","Dibujo Técnico","Dibujo Técnico","Inglés","Inglés","Inglés"],
      ["Martes", "F.E. y C.","F.E. y C.","Matemática","Matemática","Biología","Biología","Matemática"],
      ["Miércoles", "Dibujo Técnico","Dibujo Técnico","Geografía","Matemática","Matemática","Música"],
      ["Jueves", "Lengua y Literatura","Lengua y Literatura","Biología","Biología","Lengua y Literatura","Música","Música"],
      ["Viernes", "Lengua y Literatura","Lengua y Literatura","Geografía","Geografía","Geografía"]
    ],
    "1C":[
      ["Lunes","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica"],
      ["Martes","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica","Taller Metalmecánica"],
      ["Miércoles","Taller Carpintería","Taller Carpintería","Taller Carpintería","Taller Carpintería","Taller Carpintería"],
      ["Jueves","Taller Carpintería","Taller Carpintería","Taller Carpintería","Taller Carpintería","Taller Carpintería"],
      ["Viernes","Educación Física Varones","Educación Física Varones","Educación Física Mujeres","Educación Física Mujeres"]
    ]
    // Aquí puedes agregar el resto de los cursos 1D, 2A...6C siguiendo el mismo patrón
  };

  const cursoSelect = document.getElementById("curso");
  const divisionSelect = document.getElementById("division");
  const horarioDiv = document.getElementById("horario");
  const btnMostrar = document.getElementById("btnMostrar");

  function mostrarHorario() {
    const clave = cursoSelect.value + divisionSelect.value;
    const horario = horarios[clave];

    if (!horario) {
      horarioDiv.innerHTML = "<p>No hay horario cargado para esta combinación.</p>";
      return;
    }

    let maxModulos = 0;
    horario.forEach(dia => {
      if (dia.length - 1 > maxModulos) maxModulos = dia.length - 1;
    });

    let html = "<table border='1' style='border-collapse: collapse; width: 100%;'><tr><th>Día</th>";
    for (let i = 1; i <= maxModulos; i++) html += `<th>${i}°</th>`;
    html += "</tr>";

    horario.forEach(dia => {
      html += "<tr>";
      html += `<td>${dia[0]}</td>`;
      for (let i = 1; i <= maxModulos; i++) html += `<td>${dia[i] || ""}</td>`;
      html += "</tr>";
    });

    html += "</table>";
    horarioDiv.innerHTML = html;
  }

  btnMostrar.addEventListener("click", mostrarHorario);
});


