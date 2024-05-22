import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import dumy from '@/utilits/dummy';
import PoliciesCard from '@/components/reUsable/PoliciesCard';
import { useAuth } from '@/context/authContext';

const Policies = () => {

  const policies = dumy['InsuarencePolicy']
  const [filteredPolicies,setFilteredPolicies] = useState(policies.filter(policy => policy.status === 'active')) 
  const [status,setStatus] = useState('active')
  const { i18n } = useAuth();

  const setStatusFilter = status =>{
    setFilteredPolicies([...policies.filter(e => e.status === status)])
    // if(status != 'active')
    // {
    //   setFilteredPolicies([...policies.filter(e => e.status === status)])
    // }
    // else
    // {
    //   setFilteredPolicies(filteredPolicies)
    // }
    // setStatus(status)
  }

  useEffect(()=>{
    setStatusFilter(status)
  },[status])


  return (
    <View
      style={{
        paddingHorizontal:15,
        paddingVertical:20
      }}
    >
      <ReUsableButton title={'Get a Quote'} onPress={undefined} style={{
        backgroundColor:'#064E89',
        gap:8,
        paddingHorizontal:16,
        paddingVertical:8,
        width:152,
        TextStyle:{
          color:'#fff',
          fontWeight:'600',
          fontSize:16,
        }
      }}>
        <AntDesign name="tago" size={24} color="#fff" />
      </ReUsableButton>
      <Text style={styles.sectionTitle}>
        {i18n.t('policiesScreen.mainScreen.insurence')}
      </Text>

      <View 
        style={{
          flexDirection:'row',
          gap:21,
          justifyContent:'center',
          marginVertical:20
        }}
      >
        <TouchableOpacity
          style={[styles.tabBtn,status === 'active' && styles.activeBtn]}
          onPress={()=>setStatus('active')}
        >
          <Text
             style={[styles.tabText,status === 'active' && styles.activeBtn]}
          >{i18n.t('policiesScreen.mainScreen.buttons.active')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, status === 'expired' && styles.activeBtn]}
          onPress={()=>setStatus('expired')}
        >
          <Text style={[styles.tabText,status === 'expired' && styles.activeBtn]}>
            {i18n.t('policiesScreen.mainScreen.buttons.expired')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, status === 'pending' && styles.activeBtn]}
          onPress={()=>setStatus('pending')}
        >
          <Text style={[styles.tabText,status === 'pending' && styles.activeBtn]}>
            {i18n.t('policiesScreen.mainScreen.buttons.pending')}
          </Text>
        </TouchableOpacity>
      </View>


      <FlatList
            data={filteredPolicies}
            renderItem={({item})=><PoliciesCard provider={item}/>}
            style={{
                height:height*60/100,
                width:'100%',
                paddingVertical:20,
                marginTop:'auto'
            }}
            contentContainerStyle={{ paddingBottom: 20 }}
            
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={()=>
              <Text style={styles.sectionTitle}>
                {i18n.t('policiesScreen.mainScreen.motorInsurance')}
              </Text>
          }
        />
    </View>
  )
}

export default Policies
const {height,width} = Dimensions.get('screen')
const styles = StyleSheet.create({
  tabBtn:{
    paddingHorizontal:15,
    paddingVertical:10,
    borderBottomWidth:2,
    borderColor:'#868686',
    alignItems:'center',
    flex:1,
  },
  sectionTitle:{
    fontSize:18,
    fontWeight:'600',
    color:'#000'
  },
  activeBtn:{
    color:'#064E89',
    borderColor:'#064E89',
  },
  tabText:{
    fontSize:16,fontWeight:'600',
  }
})




// import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import dumy from '@/utilits/dummy';
// import PoliciesCard from '@/components/reUsable/PoliciesCard';
// import ReUsableButton from '@/components/reUsable/ReUsableButton';
// import { Feather } from '@expo/vector-icons';

// const Active = () => {

//   const activePolicies = dumy['InsuarencePolicy'].filter(policy => policy.status === 'active');

//   const insuareBtns = () =>{
//     return(
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between'
//           }}
//         >
//         <ReUsableButton title={'View more'}
//           onPress={undefined}
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#064E89',
//             borderRadius: 50,
//             paddingHorizontal: 20,
//             paddingVertical: 10,
//             gap: 10,
//             alignItems: 'center',
//             TextStyle: { color: '#fff', fontSize: 16, fontWeight: '700' }
//           }}>
//         <Feather name="eye" size={24} color="#fff" />
//       </ReUsableButton>
//       <ReUsableButton title={'View Cards'}
//         onPress={undefined}
//         style={{
//           flexDirection: 'row',
//           borderColor: '#064E89',
//           borderWidth: 2,
//           borderRadius: 50,
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           gap: 10,
//           alignItems: 'center',
//           TextStyle: { color: '#064E89', fontSize: 16, fontWeight: '700' }
//         }}>
//         <Feather name="eye" size={24} color="#064E89" />
//       </ReUsableButton>
//     </View>
//     )
//   }
//   return (
//     <View
//       style={{
//         paddingVertical:20
//       }}
//     >
//       <FlatList
//             data={activePolicies}
//             renderItem={({item})=>{
//               return (
//                 <PoliciesCard provider={item}>
//                   {insuareBtns()}
//                 </PoliciesCard>
//               );
//             }}
//             style={{
//                 width:width*98/100,
//             }}
//             contentContainerStyle={{ paddingBottom: 20,paddingRight:20 }}
            
//             showsVerticalScrollIndicator={false}
//             ListHeaderComponent={()=>
//               <Text style={styles.sectionTitle}>
//                 Motor Insurance
//               </Text>
//           }
//         />
        
//     </View>
//   )
// }

// export default Active
// const {height,width} = Dimensions.get('screen')
// const styles = StyleSheet.create({
//   sectionTitle:{
//     fontSize:18,
//     fontWeight:'600',
//     color:'#000'
//   }
// })