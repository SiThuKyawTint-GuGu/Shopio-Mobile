import React, { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Modal, Pressable, TextInput, ScrollView, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ironicon from 'react-native-vector-icons/Ionicons'
import Data from '../../countryApi/country'
import Cdata from '../../countryApi/commonlocation'
import ldata from '../../countryApi/language'
import currency from '../../countryApi/currency';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const WelcomeScreen = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [onemodalVisible, setonemodalVisible] = useState(false);
    const [twomodalVisible, settwomodalVisible] = useState(false);
    const [language, setlanguage] = useState('English');
    const [currencyData, setcurrencyData] = useState({
        name: "USD",
        sign: "$",
    }
    )
    const [name, setname] = useState('Myanmar');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryone, setSearchQueryone] = useState('');
    const [userID, setuserID] = useState(null);


    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = JSON.parse(await AsyncStorage.getItem("user_id"))
                setuserID(userData);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, [])
    
    const handlenext = () => {
        axios.post('http://192.168.100.63:4000/api/info', {
            user_id :userID,
            location: name,
            language: language,
            currency:currencyData.name,
        }).then((res) => {
            navigation.navigate('MyTabs')
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    const filterData = (data) => {
        return Data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    const filterDataone = (data) => {
        return currency.filter(item => item.name.toLowerCase().includes(searchQueryone.toLowerCase()));
    }

    const handleselect = (id) => {
        const data = Data.filter(i => i.id === id);
        setname(data[0].name)
        setModalVisible(false);
    }
    const handleselectCdata = (id) => {
        const data = Cdata.filter(i => i.id === id);
        setname(data[0].name)
        setModalVisible(false);
    }

    const handlelanguage = (id) => {
        const data = ldata.filter(i => i.id === id);
        setlanguage(data[0].name)
        setonemodalVisible(false);
    }

    const handlecurrency = (id) => {
        const data = currency.filter(i => i.id === id);
        setcurrencyData(data[0]);
        settwomodalVisible(false);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: "center" }}>
                <Image style={{ width: 350, height: 250, position: "relative", bottom: 30 }} source={require("../../assets/images/World.png")} />
                <Text style={{ textTransform: "uppercase", position: "relative", bottom: 10, fontSize: 20, fontWeight: "bold", marginTop: 20 }}>Welcome to Shopio</Text>
            </View>
            <View style={{ marginTop: 50 }}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={{ color: "gray" }}>Location</Text>
                            <Text style={{ fontWeight: "bold", marginTop: 5 }}>{name}</Text>
                        </View>
                        <View style={{ paddingRight: 15, marginTop: 15 }}>
                            <AntDesign name="right" style={{ fontSize: 13 }} />
                        </View>
                    </View>
                </Pressable>
                <View style={{ width: 350, height: 1, backgroundColor: "#1312121d", marginLeft: 16, marginTop: 14 }}></View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Pressable onPress={() => setonemodalVisible(true)} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={{ color: "gray" }}>Language</Text>
                            <Text style={{ fontWeight: "bold", marginTop: 5 }}>{language}</Text>
                        </View>
                        <View style={{ paddingRight: 15, marginTop: 15 }}>
                            <AntDesign name="right" style={{ fontSize: 13 }} />
                        </View>
                    </View>
                    <View style={{ width: 350, height: 1, backgroundColor: "#1312121d", marginLeft: 16, marginTop: 14 }}></View>
                </Pressable>
            </View>
            <View style={{ marginTop: 10 }}>
                <Pressable onPress={() => settwomodalVisible(true)} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={{ color: "gray" }}>Currency</Text>
                            <Text style={{ fontWeight: "bold", marginTop: 5 }}>{currencyData.name}  {currencyData.sign}</Text>
                        </View>
                        <View style={{ paddingRight: 15, marginTop: 15 }}>
                            <AntDesign name="right" style={{ fontSize: 13 }} />
                        </View>
                    </View>
                    <View style={{ width: 350, height: 1, backgroundColor: "#1312121d", marginLeft: 16, marginTop: 14 }}></View>
                </Pressable>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handlenext()} >
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "black", height: 40 }}>
                    <Text style={{ fontWeight: "bold", color: "white" }}>GO SHOPPING</Text>
                </View>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 12, color: "gray" }}>You can go to the "Setting" page to modify later</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    settwoModalVisible(!twomodalVisible);
                }}>
                <View style={styles.centeredView}>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <View style={{ alignItems: "flex-end" }}>
                            <AntDesign name="close" style={{ fontSize: 15, margin: 9 }} />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", position: 'relative', bottom: 18 }}>
                            <Text style={{ color: "gray", fontSize: 15 }}>Location</Text>
                        </View>
                        <View style={{ flex: 1, borderBottomWidth: 0.9, borderBottomColor: "#1312121d" }}></View>
                        <View style={{ flexDirection: "row", alignItems: "center", margin: 20, backgroundColor: "#1312120a" }}>
                            <AntDesign name="search1" style={{ fontSize: 15, marginLeft: 10 }} />
                            <TextInput onChangeText={query => setSearchQuery(query)}
                                value={searchQuery} style={{ flex: 1, borderWidth: 1, height: 36, borderColor: 0, paddingLeft: 10 }} placeholder='Location' />
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 30 }}>
                            <Ironicon name="location-outline" style={{ fontSize: 18, marginLeft: 20 }} />
                            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>{name}</Text>
                            <Text style={{ fontWeight: "400", color: "#13121270", marginLeft: 10 }}>Current</Text>
                        </View>
                        <ScrollView>
                            <View>
                                {
                                    searchQuery.length > 0 ? '' : <View style={{ marginLeft: 20 }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                                            Common Location
                                        </Text>
                                        <View>
                                            {
                                                Cdata.map(i => {
                                                    return (
                                                        <TouchableOpacity onPress={() => handleselectCdata(i.id)}>
                                                            <Text style={{ color: "#131212c2", marginTop: 20 }}>{i.name}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </View>
                                    </View>
                                }
                                <FlatList
                                    data={filterData(Data)}
                                    renderItem={({ item }) => (
                                        <View style={{ marginLeft: 20 }} key={item.id}>
                                            {
                                                item.name.length > 1 ? <TouchableOpacity onPress={() => handleselect(item.id)}><Text style={styles.mar}>{item.name}</Text></TouchableOpacity> : <Text style={{ fontWeight: "bold", marginTop: 30 }}>{item.name}</Text>
                                            }
                                        </View>
                                    )}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </ScrollView>
                    </Pressable>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={onemodalVisible}
                onRequestClose={() => {
                    setonemodalVisible(!onemodalVisible);
                }}>
                <View style={styles.centeredView1}>
                    <View style={{ alignItems: "flex-end" }}>
                        <Pressable style={{ width: 100 }} onPress={() => setonemodalVisible(!onemodalVisible)} >
                            <AntDesign name="close" style={{ fontSize: 15, margin: 9, textAlign: "right" }} />
                        </Pressable>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", position: 'relative', bottom: 18 }}>
                        <Text style={{ color: "gray", fontSize: 15 }}>Language</Text>
                    </View>
                    {
                        ldata.map(i => {
                            return (
                                <Pressable onPress={() => handlelanguage(i.id)}>
                                    <View>
                                        <View style={{ borderBottomWidth: 0.9, borderBottomColor: "#13121210", marginLeft: 15 }}></View>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <Text style={{ fontWeight: 'bold', margin: 15 }}>{i.name}</Text>
                                            {
                                                language === i.name && <AntDesign name="check" style={{ fontSize: 17, margin: 15, marginTop: 16 }} />
                                            }
                                        </View>
                                    </View>
                                </Pressable>
                            )
                        })
                    }
                    <View style={{ borderBottomWidth: 0.9, borderBottomColor: "#13121210", marginLeft: 15 }}></View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "gray", fontSize: 12, textAlign: "center", padding: 15 }}>Because the language has been modified,you need to restart to enter the app</Text>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={twomodalVisible}
                onRequestClose={() => {
                    settwoModalVisible(!twomodalVisible);
                }}>
                <View style={styles.centeredView2}>
                    <View style={{ alignItems: "flex-end" }}>
                        <Pressable style={{ width: 100 }} onPress={() => settwomodalVisible(!twomodalVisible)} >
                            <AntDesign name="close" style={{ fontSize: 15, margin: 9, textAlign: "right" }} />
                        </Pressable>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", position: 'relative', bottom: 18 }}>
                        <Text style={{ color: "gray", fontSize: 15 }}>Currency</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.9, borderBottomColor: "#1312121d" }}></View>
                    <View style={{ flexDirection: "row", alignItems: "center", margin: 20, backgroundColor: "#1312120a" }}>
                        <AntDesign name="search1" style={{ fontSize: 15, marginLeft: 10 }} />
                        <TextInput onChangeText={query => setSearchQueryone(query)}
                            value={searchQueryone} style={{ flex: 1, borderWidth: 1, height: 36, borderColor: 0, paddingLeft: 10 }} placeholder='Currency' />
                    </View>
                    <View>
                        <View style={{ borderBottomWidth: 0.9, borderBottomColor: "#13121210", marginLeft: 15 }}></View>
                        <FlatList
                            data={filterDataone(currency)}
                            renderItem={({ item }) => (
                                <View style={{ marginLeft: 0 }} key={item.id}>
                                    {
                                        <Pressable onPress={() => handlecurrency(item.id)}>
                                            <View>
                                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                    {
                                                        currencyData.name === item.name ? <View style={{ flexDirection: "row" }}>
                                                            <Text style={{ fontWeight: 'bold', margin: 15, width: 50 }}>{item.name}</Text>
                                                            <Text style={{ color: "gray", fontWeight: "bold", position: "relative", top: 15, }}>{item.sign}</Text>
                                                        </View> : <View style={{ flexDirection: "row" }}>
                                                            <Text style={{ margin: 15, width: 50 }}>{item.name}</Text>
                                                            <Text style={{ color: "gray", position: "relative", top: 15, }}>{item.sign}</Text>
                                                        </View>
                                                    }

                                                    {
                                                        currencyData.name === item.name && <AntDesign name="check" style={{ fontSize: 17, margin: 15, marginTop: 16 }} />
                                                    }
                                                </View>
                                                <View style={{ borderBottomWidth: 0.9, borderBottomColor: "#13121210", marginLeft: 15 }}></View>
                                            </View>
                                        </Pressable>
                                    }
                                </View>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    button: {
        margin: 16,
        marginTop: 30
    },
    centeredView: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 100
    },
    centeredView1: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 500
    },
    centeredView2: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 100
    },
    mar: {
        color: "#131212c2",
        marginTop: 20,
    }
});