import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
const {width} = Dimensions.get('window')
import { MotiView } from 'moti'

const pinLength = 4
const pinContainerSize = width / 2
const pinMaxSize = pinContainerSize / pinLength
const pinSpacing = 10
const pinSize = pinMaxSize - pinSpacing * 2

const dialPad = [1,2,3,4,5,6,7,8,9, '',0,'del']
const dialPadSize = width * .2
const dialPadTextSize = dialPadSize * .4
const _spacing = 20

function DialPad( {onPress}: {onPress: (item: typeof dialPad[number]) => void }){
    return<FlatList
        data={dialPad}
        numColumns={3}
        style={{flexGrow:0}}
        scrollEnabled={false}
        columnWrapperStyle={{gap:_spacing}}
        contentContainerStyle={{gap:_spacing}}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
            return <TouchableOpacity 
                disabled={item === ''}
                onPress={()=>{
                    onPress(item)
                }}>
                <View style={{
                    width: dialPadSize,
                    height: dialPadSize,
                    borderRadius: dialPadSize,
                    // borderWidth: item === '' ? 0 : 1,
                    // borderColor:'black',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: typeof item !== 'number'? '':'#333333'
                }}>
                    { 
                        item === 'del'? <FontAwesome6 name="delete-left" size={dialPadTextSize} color="#064E89" />:
                        <Text style={{
                            fontSize:dialPadTextSize,
                            color:'#fff'
                        }}>{item}</Text>
                    }
                    
                </View>
            </TouchableOpacity>
        }}
    />
}

const changePin = () => {
    const [code, setCode] = useState<number[]>([])
    // console.log(code)
  return (
    <View style={styles.container}>
        <Text style={{
            color:'#064E89',
            fontSize:24,
            fontWeight:'400'
        }}>
            Enter your current passcode
        </Text>
        <View style={{
            flexDirection:'row',
            gap: pinSpacing * 2,
            marginBottom: _spacing * 2,
            height: pinSize * 2,
            alignItems:'flex-end'
        }}>
            {[...Array(pinLength).keys()].map(i =>{
                const isSelected = !!code[i] || typeof code[i] === 'number'
                return <MotiView 
                    key={`pin-${i}`}
                    style={{
                        width: pinSize,
                        borderRadius: pinSize,
                        backgroundColor:'#475569'
                    }}
                    transition={{
                        type: 'timing',
                        duration: 200
                    }}
                    animate={{
                        height: isSelected ? pinSize : 2,
                        marginBottom: isSelected? pinSize / 2 : 0
                    }}
                />
            })}
        </View>
      <DialPad onPress={(item) =>{
        if(item === 'del'){
            setCode(prevCode => prevCode.slice(0, prevCode.length - 1))
        }
        else if( typeof item === 'number'){
            if(code.length === pinLength) return
            setCode(prevCode => [...prevCode, item])
        }
      }}/>
    </View>
  )
}

export default changePin

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})