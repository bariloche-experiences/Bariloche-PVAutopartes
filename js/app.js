/**
 * PV Autopartes — lógica de la landing:
 *  - Selector de vehículo en cascada (Marca -> Modelo -> Año -> Versión)
 *  - Menú móvil
 *  - Armado y envío del mensaje de WhatsApp al enviar el formulario
 */
(function () {
  "use strict";

  // Número de WhatsApp del negocio (formato internacional, sin signos).
  const WHATSAPP_NUMBER = "5491131952798";

  const elMarca = document.getElementById("marca");
  const elModelo = document.getElementById("modelo");
  const elAnio = document.getElementById("anio");
  const elVersion = document.getElementById("version");
  const form = document.getElementById("requestForm");

  const OTHER_VERSION = "Otra versión / No estoy seguro";

  const toggleManualBtn = document.getElementById("toggleManualVehicle");
  const manualBlock = document.getElementById("manualVehicleBlock");
  const elMarcaManual = document.getElementById("marcaManual");
  const elModeloManual = document.getElementById("modeloManual");
  const elAnioManual = document.getElementById("anioManual");
  const elVersionManual = document.getElementById("versionManual");
  let manualMode = false;

  /* ---------------- Selector en cascada ---------------- */

  function resetSelect(select, placeholder) {
    select.innerHTML = "";
    const opt = document.createElement("option");
    opt.value = "";
    opt.disabled = true;
    opt.selected = true;
    opt.textContent = placeholder;
    select.appendChild(opt);
  }

  function fillOptions(select, values) {
    values.forEach((value) => {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = value;
      select.appendChild(opt);
    });
  }

  function initBrands() {
    resetSelect(elMarca, "Seleccioná marca");
    fillOptions(elMarca, Object.keys(VEHICLE_DATA).sort());
  }

  function onBrandChange() {
    const brand = elMarca.value;
    resetSelect(elModelo, "Seleccioná modelo");
    resetSelect(elAnio, "Seleccioná año");
    resetSelect(elVersion, "Seleccioná versión");
    elAnio.disabled = true;
    elVersion.disabled = true;

    if (!brand || !VEHICLE_DATA[brand]) {
      elModelo.disabled = true;
      return;
    }

    fillOptions(elModelo, Object.keys(VEHICLE_DATA[brand]).sort());
    elModelo.disabled = false;
  }

  function onModelChange() {
    const brand = elMarca.value;
    const model = elModelo.value;
    resetSelect(elAnio, "Seleccioná año");
    resetSelect(elVersion, "Seleccioná versión");
    elVersion.disabled = true;

    const modelData = VEHICLE_DATA[brand] && VEHICLE_DATA[brand][model];
    if (!modelData) {
      elAnio.disabled = true;
      return;
    }

    const years = [];
    for (let y = modelData.maxYear; y >= modelData.minYear; y--) years.push(y);
    fillOptions(elAnio, years);
    elAnio.disabled = false;
  }

  function onYearChange() {
    const brand = elMarca.value;
    const model = elModelo.value;
    resetSelect(elVersion, "Seleccioná versión");

    const modelData = VEHICLE_DATA[brand] && VEHICLE_DATA[brand][model];
    if (!modelData) {
      elVersion.disabled = true;
      return;
    }

    fillOptions(elVersion, modelData.versions.concat(OTHER_VERSION));
    elVersion.disabled = false;
  }

  elMarca.addEventListener("change", onBrandChange);
  elModelo.addEventListener("change", onModelChange);
  elAnio.addEventListener("change", onYearChange);

  initBrands();

  /* ---------------- Carga manual (fallback) ---------------- */

  function setManualMode(enabled) {
    manualMode = enabled;
    manualBlock.classList.toggle("hidden", !enabled);
    toggleManualBtn.textContent = enabled
      ? "Volver a elegir de la lista"
      : "¿No encontrás tu vehículo en la lista? Cargalo manualmente";

    [elMarca, elModelo, elAnio, elVersion].forEach((el) => {
      el.required = !enabled;
    });
    [elMarcaManual, elModeloManual, elAnioManual, elVersionManual].forEach((el) => {
      el.required = enabled;
      if (!enabled) el.value = "";
    });
  }

  toggleManualBtn.addEventListener("click", () => setManualMode(!manualMode));

  /* ---------------- Menú móvil ---------------- */

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- Envío a WhatsApp ---------------- */

  function buildWhatsAppMessage(data) {
    const lines = [
      "🔧 *Nueva solicitud de repuesto - PV Autopartes*",
      "",
      "*Vehículo:*",
      `Marca: ${data.marca}`,
      `Modelo: ${data.modelo}`,
      `Año: ${data.anio}`,
      `Versión / Motor / Caja: ${data.version}`,
      "",
      "*Pieza solicitada:*",
      `Tipo: ${data.tipoPieza}`,
      `Detalle: ${data.detallePieza}`,
      `Color requerido: ${data.colorPieza || "No especificado"}`,
    ];

    if (data.observaciones) {
      lines.push(`Observaciones: ${data.observaciones}`);
    }

    lines.push(
      "",
      "*Datos del solicitante:*",
      `Nombre: ${data.nombre}`,
      `Teléfono: ${data.telefono}`,
      `Tipo de cliente: ${data.tipoCliente}`,
      "",
      "_Enviado desde la web de PV Autopartes_"
    );

    return lines.join("\n");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const tipoClienteInput = form.querySelector('input[name="tipoCliente"]:checked');

    const data = {
      marca: manualMode ? elMarcaManual.value.trim() : elMarca.value,
      modelo: manualMode ? elModeloManual.value.trim() : elModelo.value,
      anio: manualMode ? elAnioManual.value.trim() : elAnio.value,
      version: manualMode ? elVersionManual.value.trim() : elVersion.value,
      tipoPieza: document.getElementById("tipoPieza").value,
      detallePieza: document.getElementById("detallePieza").value.trim(),
      colorPieza: document.getElementById("colorPieza").value.trim(),
      observaciones: document.getElementById("observaciones").value.trim(),
      nombre: document.getElementById("nombre").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      tipoCliente: tipoClienteInput ? tipoClienteInput.value : "",
    };

    const message = buildWhatsAppMessage(data);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener");
  });

  /* ---------------- Año en footer ---------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
