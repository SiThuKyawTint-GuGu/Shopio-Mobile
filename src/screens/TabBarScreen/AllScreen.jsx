import React from 'react'
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native'
import SlideScroll from '../../components/SlideScroll'
import Poster from '../../components/Poster'


const AllScreen = () => {
    return (
        <>
            <ScrollView>
                <Poster />
                <SlideScroll />
                <View style={{ backgroundColor: "white" }}>
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
                    <View style={{ flexDirection: "row",justifyContent:"space-around" ,marginTop:10 }}>
                        <View style={{}}>
                            <Image style={{ width: 55, height: 55, borderRadius: 50, resizeMode: 'contain' }}
                                source={require('../../assets/images/women.webp')} />
                            <Text style={{ textAlign: "center",fontSize:11,fontWeight:"400",marginTop:2 }}>Women</Text>
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
                    <View style={{flex:1,backgroundColor:"white",height:100}}></View>
                </View>
            </ScrollView>
        </>
    )
}

export default AllScreen

