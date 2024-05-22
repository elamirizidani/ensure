import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'

const HelpAndSupport = () => {
    const router = useRouter()
  return (
    <View style={{paddingVertical:20}}>
      <Pressable 
            // onPress={()=>router.push('/Settings/changePsw')}
            style={{
            paddingHorizontal:20,
            paddingVertical:20,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <View style={{
                flexDirection:'row',
                gap:10,
                alignItems:'center'
            }}>
                <View style={{
                    backgroundColor:'#CEF4FF',
                    borderRadius:50,
                    width:35,
                    height:35,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <AntDesign name="infocirlceo" size={24} color="#064E89" />
                </View>
                <Text style={{
                    fontWeight:'600',
                    fontSize:18,
                    color:'#000'
                }}>
                    FAQs
                </Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
        <Pressable 
            onPress={
                ()=>router.push('/noneNavScreens/settings/contactUs')
            }
            style={{
            paddingHorizontal:20,
            paddingVertical:20,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <View style={{
                flexDirection:'row',
                gap:10,
                alignItems:'center'
            }}>
                <View style={{
                    backgroundColor:'#CEF4FF',
                    borderRadius:50,
                    width:35,
                    height:35,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <MaterialIcons name="people-alt" size={24} color="#064E89" />
                </View>
                <Text style={{
                    fontWeight:'600',
                    fontSize:18,
                    color:'#000'
                }}>
                    Contact Us
                </Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
        <Pressable 
            // onPress={
            //     ()=>router.push('/Settings/changePsw')
            // }
            style={{
            paddingHorizontal:20,
            paddingVertical:20,
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <View style={{
                flexDirection:'row',
                gap:10,
                alignItems:'center'
            }}>
                <View style={{
                    backgroundColor:'#CEF4FF',
                    borderRadius:50,
                    width:35,
                    height:35,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <MaterialIcons name="content-copy" size={24} color="#064E89" />
                </View>
                <View style={{}}>
                    <Text style={{
                    fontWeight:'600',
                    fontSize:16,
                    color:'#000'
                }}>
                    Copy device identifier to clipboard
                </Text>
                <Text style={{
                    fontWeight:'400',
                    fontSize:14,
                    color:'#000'
                }}>Copy your device ID to share with support team</Text>
                </View>
                
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
    </View>
  )
}

export default HelpAndSupport

const styles = StyleSheet.create({})