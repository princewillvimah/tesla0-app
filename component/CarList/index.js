import {View,Text,FlatList, Dimensions } from 'react-native';
import React from 'react';
import CarItem from '../CarItem';
import styles from './styles';
import cars from './cars';


const CarList = () => {
  return (
    <View style={styles.container}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={cars}
        renderItem={({item}) => <CarItem car={item}/>}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        />
    </View>
  );
};

export default CarList;