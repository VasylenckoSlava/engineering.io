import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const Result = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Capital</Text>
      <Text style={styles.detailText}>Population</Text>
      <Text style={styles.detailText}>Latlng</Text>
      <Text style={styles.detailText}>Image flag</Text>
      <Button title={'Capital Weather'} onPress={() => !setShow} />
      <Text>temperature</Text>
      {/*<Image />*/}
      <Text>wind_speed</Text>
      <Text>Precip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {fontWeight: 'bold', fontSize: 20, marginVertical: 20},
});

export default Result;
