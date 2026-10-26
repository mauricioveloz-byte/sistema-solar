// Selecciona los botones de cada planeta.
const detalleMercurio = document.querySelector("#detalle-mercurio");
const volverMercurio = document.querySelector("#volver-mercurio");
const destacarMercurio = document.querySelector("#destacar-mercurio");
const detalleVenus = document.querySelector("#detalle-venus");
const volverVenus = document.querySelector("#volver-venus");
const destacarVenus = document.querySelector("#destacar-venus");
const detalleTierra = document.querySelector("#detalle-tierra");
const volverTierra = document.querySelector("#volver-tierra");
const destacarTierra = document.querySelector("#destacar-tierra");
const detalleMarte = document.querySelector("#detalle-marte");
const volverMarte = document.querySelector("#volver-marte");
const destacarMarte = document.querySelector("#destacar-marte");
const detalleJupiter = document.querySelector("#detalle-jupiter");
const volverJupiter = document.querySelector("#volver-jupiter");
const destacarJupiter = document.querySelector("#destacar-jupiter");
const detalleSaturno = document.querySelector("#detalle-saturno");
const volverSaturno = document.querySelector("#volver-saturno");
const destacarSaturno = document.querySelector("#destacar-saturno");
const detalleUrano = document.querySelector("#detalle-urano");
const volverUrano = document.querySelector("#volver-urano");
const destacarUrano = document.querySelector("#destacar-urano");
const detalleNeptuno = document.querySelector("#detalle-neptuno");
const volverNeptuno = document.querySelector("#volver-neptuno");
const destacarNeptuno = document.querySelector("#destacar-neptuno");

// Agrega la clase que gira la tarjeta y muestra su reverso.
function mostrarReverso() {
  const tarjeta = document.getElementById(this.getAttribute("data-tarjeta"));
  const frente = document.getElementById(this.getAttribute("data-frente"));
  const reverso = document.getElementById(this.getAttribute("data-reverso"));

  if (tarjeta && frente && reverso) {
    tarjeta.classList.add("girada");
    frente.setAttribute("aria-hidden", "true");
    reverso.setAttribute("aria-hidden", "false");
    this.setAttribute("aria-expanded", "true");
  }
}

// Quita la clase para volver a mostrar el frente de la tarjeta.
function mostrarFrente() {
  const tarjeta = document.getElementById(this.getAttribute("data-tarjeta"));
  const frente = document.getElementById(this.getAttribute("data-frente"));
  const reverso = document.getElementById(this.getAttribute("data-reverso"));
  const botonDetalle = document.getElementById(this.getAttribute("data-boton-detalles"));

  if (tarjeta && frente && reverso && botonDetalle) {
    tarjeta.classList.remove("girada");
    frente.setAttribute("aria-hidden", "false");
    reverso.setAttribute("aria-hidden", "true");
    botonDetalle.setAttribute("aria-expanded", "false");
  }
}

// Agrega o quita el resaltado de la tarjeta.
function cambiarDestacado() {
  const tarjeta = document.getElementById(this.getAttribute("data-tarjeta"));

  if (tarjeta && this.getAttribute("aria-pressed") === "false") {
    tarjeta.classList.add("destacada");
    this.textContent = "Quitar destacado";
    this.setAttribute("aria-pressed", "true");
  } else if (tarjeta) {
    tarjeta.classList.remove("destacada");
    this.textContent = "Destacar";
    this.setAttribute("aria-pressed", "false");
  }
}

// Asigna los eventos de Mercurio.
if (detalleMercurio) {
  detalleMercurio.addEventListener("click", mostrarReverso);
  volverMercurio.addEventListener("click", mostrarFrente);
  destacarMercurio.addEventListener("click", cambiarDestacado);
}

// Asigna los eventos de Venus.
if (detalleVenus) {
  detalleVenus.addEventListener("click", mostrarReverso);
  volverVenus.addEventListener("click", mostrarFrente);
  destacarVenus.addEventListener("click", cambiarDestacado);
}

// Asigna los eventos de la Tierra.
if (detalleTierra) {
  detalleTierra.addEventListener("click", mostrarReverso);
  volverTierra.addEventListener("click", mostrarFrente);
  destacarTierra.addEventListener("click", cambiarDestacado);
}

// Asigna los eventos de Marte.
if (detalleMarte) {
  detalleMarte.addEventListener("click", mostrarReverso);
  volverMarte.addEventListener("click", mostrarFrente);
  destacarMarte.addEventListener("click", cambiarDestacado);
}

// Asigna los eventos de Júpiter.
if (detalleJupiter) {
  detalleJupiter.addEventListener("click", mostrarReverso);
  volverJupiter.addEventListener("click", mostrarFrente);
  destacarJupiter.addEventListener("click", cambiarDestacado);
}

// Asigna los eventos de Saturno.
if (detalleSaturno) {
  detalleSaturno.addEventListener("click", mostrarReverso);
  volverSaturno.addEventListener("click", mostrarFrente);
  destacarSaturno.addEventListener("click", cambiarDestacado);
}

// Asigna los eventos de Urano.
if (detalleUrano) {
  detalleUrano.addEventListener("click", mostrarReverso);
  volverUrano.addEventListener("click", mostrarFrente);
  destacarUrano.addEventListener("click", cambiarDestacado);
}

// Asigna los eventos de Neptuno.
if (detalleNeptuno) {
  detalleNeptuno.addEventListener("click", mostrarReverso);
  volverNeptuno.addEventListener("click", mostrarFrente);
  destacarNeptuno.addEventListener("click", cambiarDestacado);
}