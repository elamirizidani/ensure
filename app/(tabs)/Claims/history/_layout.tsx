import { 
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap
 } from '@react-navigation/material-top-tabs';
import { View,Text, Dimensions, StyleSheet } from 'react-native';
import { useRouter, withLayoutContext } from 'expo-router';
import { ParamListBase, TabNavigationState, useNavigation, useRoute } from '@react-navigation/native';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
 MaterialTopTabNavigationOptions,
 typeof Navigator,
 TabNavigationState<ParamListBase>,
 MaterialTopTabNavigationEventMap
>(Navigator)

 const Layout = () =>{
  
  return(
    <MaterialTopTabs 
    style={{marginTop:20}}
      screenOptions={{
        tabBarContentContainerStyle:{
          borderBottomWidth:1,
          borderColor:'#ABA8A8ED',
        },
        tabBarActiveTintColor:'#064E89',
        tabBarInactiveTintColor:'#868686',
        tabBarLabelStyle:{
          textTransform:'capitalize',
          fontWeight:'600',
          fontSize:18,
        },
        // tabBarGap:20,
        tabBarIndicatorStyle:{
          backgroundColor:'#064E89',
          height:3
        },
        tabBarStyle: { backgroundColor: 'transparent', }
        
      }}>
      <MaterialTopTabs.Screen name='index' options={{title:'Unsubmitted'}}/>
      <MaterialTopTabs.Screen name='processing' options={{title:'Processing'}}/>
      <MaterialTopTabs.Screen name='resolved' options={{title:'Resolved'}}/>
    </MaterialTopTabs>
  )
 }
 export default Layout;

 const {height,width} = Dimensions.get('screen')
const styles = StyleSheet.create({
  tabBtn:{
    paddingHorizontal:15,
    paddingVertical:10,
    borderBottomWidth:2,
    borderColor:'#868686',
    alignItems:'center'
  },
  sectionTitle:{
    fontSize:18,
    fontWeight:'600',
    color:'#000'
  }
})