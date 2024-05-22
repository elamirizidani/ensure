import { Pressable, StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import ReUsableButton from './ReUsableButton'
import moment from 'moment'

const ClaimCard = ({provider}) => {
    // console.log(provider.vehicals[0].model)
    const router = useRouter()
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };


  return (
    <>
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
<View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                    }}
                >
                    
                <ReUsableButton title={'Manage'}
                    onPress={() => router.push({
                        pathname: "/(tabs)/Claims/[claims]",
                        params: { claims: provider.id }
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
                    <Feather name="book" size={24} color="#fff" />
                </ReUsableButton>
                <ReUsableButton title={'File Claim'}
                    onPress={toggleModal}
                    style={{
                        flexDirection: 'row',
                        backgroundColor:"#9CEAFF",
                        borderRadius: 50,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        gap: 10,
                        alignItems: 'center',
                        TextStyle: { color: '#064E89', fontSize: 16, fontWeight: '700' }
                    }}>
                    <AntDesign name="plus" size={24} color="#064E89" />
                </ReUsableButton>
            </View>
        
    </View>



    <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        >
        <View style={styles.modalStyle}>
            <View style={styles.closeBtn}>
            <TouchableOpacity onPress={toggleModal}>
                <AntDesign name="closecircle" size={24} color="#9CEAFF" />
            </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:20,gap:20}}>
                    <TouchableOpacity
                        onPress={()=> {
                            router.push('/noneNavScreens/claims')
                            toggleModal();
                        }}
                        style={{flexDirection:'row',gap:15,alignItems:'center'}}>
                        <Ionicons name="document-text-outline" size={24} color="black" />
                        <Text style={{fontSize:16,fontWeight:'400'}}>Complete Claim Form</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flexDirection:'row',gap:15,alignItems:'center'}}>
                        <MaterialIcons name="lightbulb-outline" size={24} color="black" />
                        <Text style={{fontSize:16,fontWeight:'400'}}>Tips to File a Claim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            router.push({
                            pathname: "/(tabs)/Policies/policy",
                            params: { 
                            policy: provider.id,
                            policyImage:provider.provider.providerImage,
                            policyName:provider.provider.name 
                            }
                        })
                        toggleModal();
                    }
                    }
                        style={{flexDirection:'row',gap:15,alignItems:'center'}}>
                        <Feather name="shield" size={24} color="black" />
                        <Text style={{fontSize:16,fontWeight:'400'}}>Review your Policy</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </Modal>
    </>
  )
}

export default ClaimCard

const styles = StyleSheet.create({
    flagLogo:{
        height:34,
        width:34,
        borderRadius:50,
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