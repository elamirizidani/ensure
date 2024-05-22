import BackBtn from "@/components/reUsable/BackBtn";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, Slot, Stack } from "expo-router";
import { Pressable, Text } from "react-native";

export default function FavsLayout(){
    return (
    <Stack>
        <Stack.Screen name="addCard" options={{ 
          headerStyle:{
            backgroundColor:'#064E89'
          },
          title:"",
          headerLeft:() =>(
            <BackBtn screenName={"Add credit or debit card"}/>
          ),
          headerRight: () => (
            <MaterialIcons name="notifications-active" size={25} color={"#fff"}/>
          ),
          }} />
          <Stack.Screen name="addBankAccount" options={{ 
          headerStyle:{
            backgroundColor:'#064E89'
          },
          title:"",
          headerLeft:() =>(
            <BackBtn screenName={"Add Bank Account"}/>
          ),
          headerRight: () => (
            <MaterialIcons name="notifications-active" size={25} color={"#fff"}/>
          ),
          }} />
          <Stack.Screen name="mobileMoneySetup" options={{ 
          headerStyle:{
            backgroundColor:'#064E89'
          },
          title:"",
          headerLeft:() =>(
            <BackBtn screenName={"Mobile Money Setup"}/>
          ),
          headerRight: () => (
            <MaterialIcons name="notifications-active" size={25} color={"#fff"}/>
          ),
          }} />
          <Stack.Screen name="afterAddBank" options={{
            headerShown:false
          }}/>
          <Stack.Screen name="afterAddCard" options={{
            headerShown:false
          }}/>
          
    </Stack>
    )
}