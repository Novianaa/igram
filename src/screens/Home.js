import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text style={styles.textIg}>IGram</Text>
        <View style={styles.headerLeft} >
          <Ionic name='duplicate-outline' size={24} color={'#1e1e1e'} />
          <Ionic name='md-heart-outline' size={26} color={'#1e1e1e'} />
          <Feather name='send' size={24} color={'#1e1e1e'} />
        </View>
      </View>
      <Posts />
    </View>
  )
}
const styles = StyleSheet.create({
  headerWrapper: {
    padding: '2%',
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