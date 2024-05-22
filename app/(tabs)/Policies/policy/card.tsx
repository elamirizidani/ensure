import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import BackBtn from '@/components/reUsable/BackBtn'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import dummy from '@/utilits/dummy';

const card = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      // headerShown:false,
      headerStyle: {
        backgroundColor: '#064E89'
      },
      headerLeft: () => <BackBtn screenName={'Insurance Card'} />
    })
  },[])
  const getSentData = useLocalSearchParams()

  const vahicle = dummy['cars'].find(vehicle => vehicle.vehicalId === getSentData.vehicleId)
  const policy = dummy['InsuarencePolicy'].find(policy => policy.id === getSentData.insuranceId)
  const owner = policy?.drivers.find(driver=> driver.isOwner)
  
  return (
    <View style={{
        paddingHorizontal:15,
        paddingVertical:30,
        backgroundColor:'#fff',
        flex:1
      }}>
        <View style={{
          backgroundColor:'#F0F0F0AD',
          borderRadius:12,
          padding:15,
          gap:6
        }}>
          <Text
            style={{
              fontSize:18,
              fontWeight:'700',
              textDecorationLine:'underline',
              textDecorationStyle: 'solid',
              lineHeight:24
            }}
          >
            Proof of Insurance
          </Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'600',
              lineHeight:21
            }}
          >
            {
              policy?.provider.name
            }
          </Text>
          <Text
          style={{
            fontSize:16,
            fontWeight:'700'
          }}>
            {owner?.names}
          </Text>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flex:1}}>
              <>
                <Text style={{
                  fontSize:14,
                  fontWeight:'400',
                  textTransform:'uppercase',
                  color:'#1C1B1F'
                }}>
                  POLICY NUMBER
                </Text>
                <Text style={{
                  fontSize:12,
                  fontWeight:'700',
                  color:'#1C1B1F'
                }}>
                  {
                    policy?.policyNumber
                  }
                </Text>
              </>
              <>
                <Text style={{
                  fontSize:14,
                  fontWeight:'400',
                  textTransform:'uppercase',
                  color:'#1C1B1F'
                }}>
                  effective date
                </Text>
                <Text style={{
                  fontSize:12,
                  fontWeight:'700',
                  color:'#1C1B1F'
                }}>
                  {
                    policy?.policyStart
                  }
                </Text>
              </>
              <>
                <Text style={{
                  fontSize:14,
                  fontWeight:'400',
                  textTransform:'uppercase',
                  color:'#1C1B1F'
                }}>
                  expiration date
                </Text>
                <Text style={{
                  fontSize:12,
                  fontWeight:'700',
                  color:'#1C1B1F'
                }}>
                  {
                    policy?.policyEnd
                  }
                </Text>
              </>
            </View>

            <View style={{flex:1}}>
              <>
                <Text style={{
                  fontSize:14,
                  fontWeight:'400',
                  textTransform:'uppercase',
                  color:'#1C1B1F'
                }}>
                  year/make/model
                </Text>
                <Text style={{
                  fontSize:12,
                  fontWeight:'700',
                  color:'#1C1B1F'
                }}>
                  {
                    vahicle?.model
                  }
                </Text>
              </>
              <>
                <Text style={{
                  fontSize:14,
                  fontWeight:'400',
                  textTransform:'uppercase',
                  color:'#1C1B1F'
                }}>
                  VEHICLE ID NUMBER
                </Text>
                <Text style={{
                  fontSize:12,
                  fontWeight:'700',
                  color:'#1C1B1F'
                }}>
                  {
                    vahicle?.vin
                  }
                </Text>
              </>
              
            </View>
          </View>
        </View>
      </View>
  )
}

export default card

const styles = StyleSheet.create({})