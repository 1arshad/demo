import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const PickerCmp = () => {
  const Item = Picker.Item;

  const [pokemon, setPokemon] = useState();
  const handleValueChange = (itemValue, itemIndex) => setPokemon(itemValue);

  return (
    <View style={styles.container}>
      <Picker
        style={styles.pickerStyles}
        selectedValue={pokemon}
        onValueChange={handleValueChange}
      >
        <Picker.Item label="Pikachu" value="pikachu" />
        <Picker.Item label="Charmander" value="charmander" />
        <Picker.Item label="Squirtle" value="Squirtle" />
      </Picker>
    </View>
  );
};

export default PickerCmp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pickerStyles: {
    width: "70%",
    backgroundColor: "gray",
    color: "white",
  },
});
