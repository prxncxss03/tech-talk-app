import { Component } from 'react';
import { View,Text } from 'react-native';
import { TextInput } from "@react-native-material/core";


export  class Register extends Component {

    constructor(){
        super();
        this.state={
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }
    }

    render(){
        return(
            <View>
                <Text>
                    Register
                </Text>
                
                <TextInput variant="standard" label="First Name" style={{ margin: 16 }} 
                value={this.state.firstname}
                onChangeText={(firstname)=>this.setState({firstname})}
                />
                <TextInput variant="standard" label="Last Name" style={{ margin: 16 }}
                value={this.state.lastname}
                onChangeText={(lastname)=>this.setState({lastname})}
                />
                <TextInput variant="standard" label="Email" style={{ margin: 16 }}
                value={this.state.email}
                
                onChangeText={(email)=>this.setState({email})}
                />
                <TextInput variant="standard" label="Password" style={{ margin: 16 }}
                value={this.state.password}
                onChangeText={(password)=>this.setState({password})}
                />
            </View>
            
        )
    }
}