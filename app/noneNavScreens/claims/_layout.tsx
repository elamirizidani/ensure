import BackBtn from "@/components/reUsable/BackBtn";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link, Slot, Stack, useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity } from "react-native";

export default function FavsLayout(){
  const router = useRouter()
    return (
    <Stack>
        <Stack.Screen name="index" options={{ 
          headerStyle:{
            backgroundColor:'#064E89'
          },
          title:"",
          headerRight: () => (
            <TouchableOpacity onPress={()=>router.back()}>
              <MaterialCommunityIcons name="close-circle-outline" size={32} color="white" />
            </TouchableOpacity>
          ),
          }} />
          <Stack.Screen name="carSelection" options={{ 
          headerStyle:{
            backgroundColor:'transparent'
          },
          headerTransparent: true,
          title:"",
          headerRight:()=>(
            <TouchableOpacity 
                onPress={()=>router.replace('(tabs)/Claims')}
            >
                <MaterialCommunityIcons name="close-circle-outline" size={32} color="black" />
            </TouchableOpacity>
        )
          }} />
          <Stack.Screen name="claimDate" options={{ 
          headerTransparent: true,
          title:"",
          headerRight:()=>(
            <TouchableOpacity 
                onPress={()=>router.replace('(tabs)/Claims')}
            >
                <MaterialCommunityIcons name="close-circle-outline" size={32} color="black" />
            </TouchableOpacity>
        )
          }} />
          <Stack.Screen name="accidentLocation" options={{
          headerTransparent: true,
          title:"",
          headerRight:()=>(
            <TouchableOpacity 
                onPress={()=>router.replace('(tabs)/Claims')}
            >
                <MaterialCommunityIcons name="close-circle-outline" size={32} color="black" />
            </TouchableOpacity>
        )
          }} />

          <Stack.Screen name="addLocation" options={{ 
          headerTransparent: true,
          title:"add Location",
          headerRight:()=>(
            <TouchableOpacity 
                onPress={()=>router.replace('(tabs)/Claims')}
            >
                <MaterialCommunityIcons name="close-circle-outline" size={32} color="black" />
            </TouchableOpacity>
        )
          }} />
          <Stack.Screen name="accidentDesc" options={{ 
          headerTransparent: true,
          title:"",
          headerRight:()=>(
            <TouchableOpacity 
                onPress={()=>router.replace('(tabs)/Claims')}
            >
                <MaterialCommunityIcons name="close-circle-outline" size={32} color="black" />
            </TouchableOpacity>
        )
          }} />

          <Stack.Screen name="accDesc" options={{ 
          headerTransparent: true,
          title:"",
          headerShown:false,
          }} />
          <Stack.Screen name="ppleInvolved" options={{ 
          headerTransparent: true,
          title:"",
          headerShown:false,
          }} />
          <Stack.Screen name="vehiclesInvolved" options={{ 
          headerTransparent: true,
          title:"",
          headerShown:false,
          }} />


    </Stack>
    )
}