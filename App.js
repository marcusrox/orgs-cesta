import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <Cesta></Cesta>
    </SafeAreaView>
  );
}
