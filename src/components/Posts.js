import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ListsUser } from '../assets/databases'
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Link } from '@react-navigation/native';


const Posts = () => {
  const [data, setData] = useState({})
  const [like, setLike] = useState(ListsUser.isLiked);
  const [save, setSave] = useState(ListsUser.isSaved);

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
  // console.log('first', del)
  // console.log('yuyu', ListsUser)
  return (
    <ScrollView style={{ marginBottom: '20%' }}>
      {ListsUser.map((user, index) => {
        return (
          <View key={index}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '3%', marginVertical: '2%' }}>
              <Image source={user.profile_picture} style={{ width: 30, height: 30, borderRadius: 50 }} />
              <Text style={{ fontSize: 19, fontWeight: '500', marginLeft: '3%', color: '#1e1e1e' }}>{user.username}</Text>
            </View>
            <View>
              <Image crossOrigin="anonymous" source={{ uri: `${user.link}` }} style={{ width: '100%', height: 380, }} key={index} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '3%', paddingVertical: '1%' }}>
              <View style={{ flexDirection: 'row', width: '28%', justifyContent: 'space-between', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <Ionic name={like ? 'md-heart' : 'md-heart-outline'} size={28} color={like ? 'red' : '#1e1e1e'} />
                </TouchableOpacity>
                <Ionic name='md-chatbubble-outline' size={26} color={'#1e1e1e'} />
                <Feather name='send' size={24} color={'#1e1e1e'} />
              </View>
              <TouchableOpacity onPress={() => setSave(!save)}>
                <Ionic name={save ? 'md-bookmark' : 'md-bookmark-outline'} size={26} color={'#1e1e1e'} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 16, marginHorizontal: '3%', marginTop: '1%', color: '#1e1e1e', fontWeight: 'bold' }}>{like ? `${user.like + 1}` : `${user.like}`} Likes</Text>
            <View>
              <Text style={{ fontSize: 16, marginHorizontal: '3%', marginTop: '1%', marginBottom: '2%', color: '#1e1e1e' }}>
                <Link to={{ screen: '#' }} style={{ fontSize: 16, fontWeight: 'bold', marginLeft: '2%', color: '#1e1e1e', marginRight: '2%' }}>{user.username} </Link> {user.caption.text}
              </Text>
            </View>
          </View>
        )
      })}
    </ScrollView >
  )
}

export default Posts