
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'

const SlideScroll = () => {
  return (
      <>
          <View style={{ backgroundColor: "white" }}>
              <ScrollView horizontal={true}>
                  <View style={{ flexDirection: 'row' }}>
                      <View>
                          <View style={{ backgroundColor: '#F0EBEF', margin: 10, width: 100, height: 45 }}>
                              <FontAwesome name="flash" style={{ marginLeft: 45, fontSize: 16, marginBottom: 1, marginTop: 5 }} />
                              <Text style={{ fontSize: 10, fontWeight: "700", color: "black", textAlign: "center" }}>FLASH SALE</Text>
                          </View>
                      </View>
                      <View>
                          <View style={{ backgroundColor: '#EFEFEF', margin: 10, width: 100, height: 45 }}>
                              <MaterialCommunityIcons name="calendar-check-outline" style={{ marginLeft: 41, fontSize: 16, marginBottom: 1, marginTop: 5 }} />
                              <Text style={{ fontSize: 10, fontWeight: "700", color: "black", textAlign: "center" }}>CHECK IN</Text>
                          </View>
                      </View>
                      <View>
                          <View style={{ backgroundColor: '#F0EBEF', margin: 10, width: 100, height: 45 }}>
                              <Feather name="gift" style={{ marginLeft: 42, fontSize: 16, marginBottom: 1, marginTop: 5 }} />
                              <Text style={{ fontSize: 10, fontWeight: "700", color: "black", textAlign: "center" }}>GET US$3 OFF</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <Text style={{ fontSize: 5.3 }}>ON YOUR FIRST ORDER </Text>
                                  <Text style={{ fontSize: 5.3, fontWeight: "600" }}>CODE:</Text>
                                  <Text style={{ fontSize: 5.3, fontWeight: "700", textDecorationLine: "underline" }}>SHEASIA</Text>
                              </View>
                          </View>
                      </View>
                      <View>
                          <View style={{ backgroundColor: '#F0EBEF', margin: 10, width: 100, height: 45 }}>
                              <MaterialCommunityIcons name="car-estate" style={{ marginLeft: 41, fontSize: 16, marginBottom: 1, marginTop: 5 }} />
                              <Text style={{ fontSize: 10, fontWeight: "700", color: "black", textAlign: "center" }}>SHIPPING INFO</Text>
                          </View>
                      </View>
                      <View>
                          <View style={{ backgroundColor: '#F0EBEF', margin: 10, width: 100, height: 45 }}>
                              <Foundation name="burst-new" style={{ marginLeft: 44, fontSize: 16, marginBottom: 1, marginTop: 5 }} />
                              <Text style={{ fontSize: 10, fontWeight: "700", color: "black", textAlign: "center" }}>DAILY NEW</Text>
                          </View>
                      </View>
                      <View>
                          <View style={{ backgroundColor: '#F0EBEF', margin: 10, width: 100, height: 45 }}>
                              <AntDesign name="creditcard" style={{ marginLeft: 43, fontSize: 16, marginBottom: 1, marginTop: 5 }} />
                              <Text style={{ fontSize: 10, fontWeight: "700", color: "black", textAlign: "center" }}>GETCARD</Text>
                          </View>
                      </View>
                  </View>
              </ScrollView>
          </View>
      </>
  )
}

export default SlideScroll