import { StyleSheet, Text, TouchableOpacity, View,Image, Modal, SafeAreaView, Platform, Pressable, Dimensions, StatusBar } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Support = ({children}) => {
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const insuranceProvider = [
    {
      'id':1,
      'name':'MUA Insurance Company',
      'insuarenceImage':require(`@/assets/images/imgs/mua.png`)
    },
    {
      'id':2,
      'name':'Radiant Insurance Company',
      'insuarenceImage':require(`@/assets/images/imgs/prime.png`)
    },
    {
      'id':3,
      'name':'Sanlam Insurance Company',
      'insuarenceImage':require(`@/assets/images/imgs/radiant.png`)
    }
  ]

    
  return (
    <>
      <View style={{flexDirection:'row',gap:15,alignItems:'center',paddingRight:15}}>
        <TouchableOpacity onPress={toggleModal}>
              {
                children
              }
        </TouchableOpacity>
        </View>
            
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                >
                    {/* <SafeAreaView style={{
                      paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,backgroundColor:'#064E89'
                    }}/> */}
                <View style={styles.modalStyle}>
                    <View style={styles.closeBtn}>
                    <TouchableOpacity onPress={toggleModal}>
                        <AntDesign name="closecircle" size={24} color="#0976B6" />
                    </TouchableOpacity>
                    </View>
                    
                    <View style={{paddingHorizontal:20,gap:20}}>
                        {
                        insuranceProvider.map(lang =>{
                            return (
                            <View key={lang.id} style={{flexDirection:'row',gap:15,alignItems:'center'}}>
                                <Pressable>
                                    <Image style={styles.flagLogo} source={lang.insuarenceImage}/>
                                    
                                </Pressable>
                                <Text style={{fontSize:16,fontWeight:'400'}}>{lang.name}</Text>
                            </View>
                            )
                        })
                        }
                    </View>
                </View>
            </Modal>
            </>
   
  )
}

export default Support

const {width,height} = Dimensions.get('screen')
const aspectRatio = height/width;

const styles = StyleSheet.create({
    headerContainer:{
        height:60,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        backgroundColor:'#0976B6',
        justifyContent:'space-between',
    },
    flagLogo:{
        height:30,
        width:30,
        borderRadius:50,
    },
    // imageLogo:{
    //     width: aspectRatio>1.6? width * 40/100:width * 20/100,
    //     objectFit: 'contain',
    // },
    selectedLang:{
        borderWidth:3,
        borderColor:'#000', 
        height:40,
        width:40,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
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