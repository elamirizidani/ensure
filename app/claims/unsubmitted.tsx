import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
// import { Button, HelperText, TextInput } from 'react-native-paper';

const details = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View>
        <Text style={{
          fontSize:22,
          fontWeight:'600',
          color:'#000'
        }}>Select event Time and Date</Text>
      </View>

    </View>
  )
}

export default details

// function TextInputWithError({ errorMessage, ...rest }: React.ComponentProps<typeof TextInput> & { errorMessage?: string }) {
//   return (
//     <>
//       <TextInput {...rest} />
//       <HelperText type="error" visible={rest.error}>
//         {errorMessage || ' '}
//       </HelperText>
//     </>
//   );
// }


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
})