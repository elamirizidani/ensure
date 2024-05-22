import InsureContacts from '@/components/reUsable/InsureContacts';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import { AntDesign, Feather } from '@expo/vector-icons';
import moment from 'moment';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import dumy from '@/utilits/dummy';
import { useRouter } from 'expo-router';

const Processing = () => {
    const router = useRouter()
    const company = dumy['insuaranceCompany'].find(item => item.id === '1')
    const orderData = [
        {
          status: 'Claim Received',
          statusDesc:'Claim has been successfully received',
          date: `8/4/24`,
          isChecked:true
        },
        {
          status: 'Claim Queueing',
          statusDesc:'Your claim is on the queue',
          date: `8/4/24`,
          isChecked:true
        },
        {
          status: 'Claim Approved',
          statusDesc:'Claim approved, please download the transfer letter, and take it to Radiant Insurance Company.',
          date: `8/4/24`,
          request:'Claim approved, please download the transfer letter, and take it to Radiant Insurance Company.',
          isChecked:true
        },
        {
          status: 'Claim Settled ',
          statusDesc:'Your claim is being processed',
          date: `8/4/24`,
          isChecked:false
        },
        
      ];


      const renderItem = ({ index, item }) => (
        <View key={index} style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',width:'100%'}}>
            <View style={styles.iconContainer}>
                { 
                    item.isChecked ? 
                    <AntDesign name="checkcircle" size={24} color="#064E89" style={styles.icon} />
                    :
                    (<View style={styles.unCheckedIcon}/>)
                }
                {index < orderData.length - 1 && <View style={styles.line} />}
            </View>
            
            <View style={styles.itemContainer}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                    <View style={styles.statusText}>
                        <Text style={styles.status}>{item.status}</Text>
                        <Text style={styles.statusDesc}>{item.statusDesc}</Text>
                    </View>
                    <Text style={{color:'#3D3C3C',fontSize:18,fontWeight:'600'}}>{item.date }</Text>
                </View>
                
                {item.request && (
                    <View style={styles.requestContainer}>
                        <Text style={styles.statusDesc}>{item.statusDesc}</Text>
                        <TouchableOpacity onPress={()=>router.push('/claims/thirdPartyDocuments')} style={{flexDirection:'row',alignItems:'center',gap:5,paddingVertical:15}}>
                            <Text style={{fontSize:14,fontWeight:'700',color:'#064E89'}}>
                                Proceed to submit
                            </Text>
                            <AntDesign name="arrowright" size={14} color="#064E89" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
        
      );
      

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Text style={{fontSize:24,color:'#000000',fontWeight:'700'}}>Track Claim</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{gap:10}}>
                <Text style={{color:'#4F4F4F',fontSize:18,fontWeight:'600'}}>Mon, 08 April</Text>
                <Text style={{color:'#4F4F4F',fontSize:18,fontWeight:'400'}}>Claim ID: Hy564j6</Text>
            </View>
            <ReUsableButton title={"Documents"} onPress={undefined} style={{
                borderWidth:1.5,
                borderColor:'#064E89',
                paddingHorizontal:16,
                paddingVertical:12,
                gap:12,
                TextStyle:{
                    color:'#064E89',
                    fontSize:16,
                    fontWeight:'600'
                }
            }}>
                <Feather name="eye" size={24} color="#064E89" />
            </ReUsableButton>
        </View>
        <View style={styles.statusContainer}>
        {
            orderData.map((item, index) => renderItem({ item, index }))
        }
        </View>

        <InsureContacts companyInfo={company?.id}/>
    </ScrollView>
  );
};

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        // alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:20,
        gap:20,
    },
  itemContainer: {
    paddingHorizontal: 10,
    gap:20,
    paddingBottom:20,
    width:'90%',
  },
  status: {
    fontSize: 18,
    fontWeight: '600',
    color:'#000'
  },
  statusDesc: {
    fontSize: 14,
    fontWeight:'400',
    color: '#3D3C3C',
  },
  requestContainer:{
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 5,
    width:'80%'
  },
  statusText:{
    width:'70%',
  },
  statusContainer:{
    width:'100%',
    borderBottomWidth:1,
    borderBlockColor:'#4F4F4F',
  },
  iconContainer:{
    alignItems:'center',height:'100%',gap:5,
    // borderLeftWidth:2,
    // borderColor:'black',
    
  },
    line: {
        width: 1,
        height: '100%',
        marginBottom: 20,
        position:'absolute',
        borderWidth: 2,
        borderColor: '#064E89',
        zIndex:0,
        borderStyle:'dashed',
        // borderRightColor:'#fff'
  },
  icon:{
    zIndex:2,
    borderWidth:5,
    borderColor:'#fff',
    backgroundColor:'#fff'
  },
  unCheckedIcon:{
    height:24,
    width:24,
    borderRadius:50,
    borderColor:'#064E89',
    borderWidth:3,
    backgroundColor:'#fff',
    zIndex:2,
    margin:5
}
});

export default Processing;

