import { Pressable, StyleSheet, Text, View, Image, Modal, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import ReUsableButton from './ReUsableButton'
import moment from 'moment'

const ClaimHistoryCard = ({status}) => {
    // console.log(provider.vehicals[0].model)
    const router = useRouter()

  return (
    <>
    <View style={{
        padding:20,
        borderBottomWidth:3,
        borderColor:'#064E89',
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
        borderCurve:'continuous',
        gap:16,
        marginTop:20,
        width:width,
    }}>
        <View style={{flexDirection:'row',gap:15,alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{fontSize:18,fontWeight:'600'}}>Motocycle Accident</Text>
            <Text style={{fontSize:16,fontWeight:'600',color:'#FF1111'}}>{status}</Text>
        </View>
        <Text 
            style={{
                fontSize:14,fontWeight:'400'
            }}>Complete your claim for faster processing.</Text>
        <View
            style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap:10
                    }}
                >
                    
                <ReUsableButton title={'Contact support'}
                    onPress={undefined}
                    style={{
                    flexDirection: 'row',
                    borderColor: '#064E89',
                    borderWidth:1,
                    borderRadius: 50,
                    paddingHorizontal: 12,
                    paddingVertical: 5,
                    gap: 5,
                    alignItems: 'center',
                    TextStyle: { color: '#064E89', fontSize: 16, fontWeight: '700' }
                }}>
                    <Feather name="phone" size={20} color="#064E89" />
                </ReUsableButton>
                <ReUsableButton title={'Continue Filing'}
                    onPress={()=>router.push('/claims/processing')}
                    style={{
                        flexDirection: 'row',
                        backgroundColor:"#BFE3ED",
                        borderRadius: 50,
                        paddingHorizontal: 12,
                        paddingVertical: 5,
                        gap: 5,
                        alignItems: 'center',
                        TextStyle: { color: '#1C1B1F', fontSize: 16, fontWeight: '700' }
                    }}>
                    <Feather name="eye" size={20} color="#1C1B1F" />
                </ReUsableButton>
            </View>
    </View>
    </>
  )
}

export default ClaimHistoryCard
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
})