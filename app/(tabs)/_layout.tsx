import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable,Text } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Feather, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View } from '@/components/Themed';
import Support from '@/components/reUsable/Support';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#064E89',
          // backgroundColor:Colors[colorScheme ?? 'light'].tint,
        },
      }}
      >
        <Tabs.Screen
        name="Policies"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome6 name="shield" size={24} color={color} />,
          tabBarLabel: 'Policies',
          headerShown:false,
          headerLeft:() =>(
            <Text 
              style={{
                color:'#fff',
                fontSize:18,
                fontWeight:'600',
                paddingLeft:15
                }}
            >Policies</Text>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialIcons name="notifications-active" size={25}
                    color={'#fff'}
                    style={{ paddingRight:15,opacity: pressed ? 0.5 : 1 }}/>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Claims"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons name="article" size={32} color={color} />,
          tabBarLabel: 'Claims',
          headerShown:false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons size={32} name="explore" color={color} />,
          tabBarLabel: 'Explore',
          headerLeft:() =>(
            <Text 
              style={{
                marginLeft:15,
                color:'#fff',
                fontSize:18,
                fontWeight:'600'
              }}
            >Explore</Text>
          ),
          headerRight: () => (
            <View style={{
              marginRight: 15,
              flexDirection:'row',
              backgroundColor:'transparent',
              gap:15
            }}>
                <Pressable>
                  {({ pressed }) => (
                    <Support>
                    <Feather name="phone" size={25}
                    color={"#fff"}
                    style={{ opacity: pressed ? 0.5 : 1 }}/>
                    </Support>
                  )}
                </Pressable>
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <MaterialIcons name="notifications-active" size={25}
                    color={"#fff"}
                    style={{ opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Billing"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-balance-wallet" size={32} color={color} />,
          tabBarLabel: 'Billing',
          headerShown:false,
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={32} color={color} />,
          tabBarLabel: 'Settings',
          headerShown:false,
          // tabBarStyle: { display: "none" }
        }}
      />
      
      
    </Tabs>
  );
}
