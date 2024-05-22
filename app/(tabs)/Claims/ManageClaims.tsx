import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { AntDesign, Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons'
import InsureContacts from '@/components/reUsable/InsureContacts'

const ManageClaims = () => {
  return (
    <View>
        <View style={{
        backgroundColor:'#064E89',
        marginBottom:'auto',
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }}>
        <Text style={{
          color:'#fff',
          fontSize:20,
          fontWeight:'600'
        }}>Manage your claims</Text>
        <ReUsableButton title={'New claim'} onPress={undefined} style={{
            borderRadius:50,
            backgroundColor:'#BFE3ED',
            TextColor:'#1C1B1F',
            paddingVertical:8,
            paddingHorizontal:13,
            gap:5,
            TextStyle:{
                color:'#1C1B1F',
                fontWeight:'400',
                fontSize:14
            }
        }}>
            <AntDesign name="plus" size={24} color="#1C1B1F" />
        </ReUsableButton>
      </View>

      <View>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:15,
            paddingVertical:20,
            borderBottomWidth:1,
            borderColor:'#DDDDDD'
        }}>
            <View
                style={{
                    flexDirection:'row',
                    gap:10
                }}
            >
                <Entypo name="back-in-time" size={24} color="#1C1B1F" />
                <Text
                    style={{
                        fontSize:18,
                        fontWeight:'400',
                        color:'#000'
                    }}
                >Claims History</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:15,
            paddingVertical:20,
            borderBottomWidth:1,
            borderColor:'#DDDDDD'
        }}>
            <View
                style={{
                    flexDirection:'row',
                    gap:10
                }}
            >
                <Entypo name="back-in-time" size={24} color="#1C1B1F" />
                <Text
                    style={{
                        fontSize:18,
                        fontWeight:'400',
                        color:'#000'
                    }}
                >FAQs</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </View>

      <InsureContacts/>

    </View>
  )
}

export default ManageClaims

const styles = StyleSheet.create({})