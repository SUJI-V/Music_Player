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
        source={require('../assets/bg1.jpg')}
      />
      <Drawer.Section style={{backgroundColor: 'grey',position: "absolute",width:"100%",height:"10%",opacity: .4,}}>
      <Text style={{color:"blue",fontStyle:"italic",fontSize:40,left:"10%",fontWeight:"bold"}}>Music Player</Text>
        <Image
                style={{position: 'absolute', width: '100%', height: '100%'}}
        source={require('../assets/bg3.jpg')} />
      </Drawer.Section>
      <Drawer.Section
        style={{
          height: '100%',
          paddingTop: '25%',
          opacity: 0.5,
          backgroundColor: '#6FB2DC',
          paddingLeft:"1%",
        }}>
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          icon={({color, size}) => <Icon name="home" size={20} style={{color:"#fff"}}/>}
          label="Home"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Scan');
          }}
          icon={({color, size}) => <Icon name="radar" size={20} style={{color:"#fff"}}/>}
          label="Scan Libraries"
        />
        <DrawerItem
        style={{right:"1%",color:"#fff"}}
          onPress={() => {
            props.navigation.navigate('Themes');
          }}
          icon={({color, size}) => <Icon1 name="tshirt" size={20} style={{color:"#fff"}} />}
          label="Themes"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Widget');
          }}
          icon={({color, size}) => <Icon name="widgets" size={20} style={{color:"#fff"}}/>}
          label="Widget"
        />
         <DrawerItem
          onPress={() => {
            props.navigation.navigate('Drive');
          }}
          icon={({color, size}) => <Icon name="folder-lock" size={20} style={{color:"#fff"}} />}
          label="Drive Mode"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Timer');
          }}
          icon={({color, size}) => <Icon1 name="car" size={20} style={{color:"#fff"}} />}
          label="Sleep Timer"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Hidden');
          }}
          icon={({color, size}) => <Icon name="folder-lock" size={20} style={{color:"#fff"}} />}
          label="Hidden Folders"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Settings');
          }}
          icon={({color, size}) => <Icon2 name="settings" size={20} style={{color:"#fff"}}/>}
          label="Settings" style={{color:"#fff"}}
        />
      </Drawer.Section>
    </View>
  );
}


