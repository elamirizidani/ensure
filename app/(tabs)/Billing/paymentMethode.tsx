import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, EvilIcons, FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useRouter } from 'expo-router'

const paymentMethode = () => {

    const router = useRouter()
    const [modalVisible, setModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!modalVisible);
      };
      const handleModalClose = () => {
        setModalVisible(false);
      };

      const handleConfirm = () => {
        Alert.alert(
          'Are you sure?',
          '',
          [
            {
              text: 'No',
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => {
                // Perform your action here
                console.log('Action confirmed!');
                
              },
            },
          ],
          { cancelable: false }
        );
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
                <View style={{
                    paddingVertical:20,
                    flexDirection:'row',
                    gap:10,
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                    <Text style={{
                        fontWeight:'700',
                        fontSize:22,
                        color:'#000'
                    }}>
                        Manzi Bruno
                    </Text>
                    <TouchableOpacity onPress={toggleModal} style={{backgroundColor:'#9CEAFF',height:24,width:24,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                        <AntDesign name="close" size={15} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{gap:20}}>
                    <Pressable onPress={toggleModal} style={{
                        flexDirection:'row',
                        gap:10,
                        alignItems:'center'
                        }}>
                        <View style={{
                            backgroundColor:'#9CEAFF',
                            borderRadius:50,
                            width:35,
                            height:35,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <MaterialCommunityIcons name="credit-card-off-outline" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{
                            fontSize:18,
                            fontWeight:'400'
                            }}>Set as Default</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={handleConfirm} style={{
                        flexDirection:'row',
                        gap:10,
                        alignItems:'center'
                        }}>
                        <View style={{
                            backgroundColor:'#9CEAFF',
                            borderRadius:50,
                            width:35,
                            height:35,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <MaterialCommunityIcons name="credit-card-off-outline" size={24} color="black" />
                        </View>
                        <View>
                            <Text style={{
                            fontSize:18,
                            fontWeight:'400'
                            }}>Remove card</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </Modal>
        );
      };
      
  return (

    <ScrollView 
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false} 
        style={styles.container}>
        <View style={styles.topContainer}>
            <FontAwesome name="credit-card" size={84} color="#fff" />
            <Text style={styles.topText}>
                Choose your preferred payment method
            </Text>
        </View>
        <View style={styles.section}>
            <ReUsableButton title={"MTN MoMo"} onPress={()=>router.push('/noneNavScreens/billing/mobileMoneySetup')} style={styles.payButton}>
                <Image source={require('@/assets/images/imgs/mtn.png')} style={styles.payImage}/>
            </ReUsableButton>
            <ReUsableButton title={"Airtel Money"} onPress={()=>router.push('/noneNavScreens/billing/mobileMoneySetup')} style={styles.payButton}>
                <Image source={require('@/assets/images/imgs/airtel.png')} style={styles.payImage}/>
            </ReUsableButton>
        </View>
        <View style={styles.section}>
            <View style={styles.cardsSection}>
                <View>
                    <Text style={styles.sectionTitle}>Current Cards</Text>
                    <View style={styles.singleCard}>
                        <View style={styles.cardIconName}>
                            <Image source={require('@/assets/images/imgs/card.png')} style={styles.cardStyle}/>
                            <View>
                                <Text style={styles.cardTitle}>
                                    Bank of Kigali
                                </Text>
                                <Text style={styles.cardText}>
                                    Debit **** 3406
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity 
                            style={styles.cardOption}
                            onPress={toggleModal}
                            >
                            <Ionicons name="ellipsis-vertical-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={()=>router.push('/noneNavScreens/billing/addCard')}
                        style={styles.singleCard}>
                        <View style={styles.cardIconName}>
                            <View style={styles.addBtn}>
                                <AntDesign name="plus" size={24} color="#fff" />
                            </View>
                            <Text style={styles.cardTitle}>
                                Add a debit or credit card
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Current Banks</Text>
                    <View style={styles.singleCard}>
                        <View style={styles.cardIconName}>
                            <MaterialIcons name="account-balance" size={40} color="#064E89" />
                            <View>
                                <Text style={styles.cardTitle}>
                                    Access Bank
                                </Text>
                                <Text style={styles.cardText}>
                                    Account **** 3406
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.cardOption}>
                            <Ionicons name="ellipsis-vertical-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={()=>router.push('/noneNavScreens/billing/addBankAccount')}
                        style={styles.singleCard}>
                        <View style={styles.cardIconName}>
                            <View style={styles.addBtn}>
                                <AntDesign name="plus" size={24} color="#fff" />
                            </View>
                            <Text style={styles.cardTitle}>
                                Add a bank account
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        {renderModal()}
    </ScrollView>
  )
}

export default paymentMethode

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    topContainer:{
        backgroundColor:'#064E89',
        paddingHorizontal:20,
        paddingVertical:40,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
        gap:18,
        zIndex:1,
        alignItems:'center'
    },
    topText:{
        color:'#FFFFFF',
        fontSize:20,
        fontWeight:'400',
        lineHeight:26,
    },
    payButton:{
        backgroundColor:'#fff',
        paddingHorizontal:90,
        paddingVertical:10,
        gap:8,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#D9D9D9',
        marginVertical:3,
        TextStyle:{
            color:'#1C1B1F',
            fontSize:18,
            fontWeight:'600'
        }
    },
    payImage:{
        width:31,
        height:30,
        resizeMode:'contain'
    },
    section:{
        padding:20,
    },
    cardsSection:{
        backgroundColor:'#fff',
        borderRadius:10,
        gap:28,
        paddingHorizontal:13,
        paddingVertical:32,

        shadowColor: '#E0DDDD40',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,  
        elevation: 5
    },
    sectionTitle:{fontSize:22,color:'#000',fontWeight:'600',marginBottom:20},
    singleCard:{
        backgroundColor:'#D9D9D952',
        padding:20,
        gap:10,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    cardStyle:{
        width:42,
        height:34,
        resizeMode:'cover'
    },
    cardTitle:{
        fontSize:18,
        fontWeight:'600',
        color:'#000000'
    },
    cardText:{
        fontSize:16,
        fontWeight:'400',
        color:'#000000'
    },
    cardIconName:{flexDirection:'row',gap:10,alignItems:'center'},
    cardOption:{
        // backgroundColor:'red',
    },
    addBtn:{
        backgroundColor:'#064E89',
        borderRadius:5,
        height:35,
        width:35,
        justifyContent:'center',
        alignItems:'center'
    },
    modalStyle:{
        backgroundColor:'#fff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingVertical:20, 
        paddingHorizontal:20,
        gap:5,
        marginTop:'auto',
    },
})