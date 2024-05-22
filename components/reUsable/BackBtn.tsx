import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const BackBtn = ({screenName}) => {
    const router = useRouter()
  return (

    <TouchableOpacity
        onPress={()=>router.back()}
        >
            <View 
                    style={{
                        flexDirection:'row',
                        gap:10,
                        backgroundColor:'transparent',
                        alignItems:'center'
                    }}
                    >
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                    <Text 
                style={{
                  color:'#fff',
                  fontSize:18,
                  fontWeight:'600'
                }}
              >{screenName}</Text>
                </View>

          
        </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({})