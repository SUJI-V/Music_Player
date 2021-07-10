import React from 'react';
import {View, Text, TouchableOpacity, Pressable,Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Iconf from 'react-native-vector-icons/Foundation'
import Icon2 from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/MaterialIcons'
const Recent = ({navigation}) => {
  return (
    <>
    <Image
      style={{height: '100%', width: '100%', position: 'absolute'}}
      source={require('../../assets/bg3.jpg')}
    />
    <View style={{backgroundColor: 'skyblue', height: '100%',opacity:.7,justifyContent:"space-between"}}>
      <View   style={{
          height: '8%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#376f8aef',}}>
        <AntDesign
          name="arrowleft"
          size={20}
          style={{top: 10, right: "10%", color: '#fff'}}
          onPress={() => navigation.goBack()}
        />
        <Text style={{right: "30%", fontWeight: 'bold', top: -8, color: '#fff'}}>
          WHATSAPP
        </Text>
        <AntDesign
          name="search1"
          size={25}
          color="#fff"
          style={{top: -32, left: '100%'}}
          onPress={() => navigation.goBack()}
        />
        <AntDesign
          name="gift"
          size={25}
          color="black"
          style={{top: -57, left: '100%', color: '#fff'}}
          onPress={() => navigation.navigate('Ads')}
        />
        <Icon2
          name="dots-three-vertical"
          size={22}
          style={{left: '91%', top: -82, marginBottom: -50, color: '#fff'}}
        />
      </View>
      <View style={{top: '2%', left: '3%'}}>
        <Pressable>
          <Icon
            name="music"
            size={25}
            style={{top: 20, left: 10, color: '#fff'}}
          />
          <Text style={{left: 50, bottom: 2, color: '#fff'}}>Audio.mp3</Text>
          <AntDesign
            name="barchart"
            size={30}
            style={{left: "70%", bottom: 27, color: '#fff'}}
          />
          <Icon2
            name="dots-three-vertical"
            size={25}
            style={{left: '88%', bottom: '55%', color: '#fff'}}
          />
        </Pressable>
      </View>
      <View style={{bottom: '5%', left: '3%'}}>
        <Icon
          name="music"
          size={25}
          style={{top: 30, left: 10, color: '#fff'}}
        />
        <Text style={{left: 50, top: 10, color: '#fff'}}>Audio1.mp3</Text>
        <AntDesign name="barchart" size={30} style={{left: "70%", top: -10 , color:"#fff"}} />
        <Icon2
          name="dots-three-vertical"
          size={25}
          style={{left: '88%', bottom: '40%', color: '#fff'}}
        />
      </View>
      <View style={{bottom: '9%', left: '3%'}}>
        <Icon
          name="music"
          size={25}
          style={{top: 30, left: 10, color: '#fff'}}
        />
        <Text style={{left: 50, top: 10, color: '#fff'}}>Title track1.mp3</Text>
        <AntDesign
          name="barchart"
          size={30}
          style={{left: "70%", top: -20, color: '#fff'}}
        />
        <Icon2
          name="dots-three-vertical"
          size={25}
          style={{left: '88%', bottom: '48%', color: '#fff'}}
        />
      </View>
      <View style={{bottom: '13%', left: '3%'}}>
        <Icon
          name="music"
          size={25}
          style={{top: 30, left: 10, color: '#fff'}}
        />
        <Text style={{left: 50, top: 10, color: '#fff'}}>Title track2.mp3</Text>
        <AntDesign
          name="barchart"
          size={30}
          style={{left: "70%", top: -20, color: '#fff'}}
        />
        <Icon2
          name="dots-three-vertical"
          size={25}
          style={{left: '88%', bottom: '48%', color: '#fff'}}
        />
      </View>
      <View style={{bottom: '17%', left: '3%'}}>
        <Icon
          name="music"
          size={25}
          style={{top: 30, left: 10, color: '#fff'}}
        />
        <Text style={{left: 50, top: 10, color: '#fff'}}>Title track3.mp3</Text>
        <AntDesign
          name="barchart"
          size={30}
          style={{left: "70%", top: -20, color: '#fff'}}
        />
        <Icon2
          name="dots-three-vertical"
          size={25}
          style={{left: '88%', bottom: '45%', color: '#fff'}}
        />
      </View>
      <View style={{bottom: '22%', left: '3%'}}>
        <Icon
          name="music"
          size={25}
          style={{top: 30, left: 10, color: '#fff'}}
        />
        <Text style={{left: 50, top: 10, color: '#fff'}}>
          Download track1.mp3
        </Text>
        <AntDesign
          name="barchart"
          size={30}
          style={{left: "70%", top: -20, color: '#fff'}}
        />
        <Icon2
          name="dots-three-vertical"
          size={25}
          style={{left: '88%', bottom: '45%', color: '#fff'}}
        />
      </View>
      <View style={styles.PlayerView}>
          <View style={styles.Player}>
            <Iconf name="music" size={30} color="#fff" />
            <Text style={{color: '#fff', fontSize: 15}}>03-uyire.mp3</Text>
            <IconA name="play-arrow" size={30} color="#fff" />
            <IconA name="fast-forward" size={30} color="#fff" />
            <IconA name="queue-music" size={30} color="#fff" />
          </View>
        </View>
    </View>
    </>
  );
};
const styles=StyleSheet.create({
  PlayerView: {
  width: '100%',
  height: '10%',
  backgroundColor: '#376f8aaa',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  borderTopWidth: 1,
  borderColor: '#ffffffae',
},
Player: {
  height: '80%',
  width: '95%',
  //borderRadius:25,
  justifyContent: 'space-around',
  alignContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
},
})
export default Recent;