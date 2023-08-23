import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import SyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  const {name, tagline, put,image}= props.car;
  return (
  <View style={styles.carContainer}>
    <ImageBackground source={image} style={styles.image}/>
    <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{tagline} {""}
      <Text style={styles.put}>{put}</Text>
      </Text>
    </View>
    
    
    <View style={styles.buttonContainer}>
    <SyledButton 
    bgcolor="black"
    txcolor="#ccc"
     text= "CUSTOM ORDER"
     onpress={()=>{
       console.warn('custom order was pressed');
     }}

    />
    <SyledButton
     bgcolor="orange"
     txcolor="#fff"
     text="Existing inventory"
     onpress={()=>{
       console.warn('Existing inventory was pressed');
     }}
    />
    </View>
   
    
  </View>
  );
};

export default CarItem;