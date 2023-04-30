import { Component } from "react";
import { View ,TouchableOpacity,Text} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {styles} from './../Style'

export class FloatingBtn extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <TouchableOpacity style={styles.floatingBtn} onPress={this.props.onPress}>
                <Ionicons name="add-circle" size={65} color="#5aa55a" />
            </TouchableOpacity>
          
        )
    }
}