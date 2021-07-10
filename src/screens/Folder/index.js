import React from 'react';
import {View, Text, StyleSheet,Image,ToastAndroid} from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Iconf from 'react-native-vector-icons/Foundation'
import IconF from 'react-native-vector-icons/FontAwesome';
const Folder = ({navigation}) => {
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
            right: '25%',
          }}>
          FOLDER
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
              style={{right:"30%"}}
              onPress={() => navigation.goBack()}
            />
            <Icon1
              name="dots-three-vertical"
              size={20}
              color="#fff"
              style={{right: '5%'}}
              onPress={() => navigation.navigate('Ads')}
            />
          </View>
        </View>
      </View>
      <View style={{marginTop: '5%'}}>
        <IconF
          name="folder-open"
          size={28}
          style={{
            left: '5%',
            top: '15%',
            backgroundColor: 'grey',
            width: '10%',
            paddingLeft: '1.5%',
            color:"#fff"
          }}
        />
        <Text style={{left: '20%', bottom: '21%', fontSize: 17,color:"#fff"}} onPress={() => navigation.navigate('Recent')}
>audio</Text>
        <Text style={{left: '20%', bottom: '25%',color:"#fff"}}>
          /storage/emu...Xender/audio
        </Text>
        <Icon1
          name="dots-three-vertical"
          size={20}
          style={{left: '90%', bottom: '60%',color:"#fff"}}
        />
      </View>
      <View>
        <IconF
          name="folder-open"
          size={28}
          style={{
            left: '5%',
            top: '15%',
            backgroundColor: 'grey',
            width: '10%',
            paddingLeft: '1.5%',
            color:"#fff"

          }}
        />
        <Text style={{left: '20%', bottom: '21%', fontSize: 17,color:"#fff"}}onPress={() => navigation.navigate('Favorite')}
>Download</Text>
        <Text style={{left: '20%', bottom: '25%',color:"#fff"}}>
          /storage/emu...Xender/audio
        </Text>
        <Icon1
          name="dots-three-vertical"
          size={20}
          style={{left: '90%', bottom: '60%',color:"#fff"}}
        />
      </View>
      <View>
        <IconF
          name="folder-open"
          size={28}
          style={{
            left: '5%',
            top: '15%',
            backgroundColor: 'grey',
            width: '10%',
            paddingLeft: '1.5%',
            color:"#fff"

          }}
        />
        <Text style={{left: '20%', bottom: '21%', fontSize: 17,color:"#fff"}} onPress={() => navigation.navigate('Play')}
>Music</Text>
        <Text style={{left: '20%', bottom: '25%',color:"#fff"}}>
          /storage/emu...Xender/audio
        </Text>
        <Icon1
          name="dots-three-vertical"
          size={20}
          style={{left: '90%', bottom: '60%',color:"#fff"}}
        />
      </View>
      <View>
        <IconF
          name="folder-open"
          size={28}
          style={{
            left: '5%',
            top: '15%',
            backgroundColor: 'grey',
            width: '10%',
            paddingLeft: '1.5%',
            color:"#fff"

          }}
        />
        <Text style={{left: '20%', bottom: '21%', fontSize: 17,color:"#fff"}}onPress={() => navigation.navigate('Whatsapp')}
>
          Whatsapp Audio
        </Text>
        <Text style={{left: '20%', bottom: '25%',color:"#fff"}}>
          /storage/emu...Xender/audio
        </Text>
        <Icon1
          name="dots-three-vertical"
          size={20}
          style={{left: '90%', bottom: '60%',color:"#fff"}}
        />
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignSelf: 'auto',
    opacity: 0.7,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#376f8aff',
    height: '5%',
    alignContent: 'space-between',
    flexWrap: 'wrap-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: '2%',
  },
  text: {
    left: '25%',
    bottom: '40%',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
  },
  icon: {
    marginLeft: '53%',
    top: '1%',
    left: '51%',
  },
  Icon1: {
    left: '110%',
    bottom: '170%',
  },
  PlayerView: {
      top:"23%",
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

export default Folder;
