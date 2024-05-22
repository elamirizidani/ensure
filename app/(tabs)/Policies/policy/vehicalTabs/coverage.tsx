import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import BackBtn from '@/components/reUsable/BackBtn';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import dummy from '@/utilits/dummy';
import InsureContacts from '@/components/reUsable/InsureContacts';

const Coverage = () => {
  const navigation = useNavigation()
  const getVehical = useLocalSearchParams()
  const router = useRouter()
  const vehicalInfo = dummy['cars'].find( vehical=> vehical.vehicalId === getVehical.vehicalId)
  const InsuarencePolicy = dummy['InsuarencePolicy'].find(policy => policy.id === getVehical.insuranceId)
  return (

    <ScrollView bounces={false}>
    <View style={{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingHorizontal:15,
        paddingVertical:20,
        backgroundColor:'#D6ECFF',
        alignItems:'center',
        gap:10
    }}>
      <Feather name="shield" size={24} color="black" />
      <Text
        style={{
          fontSize:22,
          fontWeight:'600',
          color:'#000'
        }}
        >Third Party Coverage</Text>
    </View>

    <View style={{
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:20,
        backgroundColor:'#D9D9D933'
      }}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Additional Optional coverages</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Passenger liability </Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >1</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Driver set</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >NOT purchased</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Vehicle Damages</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >NOT purchased</Text>
    </View>


    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Theft</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >NOT purchased</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Fire</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >NOT purchased</Text>
    </View>


    <View style={{
      paddingTop:20,
      gap:16,
      paddingHorizontal:20,
      paddingVertical:24,
      backgroundColor:'#D6ECFF',
    }}>
      <View style={{flexDirection:'row',gap:5,justifyContent:'flex-start',alignItems:'center'}}>
          <AntDesign name="calendar" size={24} color="black" />
          <Text style={{fontSize:16,fontWeight:'600'}}>Coverage Period</Text>
      </View>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Period</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >3 months</Text>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Start Date</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >12/05/2024 - 12/09/2024</Text>
    </View>


    <View style={{
      paddingTop:20,
      gap:16,
      paddingHorizontal:20,
      paddingVertical:24,
      backgroundColor:'#D6ECFF',
    }}>
      <View style={{flexDirection:'row',gap:5,justifyContent:'flex-start',alignItems:'center'}}>
          <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
          <Text style={{fontSize:16,fontWeight:'600'}}>Sum insured for occupant</Text>
      </View>
    </View>

    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Accident death</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >1,000,000 Rwf</Text>
    </View>
    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Total payment disability</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >1,000,000 Rwf</Text>
    </View>
    <View style={styles.itemSection}>
        <Text
          style={{
            fontSize:18,
            fontWeight:'600',
            color:'#000'
          }}
          >Medical fees</Text>
          <Text
            style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}
          >100,000 Rwf</Text>
    </View>

    {/* <InsureContacts companyInfo={InsuarencePolicy?.provider.id}/> */}
  </ScrollView>
  )
}

export default Coverage

const styles = StyleSheet.create({
  itemSection:{
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingVertical:20,
    borderBottomWidth:1,
    borderColor:'#DDDDDD',
    backgroundColor:'#fff'
  }
})