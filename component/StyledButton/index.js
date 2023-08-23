import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';


const SyledButton = (props) => {
  const {text, onpress, bgcolor,txcolor}=props;
  return (
    <View style={styles.container}>
     <Pressable style={[styles.button,
        bgcolor? {backgroundColor:bgcolor}: {},
      ]} 
       onPress={onpress}>
        <Text style={[styles.text,
        txcolor ? {color: txcolor}: {},
        ]}> {text}</Text>
     </Pressable>
    </View>
  );
};

export default SyledButton;