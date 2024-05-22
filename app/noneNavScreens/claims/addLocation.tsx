import { Button, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useAuth } from '@/context/authContext'
import geocodeAddress from '@/utilits/locations';
import { useNavigation, useRouter } from 'expo-router'


const AccidentLocation = () => {
    // const { changeLocale, locale, i18n } = useAuth();
    const router = useRouter()
    const [address, setAddress] = useState('');
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      // headerShown:false,
      headerRight: () => (
          <TouchableOpacity>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
      )
    })
  },[])

  const handleSearch = async () => {
    try {
      const result = await geocodeAddress(address);
      setOptions(result);
      // console.log(result)
      setError(null);
    } catch (error) {
      setOptions([]);
      setError(error.message || 'Error searching for address');
    }
  };

  const renderOption = ({ item }) => (
    
    <TouchableOpacity style={styles.locationItem}>
      <View style={styles.locationIcon}>
        <SimpleLineIcons name="location-pin" size={20} color="black" />
      </View>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

    return (
        <View style={styles.containerBackground}>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.dateForm}>

                    <View style={styles.formFieldSection}>
                      <SimpleLineIcons name="location-pin" size={24} color="black" />
                      <TextInput
                          style={styles.inputText}
                          placeholder="Kicukiro, Sonatube, KN 3 Rd, Kigali"
                          placeholderTextColor="#787878"
                          autoCapitalize="none"
                          keyboardType="email-address"
                          onChangeText={setAddress}
                          returnKeyType="done"
                          onSubmitEditing={handleSearch}
                        />
                    </View>

                  </View>

                  {/* <Button title="Search" onPress={handleSearch} /> */}
                  {error && <Text style={{ color: 'red' }}>{error}</Text>}
                  <FlatList
                    data={options}
                    renderItem={renderOption}
                    keyExtractor={(item, index) => index.toString()}
                  />

                </View>
            </SafeAreaView>
        </View>
    )
}

export default AccidentLocation

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
    formFieldSection:{
      flexDirection:'row',
      width:'100%',
      padding:10,
      marginVertical:5,
      backgroundColor:'#D9D9D933',
      borderRadius:10,
      height:60,
      paddingHorizontal:15,
      borderWidth:1,
      borderColor:'#000000',
      justifyContent:'space-between',
      alignItems:'center',

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
  },
  inputText:{
    marginHorizontal:10,
    flex:2,
    fontSize:16,
    fontWeight:'400',
    color:'#000'
},



dateForm:{
  paddingVertical:20
},

locationIcon:{
  backgroundColor:'#60B6FD',
  width:36,
  height:36,
  borderRadius:50,
  justifyContent:'center',
  alignItems:'center'
},
locationItem:{
  flexDirection:'row',
  alignItems:'center',
  gap:12,
  paddingVertical:14,
  borderBottomWidth:1,
  borderBottomColor:'#064E8980'
},
saveBtnText:{
  color:'#064E89',
  fontWeight:'700',
  fontSize:18
}
})