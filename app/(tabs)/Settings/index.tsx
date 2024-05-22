import { StyleSheet, Text, View,Image, Pressable, Modal, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import RadioGroup from 'react-native-radio-buttons-group';
import { useAuth } from '@/context/authContext';


const Settings = () => {

  const router = useRouter()
  const [isModalVisible, setModalVisible] = useState(false);
  const { changeLocale, locale, i18n } = useAuth();

  const radioButtons = useMemo(() => ([
    {
        id: 'en',
        label: 'English',
        value: 'en'
    },
    {
        id: 'rw-RW',
        label: 'Kinyarwanda',
        value: 'rw-RW'
    },
    {
        id: 'fr',
        label: 'French',
        value: 'fr'
    }
]), []);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };
 

  // console.log(i18n.locale)
  // console.log(i18n.t('settingScreen.mainScreenContents.item4.title'))

  return (
    <View>
      <View style={{
        backgroundColor:'#064E89',
        alignItems:'center',
        paddingVertical:30,
        gap:15,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
      }}>
        <View style={{
          height:55,
          width:55,
          borderRadius:50,
          backgroundColor:'#9CEAFF',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image/>
          <Text style={{
            fontSize:18,
            fontWeight:'700'
          }}>MB</Text>
        </View>
        <Text style={{
          fontSize:18,
          fontWeight:'400',
          color:'#fff',
        }}>Manzi Bruno</Text>
      </View>
      <View style={{
        paddingHorizontal:15,
        paddingVertical:20,
        gap:20
      }}>

        <Pressable 
          onPress={()=>router.push('/(tabs)/Settings/accountSetting')}
          style={{
            flexDirection:'row',
            gap:10
          }}>
          <View style={{
            backgroundColor:'#CEF4FF',
            borderRadius:50,
            width:35,
            height:35,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Ionicons name="person-outline" size={24} color="#064E89" />
          </View>
          <View>
          <Text style={{
              fontSize:18,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item1.title')}</Text>
            <Text style={{
              fontSize:14,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item1.subTitle')}</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={()=>router.push('/Settings/notification')}
          style={{
          flexDirection:'row',
          gap:10
        }}>
          <View style={{
            backgroundColor:'#CEF4FF',
            borderRadius:50,
            width:35,
            height:35,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Ionicons name="notifications-outline" size={24} color="#064E89" />
          </View>
          <View>
          <Text style={{
              fontSize:18,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item2.title')}</Text>
            <Text style={{
              fontSize:14,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item2.subTitle')}</Text>
          </View>
        </Pressable>

        <Pressable 
          onPress={()=>router.push('/Settings/security')}
          style={{
          flexDirection:'row',
          gap:10
        }}>
          <View style={{
            backgroundColor:'#CEF4FF',
            borderRadius:50,
            width:35,
            height:35,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Feather name="shield" size={24} color="#064E89" />
          </View>
          <View>
          <Text style={{
              fontSize:18,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item3.title')}</Text>
            <Text style={{
              fontSize:14,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item3.subTitle')}</Text>
          </View>
        </Pressable>

        <Pressable onPress={toggleModal} style={{
          flexDirection:'row',
          gap:10
        }}>
          <View style={{
            backgroundColor:'#CEF4FF',
            borderRadius:50,
            width:35,
            height:35,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <FontAwesome name="language" size={24} color="#064E89" />
          </View>
          <View>
            <Text style={{
              fontSize:18,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item4.title')}</Text>
            <Text style={{
              fontSize:14,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item4.subTitle')}</Text>
          </View>
        </Pressable>

        <Pressable onPress={()=>router.push('/(tabs)/Settings/helpAndSupport')} style={{
          flexDirection:'row',
          gap:10
        }}>
          <View style={{
            backgroundColor:'#CEF4FF',
            borderRadius:50,
            width:35,
            height:35,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Ionicons name="help-circle-outline" size={24} color="#064E89" />
          </View>
          <View>
            <Text style={{
              fontSize:18,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item5.title')}</Text>
            <Text style={{
              fontSize:14,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item5.subTitle')}</Text>
          </View>
        </Pressable>

        <Pressable onPress={()=>router.push('/signIn')} style={{
          flexDirection:'row',
          gap:10
        }}>
          <View style={{
            backgroundColor:'#CEF4FF',
            borderRadius:50,
            width:35,
            height:35,
            justifyContent:'center',
            alignItems:'center',
          }}>
            <MaterialIcons name="logout" size={24} color="#064E89" />
          </View>
            <Text style={{
              fontSize:18,
              fontWeight:'400'
            }}>{i18n.t('settingScreen.mainScreenContents.item6.title')}</Text>
        </Pressable>

      </View>



      <Modal 
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleModalClose}
        >
                <View style={styles.modalStyle}>
  
                    <View style={{
                        paddingHorizontal:30,
                        paddingVertical:20,
                        borderBottomWidth:1.5,
                        borderColor:'#868686',
                        flexDirection:'row',
                        gap:10,
                        alignItems:'center'
                    }}>
                      <TouchableOpacity onPress={toggleModal}>
                        <EvilIcons name="close" size={32} color="black" />
                      </TouchableOpacity>

                        <Text style={{
                            fontWeight:'700',
                            fontSize:18,
                            color:'#000'
                        }}>
                            {i18n.t('settingScreen.mainScreenContents.selectLanguage')}
                        </Text>
                    </View>
                    <View style={{paddingHorizontal:20,gap:20}}>

                        <RadioGroup 
                            radioButtons={radioButtons} 
                            onPress={changeLocale}
                            selectedId={locale}
                            containerStyle={{
                              alignItems:'flex-start',

                            }}
                        />
                    </View>
                </View>
            </Modal>
    </View>
  )
}

export default Settings

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
    // borderTopWidth:2,
    // borderColor:'#064E89'
},
closeBtn:{
    padding:15,
    position:'absolute',
    zIndex:1,
    right:0
}
})