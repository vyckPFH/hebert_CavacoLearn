// src/services/firebaseConfig.ts

// 1. Importamos as funções necessárias do SDK
import { initializeApp } from 'firebase/app'; //cria a coneção inicial com os servidores do Firebase , é a RAIZ de tudo
// import { getFirestore } from 'firebase/firestore'; //cria a conexão com o Firestore
import { Platform } from 'react-native'; //para saber se é web ou app nativo
import { initializeFirestore } from 'firebase/firestore'; // 
import { Auth, getAuth, initializeAuth } from 'firebase/auth';
// @ts-ignore getReactNativePersistence existe no build nativo do SDK, mas não está tipado no pacote "firebase/auth"
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 2. Colocamos as chaves que você copiou lá no Passo 3
const firebaseConfig = {
  apiKey: "AIzaSyDXv6wgie2sn2kh3tu0iuMI7aExKE8V41c",
  authDomain: "cavacolearn.firebaseapp.com",
  projectId: "cavacolearn",
  storageBucket: "cavacolearn.firebasestorage.app",
  messagingSenderId: "303891668955",
  appId: "1:303891668955:web:8f2cdea7a73e5df8f4d1fe",
  measurementId: "G-V2VSC75JR7"
};

// 3. Inicializamos o Firebase com essas credenciais
export const app = initializeApp(firebaseConfig);

// 4. Inicializamos o Firestore e exportamos a variável 'db' para ser usada nas outras telas
export const db = initializeFirestore(app, { ignoreUndefinedProperties: true });
// Na web, getAuth já persiste a sessão sozinho (localStorage do navegador).
// No app nativo (iOS/Android), é preciso dizer explicitamente onde guardar
// a sessão, senão ela fica só em memória e some ao fechar o app.
export const auth: Auth = Platform.OS === 'web'
  ? getAuth(app)
  : initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });