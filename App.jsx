import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigator';
import { useEffect, useState } from 'react';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    <>
      {!isReady ? <SplashScreen /> : <RootNavigation />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
