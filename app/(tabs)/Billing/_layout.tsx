import BackBtn from "@/components/reUsable/BackBtn";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text } from "react-native";

export default function FavsLayout(){
    return (
    <>
        <Stack screenOptions={{headerShadowVisible: false,}}>
        <Stack.Screen name="index" 
        options={{
            title: '',
            headerStyle: {
                backgroundColor: '#064E89'
            },
            headerLeft:() =>(
              <Text 
                style={{
                  color:'#fff',
                  fontSize:18,
                  fontWeight:'600'
                }}
              >Manage Payment</Text>
            ),
            headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <MaterialIcons name="notifications-active" size={25}
                      color={'#fff'}
                      style={{ opacity: pressed ? 0.5 : 1 }}/>
                    )}
                  </Pressable>
                </Link>
            ),
          }}/>

      <Stack.Screen name="paymentMethode" 
        options={{
            title: '',
            headerStyle: {
                backgroundColor: '#064E89'
            },
            headerLeft:() =>(
              <BackBtn screenName={"Make Payment"}/>
            ),
            headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <MaterialIcons name="notifications-active" size={25}
                      color={'#fff'}
                      style={{ opacity: pressed ? 0.5 : 1 }}/>
                    )}
                  </Pressable>
                </Link>
            ),
          }}/>
          <Stack.Screen name="paymentHistory" 
            options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#064E89'
                },
                headerLeft:() =>(
                  <BackBtn screenName={"Payment history"}/>
                ),
                headerRight: () => (
                    <Link href="/modal" asChild>
                      <Pressable>
                        {({ pressed }) => (
                          <MaterialIcons name="notifications-active" size={25}
                          color={'#fff'}
                          style={{ opacity: pressed ? 0.5 : 1 }}/>
                        )}
                      </Pressable>
                    </Link>
                ),
              }}/>

        </Stack>
    </>
    )
}