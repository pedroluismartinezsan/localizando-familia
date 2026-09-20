importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDh-I8sewGb5YvKGjxsdcLooQqz7ybgPi4",
  authDomain: "localizando-familia.firebaseapp.com",
  projectId: "localizando-familia",
  storageBucket: "localizando-familia.firebasestorage.app",
  messagingSenderId: "1081866124616",
  appId: "1:1081866124616:web:72a5452cd8f6a4db62077d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

  console.log(
    "[firebase-messaging-sw.js] Mensaje recibido:",
    payload
  );

  const titulo =
    payload.notification?.title ||
    payload.data?.title ||
    "LOCALIZANDO FAMILIA";

  const cuerpo =
    payload.notification?.body ||
    payload.data?.body ||
    "¿TU FAMILIA QUIERE SABER SI ESTÁS BIEN?";

  self.registration.showNotification(
    titulo,
    {
      body: cuerpo,

      icon:
        "https://pedroluismartinezsan.github.io/localizando-familia/icon-192.png",

      badge:
        "https://pedroluismartinezsan.github.io/localizando-familia/icon-192.png",

      data: {
        url:
          "https://pedroluismartinezsan.github.io/localizando-familia/"
      }
    }
  );
});
