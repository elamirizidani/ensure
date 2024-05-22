import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import BackBtn from '@/components/reUsable/BackBtn';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import dummy from '@/utilits/dummy';

const driver = () => {
  const navigation = useNavigation()
  const getDriver = useLocalSearchParams()
  const driverInfo = dummy['drivers'].find( driver=> driver.driverId === getDriver.driverId)
  useLayoutEffect(()=>{
    navigation.setOptions({
      // headerShown:false,
      title:'',
      headerStyle: {
        backgroundColor: '#064E89'
      },
      headerLeft: () => <BackBtn screenName={'Driver information'} />
    })
  },[])

  const isOwner = typeof getDriver.isOwner === 'string' ? getDriver.isOwner === 'true' : Boolean(Number(getDriver.isOwner));

  return (
    <View>

    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:isOwner? 10 : 20,
        backgroundColor:'#D6ECFF',
        alignItems:'center'
    }}>
        <View
            style={{
                flexDirection:'row',
                gap:10
            }}
        >
            <Feather name='user' size={24} color="black" />
            <Text
                style={{
                    fontSize:18,
                    fontWeight:'600',
                    color:'#000'
                }}
            >{driverInfo?.firstName} {driverInfo?.lastName}</Text>
        </View>
          {isOwner &&(
            <ReUsableButton title={'Owner'} onPress={undefined} style={{
              borderRadius:50,borderWidth:1,borderColor:'#064E89',paddingHorizontal:12,paddingVertical:6,
              TextStyle:{
                color:'#064E89',
                fontSize:16,
                fontWeight:'600'
              }
            }} children={undefined}/>
          )}
    </View>
    <View style={{
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor:'#DDDDDD'
      }}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >License Number</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >{driverInfo?.licencseNumber}</Text>
    </View>
    <View style={{
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor:'#DDDDDD'
      }}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >National ID</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >{driverInfo?.nationalId}</Text>
    </View>
    <View style={{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingHorizontal:15,
        paddingVertical:20,
        backgroundColor:'#D6ECFF',
        alignItems:'center',
        gap:10
    }}>
      <AntDesign name="home" size={24} color="black" />
      <Text
        style={{
          fontSize:18,
          fontWeight:'600',
          color:'#000'
        }}
        >Address</Text>
    </View>
    <View style={{
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor:'#DDDDDD'
      }}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >House Number</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >{driverInfo?.houseNumber}</Text>
    </View>
    <View style={{
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor:'#DDDDDD'
      }}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Street Address</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >{driverInfo?.streetAddress}</Text>
    </View>



  </View>
  )
}

export default driver

const styles = StyleSheet.create({})