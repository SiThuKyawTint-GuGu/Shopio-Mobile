import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const Footer = () => {
    const [footerData, setfooterData] = useState([]);
    useEffect(() => {
        axios.get('http://192.168.1.2:4000/api/footer')
            .then((res) => setfooterData(res.data))
            .catch((err) => {
                console.log(err)
            })
    },[])
  return (
      <View style={{ backgroundColor:"#e9e4e431"}}>
          <View style={{margin:20}}>
              <Text style={{ fontWeight: "bold",marginBottom:10 }}>SHOPIO Info</Text>
              {
                  footerData.map((i) => {
                      return (
                          <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "space-between" }}>
                              <Text>{ i.title}</Text>
                              <Feather style={{ fontSize: 17 }} name="chevron-right" />
                          </View>
                      )
                  })
             }
         </View>
   </View>
  )
}

export default Footer