import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native';
export default function TouchpadScreen() {
  return (
    <View style={s.c}>
      <TouchableOpacity onPress={()=>Vibration.vibrate(100)} style={s.btn}>
        <Text>🖐️ Нажми — и у друга в телефоне завибрирует!</Text>
      </TouchableOpacity>
    </View>
  );
}
const s = StyleSheet.create({
  c:   {flex:1,justifyContent:'center',alignItems:'center'},
  btn: {padding:20, backgroundColor:'#eee', borderRadius:8}
});