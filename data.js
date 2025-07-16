const malla = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Derecho Romano", creditos: 10 },
      { nombre: "Derecho Político", creditos: 10 },
      { nombre: "Teoría del Derecho", creditos: 10 },
      { nombre: "Historia del Derecho", creditos: 4 },
      { nombre: "Fundamentos Filosóficos", creditos: 4 },
      { nombre: "Técnicas para el manejo del estrés y la ansiedad frente a evaluaciones", creditos: 4 }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Derecho Económico I", creditos: 4 },
      { nombre: "Fundamentos Teológicos", creditos: 4 },
      { nombre: "Integración del Saber II", creditos: 4 }
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      { nombre: "Derecho Civil I", creditos: 5, prerrequisitos: ["Derecho Romano", "Teoría del Derecho"] },
      { nombre: "Derecho Procesal I", creditos: 5 },
      { nombre: "Derecho Constitucional I", creditos: 4, prerrequisitos: ["Derecho Político"] },
      { nombre: "Derecho Internacional Público I", creditos: 4, prerrequisitos: ["Derecho Político"] },
      { nombre: "Derecho Económico II", creditos: 4, prerrequisitos: ["Derecho Económico I"] },
      { nombre: "Derecho Canónico", creditos: 3, prerrequisitos: ["Fundamentos Teológicos"] },
      { nombre: "Integración del Saber III", creditos: 4 }
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      { nombre: "Derecho Civil II", creditos: 5, prerrequisitos: ["Derecho Civil I"] },
      { nombre: "Derecho Procesal II", creditos: 5, prerrequisitos: ["Derecho Procesal I"] },
      { nombre: "Derecho Constitucional II", creditos: 4, prerrequisitos: ["Derecho Constitucional I"] },
      { nombre: "Derecho Internacional Público II", creditos: 4, prerrequisitos: ["Derecho Internacional Público I"] },
      { nombre: "Derecho Económico III", creditos: 4, prerrequisitos: ["Derecho Económico II"] },
      { nombre: "Inglés I", creditos: 4 },
      { nombre: "Seminario Jurídico I", creditos: 4, prerrequisitos: ["Derecho Civil I", "Derecho Procesal I"] }
    ]
  },
  {
    semestre: "5° Semestre",
    ramos: [
      { nombre: "Derecho Civil III", creditos: 5, prerrequisitos: ["Derecho Civil II"] },
      { nombre: "Derecho Procesal III", creditos: 5, prerrequisitos: ["Derecho Procesal II"] },
      { nombre: "Derecho Penal I", creditos: 4, prerrequisitos: ["54 créditos"] },
      { nombre: "Derecho Comercial I", creditos: 4, prerrequisitos: ["Derecho Civil II"] },
      { nombre: "Derecho del Trabajo I", creditos: 4, prerrequisitos: ["Teoría del Derecho"] },
      { nombre: "Derecho Administrativo I", creditos: 4, prerrequisitos: ["Derecho Constitucional I"] },
      { nombre: "Integración del Saber IV", creditos: 4 }
    ]
  },
  {
    semestre: "6° Semestre",
    ramos: [
      { nombre: "Derecho Civil IV", creditos: 5, prerrequisitos: ["Derecho Civil III"] },
      { nombre: "Derecho Procesal IV", creditos: 5, prerrequisitos: ["Derecho Procesal III"] },
      { nombre: "Derecho Penal II", creditos: 4, prerrequisitos: ["Derecho Penal I"] },
      { nombre: "Derecho Comercial II", creditos: 4, prerrequisitos: ["Derecho Comercial I"] },
      { nombre: "Derecho del Trabajo II", creditos: 4, prerrequisitos: ["Derecho del Trabajo I"] },
      { nombre: "Derecho Administrativo II", creditos: 4, prerrequisitos: ["Derecho Administrativo I"] },
      { nombre: "Seminario Jurídico II", creditos: 4, prerrequisitos: ["Derecho Civil III", "Derecho Procesal III", "Seminario Jurídico I"] }
    ]
  },
  {
    semestre: "7° Semestre",
    ramos: [
      { nombre: "Derecho Civil V", creditos: 5, prerrequisitos: ["Derecho Civil IV"] },
      { nombre: "Derecho Procesal V", creditos: 5, prerrequisitos: ["Derecho Procesal IV"] },
      { nombre: "Derecho Penal III", creditos: 4, prerrequisitos: ["Derecho Penal II"] },
      { nombre: "Derecho Comercial III", creditos: 4, prerrequisitos: ["Derecho Comercial II"] },
      { nombre: "Seguridad Social", creditos: 3, prerrequisitos: ["Derecho del Trabajo I"] },
      { nombre: "Derecho Tributario I", creditos: 4, prerrequisitos: ["Derecho Económico III"] },
      { nombre: "Litigación", creditos: 3, prerrequisitos: ["Derecho Procesal IV"] },
      { nombre: "Ética Profesional", creditos: 4, prerrequisitos: ["54 créditos"] }
    ]
  },
  {
    semestre: "8° Semestre",
    ramos: [
      { nombre: "Derecho Civil VI", creditos: 5, prerrequisitos: ["Derecho Civil V"] },
      { nombre: "Derecho Procesal VI", creditos: 5, prerrequisitos: ["Derecho Procesal V"] },
      { nombre: "Derecho Penal IV", creditos: 4, prerrequisitos: ["Derecho Penal III"] },
      { nombre: "Derecho Comercial IV", creditos: 4, prerrequisitos: ["Derecho Comercial III"] },
      { nombre: "Derecho Tributario II", creditos: 4, prerrequisitos: ["Derecho Tributario I"] },
      { nombre: "Seminario Jurídico III", creditos: 4, prerrequisitos: ["Derecho Civil V", "Derecho Procesal V", "Seminario Jurídico II"] },
      { nombre: "Optativo de Profundización", creditos: 4, prerrequisitos: ["173 créditos"] }
    ]
  },
  {
    semestre: "9° Semestre",
    ramos: [
      { nombre: "Práctica Profesional", creditos: 12, prerrequisitos: ["Seminario Jurídico III"] },
      { nombre: "Derecho Civil VII", creditos: 5, prerrequisitos: ["Derecho Civil VI"] },
      { nombre: "Derecho Procesal VII", creditos: 5, prerrequisitos: ["Derecho Procesal VI"] },
      { nombre: "Anteproyecto de Investigación", creditos: 5, prerrequisitos: ["235 créditos"] },
      { nombre: "Derecho Internacional Privado", creditos: 3, prerrequisitos: ["Derecho Civil IV"] },
      { nombre: "Filosofía del Derecho", creditos: 3, prerrequisitos: ["Fundamentos Filosóficos"] },
      { nombre: "Optativo de Profundización", creditos: 4, prerrequisitos: ["173 créditos"] }
    ]
  },
  {
    semestre: "10° Semestre",
    ramos: [
      { nombre: "Derecho Civil VIII", creditos: 5, prerrequisitos: ["Derecho Civil VII"] },
      { nombre: "Tesina", creditos: 8, prerrequisitos: ["Anteproyecto de Investigación"] },
      { nombre: "Optativo de Profundización", creditos: 4, prerrequisitos: ["173 créditos"] },
      { nombre: "Optativo de Profundización", creditos: 4, prerrequisitos: ["173 créditos"] }
    ]
  }
];
