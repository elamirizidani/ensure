import { StyleSheet, Text, View,Switch } from 'react-native'
import React, { useState } from 'react'


const securityNotifications = () => {
    const [emailNotifiEnabled,setEmailNotifiEnabled] = useState(false)
    const [smsNotifiEnabled,setSmsNotifiEnabled] = useState(false)

    

  return (
    <View style={{
        paddingHorizontal:20,
        paddingVertical:30
    }}>
      <Text style={{
        fontSize:18,
        fontWeight:'600',
        color:'#000'
      }}>Manage your account’s security</Text>

      <View style={{
        paddingVertical:20,
      }}>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingVertical:10,
            gap:25
        }}>
            <View style={{flex:1, gap:10}}>
                <Text style={{
                    fontSize:18,
                    fontWeight:'400',
                    color:'#000'
                }}>Text message</Text>
                <Text style={{
                    fontSize:14,
                    fontWeight:'400',
                    color:'#3D3C3C'
                }}>
                    Use your mobile phone to receive a text
                    message with an authentication code to
                    enter when you log in to E-nsure.
                </Text>
            </View>
            
            <Switch
                trackColor={{false: '#FFFFFF', true: '#064E89'}}
                thumbColor={emailNotifiEnabled ? '#FFFFFF' : '#3D3C3C'}
                ios_backgroundColor="#ffffff"
                onValueChange={()=>setEmailNotifiEnabled(previousState => !previousState)}
                value={emailNotifiEnabled}
                style={styles.switch}
            />
        </View>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingVertical:10,
            gap:25
        }}>
            <View style={{flex:1, gap:10}}>
                <Text style={{
                    fontSize:18,
                    fontWeight:'400',
                    color:'#000'
                }}>Email</Text>
                <Text style={{
                    fontSize:14,
                    fontWeight:'400',
                    color:'#3D3C3C'
                }}>
                    Use your email address to receive an authentication code to enter when you log in to E-nsure.
                </Text>
            </View>
            <Switch
                trackColor={{false: '#FFFFFF', true: '#064E89'}}
                thumbColor={smsNotifiEnabled ? '#FFFFFF' : '#3D3C3C'}
                ios_backgroundColor="#FFFFFF"
                onValueChange={()=>setSmsNotifiEnabled(previousState => !previousState)}
                value={smsNotifiEnabled}
                style={styles.switch}
            />
        </View>
      </View>
    </View>
  )
}

export default securityNotifications

const styles = StyleSheet.create({
    switch: { 
        transform: [{ scaleX: .8 }, { scaleY: .8 }],
        borderColor:'#3D3C3C',
                    borderWidth:2.3,
                    padding:10
      }
})