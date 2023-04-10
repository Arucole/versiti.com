// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDE8EhgfZT1xByhWNa8EYPKV-Z5XcK4DOo",
//   authDomain: "collins-42a04.firebaseapp.com",
//   projectId: "collins-42a04",
//   storageBucket: "collins-42a04.appspot.com",
//   messagingSenderId: "721906493883",
//   appId: "1:721906493883:web:27b97660fa12cd7c46fc9e",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// import {
//   getFirestore,
//   getDocs,
//   addDoc,
//   collection,
// } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
// const db = getFirestore(app);
// const collectionRef = collection(db, "collins");

// // References
// let firstName = document.querySelector("#firstname");
// let lastName = document.querySelector("#lastname");
// let message = document.querySelector("#message");
// let role = document.getElementsByName("role");
// const pic = document.querySelector("#InputTag");
// const sendBtn = document.querySelector(".modal-btn");
// const myForm = document.querySelector("#myForm");
// const myModal = document.getElementById("myModal"); // get the modaal
// let selectedRole;
// let updatedImage;

// for (let i = 0; i < role.length; i++) {
//   role[i].addEventListener("click", function () {
//     selectedRole = this.value;
//   });
// }

// pic.addEventListener("change", () => {
//   const file = pic.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onloadend = () => {
//     updatedImage = reader.result;
//   };
// });

// myForm.addEventListener("submit", function (e) {
//   e.preventDefault(); //stop form from submitting

//   //do whatever an submit the form
//   try {
//     addDoc(collectionRef, {
//       firstName: firstName.value,
//       lastName: lastName.value,
//       message: message.value,
//       pic: updatedImage,
//       role: selectedRole,
//     }).then((res) => {
//       myForm.reset();
//       myModal.style.display = "none";
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });
