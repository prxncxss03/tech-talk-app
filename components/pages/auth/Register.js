import { Component } from 'react';
import { View,Text, ScrollView } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";

import { UserApi } from '../../../helper/api/user';
import { setStorage, getStorage } from '../../../helper/api/storage';

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

    async componentDidMount(){
        let user = await getStorage('user')
        console.log(user)
    }

    handleRegister = async () => {
        const { firstname, lastname, email, password } = this.state;
        const { navigation } = this.props;

        const userApi = new UserApi;
        const [response, error] = await userApi.register(firstname, lastname, email, password);
        console.log("response",response)
        if (response){
            await setStorage('user', response)
            navigation.navigate('Home')
        } 

        
        if (error){
            console.log(error)
        }
    
    }


    render(){
        return(
            <ScrollView>
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
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
                />
                <Button title="Register" onPress={
                    this.handleRegister
                } />
            </ScrollView>
            
        )
    }
}