import React from 'react';
import { StyleSheet, Image, Dimensions } from "react-native";
import Texto from '../../../componentes/Texto';
import imgTopo from "../../../../assets/topo.png";

export default function Topo({topo}) {
    return (
      <>
        <Image source={imgTopo} style={styles.topo} />
        <Texto style={styles.titulo}>{topo.titulo}</Texto>
      </>
    );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    padding: 12,
  },
});
