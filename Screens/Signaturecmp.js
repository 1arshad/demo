import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableHighlight,
} from "react-native";
import React, { Component } from "react";
import SignatureCapture from "react-native-signature-capture";

export default class Signaturecmp extends Component {
  saveSign() {
    this.refs["sign"].saveImage();
  }

  resetSign() {
    this.refs["sign"].resetImage();
  }

  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log("dragged");
  }

  render() {
    return (
      <View style={{ display:'flex', flexDirection: "column" }}>
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          Signature Capture Extended{" "}
        </Text>
        <SignatureCapture
          style={[{ height:200,width:'100%' }]}
          ref="sign"
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          backgroundColor="#ff00ff"
          strokeColor="#ffffff"
          minStrokeWidth={4}
          maxStrokeWidth={4}
          viewMode={"portrait"}
        />

        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.saveSign();
            }}
          >
            <Text>Save</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.resetSign();
            }}
          >
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  signature: {
    borderColor: "#000033",
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#eeeeee",
    margin: 10,
  },
});
