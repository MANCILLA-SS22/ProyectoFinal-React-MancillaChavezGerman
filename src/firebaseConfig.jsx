// collection: sirve para referenciar o indicar a cual de mis colecciones quiero acceder. 
// getDocs: sirve para obtener todos los documentos.
// query: sirve para hacer filtradaos directamente a la base de datos, es decir, en la misma base de datos podemos hacerlo, sin necesidad de traer informacion desde el frontend y luego hacer el filtrado. 
// where: Es para hacer realizar como tal el filtrado, especificamente con lo que queremos mostrar. 
// doc: sirve para acceder a un documento de una coleccion
// getDoc: sirve para solicitarle a la base de datos que traiga ese ultimo documento.
// addDoc: Sirve para agreagar un documento
// updateDoc:
// getAuth:
// signInWithEmailAndPassword: 
// createUserWithEmailAndPassword: 
// signInWithPopup: 
// GoogleAuthProvide: 

import { initializeApp } from "firebase/app"; //Importamos la libreria de firebase despues de haber instalado el npm
import { getFirestore } from "firebase/firestore"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = { //Es la configuracion que Firebase nos proporciona una vez que creamos las colecciones y productos
    apiKey: "AIzaSyCIe2hAAtRbnJLfEczSpQXQLoP8nB-G5oE",
    authDomain: "tienda-43240.firebaseapp.com",
    projectId: "tienda-43240",
    storageBucket: "tienda-43240.appspot.com",
    messagingSenderId: "758411884917",
    appId: "1:758411884917:web:115e143636c9b3c96efb3c"
};

const app = initializeApp(firebaseConfig); //Inicializamos la aplicacion
export const db = getFirestore(app); //Guardamos la inicializacion de labase de datos. getFirestore sirve para sacar la base de datos de firestorm de mi aplicacion. Despues se exporta para que no tengamos que estar accediendo a la base de datos en cada documento de nuestro proyecto.


//Seccion del after-class
const auth = getAuth(app); //este metodo dice: de que autenticacion quieres traer la aplicacion?

//Todas las solicitudes que hagamos a un servidor o una base de datos debem ser ASINCRONAS (funcion asincrona)
export async function login({email, password}){ //Recivimos el email y password como un objeto pero desestructurado
    try {
        return await signInWithEmailAndPassword( auth, email, password); //Le pasamos el primer parametros, el cual es la instancia de la autenticacion (auth)
    } catch (error) {
        console.log(error);
    }
}

export async function register({email, password}){
    try {
        return await createUserWithEmailAndPassword( auth, email, password);
    } catch (error) {
        console.log(error); 
    }
}

const googleProvider = new GoogleAuthProvider();
export async function loginWithGoole(){
    try {
        return await signInWithPopup(auth, googleProvider)
    } catch (error) {
        console.log(error); 
    }
}

