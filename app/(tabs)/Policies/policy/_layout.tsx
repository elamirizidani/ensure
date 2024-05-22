import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Slot, Stack } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import BackBtn from '@/components/reUsable/BackBtn'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='card' options={{
        // title:''
      }}/>

      <Stack.Screen name="vehicalTabs" 
              options={{
                  title: '',
                  headerStyle: {
                      backgroundColor: '#064E89'
                  },
                  headerLeft:() =>(
                    <BackBtn screenName={"Vehicle"}/>
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
  )
}

export default _layout

const styles = StyleSheet.create({})