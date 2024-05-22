import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import ReUsableButton from '../ReUsableButton'
import { useRouter } from 'expo-router'

const BillingCard = ({provider,buttonName}) => {

    const router = useRouter()
  return (
    <View style={{
        padding:20,
        borderBottomWidth:3,
        backgroundColor:'#F8F8F8',
        borderColor:'#064E89',
        borderRadius:5,
        gap:16,
        marginBottom:20
    }}>
        <View style={{flexDirection:'row',gap:15,alignItems:'center'}}>
            <Pressable>
                <Image style={styles.flagLogo} source={provider.companyImage}/>
            </Pressable>
            <Text style={{fontSize:18,fontWeight:'600'}}>{provider.name}</Text>
        </View>

        <ReUsableButton title={buttonName} 
            onPress={() => router.push({
                pathname: "/(tabs)/Claims/[claims]",
                params: { claims: provider.id }
              })}
            style={
            {flexDirection:'row',
                backgroundColor:'#064E89',
                width:'60%',
                borderRadius:50,
                paddingHorizontal:20,
                paddingVertical:10,
                gap:10,
                alignItems:'center',
                TextStyle:{color:'#fff',fontSize:16,fontWeight:'700'}
            }
            }>
            <Feather name="eye" size={24} color="#fff" />
        </ReUsableButton>
    </View>
  )
}

export default BillingCard

const styles = StyleSheet.create({
    flagLogo:{
        height:32,
        width:32,
        borderRadius:50,
    },
})