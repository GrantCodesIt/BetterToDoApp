import { Text, View, StyleSheet } from "react-native";
// import styles from "./styleNavigation";

export default function NavigationBar() {
  return (
    <View style={styles.containerBar}>
      <View style={styles.containerHome}>
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.containerMap}>
        <Text style={styles.text}>Map</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBar: {
    backgroundColor: "black",
    flexDirection:'row',
    position:"absolute",
    left:0,
    bottom:0,
  },
  containerHome: {
    backgroundColor: "#000000",
    flex:1,
    alignItems:'center',
  },
  containerMap: {
    backgroundColor: "#000000",
    flex:1,
    alignItems:'center',
  },
  text: {
    fontSize: 14,
    color: "green",
  },
});