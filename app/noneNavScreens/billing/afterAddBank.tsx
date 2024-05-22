import { Dimensions,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useRouter } from 'expo-router'
import LottieView from 'lottie-react-native';
import { useAuth } from '@/context/authContext';

const AfterAddBank = () => {
    const router = useRouter()
    const { i18n } =  useAuth()
  return (
    <View style={styles.container}>
       <View style={styles.mainSection}>
                <View style={{width:'50%', aspectRatio:1}}>
                <LottieView style={{flex:1}} source={require('@/assets/images/thanks.json')} autoPlay loop/>
                </View>
            <Text 
                style={{
                    fontSize:28,
                    fontWeight:'600'
                }}
                >Account added Successfully</Text>
                <Text
                style={{
                    marginVertical:20,
                    fontSize:16,
                    fontWeight:'400',
                    width:width*70/100,
                    textAlign:'center'
                }}
                >
                    Bank account successfully added to your app. You're all set to enjoy seamless transactions.
                </Text>
                
            <View style={{width:width*90/100,}}>
                <ReUsableButton 
                      title={"Done"}
                      onPress={() => router.replace('/(tabs)/Billing/paymentMethode')}
                      style={{
                          backgroundColor: '#064E89',
                          TextStyle: { color: '#fff', fontSize: 16, fontWeight: '700' }
                      }} children={undefined}/>        
            </View>
        </View>
    </View>
  )
}

export default AfterAddBank
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
    },
    mainSection:{
        width:width,
        height:height,
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
          backgroundColor:'blue'
        },
        haveAnAccount:{
            width:width*90/100,
            borderTopColor:'#D9D9D9',
            paddingVertical:15,
            justifyContent:'center',
            flexDirection:'row',
        },
})