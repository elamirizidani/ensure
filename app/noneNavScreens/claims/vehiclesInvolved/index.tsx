import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

const PeopleInvolved = () => {
    const router = useRouter()
  return (
    <ImageBackground source={require('@/assets/images/imgs/vehicle.png')} style={styles.containerBackground}>
        <LinearGradient
            colors={['#D6ECFF', '#D6ECFFCC', '#D6ECFF80']}
            style={styles.gradient}
            >
            <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.sectionText}>Your vehicle details (VehicleA)</Text>
                <ReUsableButton title={"Continue"} onPress={
                    ()=>router.push('noneNavScreens/claims/vehiclesInvolved/damagedVehicle')
                } style={styles.netBtn} children={undefined}/>
            </View>
            </SafeAreaView>
        </LinearGradient>
    </ImageBackground>
  ) 
}

export default PeopleInvolved
const {width,height} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        height:'100%',
        paddingHorizontal:20
    },
    containerBackground:{
        height:height,
        width:width
    },
    sectionText:{
        fontSize:38,
        fontWeight:'600',
        color:'#000',
        marginVertical:30,
        flexWrap:'wrap',
        width:'80%',
        lineHeight:40
    },
    gradient:{
        height:'100%'
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
})