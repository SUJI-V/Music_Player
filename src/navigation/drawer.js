import React,{useState} from 'react';
import { View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStack from './homeStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import favoriteStack from './favoriteStack';
import folderStack from './folderStack';
import LibraryStack from './libraryStack';
import MostStack from './mostStack';
import RecentStack from './RecentStack';
import Setting from '../components/setting';
import HomeScreen from '../screens/homeScreen';
import Scan from '../components/scan';
import Equalizer from '../components/equalizer';
import Drive from '../components/drive';
import Hidden from '../components/hidden';
import Themes from './themes';
import Timer from '../components/timer';
import Widget from '../components/widget';
import { DrawerContent } from '../screens/drawerContent';
const Drawer = createDrawerNavigator();

// const HomeStackScreen = ({navigation})=>(
//     <HomeStack.Navigator>
//         <HomeStack.Screen name="Profile" component={stack}  options={{
//             title:"Home"
//         }} />
//     </HomeStack.Navigator>
// );



const Main = ({ navigation }) => {
    const[main,Setmain]=useState('Shuffle');
    const clickHandler=() =>{
        Setmain('Order');

    }
    return (

        <Drawer.Navigator initialRouteName=""  headerMode={false} drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="Home" component={HomeStack} options={{
                headerLeft: () => (
                    <AntDesign name="search1" size={40} width={60} height={60} color="black" backgroundColor="red" onPress={() => navigation.navigate('stack')}></AntDesign>
                )
            }} />
            <Drawer.Screen name="Scan Libraries" component={Scan} options={{
               }} />
            <Drawer.Screen name="Theme" component={Themes} options={{
                headerLeft: () => (
                    <Icon.Button name="search2" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Widget" component={Widget} options={{
                headerLeft: () => (
                    <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Sleep Timer" component={Timer} options={{
                headerLeft: () => (
                    <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Drive mode" component={Drive} options={{
                headerLeft: () => (
                    <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Hidden folders" component={Hidden} options={{
                headerLeft: () => (
                    <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <Drawer.Screen name="Settings" component={Setting} options={{
                headerLeft: () => (
                    <Icon.Button name="gear" size={40} width={60} height={60} style={{ left: 10 }} color="black" backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />

        </Drawer.Navigator>


    );
}


export default Main;
