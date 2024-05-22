import BackBtn from "@/components/reUsable/BackBtn";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import languages from "@/utilits/languages";

const i18n = new I18n(languages)
i18n.locale = Localization.locale;
i18n.enableFallback = true

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
              >Settings</Text>
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

      <Stack.Screen name="accountSetting" 
        options={{
            title: '',
            headerStyle: {
                backgroundColor: '#064E89'
            },
            headerLeft:() =>(
              <BackBtn screenName={"Account Settings"}/>
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

      <Stack.Screen name="notification" 
        options={{
            title: '',
            headerStyle: {
                backgroundColor: '#064E89'
            },
            headerLeft:() =>(
              <BackBtn screenName={"Notifications"}/>
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

<Stack.Screen name="security" 
        options={{
            title: '',
            headerStyle: {
                backgroundColor: '#064E89'
            },
            headerLeft:() =>(
              <BackBtn screenName={"Security"}/>
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

          <Stack.Screen name="securityNotifications" 
            options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#064E89'
                },
                headerLeft:() =>(
                  <BackBtn screenName={i18n.t('settingScreen.mainScreenContents.screenName')}/>
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

          <Stack.Screen name="changePin" 
            options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#064E89'
                },
                headerLeft:() =>(
                  <BackBtn screenName="Change Passcode"/>
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
              <Stack.Screen name="helpAndSupport" 
            options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#064E89'
                },
                headerLeft:() =>(
                  <BackBtn screenName="Help & Support"/>
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