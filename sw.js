self.addEventListener("install", function(event) {

  console.log(
    "LOCALIZANDO FAMILIA instalado"
  );

  self.skipWaiting();

});


self.addEventListener("activate", function(event) {

  console.log(
    "LOCALIZANDO FAMILIA activo"
  );

});


self.addEventListener(
  "fetch",
  function(event) {

    // Por ahora no hacemos nada.
    // Más adelante utilizaremos
    // este Service Worker para
    // las notificaciones Push.

  }
);
