const horarios = {
  
  "1A": [ 
    ["Lunes", "Dibujo Técnico", "Dibujo Técnico","Geografía","Geografía","Biología","Biología"],
    ["Martes", "Matemática", "Matemática", "Lengua y Literatura", "Lengua y Literatura", "Lengua y Literatura", "E. Tecnológica", "E. Tecnológica"],
    ["Miércoles", "Geografía", "Geografía", "Biología", "Biología", "Lengua y Literatura", "Lengua y Literatura"],
    ["Jueves", "Inglés", "Inglés", "Dibujo Técnico", "Dibujo Técnico", "F.E. y C.", "F.E. y C.", "Inglés"],
    ["Viernes", "Matemática", "Matemática", "Matemática", "Música", "Música","Música"],
  ],
  "1B": [
    ["Lunes", "Educación Tecnológica", "Educación Tecnológica","Dibujo Técnico" ,"Dibujo Técnico","Inglés","Inglés","Inglés"],
    ["Martes", "F.E. y C.", "F.E. y C.", "Matemática", "Matemática", "Biología", "Biología", "Matemática"],
    ["Miércoles", "Dibujo Técnico", "Dibujo Técnico", "Geografía", "Matemática", "Matemática", "Música"],
    ["Jueves", "Lengua y Literatura", "Lengua y Literatura", "Biología", "Biología", "Lengua y Literatura", "Música", "Música"],
    ["Viernes", "Lengua y Literatura", "Lengua y Literatura", "Geografía", "Geografía", "Geografía"],
  ],
  "1C":[
    ["Lunes","Lengua y Literatura","Lengua y Literatura","Biología","Biología","Geografía","Geografía"],
    ["Martes","Inglés","Inglés","Inglés","Lengua y Literatura","Biología","Biología"],
    ["Miércoles","Matemática","Matemática","Geografía","Geografía","Musica","Dibujo Técnico","Dibujo Técnico"],
    ["Jueves","Lengua y Literatura","Lengua y Literatura","F.E. y C.","F.E. y C.","Educación Tecnológica","Educación Tecnológica"],
    ["Viernes","Música","Música","Matemática","Matemática","Matemática","Dibujo Técnico","Dibujo Técnico"],
  ],
    
  "1D":[
    ["Lunes","Matemática" ,"Matemática" , "Matemática","Biología","Biología"],
    ["Martes","Geografía", "Geografía" ,"Educación Tecnológica","Educación Tecnológica","F.E. y C.", "F.E. y C."],
    ["Miércoles","Geografía" , "Geografía","Matemática" ,"Matemática" ,"Dibujo Técnico", "Dibujo Técnico","Musica"],
    ["Jueves", "Biología","Biología","Inglés","Inglés","Inglés", "Lengua y Literatura", "Lengua y Literatura"],
    ["Viernes","Musica","Musica", "Lengua y Literatura", "Lengua y Literatura", "Lengua y Literatura","Dibujo Técnico", "Dibujo Técnico"],
  ],
  "2A": [
    ["Lunes", "Fisicoquímica", "Fisicoquímica", "Lengua y Literatura", "Lengua y Literatura", "Fisicoquímica", "Fisicoquímica"],
    ["Martes", "Matemática", "Matemática", "F.E.y C.", "F.E. y C.", "Dibujo Técnico", "Dibujo Técnico"],
    ["Miércoles", "Matemática", "Matemática", "Historia", "Historia", "Inglés", "Inglés", "Inglés"],
    ["Jueves", "Educación Tecnológica", "Educación Tecnológica", "Historia", "Historia", "Dibujo Técnico", "Dibujo Técnico"],
    ["Viernes", "Lengua y Literatura", "Lengua y Literatura", "Lengua y Literatura", "Artes Visuales", "Artes Visuales", "Artes Visuales", "Matemática"],
  ],
  "2B":[
    ["Lunes","Ed. Artística: Artes Visuales","Ed. Artística: Artes Visuales","Matemática","Matemática","Lengua y Literatura","Lengua y Literatura","Ed. Artística: Artes Visuales"],
    ["Martes","Físicoquímica","Físicoquímica","Dibujo Técnico","Dibujo Técnico","Lengua y Literatura","Historia","Historia"],
    ["Miércoles","Inglés","Inglés","Inglés","Fisicoquímica","Fisicoquímica"],
    ["Jueves","Matemática","Matemática","Historia","Historia","Matemática","Lengua y Literatura","Lengua y Literatura"],
    ["Viernes","F.E. y C.","F.E. y C.","Dibujo Técnico","Dibujo Técnico"],
  ],
  "2C":[
    ["Lunes","Fisicoquímica","Fisicoquímica","Ed. Artística: Artes Visuales","Ed. Artística: Artes Visuales","Ed. Artística: Artes Visuales"],
    ["Martes","Lengua y Literatura","Lengua y Literatura","Lengua y Literatura","Historia","Historia","Dibujo Técnico","Dibujo Técnico"],
    ["Miércoles","Fisicoquímica","Fisicoquímica","Matemática","Matemática","Matemática","Dibujo Técnico","Dibujo Técnico"],
    ["Jueves","Historia","Historia","Lengua y Literatura","Lengua y Literatura","Inglés","Inglés"],
    ["Viernes","Matemática","Matemática","F.E. y C.","F.E. y C.","Inglés","Educación Tecnológica","Educación Tecnológica"],
  ],
  "2D": [
    ["Lunes", "Educacion tecnologica", "Educacion Tecnologica", "Ingles", "Ingles", "Dibujo tecnico","Dibujo tecnico"],
    ["Martes", "historia","historia","fisicoquim.","Fisicoquim.","Matemática", "Matemática"],
    ["Miércoles", "Lengua y Literatura", "Lengua y Literatura","fisicoquim.","Fisicoquim.","Historia", "Historia"],
    ["Jueves","Lengua y Literatura", "Lengua y Literatura","Lengua y Literatura", "Dibujo Técnico", "Dibujo Técnico", "F.E.y C.", "F.E. y C."],
    ["Viernes", "Artes Visuales", "Artes Visuales", "Artes Visuales", "Matemática", "Matemática", "Matemática","Inglés"],
  ],
  "3A": [
    ["Lunes", "Hardware I", "Hardware I", "Software I", "Software I", "Software I","Física", "Física"],
    ["Martes", "Inglés","Inglés","Inglés","Historia","Historia", "Histria"],
    ["Miércoles", "TIC", "TIC","TIC","Hardware", "Hardware", "Materiales y Procesos", "Materiales y Procesos"],
    ["Jueves","Mat y Procesos", "Mat y Procesos","Matemática", "Lengua y Literatura", "Lengua y Literatura", "Lengua y Literatura", "Física"],
    ["Viernes", "Software I", "Software I", "F.E. y C.", "F.E. y C.", "Matemática","Matemática", "Matemática"],
  ],
  "3B":[
    ["Lunes","Matemática","Matemática","Conocim. de los materiales","Conocim. de los materiales","Representación Gráfica e Interpretación de Planos I","Representación Gráfica e Interpretación de Planos I","Representación Gráfica e Interpretación de Planos I","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Mecanica","Taller de Mecanica","Taller de Mecanica","Taller de Mecanica","Taller de Mecanica"],
    ["Martes","Historia","Historia","Historia","Física","Repr. Gráfica","F.E.y C.","F.E. y C.","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Mecanica","Taller de Mecanica","Taller de Mecanica","Taller de Mecanica","Taller de Mecanica"],
    ["Miércoles","Lengua y Literatura","Lengua y Literatura","Lengua y Literatura","Matemática","Matemática","Matemática","Inglés","Educación Física Varones","Educación Física Varones"],
    ["Jueves", "Concocimiento de los Materiales","Conocimiento de los Materiales","Matemática","Química","Química","Química"],
    ["Viernes","Inglés","Inglés","Física","Física","Física"],
  ],
  "3C": [
    ["Lunes", "Conoc. de los Materiales", "Conoc. de los Materiales", "Matemática", "Matemática", "Matemática","Rep. Gráf. e Int de Planos", "Rep. Gráf. e int de Planos","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica"],
    ["Martes", "Física","Física","Matemática","Matemática","Matemática", "Rep. Gráf. e Int de Planos", "Rep. Gráf. e Int de Planos"],
    ["Miércoles", "Conoc. de los Materiales", "Conoc. de los Materiales","Lengua y Literatura","Lengua y Literatura", "Lengua y Literatura", "Lengua y Literatura", "Lengua y Literatura","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Mecánica","Taller Mecánica","Taller Mecánica","Taller Mecánica","Taller Mecánica"],
    ["Jueves","Química", "Química","Química", "F.E. y C.", "F.E. y C.", "Física", "Física"],
    ["Viernes", "Historia", "Historia", "Historia", "Inglés", "Inglés","Inglés"]
  ],
  "4A": [
    ["Lunes", "Matemática", "Matemática", "Economía", "Economía", "Geografía","Geografía", "Geografía","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática"],
    ["Martes", "Hardware II","Hardware II","Software II","Software II","Economía", "Economía","Taller Informática","Taller Informática","Taller Informática","Taller Informática","Taller Informática"],
    ["Miércoles", "Inglés", "Inglés","Inglés","Software II", "Software II", "Hardware II", "Hardware II"],
    ["Jueves","Fundamentos de Gestión", "Fundamentos de Gestión","Fundamentos de Gestión", "Lengua y Literatura", "Lengua y Literatura", "Lengua y Literatura"],
    ["Viernes", "Matemática", "Matemática", "Automatización y Control", "Automatización y Control", "Automatización y Control","F.E. y C.", "F.E. y C."]
  ],
  "4B": [
    ["Lunes","Repr. Gráfica e Int. de Planos II","Repr. Gráfica e Int. de Planos II","Lengua y Literatura","Lengua y Literatura","Mecánica Técnica","Matemática","Matemática","Ed física Mujeres", "Ed física Mujeres"],
    ["Martes","Introd. a los Circ. Eléct.","Introd. a los Circ. Eléct.","Mecánica Técnica","Mecánica Técnica","Mecánica Técnica","Intr. A los Circ. Electr."],
    ["Miércoles","F. E. y C.","F. E. y C.","Gestión y comercialización","Gestión y comercialización","Geografía","Geografía","Geografía"],
    ["Jueves","Introducción a los Circuitos Electronicos","Introducción a los Circuitos Electronicos","Inglés","Inglés","Lengua y Literatura","Matemática","Matemática"],
    ["Viernes","Gestión y Comercialización","Gestión y Comercialización","Laboratorio de Ensayo de los Materiales","Laboratorio de Ensayo de los Materiales","Laboratorio de Ensayo de los Materiales","Inglés"],
  ],
  "4C": [
    ["Lunes", "Lengua y Literatura", "Lengua y Literatura", "Mecánica Técnica", "Mecánica Técnica", "Inglés","Inglés", "Inglés"],
    ["Martes", "Introducción a los Circuitos","Introducción a los Circuitos Eléctricos","Gestión y Comercialización","Gestión y Comercialización","Introd. a los Circ. Electricos", "Laboratorio de Ensayo de los Materiales","Gestión y Comercialización","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Electricidad","Taller Mecánica","Taller Mecánica","Taller Mecánica","Taller Mecánica","Taller Mecánica"],
    ["Miércoles", "Geografía", "Geografía","Geografía","F.E. y C.", "F.E. y C.", "Mecánica Técnica", "Mecánica Técnica"],
    ["Jueves","Rep. Gráfica e Int. De Planos", "Rep. Gráfica e Int. De Planos","Matemática", "Introducción a los Circuitos Eléctricos", "Introducción a los Circuitos Eléctricos", "Gestión y Comerc.", "Lengua y Literatura","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller Mecánica","Taller Mecánica","Taller Mecánica","Taller Mecánica","Taller Mecánica"],
    ["Viernes", "Matemática", "Matemática", "Automatización y Control", "Automatización y Control", "Automatización y Control","F.E. y C.", "F.E. y C."],
  ], 
  "5A": [
    ["Lunes", "Inglés", "Inglés", "Software III", "Software III", "Lengua y Literatura","Lengua y Literatura", "Lengua y Literatura"],
    ["Martes", "Org. Y Gestión","Org. Y Gestión","Hardware III","Hardware III","Program.", "Software III", "Software III"],
    ["Miércoles", "Procesos Productivos", "Procesos Productivos","Procesos Productivos","F.E. y C", "F.E. y C", "Matemática", "Matemática","Taller Informática","Taller Informática","Taller Informática","Taller Informática","Taller Informática"],
    ["Jueves","Marco Jurídico", "Marco Jurídico","Marco Jurídico", "Organización y Gestión", "Organización y Gestión"],
    ["Viernes", "Matemática", "Matemática", "Programación", "Programación", "Programación","Hardware III", "Hardware III"],
  ],
  "5B": [
    ["Lunes","Taller Automatismo","Taller Automatismo","Taller Automatismo","Taller Automatismo","Taller Automatismo","CNC","CNC","CNC","CNC","CNC","Máquinas y Comandos Eléctricos","Máquinas y Comandos Eléctricos","Ed Física Mujeres", "Ed Física Mujeres"],
    ["Martes","Taller Automatismo","Taller Automatismo","Taller Automatismo","Taller Automatismo","Taller Automatismo","CNC","CNC","CNC","CNC","CNC","Termodinámica y maq. termicas","Termodinámica y maq. termicas"],
    ["Miércoles","Matemática","Matemática","Matemática","Máquinas y Comandos Electricos","Máquinas y Comandos Electricos","Organización Industrial","Organización Industrial","Elementos de transporte y transmisión mecánica","Elementos de transporte y transmisión mecánica","Elementos de transporte y transmisión mecánica","Elementos de transporte y transmisión mecánica","Elementos de transporte y transmisión mecánica","Ed Física Mujeres", "Ed Física Mujeres"],
    ["Jueves","F.E. y C.","F.E. y C.","Lengua y Literatura","Lengua y Literatura","Lengua y Literatura","Termodinámica","Procesos de Fabricación"],
    ["Viernes","Termodinámica Máquinas Térmicas","Termodinámica Máquinas Térmicas","Inglés","Inglés","Procesos de Fabric.","Procesos de Fabric."],
  ],
  "5C": [
    ["Lunes","Elementos de trans. Mec.","Elementos de trans. Mec.","Elementos de trans. Mec.","Termodinámica y Máquinas Térmicas","Termodinámica y Máquinas Térmicas","Matemática","Proc. de Fab. Ind.","Proc. de Fabricacion ind.","Taller Automatización","Taller Automatización", "Taller Automatización", "Taller Automatización", "Taller Automatización", "Taller CNC", "Taller CNC", "Taller CNC", "Taller CNC", "Taller CNC"],
    ["Martes","F.E. y C.","F.E. y C.","Electronica","Termod y Maq Termicas","Electronica","Proc. de Fabricacion ind.","","Taller Automatización", "Taller Automatización", "Taller Automatización", "Taller Automatización", "Taller CNC", "Taller CNC", "Taller CNC", "Taller CNC", "Taller CNC"],
    ["Miércoles","Matemática","Matemática","Lengua y Literatura","Lengua y Literatura","Lengua y Literatura","Máquinas y Comandos Electricos","Máquinas y Comandos Electricos"],
    ["Jueves","Termodinámica y Máquinas Térmicas","Termodinámica y Máquinas Térmicas","Electrónica","Electrónica","Electrónica","Organización Industrial","Organización Industrial"],
    ["Viernes","Elementos de trans. Mec.","Elementos de trans. Mec.","Inglés","Inglés","Maq y Comandos Electricos","Maq y Comandos Electricos"],
  ],
  "6A": [
    ["Lunes", "Redes", "Redes", "Proyecto Tecnológico", "Proyecto Tecnológico", "Proyecto Tecnológico","Programación", "Programación"],
    ["Martes", "Matemática","Matemática","Matemática","Proyecto Tecnológico","Organización y Gestión Comercial", "Organización y Gestión Comercial", "Software IV"],
    ["Miércoles", "Hardware IV", "Hardware IV","Hardware IV","Lengua y Literatura", "Lengua y Literatura", "Programación", "Programación","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes"],
    ["Jueves","Inglés Técnico", "Inglés Técnico","Redes", "Redes", "Software", "Software", "Organización y Gestión Comercial","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes"],
    ["Viernes", "F.E. Profesional", "F.E. Profesional"]
  ],
  "6B": [
    ["Lunes", "F.E. y C.", "F.E. y C.", "Marco Jurídico", "Marco Jurídico", "Marco Jurídico","Economía", "Economía"],
    ["Martes", "Lengua y Literatura","Lengua y Literatura","Mantenimiento y Ensayo","Mantenimiento y Ensayo","Matemática", "Matemática"],
    ["Miércoles", "Mant. y Ensayos de Eq. Electromec.", "Mant. y Ensayos de Eq. Electromec.","Sist. De Control","Sist. De Control", "Sist. De Control", "Instal. eléct.", "Sist. de automat. y control"],
    ["Jueves","Proyecto y dis. de dispositiv electrom.", "Proyecto y dis. De dispositiv electrom.","Inglés", "Inglés", "Sist. de automatización y control", "Instal. eléctricas", "Instal. eléctricas","Automatización","Automatización","Automatización","Automatización","Automatización","CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM"],
    ["Viernes", "Prácticas Profesinalizantes", "Prácticas Profesinalizantes", "Prácticas Profesinalizantes", "Prácticas Profesinalizantes", "Prácticas Profesionalizantes","Prácticas Profesinalizantes"]
  ],
  "6C": [
    ["Lunes", "F.E. Profesional", "F.E. Profesional", "Marco Jurídico", "Marco Jurídico", "Marco Jurídico","Mant y Ensayo", "Mant y Ensayo","Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización","Taller CNC","Taller CNC","Taller CNC","Taller CNC","Taller CNC"],
    ["Martes","Sist. de control y automatización", "Sist. de control y automatización","Matemática", "Matemática", "Lengua y Literatura", "Lengua y literatura"],
    ["Miércoles", "Economía","Economía","Sistema de Control","Proy. Diseño Electrico","Inglés","Inglés","Instalaciones Electricas" ],
    ["Jueves","Proyecto y dis. de disp electrom.", "Proyecto y dis. De disp electrom.","Prác. Prof.", "Prác. Prof.", "Prác. Prof.", "Instalaciones eléctricas", "Instalaciones eléctricas"],
    ["Viernes","Prác. Prof.", "Prác. Prof.","Prác. Prof.","Prác. Prof.","Prác. Prof.","Mant y Ensayo","Mant y Ensayo","Prác. Prof.", "Prác. Prof.", "Prác. Prof.", "Prác. Prof.", "Prác. Prof.","Prác. Prof.","Automatización","Automatización","Automatización","Automatización","Automatización","CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM"]
    ],
  "Contraturno": [
    ["Lunes", "Taller de Electricidad", "Taller de Electricidad","Taller de Electricidad" ,"Taller de Electricidad","Taller de Electricidad"],
    [      "" ,"Taller Metalmecánica", "Taller Metalmecánica","Taller Metalmecánica","Taller Metalmécanica","Taller Metalmecánica"],
    [      "" ,"Taller Carpinteria","Taller Carpinteria","Taller Carpinteria","Taller Carpinteria","Taller Carpinteria"],
    ["Martes", "Taller de Electricidad", "Taller de Electricidad","Taller de Electricidad" ,"Taller de Electricidad","Taller de Electricidad"],
    [      "" ,"Taller Metalmecánica", "Taller Metalmecánica","Taller Metalmecánica","Taller Metalmécanica","Taller Metalmecánica"],
    [      "" ,"Taller Carpinteria","Taller Carpinteria","Taller Carpinteria","Taller Carpinteria","Taller Carpinteria"],
    ["Miércoles","","","","","","Ed. Física Mujeres","Ed. Física Mujeres"],
    ["Jueves"],
    ["Viernes", "Ed. Física Varones","Ed. Física Varones","Ed. Física Mujeres","Ed. Física Mujeres"],
    
    ["1° B"],
    ["Lunes", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad",  "Taller de Electricidad", "Taller de Electricidad"],
    ["", "Taller de Metalmecánica:Ajuste/Hojalateria","Taller de Metalmecánica:Ajuste/Hojalateria","Taller de Metalmecánica:Ajuste/Hojalateria","Taller de Metalmecánica:Ajuste/Hojalateria","Taller de Metalmecánica:Ajuste/Hojalateria"],
    ["", "Taller de Carpintería", "Taller de Carpintería", "Taller de Carpintería", "Taller de Carpintería", "Taller de Carpintería"],
    ["Martes", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad"],
    ["", "Taller Metalmecánica", "Taller Metalmecánica", "Taller Metalmecánica", "Taller Metalmecánica", "Taller Metalmecánica"],
    ["", "Taller de Carpintería", "Taller de Carpintería", "Taller de Carpintería", "Taller de Carpintería", "Taller de Carpintería"],
    ["Miércoles"],
    ["Jueves"],
    ["Viernes"],
    
    ["1° C"],
    ["Lunes", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad"],
    ["", "Taller de Metalmecánica",  "Taller de Metalmecánica", "Taller de Metalmecánica", "Taller de Metalmecánica", "Taller de Metalmecánica"],
    ["Martes", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad"],
    ["", "Taller de Metalmecánica", "Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica"],
    ["Miércoles", "Taller de Carpintería", "Taller de Carpintería","Taller de Carpintería","Taller de Carpintería","Taller de Carpintería"],
    ["Jueves", "Taller de Carpintería", "Taller de Carpintería","Taller de Carpintería","Taller de Carpintería","Taller de Carpintería"],
    ["Viernes", "Educación Física Varones", "Educación Física Varones"],
    ["", "Educación Física Mujeres", "Educación Física Mujeres"],

    ["1° D"],
    ["Lunes", "Taller de Electricidad", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["","Taller de Metalmecánica", "Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica"],
    ["Martes", "Taller de Electricidad", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad" ],
    ["", "Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica"],
    ["Miércoles"],
    ["Jueves", "Taller de Carpintería","Taller de Carpintería","Taller de Carpintería","Taller de Carpintería","Taller de Carpintería"],
    ["Viernes"],

    ["2° A"],
    ["Lunes", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad", "Taller de Electricidad"],
    ["", "Taller de Metalmecánica", "Taller de Metalmecánica", "Taller de Metalmecánica", "Taller de Metalmecánica", "Taller de Metalmecánica"],
    ["", "Taller Informática", "Taller Informática","Taller Informática","Taller Informática","Taller Informática" ],
    ["Martes", "Taller de Electricidad", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Máquinas Herramientas", "Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas" ],
    ["", "Taller Informática", "Taller Informática","Taller Informática","Taller Informática","Taller Informática"],
    ["Miércoles"],
    ["Jueves"],
    ["Viernes"],


    ["2° B"],
    ["Lunes", "Educación Física Mujeres", "Educación Física Mujeres", "", "", "Educación Física Varones", "Educación Física Varones"],
    ["Martes"],
    ["Miércoles", "Taller de Electricidad",  "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica"],
    ["", "Taller de Informática", "Taller de Informática", "Taller de Informática","Taller de Informática","Taller de Informática"],
    ["Jueves", "Taller de Electricidad", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["","Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas"],
    ["", "Taller de Informática", "Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática" ],
    ["Viernes", "","","","Educación Física Varones","Educación Física Varones","Educación Física Mujeres","Educación Física Mujeres"],


    ["2° C"],
    ["Lunes", "Educación Física Mujeres", "Educación Física Mujeres"],
    ["Martes", "Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Educación Física Varones","Educación Física Varones"],
    ["Miércoles", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica"],
    ["Jueves", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas" ],
    ["", "Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática" ],
    ["Viernes", "", "", "", "", "","Educación Física Mujeres","Educación Física Mujeres"],

    ["2° D"],
    ["Lunes", ],
    ["Martes", ],
    ["Miércoles","Taller de Elect.","Taller de Elect.","Taller de Elect.","Taller de Elect.","Taller de Elect."],
    ["", "Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica","Taller de Metalmecánica"],
    ["", "Taller Informática","Taller Informática","Taller Informática","Taller Informática","Taller Informática"],
    ["Jueves", "Taller de Electricidad", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas","Máquinas Herramientas"],
    ["", "Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática"],
    ["Viernes"],


    ["3° A"],
    ["Lunes"],
    ["Martes", "Taller Informática","Taller Informática","Taller Informática","Taller Informática","Taller Informática"],
    ["Miércoles"],
    ["Jueves"],
    ["Viernes"],


    ["3° B"],
    ["Lunes", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller Mecánica","Taller Mecánica","Taller Mecánica","Taller Mecánica","Taller Mecánica"],
    ["","","","","","","Educación Física Varones","Educación Física Varones"],
    ["Martes",],
    ["Miércoles", "","","Educación Física Varones","Educación Física Varones"],
    ["Jueves",],
    ["Viernes", "","","Educación Física Mujeres","Educación Física Mujeres"],




    ["3° C"],
    ["Lunes", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica"],
    ["Martes",],
    ["Miércoles", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica"], 
    ["Jueves",],
    ["Viernes",],
    
    


    ["4° A"],
    ["Lunes", "Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática"],
    ["Martes", "Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática"],
    ["Miércoles",],
    ["Jueves",],
    ["Viernes",],


    ["4° B"],
    ["Lunes", "Educación Física Mujeres", "Educación Física Mujeres","","",""],
    ["Martes", "", "", "", "Educación Física Varones", "Educación Física Varones"],
    ["Miércoles", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller de Mecánica", "Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica"],
    ["", "", "","","","", "Educación Física Mujeres", "Educación Física Mujeres"],
    ["Jueves", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica"],
    ["Viernes", "","","","","Educación Física Varones","Educación Física Varones",""],
    ["","","","","","","Educación Física Mujeres","Educación Física Mujeres"],


    ["4° C"],
    ["Lunes", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica"],
    ["Martes", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica"],
    ["Miércoles",],
    ["Jueves", "Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad","Taller de Electricidad"],
    ["", "Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica","Taller de Mecánica"],
    ["Viernes",],



    ["5° A"],
    ["Lunes", ],
    ["Martes", ],
    ["Miércoles", "Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática"],
    ["Jueves", "Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática","Taller de Informática"],
    ["Viernes",],



    ["5° B"],
    ["Lunes", "Educación Física Mujeres", "Educación Física Mujeres", "", "",""],
    ["Martes", ],
    ["Miércoles", "Elem. de trans. y transm. mec.","Elem. de trans. y transm. mec.","Elem. de trans. y transm. mec.","Elem. de trans. y transm. mec.","Elem. de trans. y transm. mec."],
    ["", "", "", "", "", "", "Educación Física Mujeres","Educación Física Mujeres"],
    ["Jueves", ],
    ["Viernes", "","Educación Física Varones","Educación Física Varones","Educación Física Varones",""],
    ["", "","","","","","Educación Física Mujeres","Educación Física Mujeres"],




    ["5° C"],
    ["Lunes", "Taller Automatización", "Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización"],
    ["", "Taller CNC", "Taller CNC","Taller CNC","Taller CNC","Taller CNC"],
    ["Martes", "Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización"],
    ["", "Taller CNC","Taller CNC","Taller CNC","Taller CNC","Taller CNC"],
    ["Miércoles",],
    ["Jueves",],
    ["Viernes","","","","Educación Física Varones", "Educación Física Varones","",""],
    ["", "","","","Educación Física Mujeres","Educación Física Mujeres","",""],



    ["6° A"],
    ["Lunes",],
    ["Martes",],
    ["Miércoles", "Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes"],
    ["Jueves","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes","Prácticas Profesionalizantes"],
    ["Viernes",],



    ["6° B"],
    ["Lunes",],
    ["Martes",],
    ["Miércoles",],
    ["Jueves", "Automatización", "Automatización", "Automatización","Automatización","Automatización"],
    ["", "CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM","CNC-CAD-CAM"],
    ["Viernes",],




    ["6° C"],
    ["Lunes",],
    ["Martes",],
    ["Miércoles","Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización"],
    ["","Taller CNC","Taller CNC","Taller CNC","Taller CNC","Taller CNC"],
    ["Jueves", "Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización","Taller Automatización"],
    ["", "Taller CNC-CAD-CAM","Taller CNC-CAD-CAM","Taller CNC-CAD-CAM","Taller CNC-CAD-CAM","Taller CNC-CAD-CAM"],
    ["Viernes",""],
  
  
  
  ]

   
  };
const btnMostrar = document.getElementById("btnMostrar");
const cursoSelect = document.getElementById("curso");
const divisionSelect = document.getElementById("division");
const horarioDiv = document.getElementById("horario");

function mostrarHorario() {
  const clave = cursoSelect.value + divisionSelect.value;
  const horario = horarios[clave];

  if (!horario) {
    horarioDiv.innerHTML = "<p>No hay horario cargado para esta combinación.</p>";
    return;
  }

  let html = "<table>";
  html += "<tr><th>Día</th><th>1°</th><th>2°</th><th>3°</th><th>4°</th><th>5°</th><th>6°</th><th>7°</th></tr>";

  horario.forEach(dia => {
    html += "<tr>";
    html += `<td style="font-weight: bold;">${dia[0]}</td>`;
    for (let i = 1; i <= 7; i++) {
      html += `<td>${dia[i] || ""}</td>`;
    }
    html += "</tr>";
  });

  html += "</table>";
  horarioDiv.innerHTML = html;
}

function filtrarCursos() {
  const contraturno = document.getElementById('contraturno').value;
  const cursoSelect = document.getElementById('cursoSelect');

  // Opciones de ejemplo: solo cursos disponibles en ciertos turnos
  const todosCursos = [
    { value: 'curso1A', text: 'Curso 1A', turnos: ['matutino', 'contraturno'] },
    { value: 'curso2B', text: 'Curso 2B', turnos: ['vespertino'] },
    { value: 'curso3C', text: 'Curso 3C', turnos: ['contraturno'] },
    // agregar más cursos
  ];

  // Limpiar opciones actuales
  cursoSelect.innerHTML = '';

  // Filtrar y agregar solo los cursos correspondientes
  todosCursos.forEach(curso => {
    if (contraturno === 'Contraturno') {
      // Mostrar solo cursos que tengan 'contraturno' en su turno
      if (curso.turnos.includes('ontraturno')) {
        const option = document.createElement('option');
        option.value = curso.value;
        option.textContent = curso.text;
        cursoSelect.appendChild(option);
      }
    } else {
      // Si no es contraturno, mostrar todos
      const option = document.createElement('option');
      option.value = curso.value;
      option.textContent = curso.text;
      cursoSelect.appendChild(option);
    }
  });
}
