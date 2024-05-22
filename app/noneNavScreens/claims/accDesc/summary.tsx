import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useRouter } from 'expo-router'

const Summary = () => {
    const router = useRouter()
  return (
    <ScrollView 
        style={styles.container}
        bounces={false}
    >
      <Text style={styles.sectionText}>
        Here’s what you’ve told us so far.
      </Text>


      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                How many vehicles were involved in the accident?
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>Two</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                Time of accident
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        May 2 at 11:20 AM
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                It Happened at
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Kicukiro, Sonatube, KN 3 Rd, Kigali
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                The description of the accident
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        My vehicle was hit
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                What hit your car?
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Another vehicle / motorcycle
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>


      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                Was your vehicle parked?
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Yes, it was parked
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                Was it a rear incident?
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Yes
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                At which location
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Roundabout
                    </Text>
                </View>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Was entering roundabout
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                How was the light directed?
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Stop sign
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                Which direction were you driving?
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Was turning right
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                Which direction were you driving?
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Was turning right
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>


      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                Which direction were you driving?
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Was turning right
                    </Text>
                </View>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        Was in the process of parking
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>

      <View style={styles.singleQuestion}>
        <View style={styles.mainSection}>
            <Text style={styles.question}>
                Description of the accident in your own words.
            </Text>
            <View style={styles.answerSection}>
                <View style={styles.answerBg}>
                    <Text style={styles.answerText}>
                        A car came from behind speeding and hit my car while i was getting out of my home gate.
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="edit" size={24} color="#064E89" />
        </TouchableOpacity>
      </View>
      <ReUsableButton title={"Continue"} 
          onPress={
            ()=>router.push('noneNavScreens/claims/accDesc/progress')
          } style={styles.netBtn} children={undefined} 
        />
    <SafeAreaView/>
    </ScrollView>
    
  )
}

export default Summary

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:20,
        flex:1
    },
    sectionText:{
        fontSize:22,
        fontWeight:'600',
        marginVertical:20,
        width:'70%'
      },
    singleQuestion:{
        flexDirection:'row',
        alignItems:"flex-start",
        justifyContent:'space-between',
        gap:28,
        width:'100%',
        paddingVertical:15,
        borderBottomWidth:1.5,
        borderBottomColor:'#868686'
    },
    question:{
        color:'#1C1B1F',
        fontSize:18,
        fontWeight:'400',
        marginBottom:5
    },
    answerSection:{
        flexDirection:'row',
        gap:8,
        width:'100%',
        flexWrap:'wrap'
    },
    answerBg:{
        padding:6,
        borderRadius:5,
        backgroundColor:'#D6ECFF',
    },
    answerText:{
        color:'#064E89',
        fontSize:16,
        fontWeight:'400',  
    },
    mainSection:{
        flex:1
    },
    netBtn: {
        backgroundColor: '#064E89',
        marginVertical: 20,
        TextStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600'
        }
      },
})