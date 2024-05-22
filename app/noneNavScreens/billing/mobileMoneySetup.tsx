import ReUsableButton from '@/components/reUsable/ReUsableButton';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert, Text, TouchableOpacity, Image, Platform } from 'react-native';

const MobileMoneySetup = () => { 
    const [numberHolderNamer, setNumberHolderNamer] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState(''); 
   
    const handleFormSubmit = () => { 
        // Perform form submission logic here // You can validate the input values and make API calls if required 
        setNumberHolderNamer(''); setPhoneNumber('');
    }; 
    return ( 
        <View style={styles.container}> 
        <View style={{gap:20}}>

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLebal}>Number Holder Names</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="" 
                        value={numberHolderNamer} 
                        onChangeText={(value)=>setNumberHolderNamer(value)} 
                        keyboardType="default" /> 
                </View>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLebal}>Mobile Number</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="" 
                        value={phoneNumber} 
                        onChangeText={(value)=>setPhoneNumber(value)} 
                        keyboardType="phone-pad" /> 
                </View>
            </View>

            </View>
            <View style={styles.btnSection}>
                <ReUsableButton title={"Save"} onPress={handleFormSubmit} style={styles.submitButton} children={undefined}/>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({ 
    container: { flex: 1, padding: 20, }, 
    input: { 
        // height: 24, 
        borderWidth: 0,
        marginBottom: 10, 
        paddingHorizontal: 10, 
        flex:1,
    },

    fieldContainer:{
        backgroundColor:'#D9D9D933',
        borderRadius:5,
        borderBottomColor:'#064E89',
        borderBottomWidth:3,
        padding:10,
        // flex:1,
    },
    fieldLebal:{
        color:'#000',
        fontSize:16,
        fontWeight:'400'
    },
    cardImage:{
        height:24,
        width:38
    },
    btnSection:{
        marginTop:'auto',
        // paddingHorizontal:20,
        paddingVertical:Platform.OS === 'ios' ? 20:0
    },
    submitButton:{
        backgroundColor:'#064E89',
        paddingVertical:20,
        TextStyle:{
            color:'#fff',
            fontSize:16,
            fontWeight:'600',
        }
    },
});

export default MobileMoneySetup;