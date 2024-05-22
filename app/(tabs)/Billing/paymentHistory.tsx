import React from "react";
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import dummy from '@/utilits/dummy'
import { AntDesign, Ionicons } from "@expo/vector-icons";

const PaymentHistoryCard = ({history}) => {
  return (
    <View style={styles.historyContainer}>
      <View style={styles.historySubContainer}>
        <Image 
          source={history?.companyImage}
          style={{ width: 35, height: 35 }}
          resizeMode='contain' 
        />
        <View>
          <Text style={styles.modelName}>{history?.carModel}</Text>
          <Text style={styles.paymentDate}>{history?.dateIssued}</Text>
        </View>
      </View>
      <Text style={styles.amount}>{history?.amountPaid}</Text>
    </View>
  );
};


export default class PaymentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
      minDate: new Date(),
      maxDate: new Date(),
      filteredHistory: [] as any[],
    };
  }

//   setDates = (dates) => {
//     this.setState({
//       ...dates,
//     });
//   };


  setDates = (dates) => {
    const { startDate, endDate } = dates;
    const formattedStartDate = moment(startDate, "MMM DD, YYYY").format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate, "MMM DD, YYYY").format("YYYY-MM-DD");

    const filteredHistory = dummy['paymentHistory'].filter((item) => {
      const itemDate = moment(item.dateIssued,'MMM DD, YYYY');
      return itemDate.isSameOrAfter(startDate) && itemDate.isSameOrBefore(endDate);
    });

    this.setState({
      ...dates,
      filteredHistory,
    });
  };

  

  render() {
    const { startDate, endDate, displayedDate, minDate, maxDate, filteredHistory } = this.state;
    const dataToRender = filteredHistory.length ? filteredHistory : dummy['paymentHistory'];

    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <Image style={{width:50,height:16}} source={require('@/assets/images/imgs/visa.png')}/>
                <TouchableOpacity style={styles.cardOption}>
                    <Ionicons name="ellipsis-vertical-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:12,color:'#fff',fontWeight:'600',}}>
                4141  2334  6789  8769
            </Text>
            <View style={styles.cardDetailsContainer}>
                <View style={styles.cardDetailsSection}>
                    <Text style={styles.cardDetailsTitle}>Card holder</Text>
                    <Text style={styles.cardDetails}>Manzi Bruno</Text>
                </View>
                <View style={styles.cardDetailsSection}>
                    <Text style={styles.cardDetailsTitle}>Expiry date</Text>
                    <Text style={styles.cardDetails}>05/25</Text>
                </View>
            </View>
        </View>

        <DateRangePicker
          onChange={this.setDates}
          startDate={startDate}
          endDate={endDate}
          maxDate={maxDate}
          range
          displayedDate={displayedDate}
          containerStyle={styles.calendarContainer}
        >
            <View style={styles.calendorBtn}>
                <AntDesign name="calendar" size={24} color="#1C1B1F" />
                <Text style={{fontSize:18,fontWeight:'600'}}>12-30 Jan 2024</Text>
            </View>
            
        </DateRangePicker>
        
        <FlatList 
          bounces={false}
          data={dataToRender}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({item})=><PaymentHistoryCard history={item} />}
          contentContainerStyle={{gap:20,paddingTop:20}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical:20,
        paddingHorizontal:20
      },
    historyContainer: {
    flexDirection: 'row',
    width: '100%',
    // paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  amount: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  paymentDate: {
    fontWeight: '600',
    fontSize: 14,
    color: '#868686',
  },
  modelName: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  historySubContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  calendorBtn:{
    backgroundColor:'#C4F1FE9E',
    borderRadius:5,
    padding:10,
    flexDirection:'row',
    gap:15,
    width:200
  },
  calendorBtnSection:{
    flexDirection:'row',marginBottom:30,
    zIndex:1,
},
calendarContainer:{
    zIndex:1,
},
cardContainer:{
    backgroundColor:'#064E89',
    borderRadius:12,
    width:'100%',
    marginVertical:15,
    padding:20,
    gap:25
},
cardHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
},
cardDetailsContainer:{
    flexDirection:'row',
    gap:40
},
cardDetailsSection:{
    gap:5
},
cardDetailsTitle:{fontSize:10,fontWeight:'400',color:'#D9D9D9'},
cardDetails:{fontSize:12,fontWeight:'700',color:'#D9D9D9'},
});

