import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useNavigation } from '@react-navigation/native'
import ClaimHistoryCard from '@/components/reUsable/ClaimHistoryCard'

const Unsubmitted = () => {
  const router = useRouter()
  const navigation = useNavigation()
  return (
    <View>
      <ClaimHistoryCard status={"Continue"}/>
    </View>
  )
}

export default Unsubmitted

const styles = StyleSheet.create({})