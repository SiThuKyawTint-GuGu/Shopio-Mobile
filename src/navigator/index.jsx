import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import TrueLogin from '../screens/LoginScreen/TrueLogin';
import WelcomeScreen from '../screens/HomeScreen/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MyTabs from './buttonnav';
import Tabbar from './tabbar';


const Stack = createStackNavigator();

function RootNavigation() {
    return (
        <NavigationContainer initialRouteName="Login">
            <Stack.Navigator >
                <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Tabbar" component={Tabbar} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="TrueLogin" component={TrueLogin} options={{ headerShown: false }} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
} 

export default RootNavigation;

