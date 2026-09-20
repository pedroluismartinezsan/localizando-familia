importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js"
);


// ===============================
// FIREBASE
// ===============================

firebase.initializeApp({
  apiKey: "AIzaSyDh-I8sewGb5YvKGjxsdcLooQqz7ybgPi4",
  authDomain: "localizando-familia.firebaseapp.com",
  projectId: "localizando-familia",
  storageBucket: "localizando-familia.firebasestorage.app",
  messagingSenderId: "1081866124616",
  appId: "1:1081866124616:web:72a5452cd8f6a4db62077d"
});

const messaging = firebase.messaging();


// ===============================
// INSTALACIÓN
// ===============================

self.addEventListener("install", function(event) {

  console.log(
    "LOCALIZANDO FAMILIA - Service Worker instalado"
  );

  self.skipWaiting();

});


// ===============================
// ACTIVACIÓN
// ===============================

self.addEventListener("activate", function(event) {

  console.log(
    "LOCALIZANDO FAMILIA - Service Worker activo"
  );

  event.waitUntil(
    self.clients.claim()
  );

});


// ===============================
// NOTIFICACIONES FIREBASE
// ===============================

messaging.onBackgroundMessage(function(payload) {

  console.log(
    "FCM recibido:",
    payload
  );


  const titulo =
    payload.data &&
    payload.data.title
      ? payload.data.title
      : "LOCALIZANDO FAMILIA";


  const mensaje =
    payload.data &&
    payload.data.body
      ? payload.data.body
      : "¿TU FAMILIA QUIERE SABER SI ESTÁS BIEN?";


  self.registration.showNotification(
    titulo,
    {
      body: mensaje,

      icon:
        "/localizando-familia/icon-192.png",

      badge:
        "/localizando-familia/icon-192.png",

      vibrate: [200, 100, 200],

      tag:
        "localizando-familia",

      renotify: true,

      data: {
        url:
          "https://pedroluismartinezsan.github.io/localizando-familia/"
      }

    }
  );

});


// ===============================
// CLIC EN NOTIFICACIÓN
// ===============================

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
