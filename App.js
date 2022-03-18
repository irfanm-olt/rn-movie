/**
 * DG Movie Listing App
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Stack navigation
import HomeStack from './src/navigation/home-stack';

class App extends Component {
  
  render() {
    return(
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    )
  }
}

export default App;
