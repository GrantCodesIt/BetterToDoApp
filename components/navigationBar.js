import { Text, View, StyleSheet } from "react-native";
import navStyle from "./styleNavigation";

export default function NavigationBar() {
  return (
    <View style={navStyle.containerBar}>
      <View style={navStyle.containerHome}>
        <Text style={navStyle.text}>Home</Text>
      </View>
      <View style={navStyle.containerMap}>
        <Text style={styles.text}>Map</Text>
      </View>
    </View>
  );
}