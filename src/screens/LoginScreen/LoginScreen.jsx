
import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, Button, TouchableOpacity ,Platform,Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication'

const LoginScreen = ({ navigation }) => {
    
    // const handelnext = async () => {
    //     try {
    //         const userData = JSON.parse(await AsyncStorage.getItem("user_id"))
    //         if (userData) {
    //             navigation.navigate('MyTabs')
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    state = {
        compatible: false,
        fingerprints: false,
        result: ''
    }

    componentDidMount = ()  => {
        this.checkDeviceForHardware();
        this.checkForFingerprints();
    }


    checkDeviceForHardware = async () => {
        let compatible = await LocalAuthentication.hasHardwareAsync();
        console.log(compatible);
        this.setState({ compatible })
    }

    checkForFingerprints = async () => {
        let fingerprints = await LocalAuthentication.isEnrolledAsync();
        console.log(fingerprints);
        this.setState({ fingerprints })
    }

     scanFingerprint = async () => {
        try {
            let scanResult = await LocalAuthentication.authenticateAsync();
            console.log('Scan Result:', scanResult)
            navigation.navigate('MyTabs')
        } catch (error) {
            console.log(error);
        }
    }


    showAndroidAlert = () => {
        this.scanFingerprint();
    }

   


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
          <View>
              <View style={styles.container}>
                  <TouchableOpacity onPress={Platform.OS === 'android' ? this.showAndroidAlert : this.scanFingerprint} style={styles.button}>
                      <View>
                          <Image style={{ tintColor: "white", width: 80, height: 80, margin: 30 }} source={require("../../assets/images/TouchId.webp")} />
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
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
    },
    container: {
        alignItems: 'center',
        padding:40,
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 18,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 60,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 30,
        color: '#fff'
    }
});

