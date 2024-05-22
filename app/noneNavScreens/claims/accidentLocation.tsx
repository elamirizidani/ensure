import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useAuth } from '@/context/authContext'

import { useRouter } from 'expo-router'


const AccidentLocation = () => {
    const { changeLocale, locale, i18n } = useAuth();
    const router = useRouter()
    

  
    const [selectedLocation, setSelectedLocation] = useState(null);
    


    return (
        <View style={styles.containerBackground}>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.sectionText}>Where did it happen? </Text>
                    <>

                    <View style={styles.formFieldSection}>
                      <TouchableOpacity onPress={()=>router.push('noneNavScreens/claims/addLocation')}>
                        <SimpleLineIcons name="location-pin" size={24} color="black" />
                      </TouchableOpacity>
                      
                      <TextInput
                            style={styles.inputText}
                            placeholder="Kicukiro, Sonatube, KN 3 Rd, Kigali"
                            placeholderTextColor={"#787878"}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            blurOnSubmit={false}
                            // onChangeText={value=> emailRef.current=value}
                            returnKeyLabel='Done'
                            returnKeyType={'done'}
                        />
                    </View>

                    <Text style={styles.formBottomText}>
                      As close as you may recall
                    </Text>

                    </>

                    <ReUsableButton 
                      title={"Next"} 
                      onPress={
                        ()=>router.push('noneNavScreens/claims/accidentDesc')
                      } 
                      style={styles.netBtn} 
                      children={undefined} />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default AccidentLocation

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20
    },
    containerBackground: {
        height: height,
        width: width
    },
    sectionText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
        marginVertical: 30,
        width:'80%'
    },
    netBtn: {
        backgroundColor: '#064E89',
        marginTop: 'auto',
        TextStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600'
        }
    },
    formFieldSection:{
      flexDirection:'row',
      width:'100%',
      padding:10,
      marginVertical:5,
      backgroundColor:'#D9D9D9',
      borderRadius:10,
      height:60,
      paddingHorizontal:15,
      // borderBottomWidth:2,
      // borderBottomColor:'#064E89',
      justifyContent:'space-between',
      alignItems:'center',


      shadowColor: '#064E89',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 1,
      shadowOpacity: 1,
      elevation: 3,


  },
  selectedElement:{
    color:'#868686',
    fontSize:16,
    fontWeight:'300'
  },
  formBottomText:{
    color:'#868686',
    fontWeight:'400',
    fontSize:16
  },
  inputText:{
    marginHorizontal:10,
    flex:2,
    fontSize:16,
    fontWeight:'400',
    color:'#000'
},
})
