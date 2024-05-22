import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, StyleSheet, Text, Animated, Dimensions,Image, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import ReUsableButton from '@/components/reUsable/ReUsableButton'


const { width: screenWidth } = Dimensions.get('window');

const CustomSlider = () => {
  const router = useRouter()
  const [level, setLevel] = useState(1);
  const sliderWidth = screenWidth * 0.8;
  const thumbX = useRef(new Animated.Value(0)).current;

  const images = useMemo(() => ([
    { uri: require('@/assets/images/imgs/bgcar.png') },
    { uri: require('@/assets/images/imgs/details.png') },
    { uri: require('@/assets/images/imgs/bgcar.png') },
    { uri: require('@/assets/images/imgs/bgcar.png') },
    { uri: require('@/assets/images/imgs/crsh.jpeg') },
]), []);

  useEffect(() => {
    // Calculate initial thumb position
    const initialX = (sliderWidth - 40) * ((level - 1) / 3.5);
    thumbX.setValue(initialX);
  }, [sliderWidth, level]);

  const onValueChange = (value) => {
    setLevel(value);
    // Calculate thumb position based on slider value
    const newX = (sliderWidth - 40) * ((value - 1) / 3.5);
    thumbX.setValue(newX);
  };

  const CustomThumb = ({ value }) => (
    <View style={styles.thumb}>
      <Text style={styles.thumbText}>{value}</Text>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{height:'100%'}}>
        <Text style={styles.sectionText}>
          To what extent was your vehicle damaged?
        </Text>
        <View style={styles.alteBox}>
          <Text style={styles.alteText}>
            Move the slider and use the images as guidance to select the appropriate level to the vehicle
          </Text>
        </View>
    <Image
        source={images[level - 1].uri} // Index adjusted to match slider level
        style={styles.image}
      />
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={level}
          onValueChange={onValueChange}
          minimumTrackTintColor="#064E89"
          maximumTrackTintColor="#60B6FD"
          thumbTintColor="#0B62A9" // Hide the default thumb
        />
        <Animated.View style={[styles.customThumb, { transform: [{ translateX: thumbX }] }]}>
          <CustomThumb value={level} />
        </Animated.View>
      </View>
      <Text style={styles.statusTitle}>Not too bad</Text>
      <Text>
        A small scratch, scrape or ding anywhere on the vehicle
      </Text>
      <ReUsableButton title={"Next"} onPress={
                    ()=>router.push('noneNavScreens/claims/vehiclesInvolved/sampleDetect')
                } style={styles.netBtn} children={undefined}/>
                </View>
      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20
  },
    sectionText:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:20,
    // width:'70%'
  },
  sliderContainer: {
    width: '100%',
    height:50,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  customThumb: {
    position: 'absolute',
    left:0,
    top: -30, // Adjust top position based on thumb size
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D6ECFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbText: {
    color: '#064E89',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
    objectFit:'cover',
  },
  alteBox:{
    backgroundColor:'#D6ECFF',
    borderRadius:8,
    padding:16,
    marginBottom:15
  },
  alteText:{
    fontSize:13,
    fontWeight:'400'
  },
  statusTitle:{
    fontSize:18,
    fontWeight:'600',
    color:'#000'
  },
  statusText:{
    fontSize:16,
    fontWeight:'400',
    color:'#000'
  },
  netBtn:{
    backgroundColor:'#064E89',
    marginTop:'auto',
    TextStyle:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600'
    }
}
});

export default CustomSlider;
