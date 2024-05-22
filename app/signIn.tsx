import { Dimensions, ImageBackground,Image, Keyboard, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, SafeAreaView, Platform, StatusBar } from 'react-native'
import React, { createRef, useRef, useState } from 'react'
import { Entypo, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useRouter } from 'expo-router'
import Loading from '@/components/static/Loading'
import CustomKeyBoardView from '@/components/static/CustomKeyBoardView'
import { StatusBar as StBar } from 'expo-status-bar'
import { useAuth } from '@/context/authContext'

const LoginScreen = () => {
    const router = useRouter()
    const ref = useRef()
    const {i18n} = useAuth()
    const passwordInputRef = createRef();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const [userName,setUserName] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
    

  const handleLogin = async () =>{
    // if(!emailRef.current || !passwordRef.current)
    //     {
    //         Alert.alert('Sign In',"Please fill All Fields");
    //         return;
    //     }
    //     setLoading(true)

    router.push('/(tabs)')
  }


  return (
    <>
    <StBar style='dark'/>
      <SafeAreaView style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,backgroundColor:'#fff'
      }}
      />
     <TouchableOpacity
        onPress={()=>router.push('/chooseLanguage')}
        >
            <View 
                    style={{
                        flexDirection:'row',
                        gap:10,
                        backgroundColor:'transparent',
                        alignItems:'center',
                        paddingHorizontal:15
                    }}
                    >
                    <Ionicons name="arrow-back-outline" size={24} color="#1C1B1F" />
                </View>

          
        </TouchableOpacity>
  <CustomKeyBoardView>
       
            <View style={styles.mainSection}>
            <Image 
        source={require('../assets/images/actualIcon.png')}
        style={{
            width:'20%',
            objectFit:'contain'
        }}
        />
    <Text style={{
        fontSize:22,
        fontWeight:'700'
    }}
    >{i18n.t('welcomeScreen.loginScreenWelcome')}</Text>
                <View style={styles.loginForm}>
                    <View style={styles.formFieldSection}>
                        {/* <Entypo name='user' color='#fc09' size={30}/> */}
                        <TextInput
                            style={styles.inputText}
                            placeholder={i18n.t('welcomeScreen.loginForm.emailFeild')}
                            placeholderTextColor={"#787878"}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            blurOnSubmit={false}
                            onChangeText={value=> emailRef.current=value}
                            returnKeyLabel='Done'
                            returnKeyType={'done'}
                        />
                    </View>
                    <View style={styles.formFieldSection}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={i18n.t('welcomeScreen.loginForm.passwordField')}
                            placeholderTextColor={"#787878"}
                            blurOnSubmit={false}
                            secureTextEntry={!showPassword}
                            onChangeText={value=> passwordRef.current=value}
                        />
                        {/* <Feather name="eye" size={24} color="black" /> */}
                        <TouchableOpacity onPress={toggleShowPassword}>
                            <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>


                </View>
                    <View style={{width:width*90/100,}}>
                        {
                            loading?(
                                <View style={{alignItems:'center'}}>
                                    <Loading size={60}/>
                                </View>
                                
                            ):(
                                <ReUsableButton 
                                  title={i18n.t('welcomeScreen.buttons.loginBtn')}
                                  onPress={() => handleLogin()}
                                  style={{
                                      backgroundColor: '#064E89',
                                      TextStyle: { color: '#fff', fontSize: 16, fontWeight: '700' }
                                  }} children={undefined}/>
                            )
                            
                        }
                    
                    <ReUsableButton 
                      title={i18n.t('welcomeScreen.buttons.createBtn')}
                      onPress={() => router.push('/signUp')}
                      style={{
                          backgroundColor: '#fff',
                          borderWidth: 1,
                          borderColor: '#1C1B1F',
                          TextStyle:{color:'#1C1B1F',fontSize:16,fontWeight:'700'}
                      }} children={undefined}/>
                </View>
                <View style={styles.haveAnAccount}>
                    <Pressable
                    //   onPress={()=>router.push('/signIn')}
                    >
                      <Text style={{color:'#064E89',fontSize:16,fontWeight:'600',marginLeft:2}}>{i18n.t('welcomeScreen.buttons.forgotPsw')}</Text>
                    </Pressable>
                </View>
                <View>{errortext != '' ? (
                      <Text style={styles.errorTextStyle}>
                        {errortext}
                      </Text>
                    ) : null}</View>
            </View>
        </CustomKeyBoardView>
        <View style={styles.bottomSection}>
                    <Text style={{color:'#000000', fontSize:16,fontWeight:'400'}}>{i18n.t('welcomeScreen.bottomSection.haveDif')} </Text> 
                    <Pressable
                    >
                      <Text style={{color:'#064E89', fontSize:16,fontWeight:'300',marginLeft:2}}> {i18n.t('welcomeScreen.bottomSection.contact')}</Text>
                    </Pressable>
                </View>
    </>
  )
}

export default LoginScreen
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
    },
    mainSection:{
        width:width,
        height:height *92/100,
        // backgroundColor:'#0009',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    loginForm:{
        width:width*90/100,
        marginVertical:20,
    },
    formFieldSection:{
        flexDirection:'row',
        width:'100%',
        padding:10,
        marginVertical:5,
        backgroundColor:'#D9D9D933',
        borderRadius:8,
        height:60,
        paddingHorizontal:15,
        borderBottomWidth:3,
        borderBottomColor:'#064E89',
    },
    inputText:{
        marginHorizontal:10,
        flex:2,
    },
    bottomSection:{
        width:width,
        borderTopColor:'#D9D9D9',
        borderTopWidth:1,
        paddingVertical:15,
        bottom:20,
        justifyContent:'center',
        flexDirection:'row',
        // marginTop:'auto'
    },
    errorTextStyle: {
          color: 'red',
          textAlign: 'center',
          fontSize: 14,
        },
        haveAnAccount:{
            width:width*90/100,
            borderTopColor:'#D9D9D9',
            paddingVertical:15,
            justifyContent:'center',
            flexDirection:'row',
        },
})