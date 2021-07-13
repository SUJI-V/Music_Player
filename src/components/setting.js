import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Switch,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';
const Setting = ({navigation}) => {
  const [checkboxValue, setcheckboxValue] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

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
  
  const toggleSwitch8 = () => setIsDisabled8(previousState => !previousState);
  const [isDisabled8, setIsDisabled8] = useState(false);
  
  const toggleSwitch9 = () => setIsDisabled9(previousState => !previousState);
  const [isDisabled9, setIsDisabled9] = useState(false);

  const toggleSwitch10 = () => setIsDisabled10(previousState => !previousState);
  const [isDisabled10, setIsDisabled10] = useState(false);

  const toggleSwitch11= () => setIsDisabled11(previousState => !previousState);
  const [isDisabled11, setIsDisabled11] = useState(false);

  const toggleSwitch12= () => setIsDisabled12(previousState => !previousState);
  const [isDisabled12, setIsDisabled12] = useState(false);

 
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
                name="gift" size={25} color="#fff"    onPress={() => navigation.navigate('Ads')}/>
            </View>
          </View>
        </View>

      <ScrollView style={{height: '100%',backgroundColor: '#376f8aaa',}}>

        <View style={styles.headings} >
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Normal Settings
          </Text>
        </View>
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Desktop Lyrics</Text>
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
          <Text style={styles.TextStyles1}>Lock screen playing</Text>
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
          <Text style={styles.TextStyles1}>Show Shuffle button</Text>
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
          <Text style={styles.TextStyles1}>Lock screen Time Format</Text>
          <Text style={styles.TextStyles}>12 Hours/24 Hours</Text>
            </View>
            <View style={styles.SwitchView}>
            <Icon
                name="arrow-right"
                color={"#fff"}
                size={35}
                
              />
            </View>
          </TouchableOpacity>

          <View style={styles.headings} >
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Audio Settings
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Volume Fade in and fade out</Text>
          
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
          <Text style={styles.TextStyles1}>Shake To Play Next Song</Text>
         
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
          <Text style={styles.TextStyles1}>Open nowplaying on play</Text>
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
          <Text style={styles.TextStyles1}>Replay the song</Text>
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
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Headset Settings
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Play when Inserted</Text>
          <Text style={styles.TextStyles}>Auto play when headset connected</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled7 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch7}
              value={isDisabled7}
            />
            </View>
          </View>
        
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Play when unplugged</Text>
          <Text style={styles.TextStyles}>Auto pause when heaadset unplugged</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled8 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch8}
              value={isDisabled8}
            />
            </View>
          </View>
        
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Blutooth Autostart</Text>
          <Text style={styles.TextStyles}>Auto Play when blutooth headset connected</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled9 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch9}
              value={isDisabled9}
            />
            </View>
          </View>
        
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Blutooth Autostop</Text>
          <Text style={styles.TextStyles}>Auto pause when blutooth headset disconnects</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled10 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch10}
              value={isDisabled10}
            />
            </View>
          </View>
        
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles}>Headset Control Allowed</Text>
          <Text style={styles.TextStyles}>Allow player control over headset</Text>
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled11 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch11}
              value={isDisabled11}
            />
            </View>
          </View>
        
        <View style={styles.headings} >
          <Text style={{ color: '#FFDD00', fontWeight:"bold", }}> Others
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Use English Language</Text>
          
            </View>
            <View style={styles.SwitchView}>
            <Switch
              trackColor={{false: '#767577', true: '#FFD700'}}
              thumbColor={isDisabled12 ? '#FFD700' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch12}
              value={isDisabled12}
            />
            </View>
          </View>
   
          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Hot App</Text>
        
            </View>
            <View style={styles.SwitchView}>
           
            </View>
          </View>
   

          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Stop Ads</Text>
          
            </View>
            <View style={styles.SwitchView}>
          
            </View>
          </View>
   

          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Rate For Us</Text>
          
            </View>
            <View style={styles.SwitchView}>
            
            </View>
          </View>
   

          <View style={styles.container}>
          <View style={styles.TextView}>
          <Text style={styles.TextStyles1}>Share This App</Text>
        
            </View>
            <View style={styles.SwitchView}>
           
            </View>
          </View>
   

      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height:70,
      paddingLeft: '3%',
      flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
      backgroundColor: '#ffffff40',
      
    },
    headings:{
      justifyContent:"center",
      alignItems:"flex-start",
      height:35,
      paddingLeft:"3%",
    },
    TextView:{
height:"100%",
width:"80%",
alignItems:"flex-start",
justifyContent:"center",
    },
    SwitchView:{
      height:"100%",
      width:"20%",
      alignItems:"center",
justifyContent:"center",
    },
    TextStyles:{
      color:"#FFFFFF"
    },
    TextStyles1:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:"bold",
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
