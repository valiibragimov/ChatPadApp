// index.js
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import App from './App';

// Это гарантирует корректную регистрацию App
registerRootComponent(App);
