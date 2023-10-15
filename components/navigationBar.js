import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#505bf2',
  },
  paragraph: {
    fontSize: 14,
  },
});
