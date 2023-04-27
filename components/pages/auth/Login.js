import { Component } from 'react';
import { View, } from 'react-native';
import { TextInput ,Button} from "@react-native-material/core";


export  class Login extends Component {

    constructor(){
        super();
        this.state={
            email: '',
            password: '',
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
                <Button title="Login" onPress={
                    ()=>{
                        this.props.navigation.navigate('Register')
                    }
                } />
            </View>
            
        )
    }
}