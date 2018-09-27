import React from 'react';
import Weather from './components/Weather';

export default class App extends React.Component {
  render() {
    return (
    <Weather zipCode="90110"/>
    <Text onPress={this.doIt}>Hello World</Text> 
    );
  }
}

