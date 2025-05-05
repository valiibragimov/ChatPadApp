// firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Ваши ключи из Firebase Console → Project Settings
const firebaseConfig = {
  authDomain: "chatpadapp.firebaseapp.com",
  projectId: "chatpadapp",
  storageBucket: "chatpadapp.firebasestorage.app",
  messagingSenderId: "449517711510",
  appId: "1:449517711510:web:309c9d2a982420b5c392b7",
  measurementId: "G-51PETJFYQ8",
};

// Инициализация приложения
const app = initializeApp(firebaseConfig);

// Инициализируем Auth с AsyncStorage-постоянством
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Регистрируем нового пользователя и шлём письмо-подтверждение
export async function registerWithEmail(email, password) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(user);
  return user;
}

// Залогиниться
export function loginWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Выйти
export function logout() {
  return signOut(auth);
}

// Слушатель изменений статуса авторизации
export function onAuthChanged(callback) {
  return onAuthStateChanged(auth, callback);
}
