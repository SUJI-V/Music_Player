import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity,Pressable, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Scan = ({navigation}) => {
  const [checkboxValue, setcheckboxValue] = useState(false);
  const [newValue, setNewValue] = useState(true);
  const [value, setValue] = useState(false);

  return (
    <>
       <Image
        style={{height: '100%', width: '100%', position:"absolute"}}
        source={require('../assets/themes/six.jpg')}
      />
      <View
        style={{
          backgroundColor: '#376f8aaa',
          height: '100%',
          flexDirection: 'column',
          
        }}>
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
            }}>
         Scan Library
          </Text>
          <View
            style={{
              height: '100%',
              width: '20%',
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
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'flex-end',
              }}>
              
            <Pressable  onPress={() => navigation.navigate('Library')}>
              <FontAwesome
            name="folder-open"
              size={25}
              style={{
                color: '#fff',
               
              }}
             
            />
          </Pressable>
            </View>
            </View>  
        </View>

 
        <Image
          source={require('../assets/Scanner3.gif')}
          style={{height:"40%", width:"70%",alignSelf:"center"}}
        />
        
        <View style={{height:"60%",alignItems:'center',paddingTop:"5%",}}>
        <Text style={{ fontSize: 16,color:"#fff", alignSelf:"center",}}>
          Tracks:10 Albums:33 Artists:20
        </Text>
        <View style={{width:"100%",flexDirection:"row",paddingLeft:"10%", alignItems:"center",marginTop:"5%",}}>
        <CheckBox
          containerStyle={{
            width: '10%',
          }}
          checked={checkboxValue}
          onPress={() => setcheckboxValue(!checkboxValue)}
          checkedColor='#F8E910'
        />
        <Text style={{color:"#fff",alignItems:'center',justifyContent:"center", }}>
          Exclude songs less than{' '}
          <Text style={{textDecorationLine: 'underline', color:"#fff"}}>60</Text> seconds.
        </Text>

        </View>
        <View style={{paddingLeft:"10%",width:"100%",flexDirection:"row",alignItems:"center"}}>
        <CheckBox
          containerStyle={{
            width: '10%',
          }}
          checked={newValue}
          onPress={() => setNewValue(!newValue)}
          checkedColor='#F8E910'
        />
         <Text style={{color:"#fff",alignItems:'center',justifyContent:"center", }}>
          Exclude songs less than{' '}
          <Text style={{color:"#fff",textDecorationLine:'underline'}}>50Kb</Text>
        </Text>

        </View>

        <View style={{paddingLeft:"10%",width:"100%",flexDirection:"row",alignItems:"center"}}>
        <CheckBox
          containerStyle={{
            width: '10%',
         
          }}
          checked={value}
          onPress={() => setValue(!value)}
          checkedColor='#F8E910'
        />
       <Text style={{color:"#fff",alignItems:'center',justifyContent:"center",}}>
         Exclude Ringtone
         </Text>

       </View>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#f4ce5e',
            width: '78%',
            borderRadius: 10,
            height: 50,
            justifyContent:"center",
            alignItems:"center",
            marginTop:"10%",
          }}
          onPress={() => navigation.navigate('Library')}>
          <Text style={{fontWeight:"bold",color:"#fff"}}>Start scan</Text>
        </TouchableOpacity>
      </View>
      </View>
    </>
  );
};

export default Scan;
