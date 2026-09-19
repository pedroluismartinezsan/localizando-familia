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


  const notificationTitle =
    payload.notification?.title ||
    "LOCALIZANDO FAMILIA";


  const notificationOptions = {

    body:
      payload.notification?.body ||
      "¿TU FAMILIA QUIERE SABER SI ESTÁS BIEN?",

    icon:
      "/localizando-familia/icon-192.png",

    badge:
      "/localizando-familia/icon-192.png",

    data: {
      url:
        "https://pedroluismartinezsan.github.io/localizando-familia/"
    }

  };


  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );

});
