import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'; // Import Image from react-native

export class Iterables extends Component {

  names = [
    {
      uid: 1,
      name: 'Astha',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      desc:"amazing..............................amazing..............................amazing..............................amazing..............................amazing..............................amazing..............................amazing..............................amazing..............................",},
    {
      uid: 2,
      name: 'Arjava',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      desc:"amazing...............................",
    },
    {
      uid: 3,
      name: 'Parva',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      desc:"amazing...............................",
    },
    {
      uid: 4,
      name: 'Manu',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      desc:"amazing...............................",
    },
    {
      uid: 5,
      name: 'Shail',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      desc:"amazing...............................",
    }
  ];
  
  render() {
    return (
      <>
      <View><Text style={styles.headingText}>Contact List</Text></View>
      <View style={styles.container}>
        {/* Iterate over the list of items to generate the list */}
        <ScrollView scrollEnabled={false} style={styles.scrollStyle}>
          {
            this.names.map((item) => (
              <View key={item.uid} style={styles.userCard}>
                <View style={styles.chatContainer}>
                  <View style={{backgroundColor:'red',margin:10}}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.image} // Apply a style with defined width and height
                  />
                  </View>
                  <View>
                    <Text>{item.name}</Text>
                    <Text style={{flexWrap:'wrap'}}>{item.desc}</Text>
                  </View>
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  container: {
    backgroundColor: 'pink',
    margin: 10,
    borderRadius: 6,
  },
  userCard: {
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin:10,
    // marginBottom: 10,
  },
  chatContainer:{
    flexDirection:'row',
    alignItems:'flex-start',
    backgroundColor:'violet',
    borderRadius:20,
  },
  scrollStyle:{
    padding:10,
    margin:20,
    flex:1,
    // alignItems:'flex-start',
  }
});

export default Iterables;
