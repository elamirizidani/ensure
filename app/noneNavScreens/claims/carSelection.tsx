import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useRouter } from 'expo-router'

const CarSelection = () => {
    const router = useRouter()
  return (
    <ImageBackground source={require('@/assets/images/imgs/bgcar.png')} style={styles.containerBackground}>
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.sectionText}> Please have the other party’s details ready, such as: </Text>
                <View style={styles.cardsSection}>
                    <View style={styles.detailCard}>
                        <MaterialIcons name="face" size={30} color="#fff" />
                        <Text style={styles.detailsCardText}>
                            Driver Details
                        </Text>
                    </View>
                    <View style={styles.detailCard}>
                        <Ionicons name="car-sport" size={30} color="#fff" />
                        <Text style={styles.detailsCardText}>
                            Vehicle Details
                        </Text>
                    </View>
                    <View style={styles.detailCard}>
                        <FontAwesome5 name="address-card" size={30} color="#fff" />
                        <Text style={styles.detailsCardText}>
                            Insurance Details
                        </Text>
                    </View>
                </View>
            
                <ReUsableButton title={"Next"} onPress={
                    ()=>router.push('noneNavScreens/claims/claimDate')
                } style={styles.netBtn} children={undefined}/>
            </View>
            </SafeAreaView>
    </ImageBackground>
  )
}

export default CarSelection
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
        fontSize:24,
        fontWeight:'600',
        color:'#000',
        marginVertical:30,
        // textAlign:'center'
    },
    cardsSection:{
        flexDirection:'row',
        gap:15
    },
    detailCard:{
        flex:1,
        backgroundColor:'#064E89',
        borderRadius:8,
        paddingHorizontal:30,
        paddingVertical:23,
        alignItems:'center',
        gap:8
    },
    detailsCardText:{
        color:'#fff',
        fontSize:14,
        fontWeight:'400'
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