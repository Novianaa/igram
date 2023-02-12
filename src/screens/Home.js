import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons'
import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={styles.headerWrapper}>
        <Text style={styles.textIg}>IGram</Text>
        <View style={styles.headerLeft} >
          <Octicons name='diff-added' size={24} color={'#1e1e1e'} />
          <Ionic name='md-heart-outline' size={26} color={'#1e1e1e'} />
          <Feather name='send' size={24} color={'#1e1e1e'} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textIg: {
    fontFamily: 'GrandHotel-Regular',
    fontSize: 40,
    color: '#1e1e1e',
  },
  headerLeft: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default Home