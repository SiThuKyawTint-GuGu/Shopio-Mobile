import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllScreen from '../screens/TabBarScreen/AllScreen';
import CurvePlusScreen from '../screens/TabBarScreen/CurvePlusScreen';
import HomePetsScreen from '../screens/TabBarScreen/HomePetsScreen';
import KidScreen from '../screens/TabBarScreen/KidScreen';
import MenScreen from '../screens/TabBarScreen/MenScreen';
import WomenScreen from '../screens/TabBarScreen/WomenScreen';
import { View, Text,Image,TextInput,Animated } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useEffect, useState } from 'react';


const Tab = createMaterialTopTabNavigator();


function CustomHeader() {
    const [words, setWords] = useState(['Earring', 'Nails', 'Sandals','Dress','Shorts','Bikini','Phone Case','Skirt','Lingerie',]);
    const [placeholder, setPlaceholder] = useState(words[0]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const nextIndex = (words.indexOf(placeholder) + 1) % words.length;
            setPlaceholder(words[nextIndex]);
        }, 3000);
        return () => clearTimeout(timer);
    }, [words, placeholder])


    

    return (
        <View style={{ height: 120, backgroundColor: "white" }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 18, paddingTop: 40 }}>
                <View style={{ marginTop: 5 }}>
                    <Fontisto name="email" style={{ fontSize: 22 }} />
                </View>
                <View style={{ marginLeft: 15 }}  >
                    <Text style={{ fontSize: 23, fontWeight: "bold", color: "black", letterSpacing: 2 }}>SHOPIO</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <AntDesign name="hearto" style={{ fontSize: 20 }} />
                    <SimpleLineIcons name="bag" style={{ fontSize: 20, marginLeft: 14 }} />
                </View>
            </View>
            <View style={{ position: 'relative', bottom: 23 }}>
                <View style={{ flexDirection: "row", alignItems: "center", margin: 12, backgroundColor: "#1312120a" }}>
                    <AntDesign name="search1" style={{ fontSize: 15, marginLeft: 10 }} />
                    <TextInput style={{ flex: 1, height: 32, paddingLeft: 5, backgroundColor: "#62616100", fontSize: 14, paddingBottom: 4 }}
                            placeholder={placeholder} />
                    <EvilIcons name="camera" style={{ fontSize: 25, marginRight: 10 }} />
                </View>
                <View style={{ backgroundColor: "white", margin: 12, height: 10, position: "relative", bottom: 26 }}></View>
            </View>
        </View>
    );

}



function Tabbar() {
    return (
        <>
            <CustomHeader />
            <View style={{ position: "absolute", right: 1, top: 120, backgroundColor: "white", zIndex: 1, width: 50, height: 30, borderLeftWidth: 1, borderLeftColor:"#1312121c"}}>
                <SimpleLineIcons name="menu" style={{ fontSize: 20, marginTop:5,zIndex:111,marginLeft:12}} />
            </View>
            <Tab.Navigator
                tabBarOptions={{
                    indicatorStyle: { backgroundColor: 'black',width:60,marginLeft:15,marginBottom:2 },
                }}
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 13, fontWeight: "bold", position: "relative", bottom: 10 },
                    tabBarItemStyle: { width: 98, paddingHorizontal: 0 },
                    tabBarStyle: { padding: 0, elevation: 0, backgroundColor: "white", shadowColor: 0, height: 30},
                    tabBarScrollEnabled: true,
                }}>
                <Tab.Screen name="ALL" component={AllScreen} />
                <Tab.Screen name="WOMEN" component={WomenScreen} />
                <Tab.Screen name="CURVE+PLUS" component={CurvePlusScreen} />
                <Tab.Screen name="KID" component={KidScreen} />
                <Tab.Screen name="MEN" component={MenScreen} />
                <Tab.Screen name="HOME+PETS" component={HomePetsScreen} />
            </Tab.Navigator>
        </>
    );
}

export default Tabbar;