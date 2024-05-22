import { Pressable, StyleSheet, Text, View,Image, FlatList, Dimensions, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import dumy from '@/utilits/dummy';
import BillingCard from '@/components/reUsable/billing/BillingCard';
import ClaimCard from '@/components/reUsable/ClaimCard';

const Billing = () => {
  return (
    <View 
        style={{
            backgroundColor:'#fff',
            flex:1
        }}>
        <View style={{
            backgroundColor:"#064E89",
            gap:16,
            paddingTop:22,
            paddingVertical:22,
            paddingBottom:40,
            borderBottomRightRadius:16,
            borderBottomLeftRadius:16,
            paddingHorizontal:15,
        }}>
            <Text style={{
                fontWeight:'600',
                fontSize:22,
                color:'#FFFFFF'
            }}>
                Manage your claims
            </Text>
            <Text style={{
                fontSize:18,
                fontWeight:'400',
                color:'#FFFFFF'
            }}>
                File and manage your policy claims all in one place.
            </Text>
        </View>
        
        <FlatList
            bounces={false}
            data={dumy['InsuarencePolicy']}
            renderItem={({item})=><ClaimCard provider={item}/>}
            style={{
                // height:'100%',
                height:height*60/100,
                width:'100%',
                paddingVertical:15,
                paddingHorizontal:15
            }}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default Billing
const {height,width} = Dimensions.get('screen')
const styles = StyleSheet.create({
})