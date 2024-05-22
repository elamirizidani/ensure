import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const InsuarenceBunner = ({insuarance}) => {
  return (
    <View style={{
        backgroundColor:'#9CEAFF',
        borderRadius:10,
        flexDirection:'row',
        paddingLeft:15,
        paddingVertical:20,
        width: width*70/100,
        marginRight:15
      }}>
        <View style={{
          width:'55%'
        }}>
          <Text style={{
            color:'#064E89',
            fontSize:18,
            fontWeight:'700'
          }}>{insuarance.name}</Text>
          <Text style={{
            color:'#064E89',
            fontSize:40,
            fontWeight:'700'
          }}>{insuarance.rating}</Text>
          <Text 
            style={{
              fontSize:16,
              fontWeight:'400',
              lineHeight:18,
              marginTop:15
            }}
          >{insuarance.desc}</Text>
        </View>
        <View style={{
          width:'45%',
          alignItems:'flex-end',
        }}>
          <Image style={{flex:1}}  resizeMode='contain' source={insuarance.insuarenceImage}/>
        </View>
      </View>
  )
}

export default InsuarenceBunner
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({})
