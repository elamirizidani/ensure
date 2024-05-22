import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ClaimHistoryCard from '@/components/reUsable/ClaimHistoryCard'
import { useRouter } from 'expo-router'

const resolved = () => {
  const router = useRouter()
  return (
    <View>
      <ClaimHistoryCard status={"Settled"}/>
    </View>
  )
}

export default resolved

const styles = StyleSheet.create({})