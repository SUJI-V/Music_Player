import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Switch,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
//import Iconf from 'react-native-vector-icons/FontAwesome';
const Timer = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex: 1,}}>
      <Image
        source={require('../assets/sleeptimerBg.jpg')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
     
     <View style={styles.menubar}>
     <IconA name="arrowleft" size={25} style={{color: '#fff'}} onPress={() => navigation.goBack()}/>
                <Text style={{color:"#fff", fontFamily: "italic", fontWeight: "bold", fontSize: 20,}}>Sleep Timer</Text>
<View style={{height:"100%",width:"40%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"60%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"space-between", }}>
               
                </View>
                </View>
            </View>
      <ScrollView style={{backgroundColor: '#376f8add', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.TextStyle}>Close Sleep Mode</Text>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={'#f4ce5e'}
            uncheckedColor={'#fff'}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.TextStyle}>10 Mins</Text>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color={'#f4ce5e'}
            uncheckedColor={'#fff'}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.TextStyle}>20 Mins</Text>
          <RadioButton
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
            color={'#f4ce5e'}
            uncheckedColor={'#fff'}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.TextStyle}>30 Mins</Text>
          <RadioButton
            value="fourth"
            status={checked === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('fourth')}
            color={'#f4ce5e'}
            uncheckedColor={'#fff'}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.TextStyle}>60 Mins</Text>
          <RadioButton
            value="fifth"
            status={checked === 'fifth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('fifth')}
            color={'#f4ce5e'}
            uncheckedColor={'#fff'}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.TextStyle}>90 Mins</Text>
          <RadioButton
            value="sixth"
            status={checked === 'sixth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('sixth')}
            color={'#f4ce5e'}
            uncheckedColor={'#fff'}
          />
        </View>
      
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.TextStyle}>Manual input</Text>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              keyboardType="numeric"
              placeholder="1-9999"
              maxLength={4}
            />
            <Text style={styles.TextStyle}>Mins</Text>
          </View>
          <View style={{width: '35%', height: '100%', alignItems: 'flex-end'}}>
            <RadioButton
              value="seventh"
              status={checked === 'seventh' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('seventh')}
              color={'#f4ce5e'}
              uncheckedColor={'#fff'}
            />
          </View>
          <View></View>
        </View>
        <View style={styles.BottomView}>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>After the sleep timer end</Text>
            <Text style={styles.TextStyle1}>Exit Player</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle}>
              Play to the end regardless of Timer
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f4ce5e' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: '0.8%',
    paddingBottom: '0.8%',
    paddingLeft: '5%',
    paddingRight:"5%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff10',
  },
  menubar:{
    height:"8%",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-around",
    alignItems:"center",
   // paddingTop:"5%",
    backgroundColor: '#376f8aef'
},
  inputContainer: {
    width: '65%',
    height: '100%',
    flexDirection: 'row',
  },
  BottomView: {
    marginTop: '6%',
    justifyContent: 'space-between',
    paddingTop: '0.8%',
    paddingBottom: '0.8%',
  },
  TextStyle: {
    color: 'white',
    fontSize: 17,
    //paddingTop: '1%',
   // textAlignVertical:'center',
  },
  TextStyle1: {
    color: 'white',
    fontSize: 10,
   // paddingTop: '2%',
    paddingRight: '1%',
    textAlignVertical:'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
    height: '65%',
    flexWrap: 'wrap',
    paddingBottom: 0,
  },
  LabelStyle: {
   // paddingTop: '3%',
  },
});
export default Timer;