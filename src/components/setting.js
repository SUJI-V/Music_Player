import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Switch,
  TouchableOpacity,
  Pressable,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';
const Setting = ({navigation}) => {
  const [checkboxValue, setcheckboxValue] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsDisabled(previousState => !previousState);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleSwitch1 = () => setIsDisabled1(previousState => !previousState);
  const [isDisabled1, setIsDisabled1] = useState(false);

  const toggleSwitch2 = () => setIsDisabled2(previousState => !previousState);
  const [isDisabled2, setIsDisabled2] = useState(false);

  const toggleSwitch3 = () => setIsDisabled3(previousState => !previousState);
  const [isDisabled3, setIsDisabled3] = useState(false);
  
  const toggleSwitch4 = () => setIsDisabled4(previousState => !previousState);
  const [isDisabled4, setIsDisabled4] = useState(false);

  const toggleSwitch5 = () => setIsDisabled5(previousState => !previousState);
  const [isDisabled5, setIsDisabled5] = useState(false);

  const toggleSwitch6 = () => setIsDisabled6(previousState => !previousState);
  const [isDisabled6, setIsDisabled6] = useState(false);

  const toggleSwitch7 = () => setIsDisabled7(previousState => !previousState);
  const [isDisabled7, setIsDisabled7] = useState(false);

 
  return (
    <>
      <Image
        style={{height: '100%', width: '100%', position: 'absolute'}}
        source={require('../assets/bg3.jpg')}
      />
       <Modal visible={modalOpen} animationType="fade" transparent={true}>
     
     <TouchableOpacity
       style={styles.ModalRow1}
       onPress={() => setModalOpen(false)}></TouchableOpacity>
     <View style={styles.ModalRow2}>
       <TouchableOpacity
         style={{height: '100%', width: '10%'}}
         onPress={() => setModalOpen(false)}></TouchableOpacity>

       <View
         style={{
           height: '100%',
           width: '80%',
           backgroundColor: '#ffffff',}}>
         
        
        <TouchableOpacity onPress={() => setModalOpen(false)}
         style={{
           height: '50%',
           width: '100%',
           borderBottomWidth:1,
           borderColor:"white",
           justifyContent:"center",
           alignItems:"flex-start",
           paddingLeft:"10%",
           }}>
<Text>
  12 hours
</Text>
             </TouchableOpacity>
            
             <TouchableOpacity onPress={() => setModalOpen(false)}
         style={{
           height: '50%',
           width: '100%',
           justifyContent:"center",
           alignItems:"flex-start",
           paddingLeft:"10%",
           }}>

<Text>
  24 hours
</Text>            
</TouchableOpacity>
       </View>

       <TouchableOpacity
         style={{height: '100%', width: '10%'}}
         onPress={() => setModalOpen(false)}></TouchableOpacity>
     </View>

     <TouchableOpacity
       style={styles.ModalRow3}
       onPress={() => setModalOpen(false)}></TouchableOpacity>
      
   </Modal>
      
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
            style={{left: '5%', top: '1%', color: '#fff'}}
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
          Settings
          </Text>
          <View
            style={{
              height: '100%',
              width: '40%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems:"center", alignContent:"center",justifyContent:"flex-end",
              }}>
              
              <AntDesign
                name="search1" size={25} color="#fff"   onPress={() => navigation.navigate('Library')}/>
            </View>
          </View>
        </View>

  
      <ScrollView style={{height: '92%',backgroundColor: '#376f8aaa',}}>

        <View style={styles.headings} >
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Normal Settings
          </Text>
        </View>
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Desktop Lyrics</Text>
          <Text style={styles.TextStyles}>Desktop Lyrics closed</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isDisabled1}
            />
            </View>
          </View>
          
          
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Lock screen playing</Text>
          <Text style={styles.TextStyles}>show now playing when lock screen</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={ isDisabled2? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isDisabled2}
            />
            </View>
          </View>
          
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Show Shuffle button</Text>
          <Text style={styles.TextStyles}>Show custom shuffle button</Text>
            </View>
            <View style={styles.SwitchView}>
            <CheckBox
            
              checked={checkboxValue}
              onPress={() => setcheckboxValue(!checkboxValue)}
            />
            </View>
          </View>
          
          
          <TouchableOpacity style={styles.container} onPress={() => setModalOpen(true)}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Lock screen Time Format</Text>
          <Text style={styles.TextStyles}>12 Hours/24 Hours</Text>
            </View>
            <View style={styles.SwitchView}>
            <Icon
                name="arrow-right"
                size={30}
                
              />
            </View>
          </TouchableOpacity>
          
          
          <View style={styles.headings} >
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Audio Settings
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Volume Fade in and fade out</Text>
          
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled3? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isDisabled3}
            />
            </View>
          </View>
          
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Shake To Play Next Song</Text>
         
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled4 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch4}
              value={isDisabled4}
            />
            </View>
          </View>
          
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Open nowplaying on play</Text>
          <Text style={styles.TextStyles}>click tracks to open nowplaying songs</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled5 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch5}
              value={isDisabled5}
            />
            </View>
          </View>
          
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Replay the song</Text>
          <Text style={styles.TextStyles}>Replay when click the current playing song</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled6 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch6}
              value={isDisabled6}
            />
            </View>
          </View>
         



        <View style={styles.headings} >
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Playlist Settings
          </Text>
        </View>

        <View style={styles.headings} >
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Headset Settings
          </Text>
        </View>
        <View style={styles.headings} >
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Others
          </Text>
        </View>

      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height:80,
      paddingLeft: '5%',
      flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
      borderBottomWidth:1,
      borderColor:"#FFFFFF"
      
    },
    headings:{
      justifyContent:"center",
      alignItems:"flex-start",
      height:"6%",
      paddingLeft:"5%",
    },
    sections:{
      backgroundColor: '#ffffff10',
      marginBottom:"5%",
    },
    TextView:{
height:"100%",
borderWidth:1,
borderColor:"red",
width:"80%",
alignItems:"flex-start",
justifyContent:"center",
    },
    SwitchView:{
      height:"100%",
      borderWidth:1,
      borderColor:"red",
      width:"20%",
      alignItems:"center",
justifyContent:"center",
    },
    TextStyles:{
      color:"#FFFFFF"},

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
  },
  modalView: {
    margin: 10,
    bottom: 50,
    width: '80%',
    height: '20%',
    backgroundColor: '#fff',
    padding: 30,
  },
  ModalRow1: {
    width: '100%',
    height: '30%',
    //position:"absolute",
  },
  ModalRow2: {
    width: '100%',
    height: 140,

    flexDirection: 'row',
  },
  ModalRow3: {
    width: '100%',
    height: '45%',
    
   // position:"absolute",
  },
});
export default Setting;
