import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';
import Iconf from 'react-native-vector-icons/Foundation';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconI from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bg5.jpg')}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <View style={styles.menubar}>
        <Icon
          name="menu"
          size={30}
          color="#fff"
          style={{width: '10%'}}
          onPress={() => navigation.openDrawer()}
        />
        <Text
          style={{
            color: '#fff',
            fontFamily: 'italic',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: '1%',
          }}>
          Music Player
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
              width: '43%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}>
            <IconA
              name="gift"
              size={30}
              color="#fff"
              onPress={() => navigation.navigate('Ads')}
            />
            <Icon
              name="search"
              size={30}
              color="#fff"
              onPress={() => navigation.navigate('Library')}
            />
          </View>
        </View>
      </View>

      <View style={styles.Tiles}></View>
      <View style={styles.row1}>
        <TouchableOpacity
          style={styles.Tile1}
          onPress={() => navigation.navigate('Library')}>
          <View style={styles.InnerTilesBox}>
            <IconI name="musical-notes" size={40} color="#fff" />
            <Text style={styles.TilesText}>LIBRARY</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Tile2}
          onPress={() => navigation.navigate('Folder')}>
          <View style={styles.InnerTilesBox}>
            <IconFA name="folder-open" size={40} color="#fff" />
            <Text style={styles.TilesText}>FOLDER</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Tile3}
          onPress={() => navigation.navigate('Favorite')}>
          <View style={styles.InnerTilesBox}>
            <IconA name="heart" size={40} color="#fff" />
            <Text style={styles.TilesText}>FAVOURITE</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.row2}>
        <TouchableOpacity
          style={styles.Tile4}
          onPress={() => navigation.navigate('Recent Play')}>
          <View style={styles.InnerTilesBox}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'baseline',
              }}>
              <IconFA name="clock-o" size={50} color="#fff" />

              <IconE
                name="triangle-right"
                size={25}
                color="#fff"
                style={{height: '50%'}}
              />
            </View>
            <Text style={styles.TilesText}>RECENT PLAY</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Tile5}
          onPress={() => navigation.navigate('Recent add')}>
          <View style={styles.InnerTilesBox}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'baseline',
              }}>
              <IconFA name="clock-o" size={50} color="#fff" />
              <IconE
                name="plus"
                size={25}
                color="#fff"
                style={{height: '50%'}}
              />
            </View>
            <Text style={styles.TilesText}>RECENT ADD</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Tile6}
          onPress={() => navigation.navigate('Most Play')}>
          <View style={styles.InnerTilesBox}>
            <IconMCI
              name="contactless-payment-circle-outline"
              size={50}
              color="#fff"
            />
            <Text style={styles.TilesText}>MOST PLAY</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.playlistView}>
        <View style={styles.leftbox}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
            PLAYLIST (1)
          </Text>
        </View>
        <View style={styles.rightbox}>
          <Icon
            name="add"
            size={30}
            style={{color: '#fff'}}
            onPress={() => setModalOpen(true)}
          />
          <Icon
            name="arrow-right"
            size={30}
            style={{color: '#fff', marginLeft: '2%'}}
            onPress={() => navigation.navigate('Recent')}
          />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.containerM}>
        <Modal visible={modalOpen} animationType="slide" transparent={true}>
          <TouchableOpacity
            style={styles.ModalRow1}
            onPress={() => setModalOpen(false)}></TouchableOpacity>
          <View style={styles.ModalRow2}>
            <TouchableOpacity
              style={{height: '100%', width: '5%'}}
              onPress={() => setModalOpen(false)}></TouchableOpacity>

            <View
              style={{
                height: '100%',
                width: '90%',
                backgroundColor: '#ffffff',
              }}>
              <View
                style={{
                  height: '33%',
                  width: '100%',
                  justifyContent: 'center',
                  paddingLeft: '3%',
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Create new playlist
                </Text>
              </View>
              <View
                style={{
                  height: '33%',
                  width: '100%',
                  ustifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    height: '100%',
                    width: '90%',
                    borderBottomWidth: 1,
                    borderBottomColor: '#f4ce5e',
                  }}
                  placeholder={'New list 1'}></TextInput>
              </View>
              <View
                style={{
                  height: '34%',
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                }}>
                <View style={{height: '70%', width: '50%'}}></View>
                <View
                  style={{
                    height: '70%',
                    width: '25%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Pressable
                    onPress={() => {
                      setModalOpen(false);
                      ToastAndroid.show('Canceled', ToastAndroid.SHORT);
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'normal',
                        color: '#f4ce5e',
                      }}>
                      CANCEL
                    </Text>
                  </Pressable>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setModalOpen(false);
                    ToastAndroid.show(
                      'New Playlist Created',
                      ToastAndroid.SHORT,
                    );
                  }}
                  style={{
                    height: '70%',
                    width: '25%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'normal',
                      color: '#f4ce5e',
                    }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={{height: '100%', width: '5%'}}
              onPress={() => setModalOpen(false)}></TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.ModalRow3}
            onPress={() => setModalOpen(false)}></TouchableOpacity>
        </Modal>
      </KeyboardAvoidingView>

      <View style={styles.row3}>
        <TouchableOpacity
          style={styles.Tile4}
          onPress={() => navigation.navigate('Library')}>
          <View style={styles.InnerTilesBox}>
            <Icon name="menu" size={30} color="white" />
            <Text style={styles.TilesText}>DEFAULT LIST</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Tile4}
          onPress={() => setModalOpen(true)}>
          <View style={styles.InnerTilesBox}>
            <Icon name="add" size={60} color="white" />
          </View>
        </TouchableOpacity>

        <View style={styles.TileEmpty}></View>
      </View>
      <View style={styles.row4}>
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 50,
            backgroundColor: '#F4CE5E',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <IconE
            name="shuffle"
            size={30}
            color="#fff"
            onPress={() =>
              ToastAndroid.show('Current Queue Shuffled!', ToastAndroid.SHORT)
            }
          />
        </View>
      </View>
      <View style={styles.PlayerView}>
        <View style={styles.Player}>
          <Iconf name="music" size={30} color="#fff" />
          <Text style={{color: '#fff', fontSize: 15}}>03-uyire.mp3</Text>
          <Icon name="play-arrow" size={30} color="#fff" />
          <Icon name="fast-forward" size={30} color="#fff" />
          <Icon name="queue-music" size={30} color="#fff" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    width: '100%',
    //flexWrap:"wrap"
  },
  menubar: {
    height: '8%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#376f8aef',
  },
  Tiles: {
    flexDirection: 'column',
    //backgroundColor:"#76B5C5",
    justifyContent: 'center',
  },
  row1: {
    height: '20%',
    width: '100%',
    backgroundColor: '#376f8aba',
    //backgroundColor:"skyblue",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  row2: {
    height: '20%',
    backgroundColor: '#376f8aba',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  Tile1: {
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4691E4',
  },
  Tile2: {
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D49369',
  },
  Tile3: {
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D49198',
  },
  Tile4: {
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6FB2DC',
  },
  Tile5: {
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0DC89B',
  },
  Tile6: {
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AB8FDC',
  },
  TileEmpty: {
    width: '30%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InnerTilesBox: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  TilesText: {
    marginTop: '5%',
    color: '#fff',
    fontWeight: 'bold',
  },
  playlistView: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#376f8ada',
  },
  leftbox: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '5%',
  },
  rightbox: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerM: {
    flex: 1,
  },
  ModalRow1: {
    width: '100%',
    height: '30%',
  },
  ModalRow2: {
    width: '100%',
    height: '30%',

    flexDirection: 'row',
  },
  ModalRow3: {
    width: '100%',
    height: '40%',
  },
  row3: {
    height: '20%',
    width: '100%',
    backgroundColor: '#376f8aba',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  row4: {
    height: '14%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#376f8aba',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    paddingRight: '3%',
    paddingBottom: '3%',
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
    height: '80%',
    width: '95%',
    //borderRadius:25,
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default HomeScreen;
