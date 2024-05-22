import { StyleSheet, Text, View,Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const accountSetting = () => {
    const router = useRouter()
  return (
    <ScrollView style={{backgroundColor:'#D9D9D933'}} 
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        overScrollMode="never"
        >
      <View style={{
        backgroundColor:'#064E89',
        alignItems:'center',
        paddingVertical:30,
        gap:15,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
      }}>
        <View style={{
          height:55,
          width:55,
          borderRadius:50,
          backgroundColor:'#9CEAFF',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image/>
          <Text style={{
            fontSize:18,
            fontWeight:'700'
          }}>MB</Text>
        </View>
        <Text style={{
          fontSize:18,
          fontWeight:'400',
          color:'#fff',
        }}>Manzi Bruno</Text>
      </View>

      <View style={{
        paddingHorizontal:15,
        paddingVertical:30,
        gap:20,
      }}>
      <View style={{
        paddingVertical:15,
        backgroundColor:'#fff',
        borderRadius:16,
      }}>
        
        <View
            style={styles.fieldContainer}>
            <Text style={[styles.fieldName,{fontWeight:'600'}]}>
                Personal information
            </Text>
        </View>

        <Pressable
            onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'First Name',
                    feildValue:'First Name'
                }
            })}
            style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>First Name</Text>
            <Text style={styles.fieldName}>
                First Name
            </Text>
        </Pressable>

        <Pressable onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'Last Name',
                    feildValue:'Last Name'
                }
            })} style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Last Name</Text>
            <Text style={styles.fieldName}>
                Last Name
            </Text>
        </Pressable>

        <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Birth Date</Text>
            <Text style={styles.fieldName}>
                MM/DD/YYYY
            </Text>
        </View>

        <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Nationality</Text>
            <Text style={styles.fieldName}>
                Rwandan
            </Text>
        </View>

        <Pressable onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'National ID',
                    feildValue:'1991 8000 5698 1998 055'
                }
            })} style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>National ID</Text>
            <Text style={styles.fieldName}>
                1991 8000 5698 1998 055
            </Text>
        </Pressable>

        <Pressable onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'Gender',
                    feildValue:'Male'
                }
            })} style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Gender</Text>
            <Text style={styles.fieldName}>
                Male
            </Text>
        </Pressable>

        <Pressable onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'Marital Status',
                    feildValue:'Single'
                }
            })} style={[styles.fieldContainer,{borderBottomWidth:0}]}>
            <Text style={styles.fieldTitle}>Marital Status</Text>
            <Text style={styles.fieldName}>
                Single
            </Text>
        </Pressable>

      </View>

      <View style={{
        paddingVertical:15,
        backgroundColor:'#fff',
        borderRadius:16,
      }}>
        
        <View
            style={styles.fieldContainer}>
            <Text style={[styles.fieldName,{fontWeight:'600'}]}>
                Contact information
            </Text>
        </View>

        <Pressable onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'Phone Number',
                    feildValue:'0785698456'
                }
            })} style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Phone Number</Text>
            <Text style={styles.fieldName}>
                0785698456
            </Text>
        </Pressable>

        <Pressable onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'mbruno@gmail.com',
                    feildValue:'mbruno@gmail.com'
                }
            })} style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>Email</Text>
            <Text style={styles.fieldName}>
                mbruno@gmail.com
            </Text>
        </Pressable>

        <Pressable onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'City',
                    feildValue:'Kigali'
                }
            })} style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>City</Text>
            <Text style={styles.fieldName}>
                Kicukiro, Kigali
            </Text>
        </Pressable>

        <Pressable onPress={()=>router.push({
                pathname:'/(tabs)/Settings/editField',
                params:{
                    feildName:'Address',
                    feildValue:'KN 5 Road'
                }
            })} style={[styles.fieldContainer,{borderBottomWidth:0}]}>
            <Text style={styles.fieldTitle}>Address</Text>
            <Text style={styles.fieldName}>
                KN 5 Road
            </Text>
        </Pressable>

      </View>


      
      
      </View>
    </ScrollView>
    
  )
}

export default accountSetting

const styles = StyleSheet.create({
    fieldContainer:{
        // backgroundColor:'#D9D9D933',
        borderColor:'#D9D9D933',
        borderBottomWidth:1,
        // borderRadius:5,
        paddingHorizontal:20,
        paddingVertical:10,
        gap:8,
    },
    fieldTitle:{
        color:'#787878',
        fontSize:14,
        fontWeight:'600',
    },
    fieldName:{
        color:'#000',
        fontSize:18,
        fontWeight:'400'
    }
})