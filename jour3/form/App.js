import React from 'react';

import { View, Button, TextInput, Text, } from 'react-native';


class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      password: '',

    }

  }

  submit() {
    const validName = /[a - zA - Z] +$/
    const isValid = validName.test(this.state.name)
    console.log(isValid)

    if (!isValid) {
      this.setState({ nameError: "name field must be alphabetic " })
    } else {
      this.setState({ nameError: "" })
    }
  }

  emailValidator() {

    if (this.state.email == "") {
      this.setState({ emailError: "email field can not be empty " })
    } else {
      this.setState({ nameError: "" })
    }
  }

  render() {

    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const validate = reg.test(this.state.email)


    return (
      <View style={{ margin: 20, marginTop: 100 }}>

        <TextInput
          placeholder="enter Name"
          onChangeText={(text) => { this.setState({ name: text }) }}
          style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
        />
        <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.nameError}</Text>

        <TextInput
          placeholder="enter email"
          onBlur={()=>this.emailValidator()}
          onChangeText={(text) => { this.setState({ email: text }) }}
          style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
        />
        <Text style={{ color: 'red', marginLeft: 20 }}>{this.state.emailError}</Text>

        <TextInput
          placeholder="enter password"
          secureTextEntry={true}
          maxLength = {this.state.password.length>6}
          onChangeText={(text) => { this.setState({ password: text }) }}
          style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
        />
        <Button title="submit" onPress={() => { this.submit() }} />
        {/* //   this.submit(); validate == true && this.state.password.length > 6
           
        //     ? alert("Connected")
        //     : alert("you have entered an email or password not valid")
        // }} /> */}

      </View>
    )
  }
}

export default App






