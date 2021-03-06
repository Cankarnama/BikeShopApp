import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, } from 'react-native';
import { color } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';  


/*
THings well be focusing on on the login page
image
text
button
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      style ={styles.imageStyle}
      source={require("./assets/bike.jpg" )}/>

          <Text
          style={{
            fontSize:33,
          }}
          >Welcome to</Text>
           <Text
          style={{ 
            fontWeight:'bold',
            fontSize: 35
          }}
          >Power Bike Shop</Text>
<View style={styles.bottomview}>
       
          <TouchableOpacity
          style={styles.googlebutton}
          >
              <AntDesign name="google" size={24} color="#FF8C00" />
             <Text style={styles.bottontext}>Login with Gmail</Text>
             
          </TouchableOpacity>
           <TouchableOpacity
          style={styles.applebutton}
          >  
          <AntDesign name="apple1" siz={50} color= "white"/>
          
             <Text style={styles.appletext}>Login with Apple</Text>
             
          </TouchableOpacity>
          </View>

          <View style={styles.lastview}>


            <Text style={styles.bottomtext}>Not a member?</Text>
            
          <Text style={styles.lasttext}>Sign up?</Text>
          
          </View>
       </View>
       
      
       
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle:{

    width:250,
    height:250,
    borderRadius:20,
    transform:[{rotate:"-45deg"}],
    marginBottom:90,
  },

  bottontext:{
    fontWeight:'bold',
    fontSize: 15,
    color:'#000000'
  },
  appletext:{
    fontWeight:'bold',
    fontSize: 15,
    color: '#F7F4F3',
  },

  googlebutton:{
    backgroundColor:'#DCDCDC'	,
    padding: 15,
    marginTop :10,
    borderRadius:10,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center',
    

    
  
    

  },
  applebutton:{
    backgroundColor:'#000000',
    padding: 15,
    marginTop :10,
    borderRadius:10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  
    

  },
  bottomview:{
    width:"99%",
    paddingHorizontal:20,
 },

 bottomtext:{
marginTop: 10,
fontSize:15,
color:'#B4AFAF',
  
 },

 lastview:{
   flexDirection:'row',
 
    
   },
   
   lasttext:{
     color:'#FF8C00',
     marginTop: 10,
     fontSize:15,
     fontWeight:'bold',
     

   }
 



 
  

 



 
});
    