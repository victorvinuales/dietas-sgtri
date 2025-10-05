document.addEventListener("DOMContentLoaded", () => {
  const categoriaSelect = document.getElementById("categoria");
  const tipoPagoSelect = document.getElementById("tipo-pago");
  const tipoProyecto = document.getElementById("tipoProyecto");
  const infoDecreto = document.getElementById("infoDecreto");
  const btnAddProyecto = document.getElementById("btn-add-proyecto");
  const proyectosContainer = document.getElementById("proyectos-container");

  let proyectoCounter = 1;

  // Función para crear un nuevo grupo de proyecto
  function crearNuevoProyecto() {
    proyectoCounter++;
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.className = "proyecto-grupo";
    nuevoProyecto.dataset.proyectoId = proyectoCounter;

    nuevoProyecto.innerHTML = `
      <div class="form-group">
        <label for="responsable-${proyectoCounter}">Responsable: D./D.ª</label>
        <input type="text" id="responsable-${proyectoCounter}" name="responsable-${proyectoCounter}" required />
      </div>
      <div class="form-group">
        <label for="organica-${proyectoCounter}">Orgánica</label>
        <input type="text" id="organica-${proyectoCounter}" name="organica-${proyectoCounter}" 
               pattern="^[0-9A-Za-z]{2}(\.[0-9A-Za-z]{2}){0,4}$" 
               placeholder="XX.XX.XX.XX.XX" required />
      </div>
      <div class="form-group">
        <label for="referencia-${proyectoCounter}">Referencia del proyecto</label>
        <input type="text" id="referencia-${proyectoCounter}" name="referencia-${proyectoCounter}" required />
      </div>
      <button type="button" class="btn-eliminar-proyecto">Eliminar proyecto</button>
    `;

    proyectosContainer.appendChild(nuevoProyecto);
    
    // Mostrar el botón de eliminar en el primer proyecto
    if (proyectoCounter === 2) {
      const primerProyecto = proyectosContainer.querySelector('.proyecto-grupo');
      const primerBotonEliminar = primerProyecto.querySelector('.btn-eliminar-proyecto');
      primerBotonEliminar.style.display = 'block';
    }

    return nuevoProyecto;
  }

  // Eventos para añadir/eliminar proyectos
  btnAddProyecto.addEventListener("click", crearNuevoProyecto);

  proyectosContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar-proyecto")) {
      const grupo = e.target.closest(".proyecto-grupo");
      grupo.remove();

      // Si solo queda un proyecto, ocultar su botón de eliminar
      const proyectos = proyectosContainer.querySelectorAll('.proyecto-grupo');
      if (proyectos.length === 1) {
        const botonEliminar = proyectos[0].querySelector('.btn-eliminar-proyecto');
        botonEliminar.style.display = 'none';
      }
    }
  });

  // Cargar datos desde el JSON
  fetch("assets/data/datos.json")
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar el JSON");
      return response.json();
    })
    .then(data => {
      // -------------------------
      // 1️⃣ Rellenar "En calidad de"
      // -------------------------
      data.categorias.forEach(([text, value], index) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        if (index === 0) option.selected = true; // seleccionar primera
        categoriaSelect.appendChild(option);
      });

      // -------------------------
      // 2️⃣ Rellenar "Pago en"
      // -------------------------
      data.pagos.forEach(([text, value], index) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        if (index === 0) option.selected = true; // seleccionar primera
        tipoPagoSelect.appendChild(option);
      });

      // -------------------------
      // 3️⃣ Rellenar "Tipo de proyecto"
      // -------------------------
      data.tiposProyecto.forEach(([text, value], index) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        if (index === 0) option.selected = true; // seleccionar primera
        tipoProyecto.appendChild(option);
      });

      // -------------------------
      // 4️⃣ Texto informativo inicial (según la primera opción)
      // -------------------------
      actualizarTextoDecreto(tipoProyecto.value);

      // -------------------------
      // 5️⃣ Actualizar al cambiar el tipo de proyecto
      // -------------------------
      tipoProyecto.addEventListener("change", () => {
        actualizarTextoDecreto(tipoProyecto.value);
      });
    })
    .catch(error => console.error("Error cargando datos del JSON:", error));

  // 🔹 Función auxiliar para cambiar el texto según el tipo de proyecto
  function actualizarTextoDecreto(valor) {
    if (["G24", "PEI", "NAL"].includes(valor)) {
      infoDecreto.innerHTML = `
        Los cálculos se efectuarán en base al 
        <strong>RD 462/2002 (Gobierno de España)</strong>.  
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2002-10337"
           target="_blank" rel="noopener noreferrer">
           Ver Real Decreto
        </a>
      `;
    } else if (valor) {
      infoDecreto.innerHTML = `
        Los cálculos se efectuarán en base al 
        <strong>Decreto 42/2005 (Junta de Extremadura)</strong>.  
        <a href="https://doe.juntaex.es/otrosFormatos/html.php?xml=2025040078&anio=2025&doe=1010o"
           target="_blank" rel="noopener noreferrer">
           Ver Decreto
        </a>
      `;
    } else {
      infoDecreto.textContent = "";
    }
  }
});
