import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
const Hidden = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkboxValue1, setcheckboxValue1] = useState(false);
  const [checkboxValue2, setcheckboxValue2] = useState(false);
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <View style={{backgroundColor: '#376f8aef', height: '100%'}}>
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
          <IconA
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
            Add Hidden Folders
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
              
              <Icon2
              name="check"
              size={25}
              style={{color: '#fff',}}
              onPress={() =>
                ToastAndroid.show(
                  'Please select a folder to hide!!',
                  ToastAndroid.SHORT,
                )
              }
            />
            </View>

  
          </View>
        </View>
       
          <TouchableOpacity>
            <View style={styles.container1}>
              <CheckBox
                containerStyle={{marginLeft: '1%'}}
                checked={checkboxValue1}
                onPress={() => setcheckboxValue1(!checkboxValue1)}
              />
              <Image
                source={{
                  uri: 'https://thumb1.shutterstock.com/image-photo/stock-vector-vector-illustration-of-folder-icon-in-grey-250nw-599718644.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Whatsapp Audio</Text>
                <Text style={styles.fileName2}>
                  /storage/emulated/0/Whatsap
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.container1}>
              <CheckBox
                containerStyle={{marginLeft: '1%'}}
                checked={checkboxValue2}
                onPress={() => setcheckboxValue2(!checkboxValue2)}
              />
              <Image
                source={{
                  uri: 'https://thumb1.shutterstock.com/image-photo/stock-vector-vector-illustration-of-folder-icon-in-grey-250nw-599718644.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Folder</Text>
                <Text style={styles.fileName2}>
                  /storage/emulated../0/music
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <Image
        source={require('../assets/hiddenBG.jpg')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <View style={{backgroundColor: '#376f8aef', height: '100%'}}>
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
          <IconA
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
            Hidden Folders
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
              
            <Pressable  onPress={() => setModalOpen(true)}>
              <Icon2
              name="plus"
              size={25}
              style={{
                color: '#fff',
               
              }}
             
            />
          </Pressable>
            </View>
            </View>  
        </View>

        <View style={{height:"92%",width:"100%"}}>
        <View style={{justifyContent:"flex-end",alignItems:"center",height:"40%"}}>
        <Icon1
          name="folder-open"
          size={80}
          style={{color: '#fff'}}
        />
        </View>
        <View style={{justifyContent:"flex-end",alignItems:"center",height:"5%"}}>
        <Text style={{color: '#fff',}}>
          No hidden folders found
        </Text>
        
        </View>
      </View>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    paddingTop: '0.1%',
    paddingBottom: '0.1%',
    paddingLeft: '8%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  fileNameView: {
    marginLeft: '4%',
    marginTop: '2%',
    flexDirection: 'column',
  },
  fileName: {
    color: 'white',
    marginTop: '2.5%',
    marginBottom: '2.5%',
    fontSize: 18,
  },
  fileName2: {
    fontSize: 15,
    color: 'white',
  },
  audioImage: {
    height: 50,
    width: 50,
    marginTop: '2.5%',
    marginBottom: '2.5%',
  },
  button: {},
});
export default Hidden;