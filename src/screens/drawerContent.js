import React from 'react';
import {View, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
export function DrawerContent(props) {
  return (
    <View>
      <Drawer.Section
        style={{backgroundColor: '#7697f4', height: '100%', paddingTop: '5%'}}>
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          icon={({color, size}) => <Icon name="home" size={20} />}
          label="Home"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Scan');
          }}
          icon={({color, size}) => <Icon name="radar" size={20} />}
          label="Scan Libraries"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Themes');
          }}
          icon={({color, size}) => <Icon1 name="tshirt" size={20} />}
          label="Themes"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Widget');
          }}
          icon={({color, size}) => <Icon name="widgets" size={20} />}
          label="Widget"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Timer');
          }}
          icon={({color, size}) => <Icon1 name="car" size={20} />}
          label="Sleep Timer"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Hidden');
          }}
          icon={({color, size}) => <Icon name="folder-lock" size={20} />}
          label="Hidden Folders"
        />
        <DrawerItem
          onPress={() => {
            props.navigation.navigate('Settings');
          }}
          icon={({color, size}) => <Icon2 name="settings" size={20} />}
          label="Settings"
        />
      </Drawer.Section>
    </View>
  );
}
