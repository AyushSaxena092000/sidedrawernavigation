import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const ProfileScreen = () => {
  
    const [selectedTab, setSelectedTab] = useState(0);
    return (
          <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
              <TouchableOpacity style={{
               width:'50%',
               height: 50,
               backgroundColor: selectedTab == 0 ? 'blue' : 'white',
               borderRadius: 15,
               justifyContent: 'center',
               alignItems: 'center'}} onPress={()=>{
               setSelectedTab(0);
              }}>
                  <Text style={{color: selectedTab == 0 ? '#fff' : '#000', fontSize: 18, fontWeight:'700'}}>Pending</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  width:'50%',
                  height: '90%',
                  backgroundColor: selectedTab == 1 ? 'blue' : 'white',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center'
              }} onPress={()=>{
                  setSelectedTab(1);
              }}>
                  <Text style={{color: selectedTab == 1 ? '#fff' : '#000',fontSize: 18, fontWeight:'700'}}>Completed</Text>
              </TouchableOpacity>
          </View> 
          {selectedTab==0 ? (<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Pending</Text>
          </View>):(<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Completed</Text>
          </View>)}
          </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    subContainer:{
        width:'90%',
        height:60,
        alignSelf: 'center',
        marginTop: 50,
        backgroundColor:'#fff',
        borderWidth:0.5,
        borderRadius:15,
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft:5,
        paddingRight:5
    },
})