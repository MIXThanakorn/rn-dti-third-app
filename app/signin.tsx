import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Signin() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/login.png")}
          style={{ width: 150, height: 150, marginBottom: 50, marginTop: 100 }}
        />
        <Text style={{ fontSize: 20 }}>Please Signin</Text>
        <TextInput
          placeholder=" username"
          style={[styles.txtInput]}
        ></TextInput>
        <TextInput
          placeholder=" password"
          secureTextEntry={true}
          style={[styles.txtInput, { marginBottom: 20 }]}
        ></TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            paddingHorizontal: 128,
            paddingVertical: 20,
            borderRadius: 10,
            width: 300,
          }}
        >
          <Text style={{ color: "white" }}>Signin</Text>
        </TouchableOpacity>
        <Link href="/signup" style={{ marginTop: 20, color: "red" }}>
          Do not have an account? Signup
        </Link>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txtInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 10,
  },
});
