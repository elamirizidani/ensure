import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { Entypo, Feather, FontAwesome5, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import ShadowedSection from '@/components/reUsable/shadowedSection';

const Progress = () => {
  const [selectedDriver,setSelectedDriver] = useState('')
  const router = useRouter()
  const emailRef = useRef("");


  return (
      <View style={styles.container}>
        <Text style={styles.sectionText}>Continue filing your claim</Text>
        
        <ShadowedSection style={styles.shadowedStyles}>
            <View style={[styles.progressItem,styles.completed]}>
                <View style={styles.mainSection}>
                    <View style={styles.iconSection}>
                        <MaterialIcons name="add-road" size={24} color="#064E89" />
                    </View>
                    <View style={styles.mainTextSection}>
                        <Text style={styles.itemTitle}>
                            What happened?
                        </Text>
                        <Text style={styles.itemText}>Completed</Text>
                    </View>
                </View>
                <FontAwesome5 name="check-circle" size={24} color="#064E89" />
            </View>
        </ShadowedSection>
        <ShadowedSection style={styles.shadowedStyles}>
            <TouchableOpacity
                onPress={()=>router.push('noneNavScreens/claims/ppleInvolved')}
                style={styles.progressItem}>
                <View style={styles.mainSection}>
                    <View style={styles.iconSection}>
                        <FontAwesome6 name="person-falling" size={24} color="#064E89" />
                    </View>
                    <View style={styles.mainTextSection}>
                        <Text style={styles.itemTitle}>
                            People
                        </Text>
                        <Text style={styles.itemText}>3 minutes</Text>
                        <Text style={styles.itemText}>People involved in the accident</Text>
                    </View>
                </View>
                <FontAwesome5 name="circle" size={24} color="black" />
            </TouchableOpacity>
        </ShadowedSection>
        <ShadowedSection style={styles.shadowedStyles}>
            <TouchableOpacity
                onPress={()=>router.push('noneNavScreens/claims/vehiclesInvolved/')} 
                style={styles.progressItem}>
                <View style={styles.mainSection}>
                    <View style={styles.iconSection}>
                        <MaterialCommunityIcons name="car-side" size={24} color="#064E89" />
                    </View>
                    <View style={styles.mainTextSection}>
                        <Text style={styles.itemTitle}>
                            Vehicles
                        </Text>
                        <Text style={styles.itemText}>4 minutes</Text>
                        <Text style={styles.itemText}>vehicles inveolved, photos includes</Text>
                    </View>
                </View>
                <FontAwesome5 name="circle" size={24} color="black" />
            </TouchableOpacity>
        </ShadowedSection>


        <View>
            <Text style={styles.sectionText}>After</Text>
            
            <ShadowedSection style={styles.shadowedStyles}>
                <View style={styles.progressItem}>
                    <View style={styles.mainSection}>
                        <View style={styles.iconSection}>
                            <MaterialIcons name="add-road" size={24} color="#064E89" />
                        </View>
                        <View style={styles.mainTextSection}>
                            <Text style={styles.itemTitle}>
                                Police
                            </Text>
                            <Text style={styles.itemText}>Information theèpolice report</Text>
                        </View>
                    </View>
                    <FontAwesome5 name="circle" size={24} color="black" />
                </View>
            </ShadowedSection>
            <ShadowedSection style={styles.shadowedStyles}>
                <View style={styles.progressItem}>
                    <View style={styles.mainSection}>
                        <View style={styles.iconSection}>
                            <FontAwesome6 name="person-falling" size={24} color="#064E89" />
                        </View>
                        <View style={styles.mainTextSection}>
                            <Text style={styles.itemTitle}>
                                Injured people
                            </Text>
                            <Text style={styles.itemText}>2 minutes</Text>
                            <Text style={styles.itemText}>People involved in the accident</Text>
                        </View>
                    </View>
                    <FontAwesome5 name="circle" size={24} color="black" />
                </View>
            </ShadowedSection>
            <ShadowedSection style={styles.shadowedStyles}>
                <View style={styles.progressItem}>
                    <View style={styles.mainSection}>
                        <View style={styles.iconSection}>
                            <MaterialCommunityIcons name="car-side" size={24} color="#064E89" />
                        </View>
                        <View style={styles.mainTextSection}>
                            <Text style={styles.itemTitle}>
                                Witness
                            </Text>
                            <Text style={styles.itemText}>Vehicles</Text>
                        </View>
                    </View>
                    <FontAwesome5 name="circle" size={24} color="black" />
                </View>
            </ShadowedSection>
        </View>

      </View>
  )
}

export default Progress

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:20,
    height:'100%',
    backgroundColor:'#fff'
  },
  sectionText:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:20,
  },
  shadowedStyles:{
    borderTopRightRadius:3,
    borderTopLeftRadius:3,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    marginVertical:5
  },

  progressItem:{
    flexDirection:'row',
    width:'100%',
    padding:12,
    backgroundColor:'#D9D9D933',
    justifyContent:'space-between',
    alignItems:'center',

    borderTopRightRadius:3,
    borderTopLeftRadius:3,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
},
completed:{
    backgroundColor:'#D6ECFF',
},
mainSection:{
    flexDirection:'row',
    gap:8,
    alignItems:'center'
},
iconSection:{
    backgroundColor:'#D6ECFF',
    borderRadius:50,
    height:34,
    width:34,
    justifyContent:'center',
    alignItems:'center'
},
mainTextSection:{
    gap:5
},
itemTitle:{
    fontSize:16,
    fontWeight:'600',
    color:'#000'
},
itemText:{
    fontSize:13,
    fontWeight:'400',
    color:'#000'
}
})