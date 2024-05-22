import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import ReUsableButton from '@/components/reUsable/ReUsableButton'
import { useRouter } from 'expo-router'
import SelectDropdown from 'react-native-select-dropdown'
import { Entypo } from '@expo/vector-icons'
import { useAuth } from '@/context/authContext'


const chooseLanguage = () => {
    const router = useRouter()
    const { changeLocale, i18n } = useAuth();
    
    const selectLanguage = [
        {
            id: 'en',
            title: 'English',
            value: 'en',
            flag:require('@/assets/images/imgs/england.png')
        },
        {
            id: 'rw-RW',
            title: 'Kinyarwanda',
            value: 'rw-RW',
            flag:require('@/assets/images/imgs/rwanda.png')
        },
        {
            id: 'fr',
            title: 'French',
            value: 'fr',
            flag:require('@/assets/images/imgs/france.png')
        }
    ]
  return (
    <View style={styles.mainSection}>
        <Image 
            source={require('@/assets/images/actualIcon.png')}
            style={{
                width:'40%',
                objectFit:'contain'
            }}
            />
        <Text style={{
            fontSize:25,
            fontWeight:'600',
            paddingVertical:40
        }}
        >{i18n.t('welcomeScreen.welcome')}</Text>
        <View style={{width:width*90/100,bottom:20,gap:30,position:'absolute'}}>

        <SelectDropdown
            data={selectLanguage}
            onSelect={(selectedItem, index) => {
              changeLocale(selectedItem.value)
            }}
            renderButton={(selectedItem, isOpened) => {
            return (
                <View style={styles.dropdownButtonStyle}>
                {selectedItem && (
                    <Image style={styles.dropdownButtonFlagStyle} source={selectedItem.flag}/>
                )}
                <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.title) || i18n.t('welcomeScreen.languageBox')}
                </Text>
                <Entypo name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle}  />
                </View>
            );
            }}
            renderItem={(item, index, isSelected) => {
            return (
                <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                <Image source={item.flag} style={styles.dropdownItemFlagStyle}/>
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
            );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />

            <ReUsableButton 
                title={i18n.t('welcomeScreen.buttons.nextBtn')}
                onPress={() => router.push('/signIn')}
                style={{
                    backgroundColor: '#064E89',
                    TextStyle: { color: '#fff', fontSize: 16, fontWeight: '700' }
                }} children={undefined}/>
        </View>
    </View>
  )
}

export default chooseLanguage
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
    mainSection:{
        width:width,
        height:height *92/100,
        // backgroundColor:'#0009',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    dropdownButtonStyle: {
        width: '100%',
        backgroundColor: '#D9D9D933',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderBottomWidth:2,
        borderColor:'#064E89',
        paddingBottom:20,
        paddingTop:10
      },
      dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
      },
      dropdownButtonArrowStyle: {
        fontSize: 28,
      },
      dropdownButtonFlagStyle: {
        marginRight: 8,
        width:36,
        height:24,
        borderRadius:50
      },
      dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
      },
      dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
      },
      dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
      },
      dropdownItemFlagStyle: {
        marginRight: 8,
        width:36,
        height:24,
        borderRadius:50
      },
})