import {Component} from 'react'
import { View,Text } from 'react-native';

import {styles} from '../Style'
export class Post extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.postWrapper}>
                <Text style={styles.content}>{this.props.content}</Text>
                <Text>{this.props.author}</Text>
                <Text>{this.props.date}</Text>
            </View>
        )
    }
}