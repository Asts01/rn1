import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export class FancyCard extends Component { // Fixed the spelling from 'FacncyCard' to 'FancyCard'
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Fancy Cards</Text>
        <ScrollView horizontal={true} style={styles.scrollContainer} >
          <View style={[styles.card, styles.cardElevated]}>
            <Image 
              style={styles.cardImage} 
              source={require('./images/mandir.jpeg')} 
            />
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Image 
              style={styles.cardImage} 
              source={require('./images/mandir.jpeg')} 
            />
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Image 
              style={styles.cardImage} 
              source={require('./images/mandir.jpeg')} 
            />
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Image 
              style={styles.cardImage} 
              source={require('./images/mandir.jpeg')} 
            />
          </View>
        </ScrollView>
        <View>
          <Text style={styles.cardTitle}>Kaanch Mandir Indore</Text>
        </View>
        <View>
          <Text style={styles.cardLabel}>Rajwada</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
          Sed ut perspiciatis,
          unde omnis iste natus error
          quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    padding: 10,
    backgroundColor:'#CAD5E2',
    borderRadius:6,
    // paddingTop:5,
    // margin:5,
    // backgroundColor: '#fff', // Add background color to ensure visibility
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 8,
    backgroundColor:'#EF5354',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 10,
    // backgroundColor:'#EF5354',
  },
  card: {
    marginRight: 10, // Add margin to space out the cards
    borderRadius:6,
  },
  cardImage: {
    width: 400,
    height: 200,
    resizeMode:'cover',
    borderRadius:6,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 12, // Adjust elevation for better visibility
    shadowOffset: {
      width: 1, height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardBody: {
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  cardTitle:{
    fontWeight:'bold',
    fontSize:30,
    paddingHorizontal: 8,
    color:'violet',
    // marginBottom: 8,
  },
  cardLabel:{
    // fontWeight:'bold',
    fontSize:28,
    paddingHorizontal: 8,
    // marginBottom: 8,
  },
  cardDescription:{
    // fontWeight:'bold',
    fontSize:16,
    paddingHorizontal: 8,
    // marginBottom: 8,
  }
});

export default FancyCard;

