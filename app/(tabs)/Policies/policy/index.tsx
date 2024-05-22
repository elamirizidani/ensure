import { Dimensions, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { AntDesign, Entypo, Feather, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import InsureContacts from '@/components/reUsable/InsureContacts'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import dummy from '@/utilits/dummy';
import BackBtn from '@/components/reUsable/BackBtn'

const policy = () => {


    const getId = useLocalSearchParams()
    const router = useRouter()
    // const claimsId = Array.isArray(getId.claims) ? parseInt(getId.claims[0], 10) : parseInt(getId.claims, 10);
    const policy = dummy['InsuarencePolicy'].find(item => item.id === getId.policy)
    const [isModalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation()
    
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:'',
      headerStyle: {
        backgroundColor: '#064E89'
      },
      headerLeft: () => <BackBtn screenName={getId.policyName} />,
      headerRight: () => (
          <Pressable>
              <MaterialIcons name="notifications-active" size={25}
              color={'#fff'}
              style={{ }}/>
          </Pressable>
    ),
    })
  },[])

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    
  return (
    <>
    <ScrollView 
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        overScrollMode="never"
        >
    <View
        style={{
            // width:width - 30
            paddingHorizontal:15
        }}
    >
        <View 
            style={{
                flexDirection:'row',
                justifyContent:'space-between'
            }}
            >
            <ReUsableButton title={'New Radiant Quote'} onPress={undefined} style={{
                gap:8,
                paddingHorizontal:16,
                paddingVertical:8,
                borderWidth: 1.5,
                borderColor:'#064E89',
                TextStyle:{
                color:'#064E89',
                fontWeight:'600',
                fontSize:16,
                }
            }}>
                <AntDesign name="tago" size={24} color="#064E89" />
            </ReUsableButton>
            <ReUsableButton title={'Renew'}
                onPress={undefined}
                style={{
                flexDirection: 'row',
                // borderColor: '#064E89',
                backgroundColor:'#064E89',
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
        <Image source={require('@/assets/images/imgs/Ads.png')} style={{width:'100%',borderRadius:10}}/>
        <View style={{width:'100%',flexDirection:'row',gap:14,marginTop:20}}>
            
            <TouchableOpacity 
                onPress={toggleModal}
                style={{
                    backgroundColor:'#064E89',
                    borderRadius:10,
                    flex:1,
                    gap:24,
                    paddingHorizontal:15,
                    paddingVertical:14
            }}>
                <AntDesign name="idcard" size={30} color="#fff" />
                <Text style={{fontSize:16,color:'#fff',fontWeight:'600',lineHeight:18}}>Insurance Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>router.push({
                    pathname: "/(tabs)/Claims/[claims]",
                    params: { claims: policy?.provider.id }
                  })}
             style={{
                backgroundColor:'#064E89',
                borderRadius:10,
                flex:1,
                gap:24,
                paddingHorizontal:15,
                paddingVertical:14
            }}>
                <MaterialCommunityIcons name="file-document-outline" size={30} color="#fff" />
                <Text style={{fontSize:16,color:'#fff',fontWeight:'600',lineHeight:18}}>Manage claims</Text>
            </TouchableOpacity>
            <View style={{
                backgroundColor:'#064E89',
                borderRadius:10,
                flex:1,
                gap:24,
                paddingHorizontal:15,
                paddingVertical:14
            }}>
                <Feather name="shield" size={30} color="#fff" />
                <Text style={{fontSize:16,color:'#fff',fontWeight:'600',lineHeight:18}}>Manage Payments</Text>
            </View>
        </View>
    </View>
    <View style={{
            paddingTop:20,
            borderBottomWidth:5,
            borderColor:'#B8B8B899',
            gap:16,
            paddingHorizontal:20,
            paddingVertical:24,
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
            paddingTop:20,
            borderBottomWidth:5,
            borderColor:'#B8B8B899',
            gap:16,
            paddingHorizontal:20,
            paddingVertical:24,
        }}>
            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <View>
                    <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start'}}>
                        <MaterialIcons name="workspace-premium" size={24} color="black" />
                        <Text style={{fontSize:16,fontWeight:'600'}}>Policy Period</Text>
                    </View>
                    <Text style={{fontSize:16,fontWeight:'300',color:'#000'}}>Rwf 500,000</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
        </View>
        <View style={{
            paddingTop:20,
            borderBottomWidth:5,
            borderColor:'#B8B8B899',
            gap:16,
            paddingHorizontal:20,
            paddingVertical:24,
        }}>
            <Text style={styles.sectionTitle}>Vehicles Included</Text>
            <View style={{gap:10}}>
                {
                    policy?.vehicals.map((vehical, index)=>(
                        <Pressable 
                            key={index} 
                            onPress={()=>router.push({
                                pathname: "/(tabs)/Policies/policy/vehicalTabs",
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
                            <Entypo name="chevron-small-right" size={24} color="black" />
                        </Pressable>
                    ))
                }
            </View>
        </View>
        <View style={{
            paddingTop:20,
            borderBottomWidth:5,
            borderColor:'#B8B8B899',
            gap:16,
            paddingHorizontal:20,
            paddingVertical:24,
        }}>

            <View 
            style={{
                flexDirection:'row',
                justifyContent:'space-between'
            }}
            >
                <ReUsableButton title={'Download Contract'} onPress={undefined} style={{
                      gap: 8,
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                    //   borderWidth: 1.5,
                      backgroundColor: '#064E89',
                      TextStyle: {
                          color: '#fff',
                          fontWeight: '600',
                          fontSize: 16,
                      }
                  }} children={undefined}/>
            <ReUsableButton title={'Edit my Policy'}
                  onPress={undefined}
                  style={{
                      flexDirection: 'row',
                      // borderColor: '#064E89',
                      backgroundColor: '#D6ECFF',
                      borderRadius: 50,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      gap: 10,
                      alignItems: 'center',
                      TextStyle: { color: '#064E89', fontSize: 16, fontWeight: '600' }
                  }} children={undefined}/>
        </View>
        
            <Text style={styles.sectionTitle}>Drivers Included</Text>
            <View style={{gap:10}}>
                {
                    policy?.drivers.map((driver,index)=>(
                    <Pressable
                        onPress={()=>router.push({
                            pathname: "/(tabs)/Policies/policy/driver",
                            params: { 
                              driverId: driver.driverId,
                              isOwner: driver.isOwner ? 'true' : 'false'
                            }
                          })}
                        key={index} style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',gap:10,justifyContent:'flex-start',alignItems:'center'}}>
                            <Feather name={driver.isOwner? 'user':'user-plus'} size={24} color="black" />
                            <Text style={{fontSize:16,fontWeight:'400'}}>{driver.names}</Text>
                            {driver.isOwner &&(
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
                        <Entypo name="chevron-small-right" size={24} color="black" />
                    </Pressable>
                    ))
                }
            </View>
        </View>
        <InsureContacts companyInfo={(policy?.provider.id)}/>

    </ScrollView>
    <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                >
                <View style={styles.modalStyle}>
                    <View style={styles.closeBtn}>
                    <TouchableOpacity onPress={toggleModal}>
                        <AntDesign name="closecircle" size={24} color="#0976B6" />
                    </TouchableOpacity>
                    </View>
                    
                    <View style={{paddingHorizontal:20,gap:20}}>
                        {
                        policy?.vehicals.map((item,index) =>{
                            return (
                            <TouchableOpacity 
                                key={index} 
                                onPress={()=>{
                                    router.push({
                                        pathname:'/(tabs)/Policies/policy/card',
                                        params:{
                                            vehicleId:item.vehicalId,
                                            insuranceId:getId.policy
                                        }
                                    })
                                    toggleModal();
                                }}
                                style={{flexDirection:'row',gap:15,alignItems:'center'}}>
                                <MaterialIcons name="airport-shuttle" size={24} color="black" />
                                <Text style={{fontSize:16,fontWeight:'400'}}>{item.model}</Text>
                            </TouchableOpacity>
                            )
                        })
                        }
                    </View>
                </View>
            </Modal>
    </>
  )
}

export default policy
const {height,width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    sectionTitle:{
        fontSize:18,
        fontWeight:'600',
        color:'#000',
      },
      modalStyle:{
        backgroundColor:'#fff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        // justifyContent:'center',
        // alignItems:'center',
        paddingVertical:20, 
        gap:20,
        marginTop:'auto',
        borderTopWidth:2,
        borderColor:'#064E89'
    },
    closeBtn:{
        padding:15,
        position:'absolute',
        zIndex:1,
        right:0
    }
})