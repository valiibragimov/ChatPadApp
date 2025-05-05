// LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import {
  registerWithEmail,
  loginWithEmail,
  logout,
  onAuthChanged,
} from '../firebase';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Подписываемся на изменение пользователя
    const unsub = onAuthChanged(u => setUser(u));
    return unsub;
  }, []);

  const handleRegister = async () => {
    try {
      const u = await registerWithEmail(email, password);
      Alert.alert(
        'Готово!',
        `Письмо с подтверждением отправлено на ${u.email}. Проверьте почту и перейдите по ссылке.`
      );
    } catch (e) {
      Alert.alert('Ошибка регистрации', e.message);
    }
  };

  const handleLogin = async () => {
    try {
      await loginWithEmail(email, password);
    } catch (e) {
      Alert.alert('Ошибка входа', e.message);
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Привет, {user.email}!</Text>
        {user.emailVerified
          ? <Text>Почта подтверждена ✅</Text>
          : <Text>Почта не подтверждена ❗️</Text>
        }
        <Button title="Выйти" onPress={handleLogout} />
      </View>
    );
  }

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 12, borderBottomWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 12, borderBottomWidth: 1, padding: 8 }}
      />
      <Button title="Зарегистрироваться" onPress={handleRegister} />
      <View style={{ height: 12 }} />
      <Button title="Войти" onPress={handleLogin} />
    </View>
  );
}
