
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAjc5LyvU6JIZbydbh5rlbSFf52FU5Z0o",
  authDomain: "izarrualde-app.firebaseapp.com",
  projectId: "izarrualde-app",
  storageBucket: "izarrualde-app.appspot.com",
  messagingSenderId: "779110255644",
  appId: "1:779110255644:web:724bd4da3dc6f67e07e3d9"
};


const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app
}