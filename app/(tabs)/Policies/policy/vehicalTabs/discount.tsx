import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import BackBtn from '@/components/reUsable/BackBtn';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import dummy from '@/utilits/dummy';
import InsureContacts from '@/components/reUsable/InsureContacts';

const Discount = () => {
  const navigation = useNavigation()
  const getVehical = useLocalSearchParams()
  const router = useRouter()
  const vehicalInfo = dummy['cars'].find( vehical=> vehical.vehicalId === getVehical.vehicalId)
  const InsuarencePolicy = dummy['InsuarencePolicy'].find(policy => policy.id === getVehical.insuranceId)
  return (

    <ScrollView bounces={false} style={{backgroundColor:'#fff'}}>

    <View style={styles.itemSection}>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.itemTitle}>Automatic emergency system (AEB)</Text>
            <Text style={styles.itemLeftSide}>30,000 Rwf</Text>
      </View>
    </View>

    <View style={styles.itemSection}>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.itemTitle}>Electronic stability control</Text>
            <Text style={styles.itemLeftSide}>30,000 Rwf</Text>
      </View>
    </View>

    <View style={styles.itemSection}>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.itemTitle}>Blind spot warning</Text>
            <Text style={styles.itemLeftSide}>30,000 Rwf</Text>
      </View>
    </View>

    <View style={{
      paddingTop:20,
      gap:16,
      paddingHorizontal:20,
      paddingVertical:24,
      backgroundColor:'#D6ECFF',
    }}>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',gap:5,justifyContent:'flex-start',alignItems:'center'}}>
                <MaterialIcons name="workspace-premium" size={24} color="black" />
                <Text style={styles.itemTitle}>Total Discounts</Text>
            </View>
            <Text style={styles.itemLeftSide}>90,000 Rwf</Text>
      </View>
    </View>

  </ScrollView>
  )
}

export default Discount

const styles = StyleSheet.create({
  itemSection:{
      paddingTop:20,
      gap:16,
      paddingHorizontal:20,
      paddingVertical:24,
      backgroundColor:'#fff',
      borderColor:'#064E8980',
      borderBottomWidth:1,   
  },
  itemTitle:{
    fontSize:16,
    fontWeight:'600',
    width:'60%'
  },
  itemLeftSide:{
    fontSize:16,
    fontWeight:'300',
    color:'#064E89'
  }
})
