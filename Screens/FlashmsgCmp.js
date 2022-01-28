import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";

const FlashmsgCmp = () => {
  return (
    <View style={{height:100, justifyContent: "center", alignItems: "center" }}>
      <Button
        style={{}}
        onPress={() => {
          /* HERE WE GONE SHOW OUR FIRST MESSAGE */
          showMessage({
            message: "Simple message",
            type: "info",
          });
        }}
        title="Request Details"
        color="#841584"
      />
     
    </View>
  );
};

export default FlashmsgCmp;

const styles = StyleSheet.create({});
