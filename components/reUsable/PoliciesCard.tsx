import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import ReUsableButton from './ReUsableButton'
import moment from 'moment'

const PoliciesCard = ({provider}) => {
    // console.log(provider.vehicals[0].model)
    const router = useRouter()

    const checkBtn = ()=>{
        if(provider.status === 'active')
            {
                return(
                    <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between'
                          }}
                        >
                        <ReUsableButton title={'View more'}
                          onPress={() => router.push({
                            pathname: "/(tabs)/Policies/policy",
                            params: { 
                              policy: provider.id,
                              policyImage:provider.provider.providerImage,
                              policyName:provider.provider.name 
                            }
                          })}
                          style={{
                            flexDirection: 'row',
                            backgroundColor: '#064E89',
                            borderRadius: 50,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            gap: 10,
                            alignItems: 'center',
                            TextStyle: { color: '#fff', fontSize: 16, fontWeight: '700' }
                        }}>
                            <Feather name="eye" size={24} color="#fff" />
                        </ReUsableButton>
                        <ReUsableButton title={'View Cards'}
                            onPress={undefined}
                            style={{
                              flexDirection: 'row',
                              borderColor: '#064E89',
                              borderWidth: 2,
                              borderRadius: 50,
                              paddingHorizontal: 20,
                              paddingVertical: 10,
                              gap: 10,
                              alignItems: 'center',
                              TextStyle: { color: '#064E89', fontSize: 16, fontWeight: '700' }
                            }}>
                            <Feather name="eye" size={24} color="#064E89" />
                        </ReUsableButton>
                    </View>
                )
            }
        if(provider.status === 'expired')
            {
                return(
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                        }}
                      >
                    <ReUsableButton title={'Renew'}
                      onPress={() => router.push({
                        pathname: '/(tabs)/Policies/policy/renew',
                        params: { 
                          policy: provider.id,
                          policyImage:provider.provider.providerImage,
                          policyName:provider.provider.name 
                        }
                      })}
                      style={{
                        backgroundColor:'#FF1111',
                        borderRadius: 50,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        gap: 10,
                        alignItems: 'center',
                        TextStyle: { color: '#fff', fontSize: 16, fontWeight: '600' }
                      }}>
                      <MaterialCommunityIcons name="refresh" size={24} color="#fff" />
                    </ReUsableButton>
                  </View>
                  )
            }
        if(provider.status === 'pending')
            {
                return(
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                        }}
                      >
                      <ReUsableButton title={'Contact Support'}
                        onPress={undefined}
                        style={{
                          flexDirection: 'row',
                          backgroundColor: '#064E89',
                          borderRadius: 50,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          gap: 10,
                          alignItems: 'center',
                          TextStyle: { color: '#fff', fontSize: 16, fontWeight: '700' }
                        }}>
                      <SimpleLineIcons name="phone" size={18} color="#fff" />
                    </ReUsableButton>
                  </View>
                  )
            }
            return
    }

  return (
    <View style={{
        padding:20,
        borderBottomWidth:3,
        backgroundColor:'#F8F8F8',
        borderColor:'#064E89',
        borderRadius:5,
        gap:16,
        marginTop:20
    }}>
        <View style={{flexDirection:'row',gap:15,alignItems:'center'}}>
            <Pressable>
                <Image style={styles.flagLogo} source={provider.provider.providerImage} resizeMode='contain'/>
            </Pressable>
            <Text style={{fontSize:18,fontWeight:'600'}}>{provider.provider.name}</Text>
        </View>
        <View>
            <View 
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    gap: 15
                }}
            >
                <MaterialIcons name="airport-shuttle" size={24} color="black" />
                <Text style={{
                    fontSize:16,fontWeight:'400'
                }}>{provider.vehicals[0].model } {provider.vehicals.length > 1 ? ', +More':'' }</Text>
            </View>
            <View 
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    gap: 15
                }}
            >
                <AntDesign name="calendar" size={24} color="black" />
                <Text style={{
                    fontSize:14,fontWeight:'300'
                }}>Due on { moment(provider.policyEnd, 'MM/DD/YYYY').format('MMMM Do, YYYY')}</Text>
            </View>
        </View>
        {
            checkBtn()
        }
        
    </View>
  )
}

export default PoliciesCard

const styles = StyleSheet.create({
    flagLogo:{
        height:34,
        width:34,
        borderRadius:50,
    },
})