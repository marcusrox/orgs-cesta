import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "./Texto";

export default function Botao({ style, children, onPress }) {
  return (
    <TouchableOpacity style={[style, styles.botao]} onPress={onPress}>
      <Texto style={styles.textoBotao}>{children}</Texto>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
