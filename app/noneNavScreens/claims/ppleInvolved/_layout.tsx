import BackBtn from "@/components/reUsable/BackBtn";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link, Slot, Stack, useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity } from "react-native";

export default function FavsLayout(){
  const router = useRouter()
  
    return (
    <Stack screenOptions={{
        // headerShown:false
        title:'',
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerLeft:()=>(
            <TouchableOpacity onPress={()=>router.back()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
        ),
        headerRight:()=>(
            <TouchableOpacity 
                onPress={()=>router.replace('(tabs)/Claims')}
            >
                <MaterialCommunityIcons name="close-circle-outline" size={32} color="black" />
            </TouchableOpacity>
        )
    }}>

        {/* <Stack.Screen name="progress" options={{
            headerTransparent: false,
            title:'',
            headerTintColor:"white",
            headerStyle:{
                backgroundColor:'#064E89',
            },
            headerLeft:()=><BackBtn screenName={"Claim progress"}/>,
            headerRight:()=>(
                <TouchableOpacity 
                    onPress={()=>router.replace('(tabs)/Claims')}
                >
                    <MaterialCommunityIcons name="close-circle-outline" size={32} color="white" />
                </TouchableOpacity>
            )
        }}/> */}
    </Stack>
    )
}