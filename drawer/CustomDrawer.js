import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground source={require('../Images/menu-bg.jpeg')} style={{padding:20}}>
        <Image source={require('../Images/user-profile.jpg')} style={{height: 80, width:80, borderRadius:40, marginBottom:10}}/>
        <Text style={{color:'#fff', fontSize:18}}>Ayush Saxena</Text>
        <Text  style={{color:'#fff', fontSize:18}}>280 Coins</Text>
       
        </ImageBackground> 
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
      <View style={{padding:20, borderTopWidth:1,borderTopColor:'#ccc'}}>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Image source={require('../Images/logout.png')} style={{height: 40, width:40, borderRadius:20, marginBottom:10}}/>
        <Text style={{marginLeft:8, marginBottom:10, fontWeight:'700'}}>Logout</Text>
        </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default CustomDrawer;
