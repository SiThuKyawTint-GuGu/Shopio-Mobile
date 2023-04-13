import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ShopScreen from '../screens/ButtonScreen/ShopScreen';
import CategoryScreen from '../screens/ButtonScreen/CategoryScreen';
import MeScreen from '../screens/ButtonScreen/MeScreen';
import NewScreen from '../screens/ButtonScreen/NewScreen';
import BagScreen from '../screens/ButtonScreen/BagScreen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
    const styles = StyleSheet.create({
        tabStyle: {
            fontWeight: '100',
            backgroundColor: 'red',
        },
    });
    const route = useRoute();
    const navigation = useNavigation();
    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent"
    return (

   
        <Tab.Navigator
            activeColor="black"
            inactiveColor="gray"
            theme={{ colors: { secondaryContainer: 'transparent' } }
            }
            barStyle={{ backgroundColor: 'white', padding: 0, position: "relative", top: 10, borderTopWidth: 0.5, borderTopColor:"#d4ceceb6" }}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 13, fontWeight: "bold", position: "relative", bottom: 10 },
            }}
        >
            <Tab.Screen name="Shop" component={ShopScreen} options={{
                tabBarLabel: 'Shop',
                tabBarIcon: ({ color }) => (
                    <SimpleLineIcons name="home" style={{ fontSize: 21,position:"relative",top:5 }} />
                ),
            }} />
                <Tab.Screen name="Category" component={CategoryScreen} options={{
                    tabBarLabel: 'Category',
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="list" style={{ fontSize: 21, position: "relative", top: 5 }} />
                    ),
                }} />
                <Tab.Screen name="NewScreen" component={NewScreen} options={{
                    tabBarLabel: 'New',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="cube-outline" style={{ fontSize: 21, position: "relative", top: 5 }} />
                    ),
                }} />
                <Tab.Screen name="Bag" component={BagScreen} options={{
                    tabBarLabel: 'Bag',
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="handbag" style={{ fontSize: 21, position: "relative", top: 5 }} />
                    ),
                }} />
                <Tab.Screen name="Mescreen" component={MeScreen} options={{
                    tabBarLabel: 'Me',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="settings-outline" style={{ fontSize: 23, position: "relative", top: 5 }} />
                    ),
                }} />
            </Tab.Navigator>
    );
}

export default MyTabs;

