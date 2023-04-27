import { Component } from 'react';
import { View, } from 'react-native';
import { TextInput ,Button} from "@react-native-material/core";

import { UserApi } from '../../../helper/api/user';
import { setStorage, getStorage } from '../../../helper/api/storage';

export  class Login extends Component {

    constructor(){
        super();
        this.state={
            email: '',
            password: '',
        }
    }

    async componentDidMount(){
        let user = await getStorage('user')
        console.log(user.token)
    }

    handleLogin = async () => {
        const {email, password} = this.state
        const {navigation} = this.props
        const userApi = new UserApi;
        const [response, error] = await userApi.login(email, password)
        if (response && response.token){
            console.log(response)
            setStorage('user', response)
        }
        console.log('user: ', await getStorage('user'))
        if (error){
            console.log("login error: ", error)
        }

    }

    render(){
        return(
            <View>
                
                <TextInput variant="standard" label="Email" style={{ margin: 16 }}
                value={this.state.email}
                onChangeText={(email)=>this.setState({email})}
                />
                <TextInput variant="standard" label="Password" style={{ marginVertical: 10, marginHorizontal: 16 }}
                value={this.state.password}
                onChangeText={(password)=>this.setState({password})}
                />
                <Button title="Login" onPress={this.handleLogin} />
            </View>
            
        )
    }
}