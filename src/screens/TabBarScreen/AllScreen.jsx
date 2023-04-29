import React, { memo, useEffect, useState } from 'react'
import { ScrollView, Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import SlideScroll from '../../components/SlideScroll'
import Poster from '../../components/Poster'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import Footer from '../../components/Footer'

const AllScreen = () => {

    const [flashsale, setflashsale] = useState([]);
    const [sportlight, setsportlight] = useState([]);
    const [lastflashsale, setlastflashsale] = useState([]);
    const [recommand, setrecommand] = useState([]);

    useEffect(() => {
        //FlashSale
        axios.get('http://192.168.1.2:4000/api/flashsale').then(
            (res) => {
                const spliceArray = res.data.slice(0, 8);
                const lastobject = res.data.slice(8, 9);
                setflashsale(spliceArray)
                setlastflashsale(lastobject)
            }
        ).catch((error) => {
            console.log(error)
        })
        //Sportlight
        axios.get('http://192.168.1.2:4000/api/sportlight').then(
            res => setsportlight(res.data)
        ).catch((error) => {
            console.log(error)
        })

        //Recommand
        axios.get('http://192.168.1.2:4000/api/recommand').then(
            res => setrecommand(res.data)
        ).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <ScrollView>
                <Poster />
                <SlideScroll />
                <View style={{ backgroundColor: "white"}}>
                    <View>
                        <Image style={{ width: '100%', height: 150 }}
                            source={require('../../assets/images/collection.webp')} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "white" }}>
                        <View style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>$6</Text>
                                <View style={{ backgroundColor: "black", width: 30, height: 18, marginTop: 4, marginLeft: 3 }}>
                                    <Text style={{ color: "white", fontSize: 11, fontWeight: "400", textAlign: "center", marginTop: 2 }}>OFF</Text>
                                </View>
                            </View>
                            <Text style={{ fontWeight: "400", fontSize: 9, marginTop: 1 }}>ON ORDERS OF $60+</Text>
                        </View>
                        <View style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>$15</Text>
                                <View style={{ backgroundColor: "black", width: 30, height: 18, marginTop: 4, marginLeft: 3 }}>
                                    <Text style={{ color: "white", fontSize: 11, fontWeight: "400", textAlign: "center", marginTop: 2 }}>OFF</Text>
                                </View>
                            </View>
                            <Text style={{ fontWeight: "400", fontSize: 9, marginTop: 1 }}>ON ORDERS OF $100+</Text>
                        </View>
                        <View style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>$30</Text>
                                <View style={{ backgroundColor: "black", width: 30, height: 18, marginTop: 4, marginLeft: 3 }}>
                                    <Text style={{ color: "white", fontSize: 11, fontWeight: "400", textAlign: "center", marginTop: 2 }}>OFF</Text>
                                </View>
                            </View>
                            <Text style={{ fontWeight: "400", fontSize: 9, marginTop: 1 }}>ON ORDERS OF $150+</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center', paddingTop: 13, backgroundColor: "white" }}>
                        <View style={{ backgroundColor: "black", flexDirection: "row", paddingHorizontal: 22, paddingVertical: 4 }}>
                            <Text style={{ color: "white", fontSize: 11 }}>CODE:</Text>
                            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold", marginLeft: 6, marginTop: 1 }}>AS12</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'contain' }}
                                source={require('../../assets/images/women.webp')} />
                            <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "400", marginTop: 2 }}>Women</Text>
                        </View>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'contain' }}
                                source={require('../../assets/images/curve.jpeg')} />
                            <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "400", marginTop: 2 }}>Curve</Text>
                        </View>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'contain' }}
                                source={require('../../assets/images/kids.webp')} />
                            <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "400", marginTop: 2 }}>Baby & Kids</Text>
                        </View>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'contain' }}
                                source={require('../../assets/images/men.webp')} />
                            <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "400", marginTop: 2 }}>Men</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'cover' }}
                                source={require('../../assets/images/home.webp')} />
                            <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "400", marginTop: 2 }}>Home & Living</Text>
                        </View>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'cover' }}
                                source={require('../../assets/images/beg.webp')} />
                            <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "400", marginTop: 2 }}>Shoes & Bags</Text>
                        </View>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'cover' }}
                                source={require('../../assets/images/dress.webp')} />
                            <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "400", marginTop: 2 }}>Dresses</Text>
                        </View>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'cover' }}
                                source={require('../../assets/images/jewelry.webp')} />
                            <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "400", marginTop: 2 }}>Acc $ Jewelry</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ margin: 13, marginBottom: 0 }}>
                            <Text style={{ fontWeight: "500" }}>Flash Sale</Text>
                        </View>
                        <View style={{}}>
                            <ScrollView horizontal={true}>
                                <View style={{ flexDirection: "row", margin: 9.5, marginTop: 5 }}>

                                    {
                                        flashsale.map((i) => {
                                            return (
                                                <View style={{ position: "relative", margin: 3.5 }} key={i._id}>
                                                    <View style={{ width: 35, height: 30, backgroundColor: "#FDCB26", position: "absolute", }}>
                                                        <FontAwesome name="flash" style={{ marginLeft: 14.5, fontSize: 14, marginTop: 3 }} />
                                                        <Text style={{ fontSize: 9, fontWeight: "500", marginLeft: 8 }}>{i.percentage}</Text>
                                                    </View>
                                                    <Image style={{ width: 100, height: 135, zIndex: -1 }} source={{ uri: `http://192.168.100.63:4000/${i.image}` }} />
                                                    <Text style={{ fontWeight: "700", color: "#DF6B49", fontSize: 11, marginTop: 4 }}>{i.discountprice}</Text>
                                                    <Text style={{ fontSize: 10, color: '#B8B8B8', textDecorationLine: "line-through" }}>{i.normalprice}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                    {
                                        lastflashsale.map((i) => {
                                            return (
                                                <View style={{ position: "relative", margin: 3.5 }} key={i._id}>
                                                    <View style={{ opacity: 0.2 }}>
                                                        <View style={{ width: 35, height: 30, backgroundColor: "#FDCB26", position: "absolute", }}>
                                                            <FontAwesome name="flash" style={{ marginLeft: 14.5, fontSize: 14, marginTop: 3 }} />
                                                            <Text style={{ fontSize: 9, fontWeight: "500", marginLeft: 8 }}>{i.percentage}</Text>
                                                        </View>
                                                        <Image style={{ width: 100, height: 135, zIndex: -1 }} source={{ uri: `http://192.168.100.63:4000/${i.image}` }} />
                                                        <Text style={{ fontWeight: "700", color: "#DF6B49", fontSize: 11, marginTop: 4 }}>{i.discountprice}</Text>
                                                        <Text style={{ fontSize: 10, color: '#B8B8B8', textDecorationLine: "line-through" }}>{i.normalprice}</Text>
                                                    </View>
                                                    <View style={{ position: "absolute", left: 16, top: 60 }}>
                                                        <SimpleLineIcons name="arrow-right-circle" style={{ fontSize: 30, marginLeft: 18 }} />
                                                        <Text style={{ fontWeight: "500", paddingTop: 10, fontSize: 13, letterSpacing: -0.5, paddingLeft: 7 }}>View More</Text>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <View style={{ margin: 13, marginBottom: 0 }}>
                            <Text style={{ fontWeight: "500" }}>Sportlight</Text>
                        </View>
                        <View style={{}}>
                            <ScrollView horizontal={true}>
                                <View style={{ flexDirection: "row", margin: 9.5, marginTop: 0 }}>
                                    {
                                        sportlight.map((i) => {
                                            return (
                                                <View style={{ position: "relative", margin: 3.5, }}>
                                                    <Image style={{ width: 100, height: 130, zIndex: -1, resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: `http://192.168.100.63:4000/${i.image}` }} />
                                                    <View style={{ backgroundColor: "#FF2F7B", position: "relative", bottom: 2, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, height: 35 }}>
                                                        <View style={{ padding: 1 }}>
                                                            {
                                                                i.title2 === '' ? <Text style={{ fontWeight: "500", color: "white", fontSize: 12, marginBottom: 0, paddingBottom: 0, paddingLeft: 7, letterSpacing: 1, marginTop: 7 }}>
                                                                    {i.title1}
                                                                </Text> : <Text style={{ fontWeight: "500", color: "white", fontSize: 12, marginBottom: 0, paddingBottom: 0, paddingLeft: 7, letterSpacing: 1 }}>
                                                                    {i.title1}
                                                                </Text>
                                                            }
                                                            <Text style={{ fontWeight: "500", color: 'white', fontSize: 12, paddingLeft: 7, letterSpacing: 1 }}>
                                                                {i.title2}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                            <View style={{ width: 7, height: 7, backgroundColor: '#CDCDCD', transform: [{ rotate: '45deg' }], marginRight: 30, marginTop: 8 }}></View>
                            <Text style={{ fontSize: 16, fontWeight: "700" }}>Recommended</Text>
                            <View style={{ width: 7, height: 7, backgroundColor: '#CDCDCD', transform: [{ rotate: '45deg' }], marginLeft: 30, marginTop: 8 }}></View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: "#e9e4e431" }}>
                                {
                                    recommand.map((i) => {
                                        return (
                                            <View style={{ width: '44.4%', margin: 10 }}>
                                                <Image style={{ width: '100%', height: 220, resizeMode: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={{ uri: `http://192.168.100.63:4000/${i.image}` }} />
                                                <View style={{ backgroundColor: 'white', elevation: 0.5, padding: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text style={{ fontSize: 11, fontWeight: "bold", marginTop: 4 }}>$</Text>
                                                        <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 2 }}>{i.pricedollar}.</Text>
                                                        <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>{i.pricecent}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                        <Text style={{ fontSize: 10, fontWeight: '400', color: "#9B9B9B" }}>{i.title.slice(0, 24)}...</Text>
                                                        <MaterialCommunityIcons name="dots-horizontal" style={{ fontSize: 15, color: '#9B9B9B' }} />
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })
                                }

                            </View>

                        </View>
                    </View>
                    <Footer/>
                </View>
            </ScrollView>
        </>
    )
}

export default AllScreen

