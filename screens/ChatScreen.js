import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function ChatScreen() {
  return <View style={s.c}><Text>💬 Здесь будет чат</Text></View>;
}
const s = StyleSheet.create({ c:{flex:1,justifyContent:'center',alignItems:'center'} });