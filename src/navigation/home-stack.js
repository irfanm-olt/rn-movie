import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

import HomeScreen from '../screens/homeScreen';
import MovieScreen from '../screens/movieScreen';
import SearchMovieScreen from '../screens/searchMovieScreen';

const Stack = createStackNavigator();

class HomeStack extends Component {
    constructor(props) {
        super(props);
    }

    headerRight = (navigation) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <View style={{margin: 15}}>
                    <Image
                    style={styles.tinyLogo}
                    source={require('../assets/slices/search.png')}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={({ route, navigation }) => ({
            headerShown: false,
          })}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                options={({navigation})=>({
                    headerShown:true,
                    headerTitle: 'Romantic Comedy',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Rubik-Regular'
                    },
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                    headerRight: () => this.headerRight(navigation) ,
                })}
                name="Movie"
                component={MovieScreen}
            />
            <Stack.Screen
                options={{
                    headerShown:true,
                    headerTitle: 'Search Movie',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Rubik-Regular'
                    },
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                }}
                name="Search"
                component={SearchMovieScreen}
            />
        </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        height: 23,
        width: 23
    }
})

export default HomeStack;