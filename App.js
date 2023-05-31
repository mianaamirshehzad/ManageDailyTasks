import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, KeyboardAvoidingView, Keyboard, TextInput, TouchableOpacity, Button } from "react-native";
import { Provider } from "react-redux";
import store from './src/redux/Store';
import ToDo from './src/screens/Todo';


export default function App() {

  return (
    <Provider store={store}>
      <ToDo />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
