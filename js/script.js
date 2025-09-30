// Funciones para cambiar de página
function nextPage(current) {
  document.getElementById(`page${current}`).classList.remove('active');
  document.getElementById(`page${current+1}`).classList.add('active');
  if(current+1 === 3) showResults();
}

function prevPage(current) {
  document.getElementById(`page${current}`).classList.remove('active');
  document.getElementById(`page${current-1}`).classList.add('active');
}

// Mostrar resultados
function showResults() {
  const nombre = document.getElementById('nombre').value;
  const profesion = document.getElementById('profesion').value;
  const fecha = new Date(document.getElementById('fechaNacimiento').value);
  const sueldo = parseFloat(document.getElementById('sueldo').value);
  const miembros = parseInt(document.getElementById('miembros').value);

  const ingresosPorPersona = (sueldo / miembros).toFixed(2);

  const fechaStr = fecha.toLocaleDateString('es-ES', {day:'2-digit', month:'long', year:'numeric'});
  const resumen = `El Sr./Sra. ${nombre}, de profesión ${profesion}, nacido el día ${fechaStr}, vive con ${miembros} personas y, cada una de ellas, tiene unos ingresos anuales de €${ingresosPorPersona}.`;

  document.getElementById('resumen').textContent = resumen;
}

// Generar PDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const resumenText = document.getElementById('resumen').textContent;

  doc.setFontSize(16);
  doc.text("RESULTADOS", 20, 20);
  doc.addImage('img/logo.jpg', 'PNG', 20, 30, 40, 40);
  doc.setFontSize(12);
  doc.text(resumenText, 20, 80);
  doc.save('resultados.pdf');
}
