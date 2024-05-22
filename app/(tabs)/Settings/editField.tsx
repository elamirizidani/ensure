import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import BackBtn from '@/components/reUsable/BackBtn'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const editField = () => {
    const navigation = useNavigation()
    const getField = useLocalSearchParams()
    const ref = useRef()
    const fieldRef = useRef(getField.feildValue)
    const [inputValue, setInputValue] = useState(getField.fieldValue)


    // console.log(fieldRef)
    useLayoutEffect(()=>{
      navigation.setOptions({
        // headerShown:false,
        headerShadowVisible: false,
        title:'',
        headerStyle: {
          backgroundColor: '#064E89'
        },
        headerLeft: () => <BackBtn screenName={getField.feildName} />,
        headerRight: () => <Pressable>
          <MaterialCommunityIcons name="check" size={24} color="#fff" />
        </Pressable>
      })
    },[])

    const handleInputChange = (value) => {
      setInputValue(value); // Update the input value
      fieldRef.current = value; // Update the ref value if needed elsewhere
    };


  return (
    <View style={{
      paddingHorizontal:15,
      paddingVertical:30
    }}>
      <View style={styles.formFieldSection}>
        {/* <Entypo name='user' color='#fc09' size={30}/> */}
        <Text style={{
          fontSize:14,
          fontWeight:'600',
          color:'#787878'
        }}>{getField.feildName}</Text>
        <TextInput
          style={styles.inputText}
          // placeholder={getField.feildName}
          placeholderTextColor={"#000"}
          autoCapitalize="none"
          keyboardType="email-address"
          blurOnSubmit={false}
          value={fieldRef.current}
          onChangeText={handleInputChange}
          returnKeyLabel='Done'
          returnKeyType={'done'}
          />
            {/* <DateTimePicker 
                            value={date}
                            mode={'date'}
                            themeVariant="dark"
                            maximumDate={moment().toDate()}
                            style={{
                                height: 43,
                                marginVertical:10,
                                display: 'flex',
                                alignItems:'flex-start',
                                justifyContent:'flex-start',
                                width:'100%',
                            }}
                            // onChange={onDateSelect}
                            display={'default'}
                        /> */}
      </View>
    </View>
  )
}

export default editField

const styles = StyleSheet.create({
  inputText:{
    color:'#000000',
    fontSize:18,
    fontWeight:'400'
},
formFieldSection:{
  
  width:'100%',
  padding:10,
  marginVertical:5,
  // backgroundColor:'#fff',
  borderRadius:8,
  height:60,
  paddingHorizontal:15,
  borderBottomWidth:3,
  borderBottomColor:'#787878',
},
})