import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Posts = () => {
  const [data, setData] = useState({}
    // list: []
  )
  useEffect(() => {
    axios.get('https://api.jsonbin.io/v3/b/63bd23fe15ab31599e3290c1')
      .then((res) => {
        setData(res.data.record)
      })
      .catch((err) => {
        return err
      })
  }, [])
  let del = data.data?.slice(0, -1)

  // console.log('qqqq', data.data)
  console.log('first', del)
  // data.data?.map((a) => console.log('www', a.link))
  // console.log('first', data.data.images)
  return (
    <ScrollView>
      {del?.map((item, index) => {
        return (
          <View key={index}>
            <View>
              {/* <Image crossOrigin="anonymous" source={{ uri: `${item.link}media/?size=l` }} style={{ width: '100%', height: 400 }} /> */}
              <Text>{item.user.username}</Text>
            </View>
            <Image crossOrigin="anonymous" source={{
              uri: `${item.link}media/?size=l`
            }} style={{ width: '100%', height: 500 }} />
            <Text>{item.caption.text}</Text>
          </View>

        )
      })}
    </ScrollView >
  )
}

export default Posts