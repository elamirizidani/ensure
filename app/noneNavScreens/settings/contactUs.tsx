import { Modal, Pressable, StyleSheet, Text, View,Linking, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome, FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import ReUsableButton from '@/components/reUsable/ReUsableButton'

const ContactUs = () => {
    const router = useRouter()
    const phoneNumber = '+250 788 698 489'
    const [modalVisible, setModalVisible] = useState(false);



    const callNumber = phone => {
        Linking.openURL(`tel:${phone}`)
      };


    const toggleModal = () => {
        setModalVisible(!modalVisible);
      };
      const handleModalClose = () => {
        setModalVisible(false);
      };



      const renderModal = () => {
        if (!modalVisible) return null;
        return (
            <Modal 
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={handleModalClose}
            >

                    <View style={styles.modalStyle}>
    
                        <View style={{alignItems:'center',gap:10,marginBottom:30,marginTop:20}}>
                        <View style={{
                            backgroundColor:'#064E89',
                            borderRadius:50,
                            width:49,
                            height:49,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <FontAwesome6 name="headset" size={32} color="#fff" />
                        </View>
                            <Text style={{
                                fontSize:18,
                                fontWeight:'600',
                                color:'#000'
                            }}>Call E-nsure for Support</Text>
                            <Text style={{
                                fontSize:16,
                                fontWeight:'400'
                            }}>
                                Due to the number of customers calls
                                to our customer support center, you 
                                might have to wait.
                            </Text>
                        </View>
                    <ReUsableButton 
                                      title={"Call"}
                                      onPress={()=>callNumber(phoneNumber)}
                                    
                                      style={{
                                          backgroundColor: '#064E89',
                                          TextStyle: { color: '#fff', fontSize: 16, fontWeight: '600' }
                                      }} children={undefined}/>
                    <ReUsableButton 
                          title={"Cancel"}
                          onPress={toggleModal}
                          style={{
                              backgroundColor: '#fff',
                              borderWidth: 2,
                              borderColor: '#064E89',
                              TextStyle:{color:'#1C1B1F',fontSize:16,fontWeight:'600'}
                          }} children={undefined}/>
                    </View>
                </Modal>
        );
      };

  return (
    <>
      <Pressable 
            // onPress={
            //     ()=>router.push('/Settings/changePsw')
            // }
            onPress={() => Linking.openURL('mailto:enquiry@ensure.com') }
            style={{
            paddingHorizontal:20,
            paddingVertical:20,
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <View style={{
                flexDirection:'row',
                gap:10,
                alignItems:'center'
            }}>
                <View style={{
                    backgroundColor:'#CEF4FF',
                    borderRadius:50,
                    width:35,
                    height:35,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <FontAwesome name="envelope-o" size={24} color="#064E89" />
                </View>
                <View>
                    <Text style={{
                    fontWeight:'600',
                    fontSize:16,
                    color:'#000'
                }}>
                    Email us
                </Text>
                <Text style={{
                    fontWeight:'400',
                    fontSize:14,
                    color:'#000'
                }}>send an email on enquiry@ensure.com</Text>
                </View>
                
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>

        <Pressable 
            onPress={toggleModal}
            style={{
            paddingHorizontal:20,
            paddingVertical:20,
            // borderBottomWidth:1,
            // borderColor:'#D9D9D9',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <View style={{
                flexDirection:'row',
                gap:10,
                alignItems:'center'
            }}>
                <View style={{
                    backgroundColor:'#CEF4FF',
                    borderRadius:50,
                    width:35,
                    height:35,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <FontAwesome name="envelope-o" size={24} color="#064E89" />
                </View>
                <View>
                    <Text style={{
                    fontWeight:'600',
                    fontSize:16,
                    color:'#000'
                }}>
                    Call us
                </Text>
                <Text style={{
                    fontWeight:'400',
                    fontSize:14,
                    color:'#000'
                }}>Call on (250) 788 698 489</Text>
                </View>
                
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
        {renderModal()}
        
    </>
  )
}

export default ContactUs

const styles = StyleSheet.create({
    modalStyle:{
        backgroundColor:'#fff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        // justifyContent:'center',
        // alignItems:'center',
        paddingVertical:20, 
        paddingHorizontal:20,
        gap:5,
        marginTop:'auto',
        // borderTopWidth:2,
        // borderColor:'#064E89'
    },
})