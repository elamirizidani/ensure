import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import BackBtn from '@/components/reUsable/BackBtn';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import dummy from '@/utilits/dummy';
import InsureContacts from '@/components/reUsable/InsureContacts';

const Vehicle = () => {
  const navigation = useNavigation()
  const getVehical = useLocalSearchParams()
  const router = useRouter()
  const vehicalInfo = dummy['cars'].find( vehical=> vehical.vehicalId === getVehical.vehicalId)
  const InsuarencePolicy = dummy['InsuarencePolicy'].find(policy => policy.id === getVehical.insuranceId)
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:'',
      headerStyle: {
        backgroundColor: '#064E89'
      },
      headerLeft: () => <BackBtn screenName={'Vehicle'} />
    })
  },[])

  // const isOwner = typeof getDriver.isOwner === 'string' ? getDriver.isOwner === 'true' : Boolean(Number(getDriver.isOwner));

  return (
    <View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        gap:18,
        paddingVertical:10
      }}>
        <ReUsableButton 
          title={'Info'} onPress={undefined} style={{
          gap: 8,
          paddingHorizontal: 16,
          paddingVertical: 8,
          flex:1,
          backgroundColor: '#064E89',
          TextStyle: {
            color: '#fff',
            fontWeight: '600',
            fontSize: 16,
            }
        }}>
          <Ionicons name="document-text-outline" size={24} color="#fff" />
        </ReUsableButton>
        <ReUsableButton title={'Contract'}
          onPress={undefined}
          style={{
            flex:1,
            backgroundColor: '#D6ECFF',
            borderRadius: 50,
            paddingHorizontal: 20,
            paddingVertical: 10,
            gap: 10,
            alignItems: 'center',
            TextStyle: { color: '#064E89', fontSize: 16, fontWeight: '600' }
          }}>
          <MaterialCommunityIcons name="file-download-outline" size={24} color="black" />
        </ReUsableButton>
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
      <MaterialIcons name="airport-shuttle" size={24} color="black" />
      <Text
        style={{
          fontSize:22,
          fontWeight:'600',
          color:'#000'
        }}
        >{vehicalInfo?.model}</Text>
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
          >VIN</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >{vehicalInfo?.vin}</Text>
    </View>
    <View
      style={{
        paddingHorizontal:15
      }}
    >
      <ReUsableButton title={'Insurance Card'} onPress={()=>router.push({
        pathname:'/(tabs)/Policies/policy/card',
        params:{
          vehicleId:Number(vehicalInfo?.vehicalId),
          insuranceId:getVehical.insuranceId
        }
        })} style={{
          gap: 8,
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: '#064E89',
          TextStyle: {
            color: '#fff',
            fontWeight: '600',
            fontSize: 16,
            }}}>
              <Feather name="eye" size={24} color="#fff" />
      </ReUsableButton>    
    </View>
    <InsureContacts companyInfo={InsuarencePolicy?.provider.id}/>
  </View>
  )
}

export default Vehicle

const styles = StyleSheet.create({})