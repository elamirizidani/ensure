import ReUsableButton from '@/components/reUsable/ReUsableButton';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert, Text, TouchableOpacity, Image, Platform } from 'react-native';

const AddBankAccount = () => { 
    const router = useRouter()
    const [cardNumber, setCardNumber] = useState(''); 
    const [cardHolderNamer, setCardHolderNamer] = useState(''); 
    const [expiryDate, setExpiryDate] = useState(''); 
    const [cvv, setCvv] = useState(''); 


    const handleCardNumberChange = (text) => { 
        const formattedCardNumber = formatCardNumber(text); 
        setCardNumber(formattedCardNumber); 
    }; 
    const handleExpiryDateChange = (text) => { 
        setExpiryDate(text);
    }; 
    const handleCvvChange = (text) => { 
        setCvv(text); 
    }; 
    const handleFormSubmit = () => { 
        // Perform form submission logic here // You can validate the input values and make API calls if required 
        
        setCardNumber(''); setExpiryDate(''); setCvv(''); 
        router.push('/noneNavScreens/billing/afterAddBank')
    }; 
    const formatCardNumber = (text) => { 
        let formattedText = text.split(' ').join(''); 
        if (formattedText.length > 0) { 
            formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' '); 
        } 
        return formattedText; 
    }; 
    const isValidCardNumber = (cardNumber) => { // Use Luhn algorithm to check if the card number is valid 
        const digitsOnly = cardNumber.replace(/\D/g, ''); 
        let sum = 0; let even = false; 
        for (let i = digitsOnly.length - 1; i >= 0; i--) { 
            let digit = parseInt(digitsOnly.charAt(i), 10); 
            if (even && (digit *= 2) > 9) { digit -= 9; } 
            even = !even; sum += digit; 
        } 
        return sum % 10 === 0; 
    }; 
    return ( 
        <View style={styles.container}> 
        <View style={{gap:20}}>

            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLebal}>Bank Name</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="" 
                        value={cardHolderNamer} 
                        onChangeText={(value)=>setCardHolderNamer(value)} 
                        keyboardType="default" /> 
                </View>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLebal}>Bank Number</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="" 
                        value={cardHolderNamer} 
                        onChangeText={(value)=>setCardHolderNamer(value)} 
                        keyboardType="numeric" /> 
                </View>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLebal}>Name on Account</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="" 
                        value={cardHolderNamer} 
                        onChangeText={(value)=>setCardHolderNamer(value)} 
                        keyboardType="default" /> 
                </View>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLebal}>Swift Number</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="" 
                        value={cardHolderNamer} 
                        onChangeText={(value)=>setCardHolderNamer(value)} 
                        keyboardType="default" /> 
                </View>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLebal}>Type</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ex: Checking" 
                        value={cardHolderNamer} 
                        onChangeText={(value)=>setCardHolderNamer(value)} 
                        keyboardType="default" /> 
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

export default AddBankAccount;