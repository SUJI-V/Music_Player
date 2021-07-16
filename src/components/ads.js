import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Ads = ({navigation}) => {
  return (
    <ScrollView  style={{height:"100%",width:"100%",}}>
     <View style={{ height:50,
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: '#fff',
    opacity:.7}}>
                <AntDesign  name="arrowleft" size={25} color="grey"  style={{width:"10%",}}  onPress={() => navigation.goBack()} />
                <Text style={{color:"green", fontFamily: "italic", fontWeight: "bold", fontSize: 20,marginTop:"1%" }}>Apps</Text>
<View style={{height:"100%",width:"60%",flexDirection:"row", flexWrap:"wrap", alignContent:"center",justifyContent:"flex-end",}}>
<View style={{height:"100%",width:"43%",flexDirection:"row", flexWrap:"wrap",alignItems:"center", alignContent:"center",justifyContent:"flex-end", }}>
               
                </View>
                </View>
            </View>
  
    
        
      <View style={{alignItems:"center",}}>
       
        <View
          style={{
            height:300,
            borderRadius: 25,
            width: '90%',
            marginTop:"3%",
            marginBottom:"1.5%",
            alignContent: 'center',
            backgroundColor:"#fff"
          }}>
            <View  style={{justifyContent:"center",height:"10%",}}>
          <Text style={{fontWeight: 'bold',marginLeft:"5%"}}>
            Recomended
          </Text>
          </View>

 <View style={{height:"90%",flexDirection:"row",justifyContent:"space-around"}}>


        <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/1.jpg')}
            style={{height: 50, width: 50, borderRadius: 25, }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontStyle: 'italic', fontSize: 12}}>
            Music Player
          </Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            
          <Image
            source={require('../assets/ads/2.jpg')}
            style={{
              height: 50,
              width: 60,
              borderRadius: 25,
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
           
            <Text
            style={{fontSize: 12, fontStyle: 'italic'}}>
            HD Camera
          </Text>
            </View>
            </View>
         
         
            <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/4.png')}
            style={{
              height: 60,
              width: 50,
              borderRadius: 25,
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>
            Photo Slideshow
          </Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
           
            <Image
            source={require('../assets/ads/booster.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,      
            }}
          />
           </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 11, }}>Volume Booster</Text>
            </View>
            </View>
         
         
           
            <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/system.jpg')}
            style={{
              height: 50,
              width: 60,
              borderRadius: 25,
             
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>Music Player</Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/gallery.png')}
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
             
            }}
          />
          </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>Gallery</Text>
            </View>
            </View>
         
 
        
        </View>
 </View>

 <View
          style={{
            height:300,
            borderRadius: 25,
            width: '90%',
            marginTop:"1.5%",
            marginBottom:"1.5%",
            alignContent: 'center',
            backgroundColor:"#fff",
          }}>
            <View  style={{justifyContent:"center",height:"10%",}}>
          <Text style={{fontWeight: 'bold',marginLeft:"5%"}}>
            Top Rated Apps
          </Text>
          </View>

 <View style={{height:"90%",flexDirection:"row",justifyContent:"space-around", borderRadius: 25,}}>


        <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/play.jpg')}
            style={{height: 50, width: 50, borderRadius: 25, }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontSize: 12}}>HD Video</Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
         
            <Image
            source={require('../assets/ads/jelly.jpg')}
            style={{
              height: 50,
              width: 60,
              borderRadius: 25,
             
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
           
            <Text style={{ fontSize: 12}}>Tiles Match</Text>
            </View>
            
          
            </View>
         
         
            <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/weather.png')}
            style={{
              height: 50,
              width: 60,
              borderRadius: 25,
             
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>
             Forecast
          </Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            
          <Image
            source={require('../assets/ads/pics.jpg')}
            style={{
              height: 60,
              width: 60,
              borderRadius: 25,
           
            }}
          />
           
           </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontSize: 12}}>Photo Editor</Text>
            </View>

            

            </View>
         
         
           
            <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            
            <Image
            source={require('../assets/ads/lock.jpg')}
            style={{
              height: 50,
              width: 60,
              borderRadius: 25,
             
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>Lock Screen</Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/cleaner.jpg')}
            style={{
              height: 50,
              width: 60,
              borderRadius: 25,
             
            }}
          />
          </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>
            Phone Cleaner
          </Text>
            </View>


          
            </View>
         
 
        
        </View>
 </View>


 <View
          style={{
            height:300,
            borderRadius: 25,
            width: '90%',
            marginTop:"1.5%",
            marginBottom:"3%",
            alignContent: 'center',
            backgroundColor:"#fff",
          }}>
            <View  style={{justifyContent:"center",height:"10%",}}>
          <Text style={{fontWeight: 'bold',marginLeft:"5%"}}>
           Games
          </Text>
          </View>

 <View style={{height:"90%",flexDirection:"row",justifyContent:"space-around", borderRadius: 25}}>


        <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/tiles.jpg')}
            style={{height: 50, width: 50, borderRadius: 15,}}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontSize: 12}}>Tiles Match</Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
         
            <Image
            source={require('../assets/ads/puzzle.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
           
            <Text style={{ fontSize: 12}}>Block Puzzle</Text>
            </View>
            
          
            </View>
         
         
            <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/shooter.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>
             Bubble Shooter
          </Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            
            <Image
            source={require('../assets/ads/jelly.jpg')}
            style={{
              height: 50,
              width: 60,
              borderRadius: 25,
            
            }}
          />
           
           </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontSize: 12}}>Jelly Smasher</Text>
            </View>

            

            </View>
         
         
           
            <View style={{width:"25%",height:"100%",}}>

            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            
            <Image
            source={require('../assets/ads/lock.jpg')}
            style={{
              height: 50,
              width: 60,
              borderRadius: 25,
             
            }}
          />
            </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>Bubble Sort</Text>
            </View>
            <View style={{width:"100%",height:"35%",justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../assets/ads/1.jpg')}
            style={{height: 50, width: 50, borderRadius: 25, }}
          />
          </View>
            <View style={{width:"100%",height:"15%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize: 12}}>
            Guitar Player
          </Text>
            </View>


          
            </View>
         
 
        
        </View>
 </View>


        
      </View>
    </ScrollView>
    
  );
};

export default Ads;
