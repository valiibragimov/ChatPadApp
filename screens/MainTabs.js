// screens/MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen     from './ChatScreen';
import CallsScreen    from './CallsScreen';
import TouchpadScreen from './TouchpadScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Chat">
      <Tab.Screen name="Chat"     component={ChatScreen}     options={{ title: 'Чаты' }} />
      <Tab.Screen name="Calls"    component={CallsScreen}    options={{ title: 'Звонки' }} />
      <Tab.Screen name="Touchpad" component={TouchpadScreen} options={{ title: 'Тачпад' }} />
    </Tab.Navigator>
  );
}
