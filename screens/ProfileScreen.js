// screens/ProfileScreen.js
import React, { useState } from 'react';
import {
  View, TextInput, Button, StyleSheet, Alert
} from 'react-native';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';

export default function ProfileScreen({ navigation }) {
  const user = getAuth().currentUser;
  const db = getDatabase(app);

  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [dob,       setDob]       = useState('');

  const saveProfile = async () => {
    if (!firstName || !lastName || !dob) {
      return Alert.alert('Заполните все поля');
    }
    try {
      await set(ref(db, `users/${user.uid}`), {
        firstName,
        lastName,
        dob,
        phone: user.phoneNumber
      });
      navigation.replace('MainTabs');
    } catch (e) {
      Alert.alert('Ошибка сохранения', e.message);
    }
  };

  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Имя"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={s.input}
        placeholder="Фамилия"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={s.input}
        placeholder="Дата рождения (дд.мм.гггг)"
        value={dob}
        onChangeText={setDob}
      />
      <Button title="Сохранить профиль" onPress={saveProfile} />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20 },
  input:     { borderBottomWidth:1, marginBottom:15, fontSize:16 },
});
