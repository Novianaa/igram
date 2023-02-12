import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, TextInput, TouchableHighlight, Pressable, Share, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ListsUser } from '../assets/databases'
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Link } from '@react-navigation/native';

const Posts = () => {
  const [data, setData] = useState({})
  let del = data.data?.slice(0, -1)

  return (
    <ScrollView style={{ marginBottom: '20%' }}>
      {ListsUser.map((user, index) => {
        const [like, setLike] = useState(user.isLiked)
        const [save, setSave] = useState(user.isSaved)
        const [comment, setComment] = useState(user.comment)
        const handleSumbit = (e) => {
          e.preventDefault()
        }
        const onShare = async () => {
          try {
            const result = await Share.share({
              title: `link: ${user.link}`,
              url: `${user.link}`
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                console.log(result.activityType)
              } else {
                console.log('success')
              }
            } else if (result.action === Share.dismissedAction) {
              console.log(result.action === Share.dismissedAction)
            }
          } catch (error) {
            Alert.alert(error.message);
          }
        };
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
                <TouchableOpacity onPress={onShare}>
                  <Feather name='send' size={24} color={'#1e1e1e'} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setSave(!save)}>
                <Ionic name={save ? 'md-bookmark' : 'md-bookmark-outline'} size={26} color={'#1e1e1e'} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 16, marginHorizontal: '3%', marginVertical: '1%', color: '#1e1e1e', fontWeight: 'bold' }}>{like ? `${user.like + 1}` : `${user.like}`} Likes</Text>
            <View>
              <Text style={{ fontSize: 16, marginHorizontal: '3%', color: '#1e1e1e' }}>
                <Link to={{ screen: '#' }} style={{ fontSize: 16, fontWeight: 'bold', marginLeft: '2%', color: '#1e1e1e', marginRight: '2%' }}>{user.username} </Link> {user.caption.text}
              </Text>
              <Text style={{ color: '#1e1e1e', marginLeft: '3%', marginTop: '1%', }}>{comment}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                <TextInput
                  placeholder="Add your comment"
                  onChangeText={text => setComment(text)}
                  style={{ marginHorizontal: '3%', color: '#1e1e1e', fontSize: 15 }}
                />
                <TouchableOpacity onPress={handleSumbit}>
                  <Text>Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default Posts