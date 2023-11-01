import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../Component/Button";

const Screen1 = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <Button
        onPress={() => console.log("press")}
        disabled={true}
        color={"red"}
        title={"Back"}
      />
      <Button
        onPress={() => console.log("press")}
        color={"yellow"}
        title={"Save"}
      />
      <Button
        onPress={() => navigation.navigate("Screen2")}
        color={"blue"}
        title={"Save and Next"}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#000",
  },
});
