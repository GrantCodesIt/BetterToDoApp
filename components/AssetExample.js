import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {props.text}
        This is asset example
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#505bf2',
    padding: 5,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'flex-start',
    textAlign:'center',

  },
  paragraph: {
    fontSize: 14,
  },
});
