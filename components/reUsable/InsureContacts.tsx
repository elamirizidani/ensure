import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import dummy from '@/utilits/dummy'
import { useRouter } from 'expo-router'

const InsureContacts = ({ companyInfo }: { companyInfo: any }) => {
const insurenceProvider = dummy['insuaranceCompany'].find(company => company.id === companyInfo)
const router = useRouter()


  return (
    
    <Pressable 
            onPress={()=>router.push({
                pathname:'/(tabs)/Policies/companyAddress',
                params:{company:Number(insurenceProvider?.id)}
            })}
            style={{
                flexDirection:'row',
                width:'100%',
                paddingHorizontal:15,
                paddingVertical:20,
                borderBottomWidth:3,
                borderColor:'#064E89',
                borderBottomRightRadius:16,
                borderBottomLeftRadius:16,
                justifyContent:'space-between',
                alignItems:'center',
                borderWidth:1,
                borderTopWidth:0,
                borderLeftColor:'#fff',
                borderRightColor:'#fff',
                borderCurve:'continuous'
            }}>
            <View style={{
                gap:15
                }}>
                <View
                    style={{
                        flexDirection:'row',
                        gap:10
                    }}>
                    <FontAwesome6 name="phone" size={18} color="black" />
                    <Text
                        style={{
                            fontSize:18,
                            fontWeight:'600',
                            color:'#000'
                        }}
                    >Contact Insurer</Text>
                </View>
                <View 
                    style={{
                        flexDirection:'row',
                        gap:10,
                        alignItems:'center'
                    }}>
                    <Image 
                        source={insurenceProvider?.companyImage}
                        style={{
                            width:'20%'
                        }}
                        resizeMode='contain' />
                    <View>
                        <Text
                            style={{
                                fontWeight:'600',
                                fontSize:16,
                                color:'#000'
                            }}>
                            {insurenceProvider?.name}
                        </Text>
                        <Text
                            style={{
                                fontWeight:'400',
                                fontSize:16,
                                color:'#000'
                            }}>
                            {insurenceProvider?.address}
                        </Text>
                    </View>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
        </Pressable>
  )
}

export default InsureContacts

const styles = StyleSheet.create({})