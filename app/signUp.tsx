import { Dimensions, ImageBackground,Image, Keyboard, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { createRef, useRef, useState } from 'react'
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useRouter } from 'expo-router'
import Loading from '@/components/static/Loading'
import CustomKeyBoardView from '@/components/static/CustomKeyBoardView'
import { useAuth } from '@/context/authContext'

const SignUp = () => {
    const router = useRouter()
    const ref = useRef()
    const passwordInputRef = createRef();
    const { i18n } = useAuth()

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");
    const idNumberRef = useRef("")
    const phoneRef = useRef("")
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');


  const toggleShowPassword = () => setShowPassword(!showPassword);


  const handleLogin = async () =>{
    if(!emailRef.current || !passwordRef.current)
        {
            Alert.alert('Sign In',"Please fill All Fields");
            return;
        }
  }


  return (
  
    <><CustomKeyBoardView>
       
            <View style={styles.mainSection}>
            
    <Text style={{
        fontSize:22,
        fontWeight:'700'
    }}
    >{i18n.t('welcomeScreen.createTitle')}</Text>
                <View style={styles.loginForm}>

                    <View style={styles.formFieldSection}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={i18n.t('welcomeScreen.signupForm.nationalIdField')}
                            placeholderTextColor={"#787878"}
                            autoCapitalize="none"
                            keyboardType="decimal-pad"
                            blurOnSubmit={false}
                            onChangeText={value=> idNumberRef.current=value}
                        />
                    </View>
                    <View style={styles.formFieldSection}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={i18n.t('welcomeScreen.signupForm.phoneNumberField')}
                            placeholderTextColor={"#787878"}
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            blurOnSubmit={false}
                            onChangeText={value=> phoneRef.current=value}
                        />
                    </View>

                    <View style={styles.formFieldSection}>
                        {/* <Entypo name='user' color='#fc09' size={30}/> */}
                        <TextInput
                            style={styles.inputText}
                            placeholder={i18n.t('welcomeScreen.signupForm.emailField')}
                            placeholderTextColor={"#787878"}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            blurOnSubmit={false}
                            onChangeText={value=> emailRef.current=value}
                        />
                    </View>
                    <View style={styles.formFieldSection}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={i18n.t('welcomeScreen.signupForm.passwordField')}
                            placeholderTextColor={"#787878"}
                            blurOnSubmit={false}
                            secureTextEntry={!showPassword}
                            onChangeText={value=> passwordRef.current=value}
                        />
                        <TouchableOpacity onPress={toggleShowPassword}>
                            <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formFieldSection}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={i18n.t('welcomeScreen.signupForm.confirmPasswordField')}
                            placeholderTextColor={"#787878"}
                            blurOnSubmit={false}
                            secureTextEntry={!showPassword}
                            onChangeText={value=> confirmPasswordRef.current=value}
                        />
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
                                      title={i18n.t('welcomeScreen.buttons.nextBtn')}
                                      onPress={() => router.push('/afterSignUp')}
                                      style={{
                                          backgroundColor: '#064E89',
                                          TextStyle: { color: '#fff', fontSize: 16, fontWeight: '700' }
                                      }} children={undefined}/>
                            )
                            
                        }
            
</View>
<View style={styles.haveAnAccount}>
                    <Text style={{color:'#000', fontSize:16,fontWeight:'400'}}>{i18n.t('welcomeScreen.haveAccount')}</Text> 
                    <Pressable
                      onPress={()=>router.push('/signIn')}
                    >
                      <Text style={{color:'#064E89', fontSize:16,fontWeight:'600',marginLeft:2}}> {i18n.t('welcomeScreen.buttons.loginBtn')}</Text>
                    </Pressable>
                </View>
                {errortext != '' ? (
                      <Text style={styles.errorTextStyle}>
                        {errortext}
                      </Text>
                    ) : null}
                
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

export default SignUp
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
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    loginForm:{
        width:width*90/100,
        marginVertical:30,
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
        borderBottomWidth:2,
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
        marginTop:'auto'
    },
    haveAnAccount:{
        width:width*90/100,
        borderTopColor:'#D9D9D9',
        paddingVertical:15,
        justifyContent:'center',
        flexDirection:'row',
    },
    errorTextStyle: {
          color: 'red',
          textAlign: 'center',
          fontSize: 14,
        },
})