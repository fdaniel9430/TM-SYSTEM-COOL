// Función para calcular cotización
function calcular() {
  const servicio = document.getElementById("servicio").value;
  const tipo = document.getElementById("tipo").value;
  const resultado = document.getElementById("resultado");

  const precios = {
    web: { instalacion: 500, mantenimiento: 300 },
    aire: { instalacion: 500, mantenimiento: 250 },
    electricidad: { instalacion: 380, mantenimiento: 200 },
    camara: { instalacion: 350, mantenimiento: 150 },
    incendio: { instalacion: 450, mantenimiento: 270 },
    estructura: { instalacion: 650, mantenimiento: 350 },
  };

  if (!servicio || !tipo) {
    resultado.style.display = "block";
    resultado.innerHTML = `<p style="color: red;">Por favor, completa ambos campos.</p>`;
    return;
  }

  const total = precios[servicio][tipo];
  resultado.style.display = "block";
  resultado.innerHTML = `
    <div class="card-cotizacion" aria-live="polite">
      <h3>Resultado de Cotización</h3>
      <p><strong>Servicio:</strong> ${capitalizar(servicio)}</p>
      <p><strong>Tipo:</strong> ${capitalizar(tipo)}</p>
      <p><strong>Total estimado:</strong> <span style="color: green;">S/. ${total}</span></p>
      <h4>Precio por unidad</h4>
      <h5>Solo mano de obra</h5>
    </div>
  `;

  // Ocultar automáticamente después de 7 segundos
  setTimeout(() => {
    resultado.style.display = "none";
  }, 7000);
}

// Función para mostrar u ocultar galería
function mostrarGaleria(boton) {
  const galeria = boton.closest('.card-portafolio').querySelector('.galeria');
  const estaOculta = galeria.classList.toggle('oculto');

  boton.textContent = estaOculta ? "Ver galería" : "Ocultar galería";
  boton.setAttribute("aria-expanded", !estaOculta);
}

// Capitaliza la primera letra de una palabra
function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Validación del formulario de contacto
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const exito = document.getElementById("mensaje-exito");

  if (!nombre || !correo || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  if (!validarEmail(correo)) {
    alert("Por favor, ingresa un correo válido.");
    return false;
  }

  exito.style.display = "block";
  setTimeout(() => {
    exito.style.display = "none";
  }, 6000);

  return true;
}

// Validación simple de correo electrónico
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Botón volver arriba
const btnTop = document.querySelector(".top-btn");
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});