
import React from 'react'
import { Text,View ,Image,StyleSheet,Button,TouchableOpacity} from 'react-native'
const LoginScreen = ({navigation}) => {
  return (
      <View style={{flex:1,alignItems:"center",backgroundColor:"#FAB246"}}>
          <Image style={{ marginTop: 180,tintColor:"#FCFFFC" }} source={require("../../assets/images/header.jpeg")} />
          <View style={{marginTop:60 }}>
           <TouchableOpacity onPress={()=>navigation.navigate('TrueLogin')} >
                  <View style={{height:40,backgroundColor:"#FCFFFC",width:300,justifyContent:"center",alignItems:"center",borderRadius:5}}>
                  <Text style={{color:"#F99834",fontWeight:"bold"}}>
                      Login
                  </Text>
              </View>
              </TouchableOpacity> 
          </View>
          <View style={{marginTop:20}}>
           <TouchableOpacity onPress={()=>navigation.navigate('Register')} >
                  <View style={{height:40,borderWidth:2,borderColor:"#FCFFFC",width:300,justifyContent:"center",alignItems:"center",borderRadius:5}}>
                  <Text style={{color:"#FCFFFC",fontWeight:"bold"}}>
                      Register
                  </Text>
              </View>
              </TouchableOpacity> 
          </View>
          <View style={{marginTop:70}}>
              <Text style={{color:"#FCFFFC"}}>Quick Login with Touch ID</Text>
          </View>
          <TouchableOpacity >
            <View>
               <Image style={{ tintColor:"white",width:80,height:80,margin:30 }} source={require("../../assets/images/TouchId.webp")} />
          </View>
          </TouchableOpacity>
          <View>
              <Text style={{color:"#FCFFFC",textDecorationLine:"underline"}}>Use Touch ID</Text>
          </View>
      </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    lbtn: {
        height: 40,
        borderColor: "gray",
        borderWidth: 0.5
    }
});

