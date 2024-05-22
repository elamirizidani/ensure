import { StyleSheet, View,Image, Dimensions } from 'react-native'
import React from 'react'

const InsuarenceProvider = ({provider}) => {
  return (
    <View style={{borderRadius:10,borderWidth:1,width:width*27/100,marginRight:15,justifyContent:'center',alignItems:'center'}}>
            <Image style={{flex:1}} resizeMode='contain' source={provider.insuarenceImage}/>
          </View>
  )
}

export default InsuarenceProvider
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({})