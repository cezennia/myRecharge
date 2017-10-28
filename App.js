/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import call from 'react-native-phone-call'
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Linking,
  NativeModules
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { text: '', line: ''};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    // this.textInput.focus();
    if (this.state.text !== '') {
      
      
      setTimeout(
        ()=>{
          switch(this.state.line) {
            case 'MTN':
              NativeModules.MakeCall.dialNumber('*555*'+this.state.text);
              break;
            case 'GLO':
              NativeModules.MakeCall.dialNumber('*123*'+this.state.text);
              break;
            case 'AIRTEL':
              NativeModules.MakeCall.dialNumber('*126*'+this.state.text);
              break;
            case '9MOBILE':
              NativeModules.MakeCall.dialNumber('*232*'+this.state.text);
              break;
            default:
              // NativeModules.MakeCall.dialNumber('*555*'+this.state.text);
          }
        }, 50);

    } else alert('Please input an appropriate value');
  }
  render() {
    return (
      <View style={styles.container}> 
        <View style={{flex: 2, justifyContent:'center'}} >
          <TextInput ref={(input)=> {this.textInput = input;} }  style={{ fontSize: 24, backgroundColor: '#cfd8dc', height: 50, textAlign:'center'}} onChangeText={(text) => this.setState({text})} maxLength={16} autoFocus={true} keyboardType={'numeric'} placeholder={'Input the recharge code'}>
          </TextInput>
          <View  style={{ flexDirection:'row', padding: 20, alignSelf:'stretch', justifyContent:'space-between'}} >
            <Button keyboardShouldPersistTaps="always" title="MTN" color="#ffca08" onPress={()=>{this.setState({line: 'MTN'}); this.handleClick()}}
            > </Button>
            <Button title="GLO" color="#4ecc20" onPress={()=>{ this.setState({line: 'GLO'}); this.handleClick()}}
            > </Button>
            <Button title="AIRTEL" color="#bf2633" onPress={()=>{this.setState({line: 'AIRTEL'}); this.handleClick()}}
            > </Button>
            <Button title="9MOBILE" color="#006848" onPress={()=>{this.setState({line: '9MOBILE'}); this.handleClick()}}
            > </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#eceff1',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
});
