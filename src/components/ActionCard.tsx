import React, { Component } from 'react';
import { Text, View, Linking, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

export class ActionCard extends Component {
    // Method to open the website
    openWebsite = (link) => {
        Linking.openURL(link).catch(err => console.error("Couldn't load page", err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ActionCard</Text>
                <View style={styles.headingText}>
                    <Text>DiceEmployeePortal</Text>
                </View>
                <View>
                    <Image 
                        source={require('./images/mandir.jpeg')} 
                        style={styles.image}
                    />
                </View>
                {/* TouchableOpacity to trigger website opening */}
                <View style={styles.navlink}>
                    <View style={styles.button}>
                        <TouchableOpacity 
                        onPress={() => this.openWebsite("https://employee.dice.tech/")}
                        >
                            <Text style={styles.linkText}>Dice Employee Portal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.openWebsite("https://entrepriz.dice.tech/")}>
                            <Text style={styles.linkText}>Dice Admin Portal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex:1,

        padding: 20,
        backgroundColor: '#FEF9D9',
        margin: 10,
        borderRadius: 6,
        // marginBottom: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    linkText: {
        color: 'white',
        textDecorationLine: 'underline',
    },
    headingText: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    image: {
        width: 350,
        height: 200,
        marginBottom: 10,
        // resizeMode: 'fill',
        resizeMode:'contain',
    },
    navlink: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button:{
        backgroundColor:'green',
        borderRadius:10,
        padding:6,
    }
});

export default ActionCard;
