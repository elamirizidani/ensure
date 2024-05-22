import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ReUsableButton from '@/components/reUsable/ReUsableButton';

const WasItParked = () => {
  const [selectedDriver,setSelectedDriver] = useState('')
  const router = useRouter()
  const emailRef = useRef("");


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.sectionText}>Please describe the accident in your own words.</Text>
        <View style={styles.formFieldSection}>
          <TextInput
          multiline
          numberOfLines={4}
          style={styles.inputText}
          placeholder="Please explain"
          placeholderTextColor="#787878"
          autoCapitalize="none"
          keyboardType="default"
          blurOnSubmit={false}
          onChangeText={value => {
            emailRef.current = value;
          }}
          onSubmitEditing={() => {
            emailRef.current += '\n';
          }}
          returnKeyLabel="Done"
          returnKeyType="done"
          />
        </View>
        <ReUsableButton title={"Next"} 
          onPress={
            ()=>router.push('noneNavScreens/claims/accDesc/summary')
          } style={styles.netBtn} children={undefined} 
        />
      </View>
      
    </SafeAreaView>
  )
}

export default WasItParked

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:20,
    height:'100%'
  },
  sectionText:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:20,
  },
  formFieldSection:{
    flexDirection:'row',
    width:'100%',
    padding:10,
    marginVertical:5,
    backgroundColor:'#D9D9D9',
    borderRadius:10,
    // height:60,
    paddingHorizontal:5,
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
inputText:{
    marginHorizontal:10,
    flex:1,
    minHeight: 100,
    maxWidth:'100%',
    fontSize:16,
    fontWeight:'400',
    color:'#868686'
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
})