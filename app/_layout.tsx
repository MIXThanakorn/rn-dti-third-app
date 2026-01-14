import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          title: "Home Page",
        }}
      />
      <Stack.Screen
        name="signin"
        options={{ title: "SIGNIN DTI SAU ", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="signup"
        options={{ title: "SIGNUP DTI SAU ", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
