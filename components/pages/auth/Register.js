import { Component } from 'react';
import { View,Text, ScrollView } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";

import { UserApi } from '../../../helper/api/user';

import {styles} from './../../Style'
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


    handleRegister = async () => {
        const { firstname, lastname, email, password } = this.state;
        const { navigation } = this.props;

        const userApi = new UserApi;
        const [response, error] = await userApi.register(firstname, lastname, email, password);
        console.log("response",response)
        if (response){
            navigation.navigate('Login')
        } 
        if (error){
            console.log(error)
        }
    
    }


    render(){
        return(
            <View style={styles.container}>
             
                <ScrollView>
                
                <TextInput variant="standard" label="First Name" style={styles.input}
                value={this.state.firstname}
                onChangeText={(firstname)=>this.setState({firstname})}
                />
                <TextInput variant="standard" label="Last Name" style={styles.input}
                value={this.state.lastname}
                onChangeText={(lastname)=>this.setState({lastname})}
                />
                <TextInput variant="standard" label="Email" style={styles.input}
                value={this.state.email}
                
                onChangeText={(email)=>this.setState({email})}
                />
                <TextInput variant="standard" label="Password" style={styles.input}
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
                />
                <Button title="Register" onPress={
                    this.handleRegister
                } />
                <Button title="Login" variant='text' onPress={()=>this.props.navigation.navigate('Login')}/>
                </ScrollView>
            </View>
            
        )
    }
}