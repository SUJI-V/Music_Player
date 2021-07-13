import React from 'react';
import {View, Text, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
export function DrawerContent(props) {
  return (
    <View>
      <Image
        style={{position: 'absolute', width: '100%', height: '100%'}}
        source={require('../assets/DrawerHeader.jpg')}
      />
      <Drawer.Section style={{backgroundColor: '#376f8aef',width:"100%",height:"20%",justifyContent:"center",alignItems:"center"}}>
      
      <Image
        style={{position: 'absolute', width: '100%', height: '100%'}}
        source={require('../assets/DrawerHeader.jpg')}
      />
      <Text style={{color:"#ffffff",fontStyle:"italic",fontSize:40,fontWeight:"bold"}}>Music Player</Text>
      
      </Drawer.Section>
      <Drawer.Section
        style={{
          height: '100%',
          paddingTop: '10%',
          //justifyContent:"center",
          //alignItems:"center",
          alignContent:"space-around",

          backgroundColor: '#376f8aaa',
          //paddingLeft:"1%",
        }}>
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          icon={({color, size}) => <Icon name="home" size={25} style={{color:"#fff"}}/>}
          label="Home"
          labelStyle={{fontSize:15,fontWeight:"bold",color:"#fff"}}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Scan');
          }}
          icon={({color, size}) => <Icon name="radar" size={25} style={{color:"#fff"}}/>}
          label="Scan Libraries"
          labelStyle={{fontSize:15,fontWeight:"bold",color:"#fff"}}
        />
        <DrawerItem
        style={{right:"1%",color:"#fff"}}
          onPress={() => {
            props.navigation.navigate('Themes');
          }}
          icon={({color, size}) => <Icon1 name="tshirt" size={25} style={{color:"#fff"}} />}
          label="Themes"
          labelStyle={{fontSize:15,fontWeight:"bold",color:"#fff"}}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Widget');
          }}
          icon={({color, size}) => <Icon name="widgets" size={25} style={{color:"#fff"}}/>}
          label="Widget"
          labelStyle={{fontSize:15,fontWeight:"bold",color:"#fff"}}
        />
         <DrawerItem
          onPress={() => {
            props.navigation.navigate('Drive');
          }}
          icon={({color, size}) => <Icon1 name="car" size={25} style={{color:"#fff"}} />}
          label="Drive Mode"
          labelStyle={{fontSize:15,fontWeight:"bold",color:"#fff"}}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Timer');
          }}
          icon={({color, size}) => <Icon name="power-sleep" size={25} style={{color:"#fff"}} />}
          label="Sleep Timer"
          labelStyle={{fontSize:15,fontWeight:"bold",color:"#fff"}}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Hidden');
          }}
          icon={({color, size}) => <Icon name="folder-lock" size={25} style={{color:"#fff"}} />}
          label="Hidden Folders"
          labelStyle={{fontSize:15,fontWeight:"bold",color:"#fff"}}
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Settings');
          }}
          icon={({color, size}) => <Icon2 name="settings" size={25} style={{color:"#fff"}}/>}
          label="Settings" style={{color:"#fff"}}
          labelStyle={{fontSize:15,fontWeight:"bold",color:"#fff"}}
        />
      </Drawer.Section>
    </View>
  );
}


