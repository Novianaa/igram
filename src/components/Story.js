import { View, Text, StatusBar, Image, TouchableOpacity, TextInput, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather';

const Story = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, }}>
      <StatusBar backgroundColor="black" />
      <Pressable onPress={() => navigation.goBack()}>
        <View style={{
          justifyContent: 'center', alignItems: 'center', zIndex: 2
        }}>
          <View style={{
            width: '95%', height: 2, backgroundColor: '#e6e2e298', top: 15, position: 'absolute',
          }}></View>
          <View
            style={{
              paddingLeft: '7%', paddingTop: '5%', flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 12,
            }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Image source={route.params.profile_picture}
                style={{ width: 35, height: 35, borderRadius: 50, }} />
            </View>
            <View
              style={{
                justifyContent: 'space-between', flexDirection: 'row', width: '100%',
              }}>
              <Text style={{ color: 'white', fontSize: 18, paddingLeft: 10 }}>
                {route.params.username}
              </Text>
            </View>
          </View>
        </View>
        <Image source={route.params.photo} style={{ width: '100%', height: '100%' }} />
        <View
          style={{
            position: 'absolute', bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10,
          }}>
          <TextInput
            placeholder="send message"
            placeholderTextColor="#f8f8f8"
            style={{
              borderColor: '#dedede', fontSize: 18, color: 'white', backgroundColor: '#10101030', width: '90%', paddingVertical: 5, paddingLeft: 20, borderRadius: 25, borderWidth: 2.5
            }}
          />
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Feather name="send" style={{ fontSize: 30, color: '#f8f8f8' }} />
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  )
}

export default Story