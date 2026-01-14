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
export default function Signup() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/login.png")}
          style={{ width: 120, height: 120, marginBottom: 50, marginTop: 100 }}
        />
        <Text style={{ fontSize: 20 }}>Please Signup</Text>
        <TextInput
          placeholder=" Fullname"
          style={[styles.txtInput]}
        ></TextInput>
        <TextInput placeholder=" email" style={[styles.txtInput]}></TextInput>
        <TextInput
          placeholder=" username"
          style={[styles.txtInput]}
        ></TextInput>
        <TextInput
          placeholder=" password"
          secureTextEntry={true}
          style={[styles.txtInput, { marginBottom: 20 }]}
        ></TextInput>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              paddingHorizontal: 52,
              paddingVertical: 20,
              borderRadius: 10,
              height: 60,
            }}
          >
            <Text style={{ color: "white" }}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              paddingHorizontal: 52,
              paddingVertical: 20,
              borderRadius: 10,
              height: 60,
            }}
          >
            <Text style={{ color: "white" }}>Signup</Text>
          </TouchableOpacity>
        </View>
        <Link href="/signin" style={{ marginTop: 20, color: "red" }}>
          Already have an account? Signin
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
