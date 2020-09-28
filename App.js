import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Payumoney from "react-native-payumoney-getway";

var key = "GveEeyoD", amount = "100", email = "soumyadeephalder1@gmail.com", txnId = "sdfghj5678", productName = "product_info", firstName = "soumya", salt = "RxWJwzKYrT", mobile = "7059256303";
const App = () => {
  const onPress = async () => {
    let respons = await Payumoney.Pay({
      key,
      amount,
      email,
      txnId,
      productName,
      firstName,
      salt,
      debug: false,
      mobile
    }, url = "https://dev.easytodb.com/payu.php");
    console.log('respons', respons);
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6d3fca" />
      <View style={{
        backgroundColor: "#6d3fca",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15
      }}>
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>React Native Payumoney Getway</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{  
            backgroundColor: '#8954f6',
            paddingHorizontal: 50,
            paddingVertical: 15,
            borderRadius: 20
          }} onPress={onPress}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
            Pay now
              </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
