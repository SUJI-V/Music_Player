import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo'; //3dots
import Icon1 from 'react-native-vector-icons/AntDesign'; //playnext
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'; //playlist-plus
import Icon3 from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';

const Recentadd = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalViewTop}
          onPress={() => setModalOpen(false)}></TouchableOpacity>

        <View style={styles.modalViewBottom}>
          <View style={styles.ModalHeaderView}>
            <Text style={styles.ModalHeaderText}>Audio file.mp4</Text>
          </View>
          <View style={styles.modalIconsContainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.IconsRow}>
                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1
                    name="stepforward"
                    style={styles.modalIcon}
                    size={20}
                  />
                  <Text style={styles.iconText}>Play Next</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon3 name="cut" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>Trim</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.IconsRow}>
                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1
                    name="plussquareo"
                    style={styles.modalIcon}
                    size={20}
                  />
                  <Text style={styles.iconText}>Add To</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon2 name="image" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>ArtWork</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.IconsRow}>
                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon2
                    name="playlist-plus"
                    style={styles.modalIcon}
                    size={20}
                  />
                  <Text style={styles.iconText}>Enqueue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1 name="sharealt" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>Share</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.IconsRow}>
                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1 name="bells" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>Ringtone</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.IconTouchableOpacity}>
                  <Icon1 name="delete" style={styles.modalIcon} size={20} />
                  <Text style={styles.iconText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View>
        <Image
          source={require('../../assets/RecentBg.jpg')}
          style={{position: 'absolute', width: '100%', height: '100%'}}
        />

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
          <Icon1
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
          Folders
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
                width: '45%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}>
              <IconA
                name="search1"
                size={25}
                color="#fff"
                onPress={() => navigation.navigate('Library')}
              />
              <Icon
                name="dots-three-vertical" size={20} color="#fff"   onPress={() => navigation.navigate('Settings')}/>
            </View>
          </View>
        </View>

        <ScrollView style={{backgroundColor: '#376f8acd', height: '82%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Audio')}>
            <View style={styles.container}>
            <Image
                source={{
                  uri: 'https://thumb1.shutterstock.com/image-photo/stock-vector-vector-illustration-of-folder-icon-in-grey-250nw-599718644.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>audio</Text>
                <Text style={styles.fileName2}>/storage/emu...Xender/audio</Text>
              </View>

              <Icon
                name="dots-three-vertical"
                style={styles.dotIcon}
                size={20}
                onPress={() => setModalOpen(true)}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Download')}>
            <View style={styles.container}>
            <Image
                source={{
                  uri: 'https://thumb1.shutterstock.com/image-photo/stock-vector-vector-illustration-of-folder-icon-in-grey-250nw-599718644.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Download</Text>
                <Text style={styles.fileName2}>/storage/emu...Xender/audio</Text>
              </View>

              <Icon
                name="dots-three-vertical"
                style={styles.dotIcon}
                size={20}
                onPress={() => setModalOpen(true)}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Music')}>
            <View style={styles.container}>
            <Image
                source={{
                  uri: 'https://thumb1.shutterstock.com/image-photo/stock-vector-vector-illustration-of-folder-icon-in-grey-250nw-599718644.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}>Music</Text>
                <Text style={styles.fileName2}>/storage/emu...Xender/audio</Text>
              </View>

              <Icon
                name="dots-three-vertical"
                style={styles.dotIcon}
                size={20}
                onPress={() => setModalOpen(true)}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Whatsapp')}>
            <View style={styles.container}>
            <Image
                source={{
                  uri: 'https://thumb1.shutterstock.com/image-photo/stock-vector-vector-illustration-of-folder-icon-in-grey-250nw-599718644.jpg',
                }}
                style={styles.audioImage}
              />
              <View style={styles.fileNameView}>
                <Text style={styles.fileName}> Whatsapp Audio</Text>
                <Text style={styles.fileName2}>/storage/emu...Xender/audio</Text>
              </View>

              <Icon
                name="dots-three-vertical"
                style={styles.dotIcon}
                size={20}
                onPress={() => setModalOpen(true)}
              />
            </View>
          </TouchableOpacity>

          
            
        </ScrollView>

        <View style={styles.PlayerView}>
          <View style={styles.Player}>
            <Icon3 name="music" size={30} color="#fff" />
            <Text style={{color: '#fff', fontSize: 15}}>03-uyire.mp3</Text>
            <IconM name="play-arrow" size={30} color="#fff" />
            <IconM name="fast-forward" size={30} color="#fff" />
            <IconM name="queue-music" size={30} color="#fff" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Recentadd;

const styles = StyleSheet.create({
  container: {
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
  dotIcon: {
    padding: 10,
    marginLeft: '89%',
    marginTop: '2.5%',
    color: 'white',
    width: '15%',
    position: 'absolute',
  },
  modalViewTop: {
    height: '60%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flexWrap: 'wrap',
  },
  modalViewBottom: {
    flexWrap: 'wrap',
    height: '40%',
    backgroundColor: '#376f8a',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  ModalHeaderView: {
    justifyContent: 'center',
    backgroundColor: '#376f8a',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  ModalHeaderText: {
    fontSize: 21,
    color: 'white',
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: '7%',
  },
  modalIconsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    margin: '1%',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  IconsRow: {
    backgroundColor: '#376f8a',
    marginLeft: '4%',
    marginRight: '4%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  modalIcon: {
    padding: '5.5%',
    color: 'white',
  },
  iconText: {
    color: 'white',
  },
  IconTouchableOpacity: {
    alignItems: 'center',
  },
  PlayerView: {
    width: '100%',
    height: '10%',
    backgroundColor: '#376f8aaa',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ffffffae',
  },
  Player: {
    height: '100%',
    width: '95%',
    //borderRadius:25,
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});


