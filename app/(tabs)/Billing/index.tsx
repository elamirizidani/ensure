import { Pressable, StyleSheet, Text, View,Image, FlatList, Linking } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Billing = () => {
    const router = useRouter()
  return (
    <View>
        <View style={styles.topContainer}>
            <MaterialIcons name="credit-score" size={84} color="#fff" />
            <Text style={styles.topText}>
                Manage and check your payments
            </Text>
        </View>

        <Pressable 
            onPress={() => router.push('/(tabs)/Billing/paymentMethode')}
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
                <Entypo name="credit-card" size={24} color="black" />
                    <Text style={{
                    fontWeight:'600',
                    fontSize:18,
                    color:'#000'
                }}>
                    Payment Methods
                </Text>
                
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
        <Pressable 
            onPress={() => router.push('/(tabs)/Billing/paymentHistory') }
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
                <Entypo name="text-document" size={24} color="black" />
                <Text style={{
                    fontWeight:'600',
                    fontSize:18,
                    color:'#000'
                }}>
                    Payment History
                </Text>
                
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
        
    
    </View>
  )
}

export default Billing

const styles = StyleSheet.create({
    topContainer:{
        backgroundColor:'#064E89',
        paddingHorizontal:20,
        paddingVertical:40,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
        gap:18,
        zIndex:1,
        alignItems:'center'
    },
    topTitle:{
        fontSize:22,
        color:'#FFFFFF',
        fontWeight:'600'
    },
    topText:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'400',
        lineHeight:18,
    },
})