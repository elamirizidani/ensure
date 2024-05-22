import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { AntDesign, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useAuth } from '@/context/authContext';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import CustomKeyBoardView from '@/components/static/CustomKeyBoardView';

const DriverAInfo = () => {
  const router = useRouter()
  const firstNameRef = useRef("");
  const {locale} = useAuth()

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const handleConfirmPickedDate = (date) => {
    setDate(date)
    setDatePickerVisibility(!isDatePickerVisible)
  };


  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
  <SafeAreaView style={styles.safeArea}>
    <CustomKeyBoardView>
    <View style={styles.container}>
      <Text style={styles.sectionText}>Driver A Information</Text>
      
      <View style={styles.formSection}>
        <TextInput 
            style={styles.inputText}
            placeholder="First Name"
            placeholderTextColor={"#868686"}
            autoCapitalize="none"
            keyboardType="default"
            blurOnSubmit={false}
            onChangeText={value=> firstNameRef.current=value}
            returnKeyLabel='Done'
            returnKeyType={'done'}
            />
        <TextInput 
            style={styles.inputText}
            placeholder="Last Name"
            placeholderTextColor={"#868686"}
            autoCapitalize="none"
            keyboardType="default"
            blurOnSubmit={false}
            onChangeText={value=> firstNameRef.current=value}
            returnKeyLabel='Done'
            returnKeyType={'done'}
            />
        <View style={styles.inputText}>
            <Text style={styles.selectedElement}>
            {
                date != undefined ? date.toLocaleDateString():"Select Date"
            }
            </Text>
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            locale={locale}
            date={date}
            onConfirm={handleConfirmPickedDate}
            onCancel={()=>setDatePickerVisibility(!isDatePickerVisible)}
            />
            <TouchableOpacity onPress={()=>setDatePickerVisibility(!isDatePickerVisible)}>
                <AntDesign name="calendar" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <TextInput 
            style={styles.inputText}
            placeholder="National ID"
            placeholderTextColor={"#868686"}
            autoCapitalize="none"
            keyboardType="number-pad"
            blurOnSubmit={false}
            onChangeText={value=> firstNameRef.current=value}
            returnKeyLabel='Done'
            returnKeyType={'done'}
            />
        <TextInput 
            style={styles.inputText}
            placeholder="Address"
            placeholderTextColor={"#868686"}
            autoCapitalize="none"
            keyboardType="default"
            blurOnSubmit={false}
            onChangeText={value=> firstNameRef.current=value}
            returnKeyLabel='Done'
            returnKeyType={'done'}
            />
        <TextInput 
            style={styles.inputText}
            placeholder="Driving license number"
            placeholderTextColor={"#868686"}
            autoCapitalize="none"
            keyboardType="number-pad"
            blurOnSubmit={false}
            onChangeText={value=> firstNameRef.current=value}
            returnKeyLabel='Done'
            returnKeyType={'done'}
            />
        <TextInput 
            style={styles.inputText}
            placeholder="Category"
            placeholderTextColor={"#868686"}
            autoCapitalize="none"
            keyboardType="default"
            blurOnSubmit={false}
            onChangeText={value=> firstNameRef.current=value}
            returnKeyLabel='Done'
            returnKeyType={'done'}
            />
        <View style={styles.inputText}>
            <Text style={styles.selectedElement}>
            {
                date != undefined ? date.toLocaleDateString():"Select Date"
            }
            </Text>
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            locale={locale}
            date={date}
            onConfirm={handleConfirmPickedDate}
            onCancel={()=>setDatePickerVisibility(!isDatePickerVisible)}
            />
            <TouchableOpacity onPress={()=>setDatePickerVisibility(!isDatePickerVisible)}>
                <AntDesign name="calendar" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <TextInput 
            style={styles.inputText}
            placeholder="Issued by"
            placeholderTextColor={"#868686"}
            autoCapitalize="none"
            keyboardType="default"
            blurOnSubmit={false}
            onChangeText={value=> firstNameRef.current=value}
            returnKeyLabel='Done'
            returnKeyType="done"
            />
        </View>
        
        <ReUsableButton title={"Next"} onPress={
                    ()=>router.push('noneNavScreens/claims/ppleInvolved/someOneElse/ownerShip')
                } style={styles.netBtn} children={undefined}/>
    </View></CustomKeyBoardView>
    </SafeAreaView>
    
  )
}

export default DriverAInfo
const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({

  safeArea:{
    height:height,
    width:width
  },
  container:{
    paddingHorizontal:20,
    paddingVertical:20,
    // height:'100%'
  },
  sectionText:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:20,
    width:'70%'
  },
  formSection:{
    gap:15
  },
  inputText:{
    borderColor:'#000000',
    borderWidth:2,
    height:48,
    paddingHorizontal:20,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
netBtn:{
  backgroundColor:'#064E89',
  marginTop:20,
  TextStyle:{
      color:'#fff',
      fontSize:16,
      fontWeight:'600'
  }
}
})