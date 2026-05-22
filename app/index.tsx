import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.wth}>Welcome to Thailand</Text>
      <Text style={[{ fontSize: 20 }, styles.txtWel, styles.txtBold]}>
        Welcome to SAU
      </Text>
      <Text style={[{ fontSize: 10 }, styles.txtWel]}>Welcome to DTI</Text>
      <Link href="/signin" style={styles.linktxt}>
        Signin!
      </Link>
      <Link href="/signup" style={styles.linktxt}>
        Signup!
      </Link>
    </View>
  );
}

//-----------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  wth: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  txtWel: {
    color: "blue",
    textDecorationLine: "underline",
  },
  txtBold: {
    fontWeight: "bold",
  },
  linktxt: {
    backgroundColor: "green",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
