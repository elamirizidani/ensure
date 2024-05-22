import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { Entypo, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const index = () => {
  const [selectedDriver,setSelectedDriver] = useState('1')
  const router = useRouter()
  const numberOfDrivers = useMemo(() => ([
    {
        id: '0',
        label: 'One',
        value: '1'
    },
    {
        id: '1',
        label: 'Two',
        value: '2'
    },
    {
        id: '2',
        label: 'Three',
        value: '3'
    },
    {
        id: '3',
        label: 'More',
        value: '4'
    }
]), []);

const hundleClick = clicked =>{
  setSelectedDriver(clicked)
  router.push('noneNavScreens/claims/carSelection')
}

  return (
    <View style={styles.container}>
      <Text style={styles.sectionText}>How many vehicles were involved in the accident?</Text>
      <FlatList
        bounces={false}
        data={numberOfDrivers}
        contentContainerStyle={{gap:10}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>(
          <TouchableOpacity 
            onPress={()=>hundleClick(item.value)}
            style={styles.driverSection}>
            <Feather 
              name={item.value === selectedDriver? "check-circle" : "circle"} 
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
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:20
  },
  driverSection:{
    borderRadius:5,
    borderColor:'#000000',
    borderWidth:2,
    width:'100%',
    paddingVertical:12,
    paddingHorizontal:20,
    gap:10,
    flexDirection:'row',
    alignItems:'center'
  },
  sectionText:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:20
  }
})