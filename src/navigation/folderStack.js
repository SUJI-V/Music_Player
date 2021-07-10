import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import audio from '../screens/Folder/audio';
import download from '../screens/Folder/download';
import Music from '../screens/Folder/Music';
const Stack = createStackNavigator();


const folderStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Audio" component={audio} options={{headerLeft:() =>(
        <AntDesign name="search1" size={20} color="grey" />)}}/>
      <Stack.Screen name="Download" component={download}/>
      <Stack.Screen name="Music" component={Music}/>


    </Stack.Navigator>
    
  );
}


export default folderStack;