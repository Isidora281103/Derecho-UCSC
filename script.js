let creditosTotales = 0;
let ramoSeleccionado = null;
const creditosAprobados = document.getElementById("creditosAprobados");

window.onload = function () {
  const container = document.getElementById("malla-container");

  malla.forEach((sem) => {
    const box = document.createElement("div");
    box.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = sem.semestre;

    const lista = document.createElement("ul");
    lista.className = "ramos";

    sem.ramos.forEach((ramo) => {
      const item = document.createElement("li");
      item.className = "ramo";
      item.textContent = ramo.nombre;
      item.dataset.creditos = ramo.creditos;
      item.dataset.nombre = ramo.nombre;
      item.dataset.promedio = "0";

      if (ramo.prerrequisitos) {
        item.classList.add("bloqueado");
      }

      const promedio = document.createElement("div");
      promedio.className = "promedio";
      promedio.textContent = "Promedio: 0.0";

      item.appendChild(promedio);

      item.onclick = () => {
        if (item.classList.contains("bloqueado")) return;
        ramoSeleccionado = item;
        abrirModal(item.dataset.nombre);
      };

      lista.appendChild(item);
    });

    box.appendChild(title);
    box.appendChild(lista);
    container.appendChild(box);
  });
};

function abrirModal(nombre) {
  const modal = document.getElementById("modalNotas");
  const form = document.getElementById("formNotas");
  form.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    form.innerHTML += `
      <div class="nota-input">
        Nota ${i + 1}: <input type="number" min="1" max="7" step="0.1" id="nota${i}">
        Ponderación (%): <input type="number" min="0" max="100" id="pond${i}">
      </div>
    `;
  }

  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modalNotas").style.display = "none";
}

function guardarNotas() {
  let sumaNotas = 0;
  let sumaPond = 0;

  for (let i = 0; i < 3; i++) {
    const nota = parseFloat(document.getElementById(`nota${i}`).value) || 0;
    const pond = parseFloat(document.getElementById(`pond${i}`).value) || 0;

    sumaNotas += nota * (pond / 100);
    sumaPond += pond;
  }

  const promedio = sumaPond > 0 ? (sumaNotas).toFixed(1) : "0.0";
  ramoSeleccionado.dataset.promedio = promedio;
  ramoSeleccionado.querySelector(".promedio").textContent = `Promedio: ${promedio}`;

  if (!ramoSeleccionado.classList.contains("aprobado") && promedio >= 4.0) {
    ramoSeleccionado.classList.add("aprobado");
    creditosTotales += parseInt(ramoSeleccionado.dataset.creditos);
    creditosAprobados.textContent = creditosTotales;
  }

  cerrarModal();
}
