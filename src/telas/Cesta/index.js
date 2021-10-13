import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Topo from './componentes/Topo';
import Detalhes from "./componentes/Detalhes";
import Items from './componentes/Items';

export default function Cesta({topo, detalhes, itens}) {
  return (
    <ScrollView>
      <Topo topo={topo} />
      <View style={styles.cesta}>
        <Detalhes detalhes={detalhes} />
        <Items itens={itens} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  
});