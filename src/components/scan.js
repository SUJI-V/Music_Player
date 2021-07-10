import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Scan = ({navigation}) => {
  const [checkboxValue, setcheckboxValue] = useState(false);
  const [newValue, setNewValue] = useState(true);
  const [value, setValue] = useState(false);

  return (
    <>
       <Image
        style={{height: '100%', width: '100%', position:"absolute"}}
        source={require('../assets/bg5.jpg')}
      />
      <View
        style={{
          backgroundColor: 'skyblue',
          height: '100%',
          flexDirection: 'column',
          opacity:.7
        }}>
        <View style={{backgroundColor: '#0890B6', height: '6%'}}>
          <AntDesign
            name="arrowleft"
            size={20}
            style={{left: '2%', top: "23%", color: '#fff'}}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              left: '15%',
              bottom: "25.5%",
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Scan Libraries
          </Text>
          <Icon
            name="folder-open"
            size={20}
            style={{left: '92%', bottom: "69%", color: '#fff'}}
            onPress={() => navigation.navigate('Library')}
          />
        </View>
        <Image
          source={require('../assets/loading-34.gif')}
          style={{left: '19.5%', height: '25%', width: '60%', top: 100}}
        />
        <Text style={{left: '23%', top: '17%', fontSize: 15}}>
          Tracks:10 Albums:33 Artists:20
        </Text>
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            width: '100%',
            left: '10%',
            top: '27%',
          }}
          checked={checkboxValue}
          onPress={() => setcheckboxValue(!checkboxValue)}
        />
        <Text style={{left: '24%', top: '22%'}}>
          Exclude songs less than{' '}
          <Text style={{textDecorationLine: 'underline'}}>60</Text> seconds.
        </Text>
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            width: '100%',
            left: '10%',
            top: '21.9%',
          }}
          checked={newValue}
          onPress={() => setNewValue(!newValue)}
        />
        <Text style={{left: '24%', top: '17%'}}>
          Exclude songs less than{' '}
          <Text style={{textDecorationLine: 'underline'}}>50Kb</Text>
        </Text>
        <CheckBox
          containerStyle={{
            marginLeft: 0,
            width: '100%',
            left: '10%',
            top: '16.8%',
          }}
          checked={value}
          onPress={() => setValue(!value)}
        />
        <Text style={{left: '24%', top: '12%'}}>Exclude Ringtone</Text>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#f4ce5e',
            width: '78%',
            top: '20%',
            marginLeft: '12%',
           // paddingLeft: '10%',
            borderRadius: 10,
            height: '7%',
            //paddingTop: '3.5%',
            justifyContent:"center",
            alignItems:"center",
          }}
          onPress={() => navigation.navigate('Library')}>
          <Text style={{fontWeight:"bold"}}>Start scan</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Scan;
