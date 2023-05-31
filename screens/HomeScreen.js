import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text
        style={{
          marginTop: 20,
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 20,
          textDecorationLine: 'underline',
        }}>
        1.Switching Buttons
      </Text>
    </TouchableOpacity>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
