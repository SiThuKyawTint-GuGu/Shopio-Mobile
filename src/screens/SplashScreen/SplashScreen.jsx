import React from 'react'
import { View,Text ,Image} from 'react-native'


const SplashScreen = () => {
  return (
      <>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#FAB246'}}>
            <Image style={{tintColor:"white"}} source={require('../../assets/images/header.jpeg')} />
      </View>
      </>
  )
}

export default SplashScreen