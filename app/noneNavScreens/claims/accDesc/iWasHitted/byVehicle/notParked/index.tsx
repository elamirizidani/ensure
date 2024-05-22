import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const WasItParked = () => {
  const [selectedDriver,setSelectedDriver] = useState('')
  const router = useRouter()
  const numberOfDrivers = useMemo(() => ([
    {
        id: '0',
        label: 'Yes',
        value: 'Yes',
        route: 'noneNavScreens/claims/accDesc/iWasHitted/byVehicle/notParked/reversing',
    },
    {
        id: '1',
        label: 'No',
        value: 'No',
        route: 'noneNavScreens/claims/accDesc/atWhichLocation',
    }
]), []);

const hundleClick = clicked =>{
  setSelectedDriver(clicked.value)
  router.push(clicked.route)
}

  return (
    <View style={styles.containerBackground}>
            <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.sectionText}>Was it a rear-end incident?</Text>
      <FlatList
        bounces={false}
        data={numberOfDrivers}
        style={styles.flatListContainer}
        contentContainerStyle={{gap:10}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) =>(
          <TouchableOpacity 
            onPress={()=>hundleClick(item)}
            style={index === numberOfDrivers.length - 1 ? styles.lastItem : styles.driverSection}>
              <FontAwesome5 name={item.value === selectedDriver? "check-circle" : "circle"} 
              size={24} 
              color={item.value === selectedDriver? "#064E89" : "black"} />
            <Text style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}>
              {
                item.label
              }
            </Text>
          </TouchableOpacity>
        )}
      />
      
    </View>
    </SafeAreaView>
    </View>
  )
}

export default WasItParked

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:20
  },
  flatListContainer:{
    backgroundColor:"#D9D9D933",
    borderRadius:16,
    paddingHorizontal:15,
    paddingVertical:15
  },
  driverSection:{
    borderRadius:5,
    borderColor:'#064E8980',
    borderBottomWidth:1,
    width:'100%',
    paddingVertical:12,
    gap:10,
    flexDirection:'row',
    alignItems:'center'
  },
  lastItem:{
    borderRadius:5,
    borderColor:'#064E8980',
    width:'100%',
    paddingVertical:12,
    gap:10,
    flexDirection:'row',
    alignItems:'center'
  },
  sectionText:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:20,
    width:'70%'
  }
})