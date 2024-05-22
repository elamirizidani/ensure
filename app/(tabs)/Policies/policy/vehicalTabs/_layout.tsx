import { 
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap
   } from '@react-navigation/material-top-tabs';
  import { View,Text, Dimensions, StyleSheet } from 'react-native';
  import { useRouter, withLayoutContext } from 'expo-router';
  import { ParamListBase, TabNavigationState, useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
  import { useEffect, useState } from 'react';
  
  const { Navigator } = createMaterialTopTabNavigator();
  
  export const MaterialTopTabs = withLayoutContext<
   MaterialTopTabNavigationOptions,
   typeof Navigator,
   TabNavigationState<ParamListBase>,
   MaterialTopTabNavigationEventMap
  >(Navigator)
  
   const Layout = () =>{
    
  const navigationState = useNavigationState(state => state); // Access navigation state
  const [activeTab, setActiveTab] = useState('index');

  useEffect(() => {

    navigationState.routes.forEach(element => { 
      if (element.state?.index !== undefined) { 
        const activeRouteName = navigationState.routes.map(element => element.state?.routes[element.state?.index]?.name); 
        setActiveTab(activeRouteName.join('')); }
});

  }, [navigationState]);



  // const getTabBarItemStyle = (index) => {
  //   console.log(activeTab)
  //   if (index === activeTab) {
  //     return {
  //       height: 45,
  //       marginBottom: 10,
  //       alignItems: 'center',
  //       paddingHorizontal: 21,
  //       paddingVertical: 8,
  //       borderRadius: 50,
  //       backgroundColor: '#064E89', // Change background color to red for index 1
  //     };
  //   }
  //   return {
  //     height: 45,
  //     marginBottom: 10,
  //     alignItems: 'center',
  //     paddingHorizontal: 21,
  //     paddingVertical: 8,
  //     borderRadius: 50,
  //     backgroundColor: '#D6ECFF',
  //   };
  // };

  const getTabBarItemStyle = (index) => { 
    if (index === activeTab) { 
      return { 
        height: '100%',
        width:'100%',
        flex:1,
        marginBottom: 5, 
        alignItems: 'center', 
        paddingHorizontal: 21, 
        paddingVertical: 8, 
        borderRadius: 50, 
        fontSize:14,
        fontWeight:'600',
        backgroundColor: '#064E89', 
        textAlign: 'center',
    }
  } 
  return { 
    height: '100%', 
    flex:1,
    width:'100%',
    marginBottom: 5, 
    paddingHorizontal: 21, 
    paddingVertical: 8, 
    borderRadius: 50, 
    fontSize:14,
    fontWeight:'600',
    backgroundColor: '#D6ECFF',
    textAlign: 'center',
   }

  }
  
    return(
      <MaterialTopTabs
      style={{backgroundColor:'#fff'}}
        screenOptions={({ route }) => ({
          tabBarStyle: {
          backgroundColor: 'transparent',
          width:'98%',
          paddingRight:20,
        },
        tabBarContentContainerStyle: { borderBottomWidth: 0,backgroundColor:'transparent',alignItems:'center'},
        tabBarIndicatorStyle:{
          backgroundColor:'transparent'
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#064E89',
        tabBarLabelStyle: getTabBarItemStyle(route.name),
        tabBarPressOpacity:0,
        tabBarPressColor:'transparent',
      })}
        >
        <MaterialTopTabs.Screen name='index' options={{title:'Info'}}/>
        <MaterialTopTabs.Screen name='coverage' options={{title:'Coverage'}}/>
        <MaterialTopTabs.Screen name='discount' options={{title:'Discount'}}/>
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