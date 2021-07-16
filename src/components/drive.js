import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Drive = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
   
    backgroundColor:'#566573',
      }}>
      <View style={{width:"100%",height:"50%",justifyContent:"flex-end",alignItems:"center"}}>
      <Image
        source={require('../assets/ads/trafic.png')}
        style={{width:300,height:200}}
      />
      </View>
      <View style={{width:"100%",height:"15%",justifyContent:"flex-end",alignItems:"center"}}>
      <Text style={{color: '#fff', fontSize: 16}}>
        Safety first! Please follow the traffic regulations {'\n'} {'\n'}while driving.,
        and cherish your and other's life!
      </Text>
      </View>
      <View
        style={{
          justifyContent: 'flex-start',
          alignSelf: 'center',
          flexDirection: 'row',
          height:"20%",
          width:"100%",
          justifyContent:"space-around",
          alignItems:"center",
        }}>


        <TouchableOpacity
          style={{
           backgroundColor:"#BEBCBB",
            width: 125,
           justifyContent:"center",
           alignItems:"center",
            height: 35,
            //paddingTop: 7,
            
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: '#fff',}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 125,
            //paddingLeft: 25,
            backgroundColor: '#24a0ed',
            height: 35,
            justifyContent:"center",
            alignItems:"center",
          }}
          onPress={() => navigation.navigate('Library')}>
          <Text style={{color:"#fff"}}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drive;
