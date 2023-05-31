import { View, Text,Button } from 'react-native'
import React from 'react'
import BottomNavigator from '../bottom/BottomNavigator';
const Main = ({navigation}) => {
  return (
      <><BottomNavigator /><View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go to Profile" />
    </View></>
  )
}

export default Main;