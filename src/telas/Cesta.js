import React from 'react';
import { Text, StyleSheet, Image, Dimensions } from "react-native";
import topo from '../../assets/topo.png';

export default function Cesta() {
    return (
      <>
        <Image source={topo} style={styles.topo} />
        <Text style={styles.titulo}>Detalhes da Cesta</Text>
      </>
    );
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
      position: 'absolute',
      textAlign: 'center',
      width: '100%',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 12
  }
});