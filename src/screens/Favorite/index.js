import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/Foundation';
import IconA from 'react-native-vector-icons/MaterialIcons';

const Fav = ({navigation}) => {
  return (
    <>
      <Image
        style={{height: '100%', width: '100%', position: 'absolute'}}
        source={require('../../assets/bg3.jpg')}
      />
      <View style={styles.container}>
        <View
          style={{
            height: '8%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#376f8aef',
          }}>
          <AntDesign
            name="arrowleft"
            size={25}
            color="#fff"
            style={{width: '10%'}}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              color: '#fff',
              fontFamily: 'italic',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '1%',
            }}>
            Favorite
          </Text>
          <View
            style={{
              height: '100%',
              width: '50%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: '100%',
                width: '43%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'flex-end',
              }}>
              <AntDesign
                name="search1"
                size={25}
                color="#fff"
                style={{right: '20%'}}
                onPress={() => navigation.goBack()}
              />
              <Icon
                name="dots-three-vertical"
                size={25}
                color="#fff"
                style={{left: '6%'}}
                onPress={() => navigation.navigate('Ads')}
              />
            </View>
          </View>
        </View>
       
         <View style={{height:"35%",width:"100%",justifyContent:"flex-end",alignSelf:"flex-end",alignItems:"center"}}>
           <IconM name="musical-notes-outline" size={80} style={styles.music} />
        </View>

        <View style={{height:"5%",width:"100%",justifyContent:"center",alignItems:"center"}}>
        <Text  style={{color:"#fff"}}>No music found</Text>
        </View>
 
        <View style={{height:"15%",width:"100%", justifyContent:"center",alignItems:"center"}}>
                 <TouchableOpacity
          style={styles.toucable}
          onPress={() => navigation.navigate('Recent')}>
          <Text  style={{color:"#fff"}}>Add songs</Text>
        </TouchableOpacity>
        </View>
        <View style={{height:"37%",width:"100%",alignItems:"flex-end",justifyContent:"flex-end"}}>
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 50,
            backgroundColor: '#F4CE5E',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            marginRight:"3%",
            marginBottom:"3%",
          }}>
          <Icon
            name="shuffle"
            size={30}
            color="#fff"
            onPress={() =>
              ToastAndroid.show('Current Queue Shuffled!', ToastAndroid.SHORT)
            }
          />
          </View>
        </View>
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
    
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#376f8acd',
    height: '92%',

  },
 
  icon1: {
    // left: '3%',
    // paddingVertical: '2%',
  },
  text: {
    // left: '27%',
    // fontWeight: 'bold',
    // bottom: '15%',
    // paddingVertical: '3%',
  },

  music: {
    //left: '38%',
    //top: '30%',
    color: '#fff',
    height:"40%",
    justifyContent:"center",
    
  },
 
  toucable: {
    borderRadius: 10,
    width: '30%',
    height:50,
    justifyContent:"center",
    alignItems:"center",
    //left: '33%',
   // top: '35%',
    //height: 35,
    borderWidth: 1,
    borderColor: '#fff',
    //paddingLeft: 25,
   // paddingTop: 5,
  },
  PlayerView: {
    //top: '57%',
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
});
export default Fav;
