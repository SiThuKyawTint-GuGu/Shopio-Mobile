
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TrueLogin = ({ navigation }) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  //Login
  const handlelogin = () => {
    axios.post('http://192.168.100.10:4000/api/accounts/login', {
      "email": email,
      "password": password,
    }).then((res) => {
      AsyncStorage.setItem("user_id", JSON.stringify(res.data.data._id));
      navigation.navigate('WelcomeScreen');
    }).catch((err) => {
      Toast.show({
        type: 'error',
        text2: err.response.data.error,
      });
    })

  }

  const toastConfig = {
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17
        }}
        text2Style={{
          fontSize: 13
        }}
      />
    ),
  };

  return (
    <View style={{ flex: 1 }}>
      <Image style={{ width: 400, height: 150 }} source={require("../../assets/images/wave.png")} />
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}>
        <Image source={require("../../assets/images/header.jpeg")} />
      </View>
      <View >
        <View style={{ padding: 20, paddingBottom: 0 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Email</Text>
          <TextInput onChangeText={(e) => setemail(e)} style={{ borderWidth: 1, backgroundColor: "#fdfdfd", height: 40, borderColor: "white", paddingLeft: 10, marginTop: 10 }} placeholder='Enter your email' />
        </View>
        <View style={{ padding: 20, paddingBottom: 0 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Password</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput secureTextEntry={hidePass ? true : false} onChangeText={(e) => setpassword(e)} style={{ flex: 1, borderWidth: 1, backgroundColor: "#fdfdfd", height: 40, borderColor: "white", paddingLeft: 10, marginTop: 10 }} placeholder='Enter your password' />
            <Icon name={hidePass ? 'eye-slash' : 'eye'}
              onPress={() => setHidePass(!hidePass)} style={{ fontSize: 15, position: "absolute", right: 10, top: 24 }} />
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={{ padding: 20, paddingBottom: 0 }} onPress={() => handlelogin()} >
          <View style={{ height: 40, backgroundColor: "#FAB246", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
            <Text style={{ color: "#FCFFFC", fontWeight: "bold" }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginRight: 22, marginTop: 10 }}>
        <Text >Forget Password?</Text>
      </View>
      <View style={{ justifyContent: "center", flexDirection: "row", paddingTop: 16 }}>
        <View style={{ width: 110, height: 2, backgroundColor: "#B8B9B9", marginTop: 12 }}></View>
        <Text style={{ paddingLeft: 10, paddingRight: 10, fontSize: 16, color: "gray" }}>or</Text>
        <View style={{ width: 110, height: 2, backgroundColor: "#B8B9B9", marginTop: 12 }}></View>
      </View>
      <View style={{ padding: 10, flexDirection: "row", justifyContent: "center" }} >
        <SocialIcon type='facebook' />
        <SocialIcon type='google' />
        <SocialIcon type='twitter' />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 65 }}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: "#FAB246", paddingLeft: 10, fontWeight: "bold" }} >Register</Text>
        </Pressable>
      </View>
      <Toast config={toastConfig} />
    </View>
  )
}

export default TrueLogin