import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ClaimHistoryCard from '@/components/reUsable/ClaimHistoryCard'

const processing = () => {
  return (
    <View style={{
      backgroundColor:'#fff'
    }}>
      <ClaimHistoryCard status={"Error"}/>
      <ClaimHistoryCard status={"Processing"}/>
    </View>
  )
}

export default processing

const styles = StyleSheet.create({})