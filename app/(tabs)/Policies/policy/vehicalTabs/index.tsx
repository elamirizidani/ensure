import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import BackBtn from '@/components/reUsable/BackBtn';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import dummy from '@/utilits/dummy';
import InsureContacts from '@/components/reUsable/InsureContacts';

const Info = () => {
  const navigation = useNavigation()
  const getVehical = useLocalSearchParams()
  const router = useRouter()
  const vehicalInfo = dummy['cars'].find( vehical=> vehical.vehicalId === getVehical.vehicalId)
  const InsuarencePolicy = dummy['InsuarencePolicy'].find(policy => policy.id === getVehical.insuranceId)
//   useLayoutEffect(()=>{
//     navigation.setOptions({
//       title:'',
//       headerStyle: {
//         backgroundColor: '#064E89'
//       },
//       headerLeft: () => <BackBtn screenName={'Vehicle'} />
//     })
//   },[])

  // const isOwner = typeof getDriver.isOwner === 'string' ? getDriver.isOwner === 'true' : Boolean(Number(getDriver.isOwner));

  return (
    <ScrollView bounces={false}>
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
    <View style={styles.itemSection}>
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

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Plate Number</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >RAB 234 A</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Year of manufacture</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >2021</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Number of seats</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >Sedan</Text>
    </View>


    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Vehicle Type</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >Sedan</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Sum insured</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >8500,000 Rwf</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Vehicle Usage</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >Commute</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Own or Finance</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >Own</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Annual mileage</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >0 - 3999</Text>
    </View>


    <View style={{
      paddingTop:20,
      gap:16,
      paddingHorizontal:20,
      paddingVertical:24,
      backgroundColor:'#D6ECFF',
      borderBottomWidth:1.5,
      borderColor:'#86868699',
    }}>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',gap:5,justifyContent:'flex-start',alignItems:'center'}}>
                <MaterialIcons name="workspace-premium" size={24} color="black" />
                <Text style={{fontSize:16,fontWeight:'600'}}>Premium for this vehicle</Text>
            </View>
            <Text style={{fontSize:16,fontWeight:'300',color:'#000'}}>Rwf 500,000</Text>
      </View>
    </View>


    <View
      style={{
        paddingHorizontal:15,
        paddingVertical:15
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
    {/* <InsureContacts companyInfo={InsuarencePolicy?.provider.id}/> */}
  </ScrollView>
  )
}

export default Info

const styles = StyleSheet.create({
  itemSection:{
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingVertical:20,
    borderBottomWidth:1,
    borderColor:'#DDDDDD',
    backgroundColor:'#fff'
  }
})