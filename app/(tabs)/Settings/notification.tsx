import { StyleSheet, Text, View,Switch } from 'react-native'
import React, { useState } from 'react'

const notification = () => {
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
      }}>Manage how you receive notifications</Text>

      <View style={{
        paddingVertical:20,
      }}>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingVertical:10
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:'400',
                color:'#000'
            }}>Email Notification</Text>
            <Switch
                trackColor={{false: '#FFFFFF', true: '#064E89'}}
                thumbColor={emailNotifiEnabled ? '#FFFFFF' : '#3D3C3C'}
                ios_backgroundColor="#FFFFFF"
                onValueChange={()=>setEmailNotifiEnabled(previousState => !previousState)}
                value={emailNotifiEnabled}
                style={styles.switch}
            />
        </View>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingVertical:10
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:'400',
                color:'#000'
            }}>SMS Notification</Text>
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

export default notification

const styles = StyleSheet.create({
    switch: { 
        transform: [{ scaleX: .8 }, { scaleY: .8 }],
        borderColor:'#3D3C3C',
                    borderWidth:2.3,
                    padding:10
      }
})