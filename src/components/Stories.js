import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Story } from '../assets/databases'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical: '2%' }}>
      {Story.map((data, index) => {
        return (
          // console.log('111', index)
          <TouchableOpacity key={index} style={{ alignItems: 'center' }} onPress={() =>
            navigation.push('Story', {
              username: data.username,
              profile_picture: data.profile_picture,
            })}>
            <View style={{ paddingHorizontal: 8, paddingVertical: 3 }}>
              <View style={{ width: 68, height: 68, backgroundColor: 'white', borderWidth: 2, borderRadius: 50, borderColor: '#c12555', justifyContent: 'center', alignItems: 'center', }}>
                <Image source={data.profile_picture}
                  style={{ width: 60, height: 60, borderRadius: 50, }} />
              </View>
              <Text style={{ marginTop: 5, color: '#1e1e1e', textAlign: 'center', fontSize: 14, }}>
                {data.username}
              </Text>
            </View>
          </TouchableOpacity>

        )
      })}
    </ScrollView >
  )
}

export default Stories