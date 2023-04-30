import { Component } from 'react';
import { View, Text} from 'react-native';
import { TextInput ,Button, Stack} from "@react-native-material/core";

import { UserApi } from '../../../helper/api/user';
import { setStorage, getStorage } from '../../../helper/api/storage';
import { styles } from './../../Style'

export  class Login extends Component {

    constructor(){
        super();
        this.state={
            email: '',
            password: '',
        }
    }

    

    handleLogin = async () => {
        const {email, password} = this.state
        const {navigation} = this.props
        const userApi = new UserApi;
        const [response, error] = await userApi.login(email, password)
        if (response && response.token){
            console.log(response)
            setStorage('user', response)
            navigation.navigate('Home')
            this.setState({email: '', password: ''})
        }
        console.log('user: ', await getStorage('user'))
        if (error){
            console.log("login error: ", error)
        }

    }

   

    render(){
        return(
            <View style={styles.container}>
                
                <TextInput variant="standard" label="Email" style={styles.input}
                value={this.state.email}
                onChangeText={(email)=>this.setState({email})}
                />
                <TextInput variant="standard" label="Password" style={styles.input}
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
                />
                <Button title="Login" onPress={this.handleLogin}/>
                <Button title="Register" variant='text' onPress={()=>this.props.navigation.navigate('Register')}/>
                
            </View>
            
        )
    }
}