import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// ⚠️ Asegurate de tener bien estos datos
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MSG_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔁 Lista de imágenes a actualizar
const updates = [
  {
    id: "abc123", // Este es el ID del documento en Firebase
    img: "https://res.cloudinary.com/tu_usuario/image/upload/v1234567890/producto1.jpg"
  },
  {
    id: "def456",
    img: "https://res.cloudinary.com/tu_usuario/image/upload/v1234567890/producto2.jpg"
  },
  // y así sucesivamente...
];

// 🔄 Ejecutamos la actualización en lote
async function actualizarImagenes() {
  for (let item of updates) {
    const docRef = doc(db, "productos", item.id);
    try {
      await updateDoc(docRef, {
        img: item.img
      });
      console.log(`✅ Imagen actualizada para el producto con ID ${item.id}`);
    } catch (error) {
      console.error(`❌ Error al actualizar el producto ${item.id}:`, error);
    }
  }
}

actualizarImagenes();
