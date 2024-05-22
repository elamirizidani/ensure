import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as DocumentPicker from 'expo-document-picker';
import ReUsableButton from '@/components/reUsable/ReUsableButton';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const ThirdPartyDocuments = () => {
    const [garageFileName,setGarageFileName] = useState('')
    const [garageFileSize,setGarageFileSize] = useState('')
    const [garageFile,setGarageFile] = useState<any>(null)

    const pickFile = async () => { 
        try { 
            const uploadedFile = await DocumentPicker.getDocumentAsync(); 
            setGarageFile(uploadedFile.assets[0])
            const { mimeType, uri, name, size }  = uploadedFile.assets[0]
            setGarageFileName(name)
            const fileSizeInMB = size / (1024 * 1024)
            if (fileSizeInMB < 0.7) { 
                setGarageFileSize(`${(fileSizeInMB*1024).toFixed(1)} KB`)
                console.log();
            } else { 
                setGarageFileSize(`${fileSizeInMB.toFixed(1)} MB`)
            }
            
            
        // Handle the selected file here (e.g., upload it to a server) 
        // console.log('Selected file:', { mimeType, uri, name, size } ); 
        } catch (err) { // Error occurred while selecting the file or user cancelled 
            console.log('Error:', err); 
        }
    };

  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.topTitle}>Upload Documents</Text>
      <Text style={styles.topText}>
        Submit the garage proforma and Police report to help us resolve your claim fast.
      </Text>
    </View>
    <View style={styles.wornContain}>
        <Text style={styles.wornText}>
            Submit scanned required documents in pdf format. Make sure it is not bigger that 3 MB
        </Text>
    </View>
    <View style={{paddingHorizontal:20,gap:20}}>

        {
            garageFile? (
                <TouchableOpacity style={styles.uploadFile} onPress={()=>pickFile()}>
                    <View style={styles.selectedFile}>
                        <AntDesign name="file1" size={35} color="black" />
                        <View>
                            <Text style={{color:'#3D3C3C',fontSize:16,fontWeight:'400'}}>{garageFile.name}</Text>
                            <Text style={{color:'#3D3C3C',fontSize:16,fontWeight:'400'}}>{garageFileSize}</Text>
                        </View>
                    </View>
                    <MaterialCommunityIcons name="cloud-upload-outline" size={32} color="#064E89"/>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.uploadFile} onPress={()=>pickFile()}>
                    <Text style={{color:'#3D3C3C',fontSize:16,fontWeight:'400'}}>Garage Proforma</Text>
                    <MaterialCommunityIcons name="cloud-upload-outline" size={32} color="#064E89"/>
                </TouchableOpacity>
            ) 
        }
        

        

        <TouchableOpacity style={styles.uploadFile} onPress={()=>pickFile()}>
            <Text style={{color:'#3D3C3C',fontSize:16,fontWeight:'400'}}>Police Report</Text>
            <MaterialCommunityIcons name="cloud-upload-outline" size={32} color="#064E89"/>
        </TouchableOpacity>
    </View>

    <View style={styles.btnSection}>
        <ReUsableButton title={"Submit"} onPress={undefined} style={styles.submitButton} children={undefined}/>
    </View>
    
    </View>
  )
}

export default ThirdPartyDocuments

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    topContainer:{
        backgroundColor:'#064E89',
        paddingHorizontal:20,
        paddingVertical:40,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
        gap:18,
        zIndex:1
    },
    topTitle:{
        fontSize:22,
        color:'#FFFFFF',
        fontWeight:'600'
    },
    topText:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'400',
        lineHeight:18,
        width:'80%'
    },
    wornContain:{
        backgroundColor:'#D9D9D933',
        paddingHorizontal:20,
        paddingBottom:20,
        paddingTop:90,
        top:-60,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
    },
    wornText:{
        color:'#1C1B1F',
        fontWeight:'400',
        fontSize:16,
        lineHeight:18
    },
    uploadFile:{
        borderRadius:8,
        backgroundColor:'#D9D9D933',
        borderColor:'#064E89',
        borderWidth:1,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    submitButton:{
        backgroundColor:'#064E89',
        paddingVertical:20,
        TextStyle:{
            color:'#fff',
            fontSize:16,
            fontWeight:'600',
        }
    },
    btnSection:{
        marginTop:'auto',
        paddingHorizontal:20,
        paddingVertical:20
    },
    selectedFile:{
        flexDirection:'row',
        gap:5
    }
})