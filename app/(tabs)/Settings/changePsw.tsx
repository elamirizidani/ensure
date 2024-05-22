import { Dimensions, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomKeyBoardView from '@/components/static/CustomKeyBoardView'
import { Feather } from '@expo/vector-icons'
import { useAuth } from '@/context/authContext'
import ReUsableButton from '@/components/reUsable/ReUsableButton'

const changePsw = () => {
  const { i18n } = useAuth()
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <View style={styles.container}>
      <CustomKeyBoardView>
        <View style={styles.loginForm}>
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
        <View style={styles.haveAnAccount}>
                    <Pressable
                    //   onPress={()=>router.push('/signIn')}
                    >
                      <Text style={{color:'#064E89',fontSize:16,fontWeight:'600',marginLeft:2}}>{i18n.t('welcomeScreen.buttons.forgotPsw')}</Text>
                    </Pressable>
                </View>
        </View>
        <View style={{
          marginTop:'auto',
        }}>
          <ReUsableButton 
          title={i18n.t('welcomeScreen.buttons.changePswd')}
          onPress={undefined}
          style={{
            backgroundColor: '#064E89',
            TextStyle: { color: '#fff', fontSize: 16, fontWeight: '700' }
          }} children={undefined}/>
        </View>
        
      </CustomKeyBoardView>
    </View>
  )
}

export default changePsw
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
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
haveAnAccount:{
  width:width*90/100,
  borderTopColor:'#D9D9D9',
  paddingVertical:15,
  // justifyContent:'center',
  flexDirection:'row',
},
})