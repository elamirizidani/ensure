import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'

const InsuarencePolicy = ({policy}) => {
  return (
    <View style={{
        backgroundColor:'#064E89',
        padding:20,
        borderRadius:10,
        marginRight:15,
        width:width*40/100
      }}>
        <Image style={{flex:1}} resizeMode='contain' source={policy.insuarenceImage}/>
        <Text style={{fontSize:18,color:'#fff',fontWeight:'600',lineHeight:18}}>{policy.name}</Text>
      </View>
  )
}

export default InsuarencePolicy
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({})