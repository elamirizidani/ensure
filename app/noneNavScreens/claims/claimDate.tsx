import { Button, Dimensions, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useAuth } from '@/context/authContext'

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useRouter } from 'expo-router'


const ClaimDate = () => {
    const { changeLocale, locale, i18n } = useAuth();
    const router = useRouter()
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [time, setTime] = useState<Date | undefined>(undefined);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  
    const handleConfirmPickedDate = (date) => {
      setDate(date)
      setDatePickerVisibility(!isDatePickerVisible)
    };

    const handleConfirmPickedTime = (time) => {
      console.warn("A date has been picked: ", time);
      setTime(time)
      setTimePickerVisibility(!isTimePickerVisible)
    };



    


    return (
        <View style={styles.containerBackground}>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.sectionText}>Select date and time of the accident </Text>
                    <View style={styles.dateForm}>

                    <View style={styles.formFieldSection}>
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

                    <View style={styles.formFieldSection}>
                      <Text style={styles.selectedElement}>
                        {
                          time != undefined ? time.toLocaleTimeString():"Select Time"
                        }
                      </Text>
                      <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        locale={locale}
                        onConfirm={handleConfirmPickedTime}
                        onCancel={()=>setTimePickerVisibility(!isTimePickerVisible)}
                      />
                        <TouchableOpacity onPress={()=>setTimePickerVisibility(!isTimePickerVisible)}>
                            <Feather name="clock" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.formBottomText}>
                      As close as you may recall
                    </Text>

                    </View>
                    <ReUsableButton title={"Next"} onPress={
                    ()=>router.push('noneNavScreens/claims/accidentLocation')
                } style={styles.netBtn} children={undefined} />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ClaimDate

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
  }
})
