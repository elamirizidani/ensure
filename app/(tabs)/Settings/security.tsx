import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { AntDesign, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const security = () => {
    const router = useRouter()
  return (
    <View>
        <View style={{
            paddingHorizontal:20,
            paddingVertical:20,
            borderBottomWidth:1,
            borderColor:'#D9D9D9'
        }}>
            <Text style={{
                fontWeight:'600',
                fontSize:18,
                color:'#000'
            }}>
                Manage your account’s security
            </Text>
        </View>
        <View style={{
            paddingHorizontal:20,
            paddingVertical:30,
            gap:20,
            borderBottomWidth:1,
            borderColor:'#D9D9D9'
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:'600',
                color:'#000'
            }}>
                Two factor authentication
            </Text>
            <Text style={{
                fontWeight:'400',
                fontSize:14,
                color:'#3D3C3C',
                lineHeight:18.62,
            }}>
                Help protect your account from unauthorized access 
            </Text>
            
            <TouchableOpacity 
                onPress={()=>router.push('/(tabs)/Settings/securityNotifications')} 
                style={{
                    flexDirection:'row',
                    gap:10,
                    alignItems:'center'
                }}>
                <Text style={{
                    color:'#064E89',
                    fontSize:16,
                    fontWeight:'600'
                }}>Set Up</Text>
                <AntDesign name="arrowright" size={24} color="#064E89" />
            </TouchableOpacity>
            
        </View>

        <View style={{
            paddingHorizontal:20,
            paddingVertical:30,
            gap:20,
            borderBottomWidth:1,
            borderColor:'#D9D9D9'
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:'600',
                color:'#000'
            }}>
                Security questions
            </Text>
            <Text style={{
                fontWeight:'400',
                fontSize:14,
                color:'#3D3C3C',
                lineHeight:18.62,
                width:width * 75/100
            }}>
                Please check your security questions and answers here, and note them elsewhere, in case you need them.
            </Text>
            
            <TouchableOpacity style={{
                flexDirection:'row',
                gap:10,
                alignItems:'center'
            }}>
                <Text style={{
                    color:'#064E89',
                    fontSize:16,
                    fontWeight:'600'
                }}>View  Questions</Text>
                <AntDesign name="arrowright" size={24} color="#064E89" />
            </TouchableOpacity>
            
        </View>
        <Pressable 
            onPress={
                ()=>router.push('/Settings/changePsw')
            }
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
                gap:10
            }}>
                <MaterialIcons name="pattern" size={24} color="black" />
                <Text style={{
                    fontWeight:'600',
                    fontSize:18,
                    color:'#000'
                }}>
                    Change Password
                </Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
        <Pressable 
            onPress={
                ()=>router.push('/Settings/changePin')
            }
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
                gap:10
            }}>
                <MaterialCommunityIcons name="lock-smart" size={24} color="black" />
                <Text style={{
                    fontWeight:'600',
                    fontSize:18,
                    color:'#000'
                }}>
                    Change Passcode
                </Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>

    </View>
  )
}

export default security

const { width,height } = Dimensions.get('window')
const styles = StyleSheet.create({})