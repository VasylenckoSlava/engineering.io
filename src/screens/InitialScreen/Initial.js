import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {getCountry} from '../../actions/countryAction';

const Initial = ({navigation}) => {
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();

  const getValue = (value) => setCountry(value);

  const searchCountry = () => {
    dispatch(
      getCountry(country.toLowerCase(), () => navigation.navigate('Result')),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Enter Country'}
        style={styles.textInput}
        value={country}
        onChangeText={getValue}
      />
      <Button title={'Submit'} onPress={searchCountry} disabled={!country} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Initial;
