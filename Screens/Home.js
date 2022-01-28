import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Datetimepicker from "./Datetimepicker";
import PickerCmp from "./PickerCmp";
import Signaturecmp from "./Signaturecmp";
import FlashmsgCmp from "./FlashmsgCmp";
import Monthyearpicker from "./Monthyearpicker";
import MultiselectCmp from "./MultiselectCmp";
import FlashMessage from "react-native-flash-message";


const Home = () => {
  return (
    <View style={{ height: "100%" }}>
      <FlashMessage position="bottom" />
      <ScrollView>
        <View>
          <FlashmsgCmp />
        </View>
        <View>
          <Datetimepicker />
        </View>
        <View>
          <Signaturecmp />
        </View>
      </ScrollView>
      {/* <View style={{ height: "20%" }}>  
        <MultiselectCmp />
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
