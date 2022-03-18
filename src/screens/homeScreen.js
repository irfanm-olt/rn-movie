/**
 * Home Screen
 */

 import React, { Component } from 'react';
 import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';


 class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            // Button to navigate to movie list screen
            <View style={styles.container}>
                <Button
                    title='Movie List'
                    color="#000"
                    onPress={() => this.props.navigation.navigate('Movie')}
                />
            </View>
        )
    }
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center'
    },
    button: {
        backgroundColor: '#000'
    }
  });

 export default HomeScreen;