import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Cesta from "./src/telas/Cesta";
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontCarregada) {
    //return <AppLoading></AppLoading>;
    return (
      <Text style={{ textAlignVertical: "center", textAlign: "center" }}>
        Carregando fontes...
      </Text>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
