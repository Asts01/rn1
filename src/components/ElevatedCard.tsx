import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'

export class ElevatedCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> ElevatedCards </Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>TapMe</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>to</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>More...</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>coz</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>life</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>goes on..🤩</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    "headingText":{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    "container":{
        flex:1,
        padding:8,
        flexDirection:'row',
    },
    "card":{
        width:100,
        height:100,
        alignItems:'center',//left to right
        justifyContent:'center',//top to bottom
        margin:8,
        borderRadius:10,
    },
    "cardElevated":{
        backgroundColor:'#CAD5E2',
        elevation:30,
        shadowOffset:{
            width:1,height:1,
        },
        shadowColor:'#CAD5E2',
        shadowOpacity:1,
        shadowRadius:7,
    }
})

export default ElevatedCard
