import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InsuarenceBunner from '@/components/reUsable/InsuarenceBunner'
import InsuarenceProvider from '@/components/reUsable/InsuarenceProvider'
import InsuarencePolicy from '@/components/reUsable/InsuarencePolicy'

const Home = () => {

  const insuranceBunner = [
    {
      'id':1,
      'name':'Saving',
      'rating':'40%',
      'desc':'On motor insurance only with E-nsure',
      'insuarenceImage':require(`@/assets/images/imgs/car.png`)
    },
    {
      'id':2,
      'name':'Earn',
      'rating':'10%',
      'desc':'On fire insurance only with E-nsure',
      'insuarenceImage':require(`@/assets/images/imgs/car.png`)
    }
  ]
  const insuranceProvider = [
    {
      'id':1,
      'name':'MUA',
      'insuarenceImage':require(`@/assets/images/imgs/mua.png`)
    },
    {
      'id':2,
      'name':'Radiant',
      'insuarenceImage':require(`@/assets/images/imgs/prime.png`)
    },
    {
      'id':3,
      'name':'PRIME',
      'insuarenceImage':require(`@/assets/images/imgs/radiant.png`)
    }
  ]

  const insurancePolicies = [
    {
      'id':1,
      'name':'Motor Insurance',
      'insuarenceImage':require(`@/assets/images/imgs/cardio_load.png`)
    },
    {
      'id':2,
      'name':'Health Insurance',
      'insuarenceImage':require(`@/assets/images/imgs/airport_shuttle.png`)
    },
    {
      'id':3,
      'name':'Motor Insurance',
      'insuarenceImage':require(`@/assets/images/imgs/cardio_load.png`)
    }
  ]

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor:'#064E89',
        marginBottom:'auto',
        padding:15
      }}>
        <Text style={{
          color:'#fff',
          fontSize:28,
          fontWeight:'600'
        }}>Welcome, Lastoon</Text>
      </View>

<View style={{
  height:height * 25/100,
  width:width,
  marginBottom:'auto',
}}>
  <FlatList
      data={insuranceBunner}
      renderItem={({item})=><InsuarenceBunner insuarance={item}/>}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        paddingVertical:20,
        paddingLeft:20,
        width:'100%',
        height:'100%'
      }}
      />
</View>

<View style={{
  paddingLeft:15,
  height:height*22/100,
  marginTop:20
}}>
  <Text style={{
    fontSize:18,
    fontWeight:'600'
  }}>Explore Insurance Providers</Text>
  <FlatList
        data={insuranceProvider}
        renderItem={({item})=><InsuarenceProvider provider={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical:20,
          width:'100%',
          height:'100%'
        }}
        />
</View>


<View style={{
  paddingLeft:15,
  height:height*22/100,
  marginTop:20
}}>
  <Text style={{
    fontSize:18,
    fontWeight:'600'
  }}>Explore Insurance Policies</Text>
  <FlatList
        data={insurancePolicies}
        renderItem={({item})=> <InsuarencePolicy policy={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical:20,
          width:'100%',
          height:'100%'
        }}
        />
</View>
      
    </View>
  )
}

export default Home
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  }
});
