import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Drive = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'flex-start',
        alignSelf: 'auto',
      }}>
      <AntDesign
        name="arrowleft"
        size={25}
        style={{left: 10, top: 15,color:"#fff"}}
        onPress={() => navigation.goBack()}
      />
      <Image
        source={require('../assets/ads/trafic.png')}
        style={{height: '10%', width: '40%', left: '32%', top: '20%'}}
      />
      <Text style={{color: '#fff', left: '20%', top: '30%', fontSize: 15}}>
        Safety first! Please follow the traffic{'\n'}regulations while driving.,
        and cherish your{'\n'}and other's life!
      </Text>
      <View
        style={{
          justifyContent: 'flex-start',
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: '80%',
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#fff',
            width: '25%',
            paddingLeft: 25,
            height:35,
            paddingTop:7,
            right:"60%"
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#fff',
            width: '20%',
            paddingLeft: 25,
            backgroundColor: '#7797F5',
            left: '80%',
            paddingTop:7
          }}
          onPress={() => navigation.navigate('Library')}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drive;
