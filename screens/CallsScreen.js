import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function CallsScreen() {
  return <View style={s.c}><Text>📞 История звонков</Text></View>;
}
const s = StyleSheet.create({ c:{flex:1,justifyContent:'center',alignItems:'center'} });