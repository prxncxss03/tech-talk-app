import {Component} from 'react'
import { View,Text } from 'react-native';
export class Post extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View>
                <Text>{this.props.content}</Text>
            </View>
        )
    }
}