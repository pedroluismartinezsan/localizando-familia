self.addEventListener("install", function(event) {

  console.log("LOCALIZANDO FAMILIA - Service Worker instalado");

  self.skipWaiting();

});


self.addEventListener("activate", function(event) {

  console.log("LOCALIZANDO FAMILIA - Service Worker activo");

  event.waitUntil(
    self.clients.claim()
  );

});


self.addEventListener("push", function(event) {

  let datos = {
    titulo: "LOCALIZANDO FAMILIA",
    mensaje: "¿TU FAMILIA QUIERE SABER SI ESTÁS BIEN?"
  };


  if (event.data) {

    try {

      datos = event.data.json();

    } catch (error) {

      datos.mensaje =
        event.data.text();

    }

  }


  event.waitUntil(

    self.registration.showNotification(
      datos.titulo,
      {
        body: datos.mensaje,

        icon: "icon-192.png",

        badge: "icon-192.png",

        vibrate: [200, 100, 200],

        data: {
          url:
            "https://pedroluismartinezsan.github.io/localizando-familia/"
        }
      }
    )

  );

});


self.addEventListener(
  "notificationclick",
  function(event) {

    event.notification.close();


    event.waitUntil(

      clients.matchAll({
        type: "window",
        includeUncontrolled: true
      })

      .then(function(clientes) {

        for (const cliente of clientes) {

          if (
            cliente.url.includes(
              "pedroluismartinezsan.github.io/localizando-familia"
            )
          ) {

            return cliente.focus();

          }

        }


        return clients.openWindow(
          "https://pedroluismartinezsan.github.io/localizando-familia/"
        );

      })

    );

  }
);
