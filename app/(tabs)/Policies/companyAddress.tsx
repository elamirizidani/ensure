import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import BackBtn from '@/components/reUsable/BackBtn'
import { MaterialIcons } from '@expo/vector-icons'
import dummy from '@/utilits/dummy'

const companyAddress = () => {
    const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      // headerShown:false,
      headerShadowVisible: false,
      title:'',
      headerStyle: {
        backgroundColor: '#064E89'
      },
      headerLeft: () => <BackBtn screenName={'Insurer Contact'} />,
      headerRight: () => (
          <Pressable>
            <MaterialIcons name="notifications-active" size={25}
                color={'#fff'}/>
          </Pressable>
      )
    })
  },[])
  
  const getSentData = useLocalSearchParams()
  const companyDetails = dummy['insuaranceCompany'].find(company => company.id === getSentData.company)
  
  return (
    <View>
      <View style={{
        backgroundColor:'#064E89',
        flexDirection:'row',
        paddingHorizontal:15,
        paddingTop:30,
        paddingBottom:15,
        gap:8,
        alignItems:'center'
      }}>
        <Image style={{
            width:55,
            height:55
        }} source={companyDetails?.companyImage}
        resizeMode='contain'
        />
        <Text
            style={{
                fontSize:20,
                fontWeight:'600',
                color:'#fff'
            }}
        >
            {
                companyDetails?.name
            }
        </Text>
      </View>
      <View style={{
        paddingHorizontal:15,
        paddingVertical:20,
        gap:20,
        backgroundColor:'#f4f4f4'
      }}>
        <View style={{
            backgroundColor:'#fff',
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:5,
            paddingHorizontal:12,
            paddingVertical:18,
            gap:14
        }}>
            <Text style={{
                color:'#000',
                fontSize:18,
                fontWeight:'600'
            }}>Email</Text>
            <Text style={{
                color:'#000',
                fontSize:16,
                fontWeight:'400'
            }}>
                {
                    companyDetails?.email
                }
            </Text>
        </View>
        <View style={{
            backgroundColor:'#fff',
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:5,
            paddingHorizontal:12,
            paddingVertical:18,
            gap:14
        }}>
            <Text style={{
                color:'#000',
                fontSize:18,
                fontWeight:'600'
            }}>Phone number</Text>
            <Text style={{
                color:'#000',
                fontSize:16,
                fontWeight:'400'
            }}>
                {
                    companyDetails?.phone
                }
            </Text>
        </View>
        <View style={{
            backgroundColor:'#fff',
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:5,
            paddingHorizontal:12,
            paddingVertical:18,
            gap:14
        }}>
            <Text style={{
                color:'#000',
                fontSize:18,
                fontWeight:'600'
            }}>Office Hours</Text>
            <Text style={{
                color:'#000',
                fontSize:16,
                fontWeight:'400'
            }}>
                {
                    companyDetails?.officeHours
                }
            </Text>
        </View>
        <View style={{
            backgroundColor:'#fff',
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:5,
            paddingHorizontal:12,
            paddingVertical:18,
            gap:14
        }}>
            <Text style={{
                color:'#000',
                fontSize:18,
                fontWeight:'600'
            }}>Address</Text>
            <Text style={{
                color:'#064E89',
                fontSize:16,
                fontWeight:'400'
            }}>
                {
                    companyDetails?.address
                }
            </Text>
        </View>
      </View>
    </View>
  )
}

export default companyAddress

const styles = StyleSheet.create({})