import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const handleregister = () => {
        axios.post('http://192.168.100.10:4000/api/', {
            "username": username,
            "email": email,
            "password": password,
        }).then((res) => {
            console.log(res.data)
            if (res.data.email === undefined && res.data.username === undefined && res.data.password === undefined) {
                Toast.show({
                    type: 'error',
                    text2: 'Email Or Password is required!',
                });
            } else {
                navigation.navigate('Login');
            }
        }).catch((err) => {
            Toast.show({
                type: 'error',
                text2: 'Email Or Password is required!',
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
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Username</Text>
                    <TextInput onChangeText={(e) => setusername(e)} style={{ borderWidth: 1, backgroundColor: "#fdfdfd", height: 40, borderColor: "white", paddingLeft: 10, marginTop: 10 }} placeholder='Enter username' />
                </View>
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
                <TouchableOpacity style={{ padding: 20, paddingBottom: 0 }} onPress={() => handleregister()} >
                    <View style={{ height: 40, backgroundColor: "#FAB246", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                        <Text style={{ color: "#FCFFFC", fontWeight: "bold" }}>
                            Register Now
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 130 }}>
                <Text>Don't have an account?</Text>
                <Pressable onPress={() => navigation.navigate('TrueLogin')}>
                    <Text style={{ color: "#FAB246", paddingLeft: 10, fontWeight: "bold" }} >Login</Text>
                </Pressable>
            </View>
            <Toast config={toastConfig} />
        </View>
    )
}

export default RegisterScreen