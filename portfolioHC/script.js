// Firebase config (replace this with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyAKn4xguieXlXng542OikWlj3uIG8rcdmk",
  authDomain: "myportfolio-2e918.firebaseapp.com",
  projectId: "myportfolio-2e918",
  storageBucket: "myportfolio-2e918.firebasestorage.app",
  messagingSenderId: "823496686232",
  appId: "1:823496686232:web:d12022930b0ddee0a0aeed"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = form.querySelector('[name="name"]').value;
      const email = form.querySelector('[name="email"]').value;
      const subject = form.querySelector('[name="subject"]').value;
      const message = form.querySelector('[name="message"]').value;
  
      db.collection("messages").add({
        name: name,
        email: email,
        subject: subject,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error writing to Firestore: ", error);
        alert("Failed to send message.");
      });
    });
  });
  