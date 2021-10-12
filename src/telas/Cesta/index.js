import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import Texto from '../../componentes/Texto';
import Topo from './componentes/Topo';
import Detalhes from "./componentes/Detalhes";

export default function Cesta({topo, detalhes}) {
  return (
    <>
      <Topo topo={topo} />
      <View style={styles.cesta}>
        <Detalhes detalhes={detalhes} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  
});