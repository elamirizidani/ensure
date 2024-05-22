import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AtWhichLocation = () => {
  const [selectedDriver,setSelectedDriver] = useState('')
  const router = useRouter()
  const numberOfDrivers = useMemo(() => ([
    {
        id: '0',
        label: 'Roundabout',
        value: 'Roundabout'
    },
    {
        id: '1',
        label: 'Intersection',
        value: 'Intersection'
    },
    {
        id: '2',
        label: 'Parking',
        value: 'Parking'
    },
    {
        id: '3',
        label: 'Driveway',
        value: 'Driveway'
    },
    {
        id: '4',
        label: 'Residential street',
        value: 'Residential street'
    },
    {
        id: '5',
        label: 'Highway',
        value: 'Highway'
    },
    {
        id: '6',
        label: 'Mainstreet',
        value: 'Mainstreet'
    }
]), []);

const hundleClick = clicked =>{
  setSelectedDriver(clicked)
  router.push('noneNavScreens/claims/accDesc/describeMore')
}

  return (
    <View style={styles.containerBackground}>
            <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.sectionText}>At which location</Text>
      <FlatList
        bounces={false}
        data={numberOfDrivers}
        style={styles.flatListContainer}
        contentContainerStyle={{gap:10}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) =>(
          <TouchableOpacity 
            onPress={()=>hundleClick(item?.value)}
            style={index === numberOfDrivers.length - 1 ? styles.lastItem : styles.driverSection}>
              <FontAwesome5 name={item?.value === selectedDriver? "check-circle" : "circle"} 
              size={24} 
              color={item?.value === selectedDriver? "#064E89" : "black"} />
            <Text style={{
              fontSize:16,
              fontWeight:'400',
              color:'#000'
            }}>
              {
                item?.label
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

export default AtWhichLocation

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