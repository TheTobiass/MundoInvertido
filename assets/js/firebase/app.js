  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBceCHSEsRdz9iAkmkvUq4B-Nv0J7E-6Sc",
    authDomain: "mundo-inverto.firebaseapp.com",
    projectId: "mundo-inverto",
    storageBucket: "mundo-inverto.appspot.com",
    messagingSenderId: "713434677339",
    appId: "1:713434677339:web:c7b45febf48b52b1e07f7e",
    measurementId: "G-GHWXJ0VLT5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>