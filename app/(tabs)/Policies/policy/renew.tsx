import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Checkbox from 'expo-checkbox';
import BackBtn from '@/components/reUsable/BackBtn'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { AntDesign, Entypo, Feather, FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import dummy from '@/utilits/dummy'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
const renew = () => {
    const navigation = useNavigation()
    const router = useRouter()
  useLayoutEffect(()=>{
    navigation.setOptions({
      // headerShown:false,
      title:'',
      headerStyle: {
        backgroundColor: '#064E89'
      },
      headerLeft: () => <BackBtn screenName={'Policy Summary'} />
    })
  },[])
  const [isChecked, setChecked] = useState(false);
  const getId = useLocalSearchParams()
  const policy = dummy['InsuarencePolicy'].find(item => item.id === getId.policy)
    return (
    <ScrollView
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        overScrollMode="never"
        contentContainerStyle={{
            gap:20,
            paddingHorizontal:15,
            paddingVertical:20,
        }}>
        <View style={{
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:20,
            paddingHorizontal:20,
            paddingVertical:20,
            gap:14,
            borderWidth:1
        }}>
            <Text style={styles.sectionTitle}>Policy Information</Text>
            <View style={{gap:10}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start'}}>
                    <FontAwesome6 name="n" size={20} color="black" />
                    <Text style={{fontSize:16,fontWeight:'400'}}>Policy Number</Text>
                    </View>
                    <Text style={{fontSize:16,fontWeight:'600',color:'#000'}}>{policy?.policyNumber}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start'}}>
                    <AntDesign name="calendar" size={20} color="black" />
                    <Text style={{fontSize:16,fontWeight:'400'}}>Policy Period</Text>
                    </View>
                    <Text style={{fontSize:16,fontWeight:'600',color:'#000'}}>{policy?.policyStart} - {policy?.policyEnd}</Text>
                </View>
            </View>
        </View>

        <View style={{
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:20,
            paddingHorizontal:20,
            paddingVertical:20,
            gap:14,
            borderWidth:1
        }}>
            <Text style={styles.sectionTitle}>Insured Items</Text>
            <View style={{gap:10}}>
                {
                    policy?.vehicals.map((vehical, index)=>(
                        <Pressable 
                            key={index} 
                            onPress={()=>router.push({
                                pathname: "/(tabs)/Policies/policy/vehical",
                            params: { 
                                vehicalId: vehical.vehicalId,
                                insuranceId:getId.policy
                            }
                            })}
                            style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start'}}>
                                <MaterialIcons name="airport-shuttle" size={24} color="black" />
                                <Text style={{fontSize:16,fontWeight:'400'}}>{vehical.model}</Text>
                            </View>
                            {/* <Entypo name="chevron-small-right" size={24} color="black" /> */}
                        </Pressable>
                    ))
                }
            </View>
        </View>

        <View style={{
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:20,
            paddingHorizontal:20,
            paddingVertical:20,
            gap:14,
            borderWidth:1
        }}>
            <Text style={styles.sectionTitle}>Coverage Type</Text>
            <View style={{gap:10}}>
                        <View 
                            style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start'}}>
                                <MaterialIcons name="airport-shuttle" size={24} color="black" />
                                <Text style={{fontSize:16,fontWeight:'400'}}>Premium Amount</Text>
                            </View>
                            <Text style={{
                                fontSize:16,
                                fontWeight:'600',
                            }}>Rwf 500,000</Text>
                        </View>
            </View>
            <View style={{gap:10}}>
                        <View 
                            style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start'}}>
                                <AntDesign name="calendar" size={24} color="black" />
                                <Text style={{fontSize:16,fontWeight:'400'}}>New expiry Date</Text>
                            </View>
                            <Text style={{
                                fontSize:16,
                                fontWeight:'600',
                            }}>8/24 - 8/25</Text>
                        </View>
            </View>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
            }}>
                <ReUsableButton title={"Contract"} onPress={undefined} style={{
                    borderColor:'#064E89',
                    borderWidth:1.5,
                    paddingVertical:10,
                    paddingHorizontal:29,
                    gap:8,
                    TextStyle:{
                        color:'#064E89',
                        fontSize:16,
                        fontWeight:'600'
                    }
                }}>
                    <Feather name="eye" size={24} color="#064E89" />
                </ReUsableButton>
                <ReUsableButton title={"Edit"} onPress={undefined} style={{
                    backgroundColor:'#9CEAFF',
                    paddingVertical:10,
                    paddingHorizontal:30,
                    gap:8,
                    TextStyle:{
                        color:'#000',
                        fontSize:16,
                        fontWeight:'600'
                    }
                }}>
                    <Feather name="edit" size={24} color="black" />
                </ReUsableButton>
            </View>
        </View>

        <View style={{
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:20,
            paddingHorizontal:20,
            paddingVertical:20,
            gap:14,
            borderWidth:1,
            justifyContent:'space-between',
            flexDirection:'row',
        }}>
                            <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start'}}>
                                <MaterialIcons name="workspace-premium" size={24} color="black" />
                                <Text style={{fontSize:16,fontWeight:'400'}}>Premium Amount</Text>
                            </View>
                            <Text style={{
                                fontSize:16,
                                fontWeight:'600',
                            }}>Rwf 500,000</Text>
        </View>
        <View style={{
            borderColor:'#064E89',
            borderBottomWidth:2.5,
            borderRadius:20,
            paddingHorizontal:20,
            paddingVertical:20,
            gap:14,
            borderWidth:1,
            justifyContent:'space-between',
            flexDirection:'row',
        }}>
                            <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start'}}>
                                <AntDesign name="calendar" size={24} color="black" />
                                <Text style={{fontSize:16,fontWeight:'400'}}>New expiry Date</Text>
                            </View>
                            <Text style={{
                                fontSize:16,
                                fontWeight:'600',
                            }}>8/24 - 8/25</Text>
        </View>

        <View style={styles.section}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={styles.paragraph}>I agree to Ensure Terms & Conditions</Text>
        </View>
        <ReUsableButton title={"Proceed to Payment"} onPress={undefined} style={{
            backgroundColor:'#064E89',
            TextStyle:{
                color:'#fff',
                fontSize:16,
                fontWeight:'600'
            }
        }} children={undefined}/>
    </ScrollView>
  )
}

export default renew

const styles = StyleSheet.create({
    sectionTitle:{
        fontSize:18,
        fontWeight:'600',
        color:'#000',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      paragraph: {
        fontSize: 15,
      },
      checkbox: {
        margin: 8,
      },
})