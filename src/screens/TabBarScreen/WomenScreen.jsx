import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text,View,Image ,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Poster from '../../components/Poster'
import SlideScroll from '../../components/SlideScroll'


const WomenScreen = () => {
    useEffect(() => {
      
    }, [])
    
    return (
        <>
            <Poster />
            <SlideScroll />
            <View>
                <View>
                    <Image style={{ width: '100%', height: 150 }}
                        source={require('../../assets/images/collection.webp')} />
                </View>
            </View>
        </>
    )
}

export default WomenScreen
