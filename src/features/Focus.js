import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {TextInput} from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null)
  return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput 
        onChangeText={setSubject} 
        style={styles.textInput}
        label="What would you like to focus on?" 
      />
      <View style={styles.button} >
        <RoundedButton size={50} title="+" onPress={() => addSubject(subject)}/>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button:{
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection:  'row'
  },

})