import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = (props) => {
  const { title, onPress, disabled } = props;

  console.log(disabled);

  return (
    <>
      {disabled ? (
        <View
          style={[styles.button, { backgroundColor: "rgba(255,255,255,0.4)" }]}
        >
          <Text style={styles.text}>{title}</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, { backgroundColor: "rgba(255,255,255,1)" }]}
        >
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "grey",
  },
  text: {
    fontFamily: "Montserrat-Bold",
  },
});
