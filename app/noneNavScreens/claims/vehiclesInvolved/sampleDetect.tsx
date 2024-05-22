import React, { useState,useLayoutEffect } from 'react';
import { View, Image, StyleSheet, Alert, TouchableOpacity, ScrollView,SafeAreaView,Text, Dimensions,Pressable, ImageBackground } from 'react-native';
import Checkbox from 'expo-checkbox';
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import BackBtn from '@/components/reUsable/BackBtn'
import { MaterialIcons } from '@expo/vector-icons'

const imageSource = require('@/assets/images/imgs/imgDtect.png'); // replace with your image path

const clickableAreas = [
  { id: 1, name: 'Top Center', top: '06%', left: '50%' },
  { id: 2, name: 'Front Left', top: '10%', left: '35%' },
  { id: 3, name: 'Front Right', top: '10%', left: '65%' },
  { id: 4, name: 'Windshield', top: '35%', left: '50%' },
  { id: 5, name: 'Roof', top: '50%', left: '50%' },
  { id: 12, name: 'Left Side Mirror', top: '33%', left: '25%' },
  { id: 13, name: 'Right Side Mirror', top: '33%', left: '73%' },
  { id: 14, name: 'Left Doors', top: '50%', left: '26%' },
  { id: 15, name: 'Right Doors', top: '50%', left: '73%' },
  { id: 10, name: 'Rear Left', top: '75%', left: '25%' },
  { id: 11, name: 'Rear Right', top: '75%', left: '75%' },
  { id: 6, name: 'Back Left', top: '92%', left: '35%' },
  { id: 7, name: 'Back Right', top: '92%', left: '69%' },
  { id: 9, name: 'Back GLass', top: '80%', left: '50%' },
  { id: 8, name: 'Trunk', top: '90%', left: '50%' },
];

const App = () => {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [isChecked, setChecked] = useState(false);
  const router = useRouter()

  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      // headerShown:false,
      headerShadowVisible: false,
      headerTransparent: false,
    })
  },[])

  const handlePress = (name) => {
    if (selectedAreas.includes(name)) {
      setSelectedAreas(selectedAreas.filter((area) => area !== name)); // Deselect if already selected
    } else {
      setSelectedAreas([...selectedAreas, name]); // Select if not selected
    }
  };

  return (
        <ScrollView 
        style={styles.containerBackground}
        bounces={false}
    >
    <View 
        // bounces={false} 
        style={styles.container}>
        <View>
            <Text style={styles.sectionText}>
                Add damages to your vehicle
            </Text>
            <View style={styles.guidsSection}>
                <Text style={styles.guideText}>
                    Tap the signs below to show damaged areas to your vehicle.  
                </Text>
            </View>
            <View style={styles.carSides}>
                <Text style={{fontSize:14,fontWeight:'400'}}>Driver side</Text>
                <Text style={{fontSize:14,fontWeight:'400'}}>Passenger side</Text>
            </View>
        </View>
      

      <ImageBackground source={imageSource} style={styles.image} resizeMode="contain">
      {clickableAreas.map((area) => (
        <TouchableOpacity
          key={area.id}
          style={[
            styles.clickableArea,
            { top: area.top, left: area.left, transform: [{ translateX: -15 }, { translateY: -15 }] },
            selectedAreas.includes(area.name) && styles.selectedArea,
          ]}
          onPress={() => handlePress(area.name)}
        >
          <View style={[styles.plusSign, selectedAreas.includes(area.name) && styles.selectedIcon]}>
            <View style={styles.horizontalLine} />
            <View style={styles.verticalLine} />
          </View>
        </TouchableOpacity>
      ))}
      </ImageBackground>


        <View style={styles.section}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={styles.paragraph}>Underneath vehicle</Text>
        </View>
        <View style={styles.selectedSection}>
            <Text style={styles.selectedTitle}>
                You selected:
            </Text>
            {
            selectedAreas.map((selected,index) =>(
                <Text style={styles.selectedItem} key={index}>• {selected}</Text>
            ))}
            
        </View>

        <ReUsableButton title={"Continue"} onPress={
                    ()=>router.push('noneNavScreens/claims/vehiclesInvolved/damagedVehicle')
                } style={styles.netBtn} children={undefined}/>
    </View>
    </ScrollView>
  );
};

const {height,width} = Dimensions.get('screen')
const styles = StyleSheet.create({

  containerBackground:{
        height:height,
        width:width,
        backgroundColor:'#fff'
  },
  container: {
    height:'100%',
    paddingHorizontal:20,
    paddingVertical:20
  },
  image: {
    width: '100%',
    height: height * 60/100,
    // position: 'relative',
  },
  clickableArea: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    position: 'absolute',
    width: 20,
    height: 2,
    backgroundColor: 'black',
  },
  verticalLine: {
    position: 'absolute',
    width: 2,
    height: 20,
    backgroundColor: 'black',
  },
  selectedArea: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)', // Change background color when selected
  },
  selectedIcon: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)', // Change icon color when selected
  },
  sectionText:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:20
  },
  guidsSection:{
    borderRadius:10,
    borderColor:'#064E89',
    borderWidth:2,
    padding:16,
  },
  guideText:{
    fontSize:14,
    fontWeight:'400',
    color:'#000',
    lineHeight:20
  },
  carSides:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    backgroundColor:'#D9D9D933',
    paddingHorizontal:20,
    borderRadius:8,
    marginTop:15
},
section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
  paragraph: {
    fontSize: 15,
  },
  netBtn:{
    backgroundColor:'#064E89',
    // marginTop:'auto',
    TextStyle:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600'
    }
},
selectedItem:{
    fontSize:16,
    fontWeight:'600',
    color:'#000',
    marginBottom:5,
    marginLeft:5
},
selectedTitle:{
    fontSize:16,
    fontWeight:'400',
    color:'#000',
    marginBottom:10
},
selectedSection:{
    paddingVertical:15
}
});

export default App;
