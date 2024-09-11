import React from 'react'
import {View,Text,ScrollView,SafeAreaView, StyleSheet} from 'react-native';

function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <ScrollView>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}><Text>Red</Text></View>
            <View style={[styles.card,styles.cardTwo]}><Text>Yellow</Text></View>
            <View style={[styles.card,styles.cardThree]}><Text>Green</Text></View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    "headingText":{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    "container":{
        flex:1,
        // justifyContent:'center',
        flexDirection:'row',
        // alignItems:'center',
        // width:100,
        borderRadius:6,
    },
    "card":{
        flex:1,//inner-text-will take the over-all space of the box
        justifyContent:'center',//top-to-bottom
        alignItems:'center',//left-to-right
        width:100,
        // width:'50%',
        height:100,
        margin:8,
        borderRadius:6,
    },
    "cardOne":{
        backgroundColor:'#EF5354',
        width:100,
    },
    "cardTwo":{
        backgroundColor:'#FFFF00',
    },
    "cardThree":{
        backgroundColor:'#ADDE86',
    }
})

export default FlatCard
