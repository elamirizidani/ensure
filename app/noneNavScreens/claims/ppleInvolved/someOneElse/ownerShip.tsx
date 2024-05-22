import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { Entypo, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const OwnerShip = () => {
  const [selectedDriver,setSelectedDriver] = useState('1')
  const router = useRouter()
  const numberOfDrivers = useMemo(() => ([
    {
        id: '0',
        label: 'Familly Member',
        value: 'Familly Member',
    },
    {
        id: '1',
        label: 'Friend',
        value: 'Friend',
    },
    {
        id: '2',
        label: 'Employee',
        value: 'Employee',
    },
    {
        id: '2',
        label: 'Rental',
        value: 'Rental',
    },
]), []);

const hundleClick = clicked =>{
  setSelectedDriver(clicked)
  router.push('noneNavScreens/claims/ppleInvolved/someOneElse/whyDriving')
}

  return (
    <View style={styles.containerBackground}>
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.sectionText}>
                    What is the driver’s relationship to the owner of the vehicle?
                </Text>
                <FlatList
                    bounces={false}
                    data={numberOfDrivers}
                    contentContainerStyle={{gap:10}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>(
                    <TouchableOpacity 
                        onPress={()=>hundleClick(item)}
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
        </SafeAreaView>
    </View>
  )
}

export default OwnerShip

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